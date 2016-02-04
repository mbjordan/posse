'use strict';

const os = require('os');
const cluster = require('cluster');
const events = require('events');
const R = require('ramda');

const emitter = new events.EventEmitter();

let active = false;

const forkThis = () => {
    cluster.fork();
};

const numWorkers = () => {
    return os.cpus().length;
};

const createForks = (workersLenFn, forkFn) => {
    for (let idx = 0; idx < workersLenFn(); idx++) {
        forkFn();
    }
};

const shutdown = () => {
    active = false;
    for (let id in cluster.workers) {
        cluster.workers[id].process.kill();
        cluster.workers[id].kill();
    }
};

const ifNotShutdown = (callbackFn) => {
    return (active) ? callbackFn : R.identity;
};

const shutdownSignal = () => {
    emitter.emit('shutdown');
};

const bindFork = () => {
    cluster.on('exit', ifNotShutdown(forkThis));
    emitter.once('shutdown', shutdown);
    process.on('SIGINT', shutdownSignal).on('SIGTERM', shutdownSignal);
    active = true;
};

const getWorkerId = () => {
    // this is hacky and temp
    return (cluster.isWorker) ? cluster.worker.id : 0;
};

const runIf = (pred, getIdFn, callbackFn) => {
    if (pred) {
        R.call(callbackFn, getIdFn());
    }
};

exports.register = (server, options, next) => {

    if (cluster.isMaster) {
        createForks(numWorkers, forkThis);
        bindFork();
    }

    // There is a better way to do this...need to think on it
    server.expose('ifWorker', R.partial(runIf, [cluster.isWorker, getWorkerId]));
    server.expose('ifMaster', R.partial(runIf, [cluster.isMaster, getWorkerId]));

    return next();
};

exports.register.attributes = {
    'name': 'posse',
    'version': '0.1.0'
};
