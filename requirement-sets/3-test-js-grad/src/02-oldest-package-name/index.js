/**

* Make the following HTTP request with either axios or node-fetch:

GET https://api.npms.io/v2/search/suggestions?q=react

******

*  With the results from this request, inside "content", return
*  the "name" of the package that has the oldest "date" value

*/
const axios = require('axios')

module.exports = async function oldestPackageName() {
  // TODO
  // 1. get data
  const { data } = await axios.get("https://api.npms.io/v2/search/suggestions?q=react")
  // 2. find the date string
  // 3. sort by date, choose the first one? depending on sort order
  const depsSortedByDate = data.sort((a, b) => new Date(a.package.date) - new Date(b.package.date))
  const oldestDep = depsSortedByDate[0]
  // 4. find and return the package name
  return oldestDep.package.name
};
