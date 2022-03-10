const Units = ['', '十', '百', '千'];
const CnBits = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
const Bases = ['', '万', '亿'];

function toChineseNum(num) {
    const rst = [];
    let baseRound = 0;
    while (num) {
        let cur = num % 10000;
        num = num / 10000 >> 0;
        let strArr = [];

        if (cur === 0) {
            strArr.push('零');
        }
        else {
            let round = 0;
            const prefix = cur < 1000 && num ? '零' : '';
            while (cur) {
                const bit = cur % 10;
                strArr.unshift(CnBits[bit], bit ? Units[round] : '');
                cur = cur / 10 >> 0;
                round++;
            }
            strArr.unshift(prefix);
            const str = strArr.join('').replace(/零+$/, '');
            rst.unshift(str + Bases[baseRound % 3]);
        }
        baseRound++;
    }
    return rst.join('').replace(/零+$/, '');
}

console.log(toChineseNum(2345), toChineseNum(2345) === '二千三百四十五');
console.log(toChineseNum(341205), toChineseNum(341205) === '三十四万一千二百零五');
console.log(toChineseNum(340001200567), toChineseNum(340001200567) === '三千四百亿零一百二十万零五百六十七');
console.log(toChineseNum(100000000), toChineseNum(100000000) === '一亿');