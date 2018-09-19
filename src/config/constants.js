const mongoCredentials = {
  MONGO_USER: 'thebunny',
  MONGO_PASSWORD: 'Bunny1526'
};

const devConfig = {
  MONGO_URL: `mongodb://${mongoCredentials.MONGO_USER}:${
    mongoCredentials.MONGO_PASSWORD
  }@ds159812.mlab.com:59812/bridezilla`,
  JWT_SECRET: 'ZenApp'
};

const prodConfig = {
  MONGO_URL: ''
};

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
