require('dotenv-flow').config({
  default_node_env: 'test',
  silent: true,
});

module.exports = {
  color: true,
  require: ['@babel/register', 'src/utils/mocha/mochaGlobalSetup.js'],
  spec: ['src/tests/api/**/*.spec.js'],
};
