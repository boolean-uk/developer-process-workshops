/**

* Make the following HTTP request with either axios or node-fetch:

GET https://api.npms.io/v2/search/suggestions?q=react

******

*  With the results from this request, inside "content", return
*  the "name" of the package that has the oldest "date" value

*/
const fetch = require("node-fetch");

module.exports = async function oldestPackageName() {
  // TODO
  let name;
  const url = "https://api.npms.io/v2/search/suggestions?q=react";
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const dataSortByDate = data.sort((a, b) => {
        const indexA = data.indexOf(a);
        const dateA = new Date(data[indexA].package.date);
        const indexB = data.indexOf(b);
        const dateB = new Date(data[indexB].package.date);
        return dateA - dateB;
      });
      name = dataSortByDate[0].package.name;
    });
  return name;
};
