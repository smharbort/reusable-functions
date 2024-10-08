//                                                              Part One: Thinking Functionally
//              take an array of numbers and return the sum & average
function genRandomNumArr (numIndices) {
    const randomNumArr = []

    for (let i = 0; i < numIndices; i++) {
        randomNumArr.push(Math.floor(Math.random() * 100))
    }

    return randomNumArr
}

function sumAndAverage (numIndices) {
    const useNumGenerator = genRandomNumArr(numIndices)
    let findSum = 0

    for (let i = 0; i < useNumGenerator.length; i++) {
        findSum += useNumGenerator[i]
    }

    const findAvg = findSum / numIndices

    return `sum of numbers is: ${findSum}. Average of numbers is: ${findAvg}.`
}

//              result:
// console.log(sumAndAverage(11))


//              take an array of strings and return the longest string
const anArray = ["is this one the longest?", "or this one?", "how about this one?", "kinda' repetitive don't you think?", "it's definitely this one", "or is it???"]

function findLongest (stringsArray) {
    let outerCounter = 0
    let longest = ""
    
    stringsArray.forEach((strEntry) => {
        let innerCounter = 0

        for (const char of strEntry) {
            innerCounter += 1
        }

        if (innerCounter > outerCounter) {
            outerCounter = innerCounter
            longest = strEntry
        }
    })
    return longest
}
//              result:
// console.log(findLongest(anArray))


//              take an array of strings & a number -> return array of strings including only those which have a greater number of characters than the specified number
const anotherArray = ["yo", "sup", "what's good", "how's it goin'", "bruh hello to you too why you gotta' greet me so many times",
    "ahoy used to be a thing before Alexander Graham Bell standardized the use of the term 'hello'", "did I ask"]

function whichAreLongerThan (stringsArray, num) {

    stringsLongerThan = []

    for (let i = 0; i < stringsArray.length; i++) {

        if (stringsArray[i].length > num) {
            stringsLongerThan.push(stringsArray[i])
        }
    }
    return stringsLongerThan
}
//              result:
// const thisOne = console.log(whichAreLongerThan(anotherArray, 25))


//              use recursion to print every number between 1 & n WITHOUT using loops
// Thank you Lasya for helping me figure this one out!
function allNumBetween (n) {

    if (n === 2) {
        return console.log(`all done!`)     // why does it still return 'undefined' in terminal underneath 'all done!'?
    } else {
        n -= 1
        console.log(n)
        allNumBetween(n)
    }
}
//              result:
// console.log(allNumBetween(26))

//                                                              Part Two: Thinking Methodically-- use ONLY callback functions & array methods

const testData = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

//              sort the array by age
// const tryThis = testData[2]["age"]

/* function manipulateObjInArr (arr, key, cb) {

    arr.forEach((objEntry) => {

        console.log(objEntry[key])

    })

    arr.forEach(cb(objEntry))
} */
// manipulateObjInArr(testData, "age")

function manipulateObjInArr (arr, callback) {

    arr.forEach(callback)

}

function logAgesInObj (objEntry, keyName) {

    const getObjectEntries = Object.entries(objEntry)
    const getKey = getObjectEntries[keyName]

}

manipulateObjInArr(testData, logAgesInObj)

/* function logEach (objEntry, keyName) {

    const getObj = objEntry[keyName]

    console.log(getObj)

}

manipulateObjInArr(testData, logEach) */



//              filter array to remove entries with age greater than 50


//              map the array to change the "occupation" key to "job" and increment every age by 1


//              use the reduce method to calcul


//                                                              Part Three: Thinking Critically