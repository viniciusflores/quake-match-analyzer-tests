const mochaGlobalSetup = function () {
  const host = process.env.API_HOST;
  const port = process.env.API_PORT;
  const path = process.env.API_PATH;

  process.env.API_URL = `${host}:${port}/${path}`;
};

export { mochaGlobalSetup };
