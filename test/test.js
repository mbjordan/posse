'use strict';

const Hapi = require('hapi');
const Code = require('code');
const Lab = require('lab');
const rewire = require('rewire');

const lab = exports.lab = Lab.script();
const before = lab.before;
const after = lab.after;
const describe = lab.describe;
const it = lab.it;

const expect = Code.expect;

describe('Posse Integration', () => {
    let posse;
    let server;

    before((done) => {
        posse = require('../lib');
        server = new Hapi.Server();
        done();
    });

    it('Should not return an error', (done) => {
        server.register(posse, (err) => {
            expect(err).to.not.exist();
            done();
        });
    });

    // it('Should have `isWorker` set to false', (done) => {
    //     server.register(posse, (err) => {
    //         expect(server.plugins.posse.isWorker).to.equal(false);
    //         done();
    //     });
    // });

    it('Should have `isMaster` set to true', (done) => {
        server.register(posse, (err) => {
            server.plugins.posse.ifMaster(() => {
                expect(true).to.equal(false);
            });
            done();
        });
    });
});

// describe('Posse Unit', () => {
//     let posse;
//
//     before((done) => {
//         posse = rewire('../lib');
//         done();
//     });
//
//     describe('forkThis', () => {
//         let forkThis;
//         let value;
//
//         before((done) => {
//             forkThis = posse.__get__('forkThis');
//             value = 'thisIs:cluster.fork';
//
//             posse.__set__('cluster', {
//                 'fork': () => {
//                     return value;
//                 }
//             });
//             done();
//         });
//
//         it('Should have called cluster.fork', (done) => {
//             expect(forkThis()).to.equal(value);
//             done();
//         });
//     });
//
//     describe('numWorkers', () => {});
//
//     describe('createForks', () => {});
//
//     describe('shutdown', () => {});
//
//     describe('ifNotShutdown', () => {});
//
//     describe('shutdownSignal', () => {});
//
//     describe('forkbindForkThis', () => {});
// });
