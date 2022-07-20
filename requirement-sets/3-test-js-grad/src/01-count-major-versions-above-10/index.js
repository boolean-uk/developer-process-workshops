/**

* Make the following HTTP request with either axios or node-fetch:

GET https://api.npms.io/v2/search/suggestions?q=react

******

*  With the results from this request, inside "content", count
*  the number of packages that have a MAJOR semver version
*  greater than 10.x.x

*/
const fetch = require("node-fetch");

const doCountMajorVersionsAbove10 = (data) => {
  let number = 0;
  for (const dataInfo of data) {
    const version = Number(dataInfo.package.version.substring(0, 2));
    if (version >= 10) number++;
  }
  return number;
};

module.exports = async function countMajorVersionsAbove10() {
  // TODO
  let number = 0;
  const url = "https://api.npms.io/v2/search/suggestions?q=react";

  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      number = doCountMajorVersionsAbove10(data);
    });
  return number;
};
