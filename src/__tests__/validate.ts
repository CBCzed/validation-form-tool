import tool from '../index';

describe('validatorTool', () => {
  test('isMobile', () => {
    expect(tool.isMobile('18118761259')).toBe(true);
    expect(tool.isMobile('123456789')).toBe(false);
    expect(tool.isMobile('12345678901')).toBe(false);
  });

  test('isTel', () => {
    expect(tool.isTel('0755-88868187')).toBe(true);
    expect(tool.isTel('010-68880932')).toBe(true);
  });

  test('isEmail', () => {
    expect(tool.isEmail('137678365@qq.com')).toBe(true);
    expect(tool.isEmail('cbczed@gmail.com')).toBe(true);
    expect(tool.isEmail('cbczed@163.com')).toBe(true);
    expect(tool.isEmail('cbczed@126.com')).toBe(true);
    expect(tool.isEmail('cbczed@yahoo.com')).toBe(true);
  });

  test('isWebsite', () => {
    expect(tool.isWebsite('www.baidu.com')).toBe(true);
    expect(tool.isWebsite('https://www.baidu.com')).toBe(true);
  });

  test('isIncludeHTMLTags', () => {
    expect(tool.isIncludeHTMLTags('<a>include tag</a>')).toBe(true);
    expect(tool.isIncludeHTMLTags('<>include tag<>')).toBe(false);
  });

  test('isPostalCode', () => {
    expect(tool.isPostalCode('065001')).toBe(true);
    expect(tool.isPostalCode('06500111')).toBe(false);
  });

  test('isLicensePlateNo', () => {
    expect(tool.isLicensePlateNo('京A00001')).toBe(true);
  });

  test('isIncludeChinese', () => {
    expect(tool.isIncludeChinese('hello')).toBe(false);
    expect(tool.isIncludeChinese('中国')).toBe(true);
  });
});

describe('replaceTool', () => {
  test('onlyNumeric', () => {
    expect(tool.onlyNumeric('123abc')).toEqual('123');
  });

  test('onlyCn', () => {
    expect(tool.onlyCn('123abc中国')).toEqual('中国');
  });

  test('onlyLetters', () => {
    expect(tool.onlyLetters('123abcABC中国')).toEqual('abcABC');
  });

  test('onlyNumericAndLetters', () => {
    expect(tool.onlyNumericAndLetters('123abc中国')).toEqual('123abc');
  });

  test('onlyCnAndLetters', () => {
    expect(tool.onlyCnAndLetters('123abc中国')).toEqual('abc中国');
  });

  test('onlyFloatingPoint', () => {
    expect(tool.onlyFloatingPoint('123.34abc')).toEqual('123.34');
  });

  test('onlyCnAndNumericAndLetters', () => {
    expect(tool.onlyCnAndNumericAndLetters('*&^123你好abc')).toEqual('123你好abc');
  });
});
