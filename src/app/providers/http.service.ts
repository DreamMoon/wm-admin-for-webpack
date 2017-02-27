/**
 * Created by DreamBoy on 2017/2/25.
 */
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

/**
 * 基本的网络请求服务
 */
@Injectable()
export class HttpService {
  private static headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  /**
   * 请求错误时的回调
   * @param error
   * @returns {any}
   */
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  /**
   * get 请求
   * @param url
   * @returns {any}
   */
  get(url: string): Promise<any> {
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  /**
   * post 请求
   * @param url
   * @param data
   * @returns {Promise<any>}
   */
  post(url: string, data: any): Promise<any> {
    return this.http.post(url, JSON.stringify(data), {headers: HttpService.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }
}
