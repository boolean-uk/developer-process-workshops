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

const axios = require('axios')

module.exports = async function organiseMaintainers() {
  let allMaintainers = []
  let maintainers = []
  const { data } = await axios.get("https://api.npms.io/v2/search/suggestions?q=react")
  data.map(element => {
    element.package.maintainers.forEach( oneMaintainer => {
      if( allMaintainers[oneMaintainer.username] ) {
        allMaintainers[oneMaintainer.username].push(element.package.name)
      } else {
        allMaintainers[oneMaintainer.username] = [element.package.name]
      }
    })
  });
  for(let oneMaintainer in allMaintainers) {
    maintainers.push(
      {
        username: oneMaintainer,
        packageNames: allMaintainers[oneMaintainer]
      }
    )
  }
  return maintainers
};
