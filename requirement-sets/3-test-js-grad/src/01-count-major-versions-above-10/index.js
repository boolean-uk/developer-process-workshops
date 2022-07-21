/**

* Make the following HTTP request with either axios or node-fetch:

GET https://api.npms.io/v2/search/suggestions?q=react

******

*  With the results from this request, inside "content", count
*  the number of packages that have a MAJOR semver version
*  greater than 10.x.x

*/

const axios = require('axios');

module.exports = async function countMajorVersionsAbove10() {
  try {
    const { data } = await axios.get(
      'https://api.npms.io/v2/search/suggestions?q=react'
    );
    const answer = data
      .map((el) => el.package.version.split('.')[0])
      .filter((el) => Number(el) >= 10).length;

    return answer;
  } catch (err) {
    console.log(err);
  }
};
