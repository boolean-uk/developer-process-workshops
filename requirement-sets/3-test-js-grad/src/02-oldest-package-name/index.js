/**

* Make the following HTTP request with either axios or node-fetch:

GET https://api.npms.io/v2/search/suggestions?q=react

******

*  With the results from this request, inside "content", return
*  the "name" of the package that has the oldest "date" value

*/

const axios = require('axios')

module.exports = async function oldestPackageName() {
  const { data } = await axios.get("https://api.npms.io/v2/search/suggestions?q=react")

  let oldestPackage = {
    name: data[0].package.name,
    date: data[0].package.date
  }

  data.map( thisPackage => {
    if( new Date(thisPackage.package.date) <  new Date(oldestPackage.date) ) {
      oldestPackage = {
        name: thisPackage.package.name,
        date: thisPackage.package.date
      }
    }
  })
  return oldestPackage.name
};
