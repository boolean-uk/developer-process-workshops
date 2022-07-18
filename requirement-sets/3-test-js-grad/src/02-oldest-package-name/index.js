/**

* Make the following HTTP request with either axios or node-fetch:

GET https://api.npms.io/v2/search/suggestions?q=react

******

*  With the results from this request, inside "content", return
*  the "name" of the package that has the oldest "date" value

*/

const axios = require('axios');

axios
  .get('https://api.npms.io/v2/search/suggestions?q=react')
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });

// module.exports = async function oldestPackageName() {
//   // TODO
//   let response = await fetch('https://api.npms.io/v2/search/suggestions?q=react');

//   console.log(response.status); // 200
//   console.log(response.statusText); // OK
//   console.log ('\n****Response: ****')
//   console.log (response)

//   if (response.status === 200) {
//       let data = await response.text();
//       // handle data
//   }

//   return name
// };

