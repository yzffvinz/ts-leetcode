const curryingAdd = (...args) => {
    const adder = (...newArgs) => {
        args.push(...newArgs);
        return adder;
    };
    adder.done = () => args.reduce((a, b) => a + b);
    return adder;
};
console.log(curryingAdd(1)(2)(3));
console.log(curryingAdd(1)(2)(3)(4));
console.log(curryingAdd(1)(2)(3)(4)(5));

function currying(fn, ...rest1) {
    return function (...rest2) {
        return fn.apply(null, (rest1 || []).concat(rest2 || []));
    };
}

