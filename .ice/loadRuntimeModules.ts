interface IRuntime<T> {
  loadModule: (module: { default: T } | T) => void;
}

function loadRuntimeModules(runtime: IRuntime<Function>) {
  runtime.loadModule(
    require('C:/Users/Scott/ice/node_modules/build-plugin-app-core/lib/runtime.js')
  );

  runtime.loadModule(
    require('C:/Users/Scott/ice/node_modules/build-plugin-ice-router/lib/runtime.js')
  );

  runtime.loadModule(
    require('C:/Users/Scott/ice/node_modules/build-plugin-ice-logger/lib/runtime.js')
  );

  runtime.loadModule(
    require('C:/Users/Scott/ice/node_modules/build-plugin-ice-auth/lib/runtime.js')
  );
}

export default loadRuntimeModules;
