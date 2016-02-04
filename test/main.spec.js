'use strict';

/* globals describe,xdescribe,beforeEach,it,xit,expect */

const Hapi = require('hapi');
const rewire = require('rewire');

describe('posse', () => {
    let posse;
    let server;

    beforeEach((done) => {
        posse = require('../lib');
        server = new Hapi.Server();
        done();
    });

    xit('Should not return an error', (done) => {
        server.register(posse, (err) => {
            expect(err).toBeFalsy();
            // stop here?! Cannot let the forking happen
            done();
        });
    });
});
