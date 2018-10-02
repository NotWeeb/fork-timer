'use strict';

const { fork } = require('child_process');
const EventEmitter = require('events');
const path = require('path');

class Timeout extends EventEmitter {
    constructor(time=0, debug=false) {

        super();

        this.time = time;
        this.debugMode = debug;

        const env = {
            TIMEOUT: this.time || 0
        };

        this.process = fork(path.join(__dirname, 'process.js'), {env});

        if (this.debugMode) {
            console.log(this.process.pid + ' started.');
        }

        this.process.on('message', msg => this._handleMessage(msg));
        this.process.on('disconnect', () => this._handleMessage('DISCONNECT'));
    }

    _handleMessage(msg = "") {
        // this = this.process
        if (msg === "COMPLETE") {
            this.process.kill(0); // gracefully destroy process
            this.emit('complete', this.time);
            if (this.debugMode) {
                console.log(this.process.pid + ' timeout complete (' + this.time + ').');
            }
        } else if (msg === "DISCONNECT") {
            if (this.debugMode) {
                console.log(this.process.pid + ' disconnected.');
            }
        }
    }

}

module.exports = Timeout;

