const userConfig = { default: {} };

interface Config {
  readonly [propName: string]: any;
}

interface IUserConfig {
  readonly default?: any;
  readonly [key: string]: any;
}

const config: Config = {
  ...((<IUserConfig>userConfig).default || {}),
  // webpack will automatically convert global to window when target is web
  ...(userConfig[(global as any).__app_mode__ || process.env.APP_MODE] || {}),
};

const APP_MODE = (global as any).__app_mode__ || process.env.APP_MODE;

export { config, APP_MODE };
