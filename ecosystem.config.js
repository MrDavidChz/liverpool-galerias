module.exports = {
  /**
	 * Application configuration section
	 * http://pm2.keymetrics.io/docs/usage/application-declaration/
	 */
  apps: [
    // First application
    {
      name: 'api-liverpool',
      script: './dist/index.js',
      node_args : '-r dotenv/config',
    },
  ]
};
