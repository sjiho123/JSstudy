'use strict';


const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        // resolve('ellie');
        reject(new Error('no network'));
    }, 2000);
});

// 2. consumers : then, catch, finally
promise
.then(value => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log('finally')
});

const fetchNumber = new Promise((resolve,reject) => {
    setTimeout(()=> resolve(1), 1000);
})

const getHen = () => 
    new Promise((resolve,reject) => {
        setTimeout(() => 
            resolve=('hen'), 1000);    
})

const getEgg = hen => 
    new Promise((resolve,reject) => {
        setTimeout(() => 
        resolve(`${hen} => egg `), 1000);
    });
const cook = egg =>
    new Promise((resolve,reject) => {
        setTimeout(() => 
        resolve(`${egg} => meal`),1000);
    });

getHen()
    .then(getEgg)
    .then(cook)
    .then(console.log)





