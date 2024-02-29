const returnFirstTwoDrivers = (arr) => arr.slice(0,2)
const  returnLastTwoDrivers = (arr) => arr.slice(-2)

const  selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (num) => {
    const fareMultiplier = () =>   5 *5 
    return fareMultiplier
}


const  fareDoubler = (num) =>  num * 2
const fareTripler = (num) => num *3 
const  selectDifferentDrivers = (arr, fn) => fn(arr)
