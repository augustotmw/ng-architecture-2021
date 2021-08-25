import {Global} from './global';
import {ObjectTypes} from '../const/object.const';
import {inject, TestBed} from '@angular/core/testing';

describe('Global', () => {
  let global: Global;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ Global ]
    });

    global = new Global();
  });

  it('should be able to create a service', inject([Global], (global: Global) => {
    expect(global).toBeDefined();
  }));

  describe('getTypeOfObject', () => {
    it('should return the type of given Array object', () => {
      expect(global.getTypeOfObject([])).toBe(ObjectTypes.ARRAY);
    });

    it('should return the type of given Blob object', () => {
      expect(global.getTypeOfObject(new Blob())).toBe(ObjectTypes.BLOB);
    });

    it('should return the type of given Uint8Array object', () => {
      expect(global.getTypeOfObject(new Uint8Array())).toBe(ObjectTypes.UINT8_ARRAY);
    });

    it('should return the type of given Uint16Array object', () => {
      expect(global.getTypeOfObject(new Uint16Array())).toBe(ObjectTypes.UINT16_ARRAY);
    });

    it('should return the type of given Uint32Array object', () => {
      expect(global.getTypeOfObject(new Uint32Array())).toBe(ObjectTypes.UINT32_ARRAY);
    });

    it('should return the type of given ArrayBuffer object', () => {
      expect(global.getTypeOfObject(new ArrayBuffer(0))).toBe(ObjectTypes.ARRAY_BUFFER);
    });

    it('should return the type of given Boolean object', () => {
      expect(global.getTypeOfObject(true)).toBe(ObjectTypes.BOOLEAN);
    });

    it('should return the type of given Function object', () => {
      expect(global.getTypeOfObject(() => {})).toBe(ObjectTypes.FUNCTION);
    });

    it('should return the type of given Null object', () => {
      expect(global.getTypeOfObject(null)).toBe(ObjectTypes.NULL);
    });

    it('should return the type of given Number object', () => {
      expect(global.getTypeOfObject(0)).toBe(ObjectTypes.NUMBER);
    });

    it('should return the type of given Object object', () => {
      expect(global.getTypeOfObject({})).toBe(ObjectTypes.OBJECT);
    });

    it('should return the type of given String object', () => {
      expect(global.getTypeOfObject('')).toBe(ObjectTypes.STRING);
    });

    it('should return the type of given Undefined object', () => {
      expect(global.getTypeOfObject(undefined)).toBe(ObjectTypes.UNDEFINED);
    });

    it('should return the type of given a not mapped object', () => {
      expect(global.getTypeOfObject(new URLSearchParams())).toBe(ObjectTypes.UNKNOWN);
    });

  });


});
