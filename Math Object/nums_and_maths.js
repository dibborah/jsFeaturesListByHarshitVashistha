// const score = 400.706637;
// const score = 407.7262;

// console.log(typeof score);

// toString()
// console.log(typeof score.toString());

// Decimal lagake kitne tak numbers chahiye as an arguement pass karo toFixed() main
// console.log(score.toFixed(2))

// console.log(score.toPrecision(9));// The integer arguement passed in toPrecision can be greater  but the interget number value should not be greater orelse an exponential useless number will be returned which would break our code

// const hundred = 1000000;
// console.log(hundred.toLocaleString());// seperated the number with commas in US standard by default

// console.log(hundred.toLocaleString('en-IN'));// Indian number separater is 'en-IN'

// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.NaN)
// console.log(Number.NEGATIVE_INFINITY)
// console.log(Number.POSITIVE_INFINITY)


// ++++++++++++++ Math Object +++++++++++++++

// console.log(Math.PI.toPrecision(4));
console.log(Math);
// console.log(crypto.randomUUID());

// console.log(Math.abs(-4));// return 4 which is +4 and 4 will be + 4 itself
// console.log(Math.round(4.5));// rounds up or down depending upon // return 5
// console.log(Math.round(4.4));// rounds up or down depending upon // return 4
// console.log(Math.ceil(4.1));// rounds ups // returns 5// ceil matlab top upar ka

// console.log(Math.ceil(4.0)) // return 4 since 4.0 and 4 is same

// console.log(Math.floor(4.0));

// console.log(Math.min(3,4,6,1));// returns 1
// console.log(Math.max(3,4,6,1));// return 6

// console.log(((Math.random()*10) + 1).toFixed(2));
// console.log(((Math.random()*10) + 1).toPrecision(2));

const min = 10;
const max = 50;


console.log(Math.floor((Math.random() * (max + min)) + min));


