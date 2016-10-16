//main entry point
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_BINDINGS} from 'angular2/http';
import {testApp} from './testApp';

bootstrap(testApp, [HTTP_BINDINGS])
  .catch(err => console.error(err));