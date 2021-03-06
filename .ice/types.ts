import {
  ReactElement as FrameworkElement,
  ComponentType as FrameworkComponentType,
  ReactNode as FrameworkNode,
} from 'react';

import { IAppRouterProps } from './router/types';
import { ILogger } from './logger/types';
import { IRequest } from './request/types';
import { IAuth } from './auth/types';

export * from './router/types';

interface IOnTabItemClickParams {
  from: string;
  path: string;
  text: string;
  index: number;
}

interface IQuery {
  [key: string]: string;
}

interface IContext {
  pathname: string;
  query?: IQuery;
  ssrError?: any;
  path?: string;
}

interface IStoreConfig {
  resetPageState: boolean;
}

export interface IBuildConfig {
  router?: object | boolean;
  store?: boolean | IStoreConfig;
  icestarkUMD?: boolean;
  web?: object;
}

export interface IApp {
  rootId?: string;
  mountNode?: HTMLElement;
  addProvider?: ({ children }: { children: FrameworkNode }) => FrameworkElement;
  getInitialData?: (ctx?: IContext) => Promise<any>;
  errorBoundary?: boolean;
  ErrorBoundaryFallback?: (error: any) => FrameworkComponentType;
  onErrorBoundaryHandler?: (error: Error, componentStack: string) => any;
  onLaunch?: (options?: any) => any;
  onShow?: () => any;
  onHide?: () => any;
  onError?: (error: Error) => any;
  onTabItemClick?: ({ from, path, text, index }: IOnTabItemClickParams) => any;

  [key: string]: any;
}

export interface IAppConfig {
  app?: IApp;

  router?: IAppRouterProps;
  logger?: ILogger;
  request?: IRequest;
  auth?: IAuth;
}

declare global {
  interface Window {
    __ICE_SSR_ENABLED__: any;
    __ICE_APP_DATA__: any;
    __ICE_PAGE_PROPS__: any;
  }
}
