const fs = require('fs');

function checkPosition(data) {
  const answers = [];
  const dataArray = data.toString().toUpperCase().split('\r\n');

  dataArray.forEach((el) => {
    const counts = {
      W: 0,
      E: 0,
      N: 0,
      S: 0,
    };

    el.split('').forEach((letter) => (counts[letter] += 1));

    answers.push(counts.W === counts.E && counts.S === counts.N);
  });
  return answers;
}

const data = fs.readFileSync('../input.txt');
console.log(checkPosition(data));

const findOrCreateMaintainer = (maintainers, maintainer) => {
  const foundMaintainer = maintainers.find((entry) => {
    return entry.username === maintainer;
  });

  if (foundMaintainer) return foundMaintainer;

  const createdMaintainer = { username: maintainer, packageNames: [] };
  maintainers.push(createdMaintainer);
  return createdMaintainer;
};

const addMaintainerForPackage = (maintainers, packageName, maintainer) => {
  const packages = findOrCreateMaintainer(maintainers, maintainer).packageNames;
  packages.push(packageName);
};

module.exports = async function organiseMaintainers() {
  const { data } = await axios.get(
    'https://api.npms.io/v2/search/suggestions?q=react'
  );

  console.log('DATA : ', JSON.stringify(data[0], null, 2));
  let maintainers = [];

  data.forEach((item) => {
    let packageName = item.package.name;
    item.package.maintainers.forEach((maintainer) => {
      let username = maintainer.username;
      addMaintainerForPackage(maintainers, packageName, username);
    });
    return maintainers;
  });

  // console.log(maintainers);
  return maintainers;
};
