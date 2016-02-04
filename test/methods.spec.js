'use strict';

/* globals describe,xdescribe,beforeEach,it,xit,expect */

const Hapi = require('hapi');
const rewire = require('rewire');

xdescribe('Posse Unit', () => {
    let posse;

    beforeEach(() => {
        posse = rewire('../lib');
    });

    describe('forkThis', () => {});

    describe('numWorkers', () => {});

    describe('createForks', () => {});

    describe('shutdown', () => {});

    describe('ifNotShutdown', () => {});

    describe('shutdownSignal', () => {});

    describe('forkbindForkThis', () => {});
});
