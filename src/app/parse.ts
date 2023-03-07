import * as Parse from 'parse';
Parse.initialize('test', 'test', 'test');
(Parse as any).serverURL = 'http://localhost:8378/1'
declare module 'parse' {
  interface Object {
    bind: any
  }
}
export default Parse;