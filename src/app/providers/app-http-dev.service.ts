/**
 * Created by DreamBoy on 2017/2/25.
 */
import { Injectable }    from '@angular/core';

/**
 * 测试环境下的网络请求服务
 */
@Injectable()
export class AppHttpDevService {
  static APP_HOST: string = 'http://localhost'; // 请求的主机域名
  static APP_URL: string = 'http://localhost/wm/dev/public'; // 请求的主机即路径

}
