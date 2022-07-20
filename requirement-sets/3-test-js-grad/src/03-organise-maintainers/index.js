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

module.exports = async function organiseMaintainers() {
  let maintainers = [];

  const { data } = await axios.get(
    'https://api.npms.io/v2/search/suggestions?q=react'
  );

  data.forEach((dep) => {
    dep.package.maintainers.forEach((maintainer) => {
      const record = maintainers.find((obj) => {
        return obj.username === maintainer.username;
      });
      if (!record) {
        const newRecord = {
          username: maintainer.username,
          packageNames: [dep.package.name],
        };
        maintainers.push(newRecord);
      } else {
        record.packageNames.push(dep.package.name);
      }
    });
  });

  // console.log('DATA : ', JSON.stringify(data[0], null, 2));
  return maintainers;
};
