/**

* Make the following HTTP request with either axios or node-fetch:

GET https://api.npms.io/v2/search/suggestions?q=react

******

*  With the results from this request, inside "content", count
*  the number of packages that have a MAJOR semver version
*  greater than 10.x.x

*/

const axios = require('axios')
const fetch = require('node-fetch')

module.exports = async function countMajorVersionsAbove10() {
  // const { data } = await axios.get("https://api.npms.io/v2/search/suggestions?q=react")
  const res = await fetch("https://api.npms.io/v2/search/suggestions?q=react")
  const data = await res.json()

  return data.filter(dep => majorVersionsGreaterThan10(dep)).length
};

const majorVersionsGreaterThan10 = (dep) => Number(dep.package.version.split('.')[0]) >= 10
