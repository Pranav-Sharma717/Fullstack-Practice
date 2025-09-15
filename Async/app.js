const multiply = (x, y) => x * y;

const square = x => multiply(x, x);

const isRightTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)
)
console.log("BEFORE")
isRightTriangle(3, 4, 5)

console.log("DONEEEE!")

//////////////////////////////////////////////////////////
//Web Api
console.log("sendig request")
setTimeout(() => {
    console.log("Here is your data");
}, 3000)
console.log("I AM AT THE END OF FILE");
///////////////////////////////////////////////////////////////////////////////////////////////////
//CallBack Hell
const delayedColorchange = (newColor, delay, doNext) => {
    setTimeout(() => {
        if (typeof document !== 'undefined' && document.body) {
            document.body.style.backgroundColor = newColor;
        }
        doNext && doNext();
    }, delay)
}
delayedColorchange('red', 1000, () => {
    delayedColorchange('Lavender', 1000, () => {
        delayedColorchange('Black', 1000, () => {
            delayedColorchange('Blue', 1000, () => {

            })
        })
    })
});
///////////////////////////////////////////////////////////////////////////////////
// THE CALLBACK VERSION
// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             failure('Connection Timeout :(')
//         } else {
//             success(`Here is your fake data from ${url}`)
//         }
//     }, delay)
// }
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// Example usage:
fakeRequestPromise('books.com/page1')
    .then((data) => {
        console.log("Promise resolved:", data);
    })
    .catch((err) => {
        console.log("Promise rejected:", err);
    });
/////////////////////////////////////////////////////////
//Creating promises
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('YOUR FAKE DATA HERE');
            }
            reject('Request Error!');
        }, 1000)
    })
}

fakeRequest('/dogs/1')
    .then((data) => {
        console.log("DONE WITH REQUEST!")
        console.log('data is:', data)
    })
    .catch((err) => {
        console.log("OH NO!", err)
    })

////////////////////////////////////////////////////////////
//Async function
async function MakeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
    }
    catch (e) {
        console.log('Its Ok');
    }

}   