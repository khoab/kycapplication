const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

const application = require('./dist');
const p = require('./package.json');
const version = p.version.split('.').shift();
const appName = p.name;

module.exports = application;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  if (require.main === module) {
    // Run the application
    const config = {
      rest: {
        port: +(process.env.PORT || 8080),
        host: process.env.HOST,
        basePath: appName + (version > 0 ? '/v' + version : ''),
        openApiSpec: {
          // useful when used with OASGraph to locate your application
          setServersFromRequest: true,
          endpointMapping: {
            '/openapi.json': { version: '3.0.0', format: 'json' },
            '/openapi.yaml': { version: '3.0.0', format: 'yaml' },
          },
        },
        apiExplorer: {
          // TODO: see the issue
          // https://github.com/strongloop/loopback-next/issues/2329
          url: 'https://petstore.swagger.io',
          httpUrl: 'http://petstore.swagger.io',
        },

      },
    };
    application.main(config).catch(err => {
      console.error('Cannot start the application.', err);
      process.exit(1);
    });
  }
  console.log(`Worker ${process.pid} started`);
}
