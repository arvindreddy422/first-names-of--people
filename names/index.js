const getFirstName = require("../utilities/utils/index");
const people = require("../country/state/city/index");
function getPeopleInCity(people) {
  return getFirstName(people);
}

module.exports = getPeopleInCity;
