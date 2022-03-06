const promisify = (func, context = null) => {
    return new Promise((resolve, reject) => {
        func.apply(context, function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
};
module.exports = promisify;
