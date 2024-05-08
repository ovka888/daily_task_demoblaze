const { faker } = require('@faker-js/faker');

function generateData() {
  const randomNumber = Math.ceil(Math.random(1000) * 1000);

  return {
    username: faker.person.firstName().toLocaleLowerCase() + `${randomNumber}`,
    password: faker.internet.password()
  };
}

module.exports = { generateData };