"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyPromise {
    constructor(executor) {
        this.state = 'pending';
        this.data = undefined;
        this.callbacks = [];
        this.errCallbacks = [];
        this.executor = executor;
        this.executor.call(null, this.resolve.bind(this), this.reject.bind(this));
    }
    resolve(data) {
        if (this.state !== 'pending') {
            return;
        }
        this.state = 'resolved';
        this.data = data;
        this.callbacks.forEach(callback => callback(this.data));
    }
    reject(err) {
        if (this.state !== 'pending') {
            return;
        }
        this.state = 'rejected';
        this.data = err;
        if (this.callbacks.length) {
            this.callbacks.forEach(callback => callback(this.data));
        }
        else {
            throw new Error('uncaught err');
        }
    }
    then(callback) {
        if (this.state === 'resolved') {
            callback(this.data);
        }
        else {
            this.callbacks.push(callback);
        }
        return this;
    }
    catch(callback) {
        if (this.state === 'rejected') {
            callback(this.data);
        }
        else {
            this.errCallbacks.push(callback);
        }
    }
}
const prom = new MyPromise(resolve => {
    resolve(1);
});
prom.then(data => {
    console.log(data);
});
