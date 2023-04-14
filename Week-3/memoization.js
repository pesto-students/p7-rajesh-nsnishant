// function additon (a , b) {
//     return (a + b)
// }

// const additionwith50 = (num) => num + 50

//Memoization

// const lookup = {}

// const smartadditon = (num) => {
//     if(num in lookup){
//         console.log("value taken from Lookup");
//     return lookup[num]
//  }
//  else{
//     lookup[num]= num + 50
//     console.log("value taken from calculation");
//     return lookup[num]
//  }
// }

// console.log(smartadditon(10))
// console.log(smartadditon(10))
// console.log(smartadditon(15))
// console.log(smartadditon(15))


const addition = (a,b) => a+b

const propNameFromArg = (add,args) =>{
    let propKey = []
    propKey = propKey.concat(add.name,args)
    return propKey.join('|')
}

// memoization

const memoize = (add) => {

const lookup = {}

return function  (...args) {
    const propName = propNameFromArg(add, args)

    if (!lookup[propName]){
        lookup[propName] = add(...args)
        return lookup[propName]
    }
    else{
        console.log("from cache")
        return lookup[propName]
    }

}

}

const memAddition = memoize(addition)
console.log(memAddition(10,30))
console.log(memAddition(10,30))