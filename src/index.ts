import { ApiCustomizationApplication, PackageInfo } from './application';
import { ApplicationConfig } from '@loopback/core';

export { ApiCustomizationApplication, PackageInfo };

export async function main(options: ApplicationConfig = {}) {
  const app = new ApiCustomizationApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);

  return app;
}
