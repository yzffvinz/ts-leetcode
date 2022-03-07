function promisify(fn) {
    return function (...args) {
        return new Promise(function (resolve, reject) {
            args.push(function (err, result) {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
            fn.apply(null, args);
        });
    };
}
module.exports = promisify;
