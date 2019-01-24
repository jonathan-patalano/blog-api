require('reflect-metadata');

const envFile = process.env.TEST_ENV_FILE || '.env.test';
require('dotenv-safe').load({
  pâth: envFile,

  allowEmptyValues: true
});
