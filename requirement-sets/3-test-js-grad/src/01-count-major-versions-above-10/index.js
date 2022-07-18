/**

* Make the following HTTP request with either axios or node-fetch:

GET https://api.npms.io/v2/search/suggestions?q=react

******

*  With the results from this request, inside "content", count
*  the number of packages that have a MAJOR semver version
*  greater than 10.x.x

*/

module.exports = async function countMajorVersionsAbove10() {

  let foundPackageVersions = [];
  let packageCount = 0

  fs.readFile('../__mocks__/dependencies.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const jsonData = JSON.parse(data);
    jsonData.forEach((packageInData) => foundPackageVersions.push(packageInData.package.version.split('.')))
    foundPackageVersions.map((version) => { if (Number(version[0]) >= 10) { packageCount++ } })
    return packageCount
  });

};
