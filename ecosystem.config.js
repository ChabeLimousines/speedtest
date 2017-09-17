module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'speedtest',
      script    : 'bin/speed.js',
      /*env: {
        COMMON_VARIABLE: 'true'
      },*/
      env_production : {
        NODE_ENV: 'production'
      }
    }

  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'chabe',
      host : 'eq-cha-node',
      ref  : 'origin/master',
      repo : 'git@github.com:ChabeLimousines/speedtest.git',
      path : '/home/chabe/applications/speedtest',
      'post-deploy' : 'export PATH=$PATH:/usr/local/nvm/versions/node/v6.10.3/bin/ && npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};

