const organiseMaintainers = require('.');

const results = [
  {
    username: 'acdlite',
    packageNames: [
      'react',
      'react-dom',
      'react-is',
      'react-refresh',
      'react-test-renderer'
    ]
  },
  { username: 'acemarke', packageNames: [ 'react-redux' ] },
  { username: 'adrai', packageNames: [ 'react-i18next' ] },
  {
    username: 'andyrichardson',
    packageNames: [ 'react-fast-compare' ]
  },
  { username: 'bluebill1049', packageNames: [ 'react-hook-form' ] },
  { username: 'bmathews', packageNames: [ 'react-fast-compare' ] },
  { username: 'boygirl', packageNames: [ 'react-fast-compare' ] },
  {
    username: 'brianvaughn',
    packageNames: [
      'react',
      'react-dom',
      'react-is',
      'react-refresh',
      'react-test-renderer'
    ]
  },
  { username: 'carbonrobot', packageNames: [ 'react-fast-compare' ] },
  { username: 'caridy', packageNames: [ 'react-intl' ] },
  {
    username: 'carlospaelinck',
    packageNames: [ 'react-fast-compare' ]
  },
  { username: 'chrisbolin', packageNames: [ 'react-fast-compare' ] },
  { username: 'clarle', packageNames: [ 'react-intl' ] },
  { username: 'cookpete', packageNames: [ 'react-player' ] },
  { username: 'coopy', packageNames: [ 'react-fast-compare' ] },
  { username: 'eastridge', packageNames: [ 'react-fast-compare' ] },
  { username: 'ebrillhart', packageNames: [ 'react-fast-compare' ] },
  { username: 'ericf', packageNames: [ 'react-intl' ] },
  { username: 'exogen', packageNames: [ 'react-fast-compare' ] },
  {
    username: 'fb',
    packageNames: [
      'react',
      'react-app-polyfill',
      'react-dev-utils',
      'react-dom',
      'react-error-overlay',
      'react-is',
      'react-scripts',
      'react-test-renderer'
    ]
  },
  { username: 'fezvrasta', packageNames: [ 'react-popper' ] },
  {
    username: 'formidable-owner',
    packageNames: [ 'react-fast-compare' ]
  },
  {
    username: 'formidablelabs',
    packageNames: [ 'react-fast-compare' ]
  },
  {
    username: 'gaearon',
    packageNames: [
      'react',
      'react-app-polyfill',
      'react-dev-utils',
      'react-dom',
      'react-error-overlay',
      'react-is',
      'react-redux',
      'react-refresh',
      'react-scripts',
      'react-test-renderer'
    ]
  },
  { username: 'gksander', packageNames: [ 'react-fast-compare' ] },
  { username: 'hartzis', packageNames: [ 'react-fast-compare' ] },
  {
    username: 'ianschmitz',
    packageNames: [
      'react-app-polyfill',
      'react-dev-utils',
      'react-error-overlay',
      'react-scripts'
    ]
  },
  {
    username: 'iansu',
    packageNames: [
      'react-app-polyfill',
      'react-dev-utils',
      'react-error-overlay',
      'react-scripts'
    ]
  },
  { username: 'jamuhl', packageNames: [ 'react-i18next' ] },
  { username: 'jmcbee1', packageNames: [ 'react-fast-compare' ] },
  { username: 'johno', packageNames: [ 'react-markdown' ] },
  { username: 'juandopazo', packageNames: [ 'react-intl' ] },
  { username: 'kytsang', packageNames: [ 'react-bootstrap' ] },
  { username: 'longlho', packageNames: [ 'react-intl' ] },
  {
    username: 'lunaruan',
    packageNames: [
      'react',
      'react-dom',
      'react-is',
      'react-refresh',
      'react-test-renderer'
    ]
  },
  { username: 'manosim', packageNames: [ 'react-fast-compare' ] },
  {
    username: 'mariano-formidable',
    packageNames: [ 'react-fast-compare' ]
  },
  { username: 'masiddee', packageNames: [ 'react-fast-compare' ] },
  { username: 'mfulgham', packageNames: [ 'react-fast-compare' ] },
  { username: 'mhink', packageNames: [ 'react-fast-compare' ] },
  {
    username: 'michaelmerrill',
    packageNames: [ 'react-fast-compare' ]
  },
  {
    username: 'mjackson',
    packageNames: [ 'react-router', 'react-router-dom' ]
  },
  { username: 'monastic.panic', packageNames: [ 'react-bootstrap' ] },
  { username: 'necolas', packageNames: [ 'react-refresh' ] },
  { username: 'okonet', packageNames: [ 'react-dropzone' ] },
  { username: 'okuryu', packageNames: [ 'react-intl' ] },
  { username: 'parkerziegler', packageNames: [ 'react-fast-compare' ] },
  {
    username: 'paulathevalley',
    packageNames: [ 'react-fast-compare' ]
  },
  { username: 'philpl', packageNames: [ 'react-fast-compare' ] },
  { username: 'pyrocat', packageNames: [ 'react-intl' ] },
  { username: 'redonkulus', packageNames: [ 'react-intl' ] },
  { username: 'rolandjitsu', packageNames: [ 'react-dropzone' ] },
  { username: 'rxmarbles', packageNames: [ 'react-dropzone' ] },
  { username: 'ryan.roemer', packageNames: [ 'react-fast-compare' ] },
  {
    username: 'ryanisinallofus',
    packageNames: [ 'react-fast-compare' ]
  },
  { username: 'samwhale', packageNames: [ 'react-fast-compare' ] },
  { username: 'sarmeyer', packageNames: [ 'react-fast-compare' ] },
  {
    username: 'sebmarkbage',
    packageNames: [
      'react',
      'react-dom',
      'react-is',
      'react-refresh',
      'react-test-renderer'
    ]
  },
  { username: 'sniphpet', packageNames: [ 'react-toastify' ] },
  {
    username: 'sophiebits',
    packageNames: [ 'react', 'react-dom', 'react-is', 'react-test-renderer' ]
  },
  { username: 'souporserious', packageNames: [ 'react-popper' ] },
  { username: 'stefvhuynh', packageNames: [ 'react-fast-compare' ] },
  { username: 'streamich', packageNames: [ 'react-use' ] },
  { username: 'taion', packageNames: [ 'react-bootstrap' ] },
  {
    username: 'tannerlinsley',
    packageNames: [ 'react-query', 'react-table' ]
  },
  { username: 'thekenwheeler', packageNames: [ 'react-fast-compare' ] },
  { username: 'threepointone', packageNames: [ 'react-refresh' ] },
  {
    username: 'timdorr',
    packageNames: [ 'react-redux', 'react-router', 'react-router-dom' ]
  },
  {
    username: 'timer',
    packageNames: [
      'react-app-polyfill',
      'react-dev-utils',
      'react-error-overlay',
      'react-scripts'
    ]
  },
  { username: 'tptee', packageNames: [ 'react-fast-compare' ] },
  {
    username: 'trueadm',
    packageNames: [
      'react',
      'react-dom',
      'react-is',
      'react-refresh',
      'react-test-renderer'
    ]
  },
  { username: 'wooorm', packageNames: [ 'react-markdown' ] },
  {
    username: 'zpao',
    packageNames: [ 'react-dom', 'react-test-renderer' ]
  }
]

describe('organiseMaintainers', () => {
  it('returns a list of maintainers and their packageNames in alphabetical order', async () => {
    const answer = await organiseMaintainers();
    expect(answer).toEqual(results);
  });
});
