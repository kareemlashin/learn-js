//Variables in JavaScript  Data Types 
//Operators (comparison | logic | arithmetic )
//Functions
//JavaScript Loop 
//If - Else Statements 
//Regular Expression Syntax 
//switch
//array
//string
//date
//number
//hosting 
//statement/expiration
//IIFE
//alice == substring


let y = new Promise((r, rej) => {
    if (5 == 5) {
        r('ok');
    } else {
        rej('oo')
    }
})
y.then(x => {
    console.log(x)
}).catch(f => {
    console.log(f)
})

try {

} catch {

} finally {

}

function name2() {
    return new Promise(c => {
        setTimeout(() => {
            c("44")
        }, 100);
    })
}

async function name() {
    const m = await name2();
    console.log(m)
}