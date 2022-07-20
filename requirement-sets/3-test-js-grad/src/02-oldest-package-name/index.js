/**

* Make the following HTTP request with either axios or node-fetch:

GET https://api.npms.io/v2/search/suggestions?q=react

******

*  With the results from this request, inside "content", return
*  the "name" of the package that has the oldest "date" value

*/
const axios = require("axios");

module.exports = async function oldestPackageName() {
  const { data } = await axios.get(
    "https://api.npms.io/v2/search/suggestions?q=react"
  );

  const sortedDataByDate = data.sort(
    (a, b) => new Date(a.package.date) - new Date(b.package.date)
  );

  const oldestPackage = sortedDataByDate[0].package;

  return oldestPackage.name;
};
