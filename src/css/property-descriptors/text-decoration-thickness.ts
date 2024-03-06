/*
 * @Author: liuyuanhao
 * @Date: 2024-03-06 10:13:27
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-03-06 10:48:06
 * @FilePath: /html2canvas/src/css/property-descriptors/text-decoration-thickness.ts
 * @Description: support text-decoration-thickness
 */
import {IPropertyValueDescriptor, PropertyDescriptorParsingType} from '../IPropertyDescriptor';
import {CSSValue, isDimensionToken} from '../syntax/parser';
import {Context} from '../../core/context';
export const textDecorationThickness: IPropertyValueDescriptor<number> = {
    name: 'text-decoration-thickness',
    initialValue: '0',
    type: PropertyDescriptorParsingType.VALUE,
    prefix: false,
    parse: (_context: Context, token: CSSValue): number => {
        if (isDimensionToken(token)) {
            return token.number;
        }
        return 0;
    }
};
