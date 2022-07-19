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
  const versions = [];
  const splitStr = [];

  try {
    const res = await axios.get(
      'https://api.npms.io/v2/search/suggestions?q=react'
    );
    const data = res.data;

    // const majorVersions = data.map((dep) => {
    //   return dep.package.version.split('.')[0];
    // });

    // const above10 = majorVersions.filter(
    //   (number) => Number(number) >= 10
    // ).length;

    data.forEach((el) => versions.push(el.package.version));
    versions.forEach((str) => splitStr.push(str.split('.')));

    const answer = splitStr.filter(
      (el) =>
        Number(el[0]) >= 10 &&
        (Number(el[1]) > 0 || Number(el[2]) > 0 || Number(el[3]) > 0)
    ).length;
    return answer;
  } catch (err) {
    console.log(err);
  }
  return answer;
};
