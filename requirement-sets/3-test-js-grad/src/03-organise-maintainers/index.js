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
const axios = require("axios");

module.exports = async function organiseMaintainers() {
  const { data } = await axios.get(
    "https://api.npms.io/v2/search/suggestions?q=react"
  );

  const maintainersArr = [];

  data.forEach((item) => {
    item.package.maintainers.forEach((maintainer) => {
      const foundMaintainer = maintainerInArr(
        maintainersArr,
        maintainer.username
      );

      if (foundMaintainer) {
        foundMaintainer.packageNames.push(item.package.name);
        return;
      }

      if (!foundMaintainer) {
        maintainersArr.push({
          username: maintainer.username,
          packageNames: [item.package.name],
        });
      }
    });
  });

  // const sortedMaintainers = sortMaintainers(maintainersArr);
  // const sortedMaintainersAndPackages = sortPackages(sortedMaintainers);

  return maintainersArr;
};

const maintainerInArr = (arr, username) => {
  return arr.find((el) => el.username === username);
};

const sortMaintainers = (arr) => {
  const toSort = [...arr];
  return toSort.sort((a, b) => a.username.localeCompare(b.username));
};

const sortPackages = (arr) => {
  const toSort = [...arr];

  toSort.forEach((maintainer) => {
    maintainer.packageNames = maintainer.packageNames.sort((a, b) =>
      a.localeCompare(b)
    );
  });

  return toSort;
};
