require('dotenv-flow').config({
  default_node_env: 'test',
  silent: true,
});

module.exports = {
  'color': true,
  'reporter': 'mocha-multi',
  'reporter-option': ['spec=-', 'mocha-allure-reporter=-'],
  'require': ['@babel/register', 'src/utils/mocha/mochaGlobalSetup.js'],
  'spec': ['src/tests/api/**/*.spec.js'],
};
