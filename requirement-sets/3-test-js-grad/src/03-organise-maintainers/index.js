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
  // TODO
  const { data } = await axios.get("https://api.npms.io/v2/search/suggestions?q=react")
  // 2. for each dependency, for each maintainer, aggregate the packages they are responsible for.
  //   {
  //     username: [dep1, dep2]
  //   }
  const maintainers = []

  data.forEach(dep => {
    dep.package.maintainers.forEach(maintainer => {
      // if (!maintainersObj[maintainer.username]) {
      //   maintainersObj[maintainer.username] = []
      // }
      // maintainersObj[maintainer.username].push(dep.package.name)
      const record = maintainers.find(obj => obj.username === maintainer.username)
      if (!record) {
        const newRecord = {
          username: maintainer.username,
          packageNames: [dep.package.name]
        }
        maintainers.push(newRecord)
      } else {
        record.packageNames.push(dep.package.name)
      }
    })
  })

  // console.log(maintainersObj)
  //
  // const maintainers = Object.keys(maintainersObj).map(username => {
  //   return {
  //     username: username,
  //     packageNames: maintainersObj[username]
  //   }
  // })

  // console.log(maintainers)


  // 3. then transform it?   {
  //       username: "a-username",
  //       packageNames: ["a-package-name", "another-package"]
  //   }

  return maintainers
};
