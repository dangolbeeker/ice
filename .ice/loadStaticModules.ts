import { IAppConfig } from './types';

function loadStaticModules(appConfig: IAppConfig) {
  require('C:/Users/Scott/ice/node_modules/build-plugin-ice-request/lib/runtime.js').default(
    { appConfig }
  );
}

export default loadStaticModules;
