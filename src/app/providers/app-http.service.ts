/**
 * Created by DreamBoy on 2017/2/25.
 */
import { Injectable }    from '@angular/core';

import { AppHttpDevService } from "./app-http-dev.service";
import { HttpService } from "./http.service";

/**
 * 针对当前应用封装的网络请求服务
 */
@Injectable()
export class AppHttpService {
  static APP_HOST: string = ''; // 请求的主机域名
  static APP_URL: string = ''; // 请求的主机即路径
  static URL_GET_REGI_VCODE: string = 'developer/getRegiVCode';


  constructor(private httpSer: HttpService) {
    AppHttpService.concatDev();
  }

  /**
   * 合并测试环境下的配置
   */
  private static concatDev() {
    if(AppHttpDevService.APP_HOST) {
      AppHttpService.APP_HOST = AppHttpDevService.APP_HOST;
    }
    if(AppHttpDevService.APP_URL) {
      AppHttpService.APP_URL = AppHttpDevService.APP_URL;
    }
  }

  /**
   * 处理一下请求的URL
   * @param url
   */
  private static handleUrl(url: string) {
    return AppHttpService.APP_URL + '/' + url;
  }

  /**
   * get 请求
   * @param url
   * @returns {any}
   */
  get(url: string): Promise<any> {
    return this.httpSer.get(AppHttpService.handleUrl(url));
  }

  /**
   * post 请求
   * @param url
   * @param data
   * @returns {Promise<any>}
   */
  post(url: string, data: any): Promise<any> {
    return this.httpSer.post(AppHttpService.handleUrl(url), data);
  }

  /**
   * 验证请求返回的处理结果是否为成功的
   * @param data
   */
  static check(data: any) {
    if(data && data.code == 1) {
      return true;
    }
    return false;
  }
}
