/**
 * Created by DreamBoy on 2017/2/27.
 */
import { WmValidator } from "./wmValidator.service";

/**
 * 校验规则
 */
export class WmValidateRule {
    rule: string; // 校验规则
    params: Array<any>;
    msg: string; // 校验不通过时的提示

    constructor(rule?: string, msg?: string, params?: Array<any>) {
        this.rule = rule ? rule : WmValidator.V_REQUIRED;
        this.msg = msg ? msg : '存在必填字段未填写';
        this.params = params ? params : [];
    }
}