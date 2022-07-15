/**

* Make the following HTTP request with either axios or node-fetch:

GET https://api.npms.io/v2/search/suggestions?q=react

******

*  With the results from this request, inside "content", count
*  the number of packages that have a MAJOR semver version
*  greater than 10.x.x

*/
const axios = require("axios");

module.exports = async function countMajorVersionsAbove10() {
  const res = await axios.get(
    "https://api.npms.io/v2/search/suggestions?q=react"
  );

  const data = res.data;

  const filteredData = data.filter((item) => {
    const [majorVer] = item.package.version.split(".");
    return majorVer >= 10;
  });

  return filteredData.length;
};
