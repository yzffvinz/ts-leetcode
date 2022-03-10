// 工具方法
const genProm = () => {
    return new Promise(resolve => {
        const timeout = Math.random().toFixed(2);
        setTimeout(() => {
            resolve(timeout);
        }, timeout * 1000 + 500);
    });
};

const genErr = () => {
    return new Promise((resolve, reject) => {
        const timeout = Math.random().toFixed(2);
        setTimeout(() => {
            reject(timeout);
        }, timeout * 1000 + 500);
    });
};

// 全部成功后，resolve 所有结果数组
// 任意一个失败，reject 第一个失败的
function promiseAll(proms) {
    let rsts = [];
    let failed = false;
    let fullfilledCount = 0;
    return new Promise((resolve, reject) => {
        proms.forEach((prom, index) => {
            prom
                .then(data => {
                    if (failed) {
                        return;
                    }
                    rsts[index] = data;
                    fullfilledCount++;
                    if (fullfilledCount === proms.length) {
                        resolve(rsts);
                    }
                })
                .catch(err => {
                    failed = true;
                    rsts = null;
                    reject(err);
                });
        });
    });
}

// race
function promiseRace(proms) {
    let finished = false;
    return new Promise((resolve, reject) => {
        proms.forEach(prom => {
            prom
                .then(data => {
                    if (!finished) {
                        finished = true;
                        resolve(data);
                    }
                })
                .catch(err => {
                    if (!finished) {
                        finished = true;
                        reject(err);
                    }
                });
        });
    });
}

function promiseAllsettle(proms) {
    function Rst(value, failed = false) {
        return {
            status: failed ? 'rejected' : 'fulfilled',
            value,
        };
    }
    let rsts = [];
    let finishedCount = 0;

    return new Promise((resolve, reject) => {
        proms.forEach((prom, index) => {
            prom
                .then(data => {
                    rsts[index] = new Rst(data);
                })
                .catch(err => {
                    rsts[index] = new Rst(err, true);
                }).finally(() => {
                    finishedCount++;
                    if (finishedCount === proms.length) {
                        resolve(rsts);
                    }
                });
        });
    });
}