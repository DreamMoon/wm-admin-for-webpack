import {Injectable} from '@angular/core';

@Injectable()
export class WmThemePreloader {

  private static _loaders:Array<Promise<any>> = [];

  public static registerLoader(method:Promise<any>):void {
    WmThemePreloader._loaders.push(method);
  }

  public static clear():void {
    WmThemePreloader._loaders = [];
  }

  public static load():Promise<any> {
    return new Promise((resolve, reject) => {
      WmThemePreloader._executeAll(resolve);
    });
  }

  private static _executeAll(done:Function):void {
    setTimeout(() => {
      Promise.all(WmThemePreloader._loaders).then((values) => {
        done.call(null, values);

      }).catch((error) => {
        console.error(error);
      });
    });
  }
}
