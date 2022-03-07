class MyPromise {
    constructor(executor) {
        this.state = 'pending';
        this.data = undefined;
        this.callbacks = [];
        this.executor = executor;
    }
    static resolve(data) {
        console.log(data);
    }
    static reject(err) {
        console.log(err);
    }
    then(executor) {
        console.log(executor);
    }
    catch() {
    }
}
// test
MyPromise
    .reject(1)
    .then(() => { }, err => {
    console.log(err);
});
