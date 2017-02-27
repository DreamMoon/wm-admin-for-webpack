/**
 * Created by DreamBoy on 2017/2/27.
 */
import { Injectable } from '@angular/core';

import { WmValidateResult } from "./wmValidateResult";
import { WmValidateRule } from "./wmValidateRule";

/**
 * WmValidator验证器
 */
@Injectable()
export class WmValidator {
    static V_REQUIRED = 'required';
    static V_EMAIL = 'email';
    static V_EQUAL = 'equal';
    static V_MIN = 'min';
    static V_MAX = 'max';
    static V_LENGTH = 'length';

    /**
     * 校验通过时的返回结果
     * @param msg
     * @param data
     * @returns {WmValidateResult}
     */
    private static success(msg?: string, data?: any) {
        let res: WmValidateResult = new WmValidateResult();
        res.msg = msg ? msg : '校验通过';
        res.data = data ? data : null;
        return res;
    }

    /**
     * 校验不通过时的返回结果
     * @param msg
     * @param data
     * @returns {WmValidateResult}
     */
    private static error(msg?: string, data?: any) {
        let res: WmValidateResult = new WmValidateResult();
        res.code = 0;
        res.msg = msg ? msg : '校验不通过';
        res.data = data ? data : null;
        return res;
    }

    /**
     * 通过验证规则去调用验证方法
     * @param val
     * @param rule
     */
    public static validate(val: string, rule: Array<WmValidateRule>): WmValidateResult {
        if(!rule || rule.length == 0) {
            return WmValidator.success();
        }

        for(let r of rule) {
            let res: WmValidateResult;
            switch (r.rule) {
                case WmValidator.V_REQUIRED:
                    res = WmValidator.checkRequired(val, r.msg);
                    break;
                case WmValidator.V_EMAIL:
                    res = WmValidator.checkEmail(val, r.msg);
                    break;
                case WmValidator.V_EQUAL:
                    if(!r.params || r.params.length <= 0) {
                        console.error('Error WmValidator：Argument is missing！(checkEqual)');
                        return WmValidator.error();
                    }
                    res = WmValidator.checkEqual(val, r.params[0], r.msg);
                    break;
                case WmValidator.V_MIN:
                    if(!r.params || r.params.length <= 0) {
                        console.error('Error WmValidator：Argument is missing！(min)');
                        return WmValidator.error();
                    }
                    res = WmValidator.checkMin(val, r.params[0], r.msg);
                    break;
                case WmValidator.V_MAX:
                    if(!r.params || r.params.length <= 0) {
                        console.error('Error WmValidator：Argument is missing！(max)');
                        return WmValidator.error();
                    }
                    res = WmValidator.checkMax(val, r.params[0], r.msg);
                    break;
                case WmValidator.V_LENGTH:
                    if(!r.params || r.params.length <= 0) {
                        console.error('Error WmValidator：Argument is missing！');
                        return WmValidator.error();
                    }
                    if(r.params.length == 1) {
                        res = WmValidator.checkLength(val, r.params[0], null, r.msg);
                    } else {
                        res = WmValidator.checkLength(val, r.params[0], r.params[1], r.msg);
                    }
                    break;
            }
            if(!res.isValid()) {
                return res;
            }
        }

        return WmValidator.success();
    }

    /**
     * 校验必填字段
     * @param val
     * @param msg
     * @returns {WmValidateResult}
     */
    public static checkRequired(val: any, msg?: string): WmValidateResult {
        if(val) {
            return WmValidator.success();
        } else {
            return WmValidator.error(msg);
        }
    }

    /**
     * 校验电子邮箱格式
     * @param email
     * @param msg
     * @returns {WmValidateResult}
     */
    public static checkEmail(email: string, msg?: string): WmValidateResult {
        let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (EMAIL_REGEXP.test(email)) {
            return WmValidator.success();
        } else {
            return WmValidator.error(msg);
        }
    }

    /**
     * 校验两个值是否相等
     * @param v1
     * @param v2
     * @param msg
     */
    public static checkEqual(v1: any, v2: any, msg?: string) {
        if(v1 === v2) {
            return WmValidator.success();
        } else {
            return WmValidator.error(msg);
        }
    }

    /**
     * 校验某个值的最小长度
     * @param val
     * @param min
     * @param msg
     * @returns {WmValidateResult}
     */
    public static checkMin(val: string, min: number, msg?: string) {
        if(!val || val.length < min) {
            return WmValidator.error(msg);
        }
        return WmValidator.success();
    }

    /**
     * 校验某个值的最大长度
     * @param val
     * @param max
     * @param msg
     */
    public static checkMax(val: string, max: number, msg?: string) {
        if(!val || val.length > max) {
            return WmValidator.error(msg);
        }
        return WmValidator.success();
    }

    /**
     * 校验某个值的长度是否符合某个范围
     * @param val
     * @param min
     * @param max
     * @param msg
     * @returns {WmValidateResult}
     */
    public static checkLength(val: string, min: number, max?: number, msg?: string) {
        if((min || min == 0) && (max || max == 0)) {
            if(min > max) {
                console.error('Error WmValidator：Rule error(checkLength)！');
                return WmValidator.error(msg);
            }

            if(!val || val.length < min || val.length > max) {
                return WmValidator.error(msg);
            }
        } else {
            if(!val || val.length != min) {
                return WmValidator.error(msg);
            }
        }
        return WmValidator.success();
    }
}