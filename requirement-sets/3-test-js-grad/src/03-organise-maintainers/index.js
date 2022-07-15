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

module.exports = async function organiseMaintainers() {
  // TODO

  return maintainers
};
