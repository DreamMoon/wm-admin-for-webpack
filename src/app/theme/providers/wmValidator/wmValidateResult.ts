/**
 * Created by DreamBoy on 2017/2/27.
 */
/**
 * WmValidator验证
 */
export class WmValidateResult {
    code: number = 1;
    msg: string = '校验通过';
    data: any = null;

    /**
     * 判断验证是否通过
     * @returns {boolean}
     */
    isValid(): boolean {
        return this.code == 1;
    }
}