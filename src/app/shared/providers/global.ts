import {Injectable} from '@angular/core';
import {ObjectTypes} from '../const/object.const';

@Injectable()
export class Global {

  constructor() {
  }

  getTypeOfObject(object: any): string {
    switch (Object.prototype.toString.call(object)) {
      case '[object Array]':
        return ObjectTypes.ARRAY; // 'Array';
      case '[object Blob]':
        return ObjectTypes.BLOB; // 'Blob';
      case '[object Uint8Array]':
        return ObjectTypes.UINT8_ARRAY; // 'Uint8Array';
      case '[object Uint16Array]':
        return ObjectTypes.UINT16_ARRAY; // 'Uint16Array';
      case '[object Uint32Array]':
        return ObjectTypes.UINT32_ARRAY; // 'Uint32Array';
      case '[object ArrayBuffer]':
        return ObjectTypes.ARRAY_BUFFER; // 'ArrayBuffer';
      case '[object Boolean]':
        return ObjectTypes.BOOLEAN; // 'Boolean';
      case '[object Function]':
        return ObjectTypes.FUNCTION; // 'Function';
      case '[object Null]':
        return ObjectTypes.NULL; // 'Null';
      case '[object Number]':
        return ObjectTypes.NUMBER; // 'Number';
      case '[object Object]':
        return ObjectTypes.OBJECT; // 'Object';
      case '[object String]':
        return ObjectTypes.STRING; // 'String';
      case '[object Undefined]':
        return ObjectTypes.UNDEFINED; // 'Undefined';
      default:
        return ObjectTypes.UNKNOWN; // 'Unknown';
    }
  }

}
