const verifyObjectHasDeathYear = (people) => {
  if (!people.hasOwnProperty("yearOfDeath")) {
    people.yearToday = new Date().getFullYear();
    return false;
  }

  return true;
};

const findTheOldest = function (array) {
  let theBiggestDifference = 0;
  let oldestPerson = null;

  for (let people of array) {
    let currentDifference = 0;

    if (verifyObjectHasDeathYear(people)) {
      currentDifference += people.yearOfDeath - people.yearOfBirth;
    } else {
      currentDifference += people.yearToday - people.yearOfBirth;
    }

    if (currentDifference > theBiggestDifference) {
      theBiggestDifference = currentDifference;
      oldestPerson = people;
    }
  }

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
