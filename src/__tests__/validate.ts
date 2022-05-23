import tool from '../index';

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
