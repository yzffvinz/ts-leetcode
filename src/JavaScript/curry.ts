type Add = (...args: number[]) => Add;

const add: Add = (...args) => {
    const adder = (...newArgs) => {
        args.push(...newArgs);
        return adder;
    };

    adder.toString = () => args.reduce((a, b) => a + b);
    return adder;
};

console.log(add(1)(2)(3));
console.log(add(1)(2)(3)(4));
console.log(add(1)(2)(3)(4)(5));
