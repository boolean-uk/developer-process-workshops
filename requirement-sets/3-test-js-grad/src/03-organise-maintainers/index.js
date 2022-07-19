/*

* Make the following HTTP request with either axios or node-fetch:

/*

* Make the following HTTP request with either axios or node-fetch:

GET https://api.npms.io/v2/search/suggestions?q=react

******

* With the results from this request, inside "content",
* list every maintainer and each package name that they maintain,
* return an array with the following shape:

[
  ...
  {
      username: "a-username",
      packageNames: ["a-package-name", "another-package"]
  }
  ...
]
* NOTE: the parent array and each "packageNames" array should
* be in alphabetical order.

*/

const axios = require('axios');

const findOrCreateMaintainer = (maintainers, maintainer) => {
  const foundMaintainer = maintainers.find((entry) => {
    return entry.username === maintainer;
  });

  if (foundMaintainer) return foundMaintainer;

  const createdMaintainer = { username: maintainer, packageNames: [] };
  maintainers.push(createdMaintainer);
  return createdMaintainer;
};

const addMaintainerForPackage = (maintainers, packageName, maintainer) => {
  const packages = findOrCreateMaintainer(maintainers, maintainer).packageNames;
  packages.push(packageName);
};

module.exports = async function organiseMaintainers() {
  const { data } = await axios.get(
    'https://api.npms.io/v2/search/suggestions?q=react'
  );

  console.log('DATA : ', JSON.stringify(data[0], null, 2));
  let maintainers = [];

  data.forEach((item) => {
    let packageName = item.package.name;
    item.package.maintainers.forEach((maintainer) => {
      let username = maintainer.username;
      addMaintainerForPackage(maintainers, packageName, username);
    });
    return maintainers;
  });

  console.log(maintainers);
  return maintainers;
};