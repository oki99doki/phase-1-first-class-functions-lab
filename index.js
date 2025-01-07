// Code your solution in this file!
const returnFirstTwoDrivers = (names) => ([names[0], names[1]])

returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])


const returnLastTwoDrivers = (names) => ([names[2], names[3]])

returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])


const selectingDrivers = [(returnFirstTwoDrivers), (returnLastTwoDrivers)]


const createFareMultiplier = (mult) => {
    return function(fare) {
        return fare * mult;
    };
}


const fareDoubler = (fare) => {
    return fare * 2;
};


const fareTripler = (fare) => {
    return fare * 3;
};


const selectDifferentDrivers = (names,selectFunction) => {
    return selectFunction(names);
}