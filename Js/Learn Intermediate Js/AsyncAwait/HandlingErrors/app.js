// JavaScript source code
const cookBeanSouffle = require('./library.js');

// Write your code below:

async function hostDinnerParty() {
    try {
        let dinner = await cookBeanSouffle();
        console.log(`${dinner} is served!`)
    } catch (error) {
        // Catches any errors in the try block
        console.log(error);
        console.log(`Ordering a pizza!`);
    }
}

hostDinnerParty();