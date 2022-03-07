type PromiseState = 'pending' | 'resolved' | 'rejected';
type AnyFunc = () => any;
type ExecurtorFunc = (resolve: AnyFunc, reject: AnyFunc) => any;

class MyPromise {
    state: PromiseState;
    data: any;
    executor: (resolve: AnyFunc, reject: AnyFunc) => any;
    callbacks: [];
    constructor(executor) {
        this.state = 'pending';
        this.data = undefined;
        this.callbacks = [];
        this.executor = executor;
    }

    static resolve(data: any) {
        console.log(data);
    }

    static reject(err: any) {
        console.log(err);
    }

    then(executor: ExecurtorFunc) {
        console.log(executor);
    }

    catch() {
    }
}

// test
MyPromise
    .reject(1)
    .then(() => {}, err => {
        console.log(err);
    });