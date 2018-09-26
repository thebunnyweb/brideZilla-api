const mongoCredentials = {};

const devConfig = {};

const prodConfig = {};

const defaultConfig = {
  port: process.env.PORT || 3200
};

function getEnvironmentConfig(env) {
  switch (env) {
    case 'developement':
      return devConfig;
    case 'production':
      return prodConfig;
    default:
      return defaultConfig;
  }
}

export default {
  ...defaultConfig,
  ...getEnvironmentConfig(process.env.NODE_ENV)
};
