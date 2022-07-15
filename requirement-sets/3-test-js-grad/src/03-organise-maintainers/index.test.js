jest.mock('node-fetch');
jest.mock('axios');

const fetch = require('node-fetch')
const axios = require('axios')

const dependencies = require('../__mocks__/dependencies.json')
const organiseMaintainers = require('.');
const expected = [
  {
    username: 'gaearon',
    packageNames: [ 'react', 'react-redux', 'react-devtools-core' ]
  },
  {
    username: 'acdlite',
    packageNames: [ 'react', 'react-devtools-core' ]
  },
  { username: 'gnoff', packageNames: [ 'react' ] },
  { username: 'fb', packageNames: [ 'react' ] },
  { username: 'trueadm', packageNames: [ 'react' ] },
  {
    username: 'sophiebits',
    packageNames: [ 'react', 'react-devtools-core' ]
  },
  {
    username: 'lunaruan',
    packageNames: [ 'react', 'react-devtools-core' ]
  },
  {
    username: 'timdorr',
    packageNames: [
      'react-redux',
      'react-router',
      'react-router-dom',
      'react-router-config'
    ]
  },
  { username: 'acemarke', packageNames: [ 'react-redux' ] },
  {
    username: 'mjackson',
    packageNames: [ 'react-router', 'react-router-dom', 'react-router-config' ]
  },
  {
    username: 'chancestrickland',
    packageNames: [ 'react-router', 'react-router-dom', 'react-router-config' ]
  },
  { username: 'bluebill1049', packageNames: [ 'react-hook-form' ] },
  { username: 'fezvrasta', packageNames: [ 'react-popper' ] },
  { username: 'souporserious', packageNames: [ 'react-popper' ] },
  { username: 'monastic.panic', packageNames: [ 'react-bootstrap' ] },
  { username: 'taion', packageNames: [ 'react-bootstrap' ] },
  { username: 'kytsang', packageNames: [ 'react-bootstrap' ] },
  { username: 'rolandjitsu', packageNames: [ 'react-dropzone' ] },
  { username: 'rxmarbles', packageNames: [ 'react-dropzone' ] },
  { username: 'okonet', packageNames: [ 'react-dropzone' ] },
  { username: 'adrai', packageNames: [ 'react-i18next' ] },
  { username: 'jamuhl', packageNames: [ 'react-i18next' ] },
  { username: 'omgovich', packageNames: [ 'react-colorful' ] },
  { username: 'sniphpet', packageNames: [ 'react-toastify' ] },
  { username: 'johno', packageNames: [ 'react-markdown' ] },
  { username: 'wooorm', packageNames: [ 'react-markdown' ] },
  { username: 'robwalkerco', packageNames: [ 'react-fast-compare' ] },
  { username: 'gksander', packageNames: [ 'react-fast-compare' ] },
  {
    username: 'sarahformidable',
    packageNames: [ 'react-fast-compare' ]
  },
  { username: 'scott-rippey', packageNames: [ 'react-fast-compare' ] },
  { username: 'jpdriver', packageNames: [ 'react-fast-compare' ] },
  { username: 'yankovalera', packageNames: [ 'react-fast-compare' ] },
  { username: 'valgeorgiev', packageNames: [ 'react-fast-compare' ] },
  {
    username: 'michaelmerrill',
    packageNames: [ 'react-fast-compare' ]
  },
  { username: 'sarmeyer', packageNames: [ 'react-fast-compare' ] },
  {
    username: 'mariano-formidable',
    packageNames: [ 'react-fast-compare' ]
  },
  {
    username: 'carlospaelinck',
    packageNames: [ 'react-fast-compare' ]
  },
  {
    username: 'ryanisinallofus',
    packageNames: [ 'react-fast-compare' ]
  },
  { username: 'samwhale', packageNames: [ 'react-fast-compare' ] },
  { username: 'ryan.roemer', packageNames: [ 'react-fast-compare' ] },
  {
    username: 'formidable-owner',
    packageNames: [ 'react-fast-compare' ]
  },
  { username: 'eastridge', packageNames: [ 'react-fast-compare' ] },
  { username: 'exogen', packageNames: [ 'react-fast-compare' ] },
  { username: 'beccanelson', packageNames: [ 'react-fast-compare' ] },
  { username: 'philpl', packageNames: [ 'react-fast-compare' ] },
  { username: 'mfulgham', packageNames: [ 'react-fast-compare' ] },
  { username: 'jmcbee1', packageNames: [ 'react-fast-compare' ] },
  {
    username: 'formidablelabs',
    packageNames: [ 'react-fast-compare' ]
  },
  { username: 'carbonrobot', packageNames: [ 'react-fast-compare' ] },
  { username: 'manosim', packageNames: [ 'react-fast-compare' ] },
  { username: 'masiddee', packageNames: [ 'react-fast-compare' ] },
  { username: 'chrisbolin', packageNames: [ 'react-fast-compare' ] },
  { username: 'drcmda', packageNames: [ 'react-spring' ] },
  {
    username: 'tdfka_rick',
    packageNames: [
      'react-spring',
      '@react-spring/rafz',
      '@react-spring/shared',
      '@react-spring/core'
    ]
  },
  { username: 'tannerlinsley', packageNames: [ 'react-query' ] },
  { username: 'longlho', packageNames: [ 'react-intl' ] },
  { username: 'redonkulus', packageNames: [ 'react-intl' ] },
  { username: 'pyrocat', packageNames: [ 'react-intl' ] },
  { username: 'caridy', packageNames: [ 'react-intl' ] },
  { username: 'juandopazo', packageNames: [ 'react-intl' ] },
  { username: 'clarle', packageNames: [ 'react-intl' ] },
  { username: 'okuryu', packageNames: [ 'react-intl' ] },
  { username: 'ericf', packageNames: [ 'react-intl' ] },
  { username: 'sebmarkbage', packageNames: [ 'react-devtools-core' ] },
  {
    username: 'brianvaughn',
    packageNames: [ 'react-devtools-core', 'react-error-boundary' ]
  },
  { username: 'jstejada', packageNames: [ 'react-devtools-core' ] },
  { username: 'mondaychen', packageNames: [ 'react-devtools-core' ] },
  { username: 'kentcdodds', packageNames: [ 'react-error-boundary' ] },
  { username: 'fractal', packageNames: [ 'react-responsive' ] },
  { username: 'yocontra', packageNames: [ 'react-responsive' ] },
  {
    username: 'ericvicenti',
    packageNames: [ '@react-navigation/routers' ]
  },
  {
    username: 'brentvatne',
    packageNames: [ '@react-navigation/routers' ]
  },
  {
    username: 'satya164',
    packageNames: [ '@react-navigation/routers' ]
  },
  { username: 'osdnk', packageNames: [ '@react-navigation/routers' ] },
  { username: 'cookpete', packageNames: [ 'react-player' ] }
]

describe('organiseMaintainers', () => {
  beforeEach(() => {
    fetch.mockReturnValue(Promise.resolve({json: () => Promise.resolve(dependencies)}))
    axios.get.mockReturnValue(Promise.resolve({ data: dependencies }))
  })

  it('returns a list of maintainers and their packageNames in alphabetical order', async () => {
    const answer = await organiseMaintainers();
    expect(answer).toEqual(expected);
  });
});
