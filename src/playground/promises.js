/*global console */

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is my resolved data');
        // reject('Something went wrong');
    }, 5000);
});

console.log('before');

promise
    .then((data) => {
        console.log('1', data);
        return 'some extra data';
    })
    .then((data) => {
        console.log(`does this run? ${data}`);
    })
    .catch((error) => {
        console.log('error: ', error);
    });

promise.then(
    (data) => {
        console.log('2', data);
    },
    (error) => {
        console.log('error 2: ', error);
    }
);

// promise.then((data) => {
//     console.log('2', data);
// });

console.log('after');
