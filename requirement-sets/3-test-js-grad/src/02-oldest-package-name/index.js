/**

* Make the following HTTP request with either axios or node-fetch:

GET https://api.npms.io/v2/search/suggestions?q=react

******

*  With the results from this request, inside "content", return
*  the "name" of the package that has the oldest "date" value

*/
const axios = require('axios');

module.exports = async function oldestPackageName() {
  const datesArray = [];
  try {
    const res = await axios.get(
      'https://api.npms.io/v2/search/suggestions?q=react'
    );
    const data = res.data;

    // const mapped = data
    //   .map((el) => [el.package.date, el.package.name])
    //   .reduce((previous, current) => {
    //     return previous[0] < current[0] ? previous : current;
    //   });
    // console.log('MAPPED : ', mapped);

    data.forEach((el) => datesArray.push([el.package.date, el.package.name]));
    const oldestDate = datesArray.reduce((previous, current) => {
      return previous[0] < current[0] ? previous : current;
    });

    const name = oldestDate[1];
    return name;
  } catch (err) {
    console.log(err);
  }
  return name;
};
