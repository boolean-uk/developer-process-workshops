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
  let maintainers = []
  const { data } = await axios.get("https://api.npms.io/v2/search/suggestions?q=react")
  data.map(dependency => {
    dependency.package.maintainers.forEach(maintainer => {
      const maintainerIndex = maintainers.findIndex(maintainerInMaintainers => maintainerInMaintainers.username === maintainer.username)
      if (maintainerIndex !== -1) {
        maintainers[maintainerIndex].packageNames.push(dependency.package.name)
      } else {
        maintainers.push({ username: maintainer.username, packageNames: [dependency.package.name] })
      }
    })
  });
  return maintainers
};
