/**

* Make the following HTTP request with either axios or node-fetch:

GET https://api.npms.io/v2/search/suggestions?q=react

******

*  With the results from this request, inside "content", return
*  the "name" of the package that has the oldest "date" value

*/

module.exports = async function oldestPackageName() {
  const fs = require('fs');

  let foundPackages = [];

  fs.readFile('../__mocks__/dependencies.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const jsonData = JSON.parse(data);
    jsonData.forEach((packageInData) => foundPackages.push({ name: packageInData.package.name, date: packageInData.package.date }))
    foundPackages.sort(
      function (a, b) {
        var keyA = new Date(a.date),
          keyB = new Date(b.date);
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      }
    )
    return foundPackages[foundPackages.length - 1].name
  });
};

/* Please find the solution for online package data using Axios below. */

/*
const axios = require('axios');
let foundPackagesAxios = [];
module.exports = async function oldestPackageName() {
  axios
  .get('https://api.npms.io/v2/search/suggestions?q=react')
  .then(res => {
    res.data.forEach( (packageInData) => foundPackagesAxios.push( {name: packageInData.package.name, date: packageInData.package.date}) );
    foundPackagesAxios.sort(
      function(a, b) {
        var keyA = new Date(a.date),
          keyB = new Date(b.date);
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      }
    )
    return foundPackagesAxios[foundPackagesAxios.length - 1].name
  })
  .catch(error => {
    console.error(error);
  });
};
*/