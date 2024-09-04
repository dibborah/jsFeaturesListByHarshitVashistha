// // Date 

// let myDate = new Date();

// // same
// console.log('myDate', myDate);
// // console.log('toString()', myDate.toString());

// console.log('getDate()', myDate.getDate());
// console.log('getDay', myDate.getDay());
// console.log('getHours()', myDate.getHours());
// console.log('getMilliseconds', myDate.getMilliseconds());
// console.log('getMinutes', myDate.getMinutes());
// console.log('getMonth', myDate.getMonth());
// console.log('getFullYear', myDate.getFullYear());
// console.log('getTime', myDate.getTime());


// console.log('toDateString', myDate.toDateString());// without slash
// console.log('toDateString', myDate.toLocaleString());// with slash

// console.log('type of Date constructor is:',typeof myDate);

// Get custom date
// let myNewDate = new Date();
// Here month starts from 0 as it may be an array like object
// 0 === Jan when passing separately not as string
// let myArbitaryDate = new Date(2023, 3, 25, 5, 7, 45);// Year, Month(which starts from zero), Date, Hour, Min, Sec
// console.log(myArbitaryDate);
// console.log(myArbitaryDate.toDateString());
// console.log(myArbitaryDate.toLocaleString());// to localString() is one of d most useFul date method
// since using it gives us the date format which we usually write or use in our date to day life

// More custom dates

/// By in this hyphen case where we are passing a string months starts from 1
// 1 === Jan 

// let myCreatedDate = new Date('2023-01-14');
// let myCreatedDate = new Date('01-14-2023');
// console.log(myCreatedDate.toLocaleString());

// const myTimeStamp1 = Date.now();// gives Date in ms
// console.log(myTimeStamp1);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now() / 1000))

// Note: Date.now gives us milliseconds ellapsed from 1970 Jan

let newDate = new Date();

// console.log(newDate.getMonth() + 1);

const modifiedDate = newDate.toLocaleString('default', {
    weekday: 'long',
    // timeZone: ''
});

console.log(modifiedDate);


