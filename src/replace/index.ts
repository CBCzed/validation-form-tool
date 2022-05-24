export default {
  // 只能输入数字
  onlyNumeric: (value: string): string => {
    if (!value) return '';
    return value.replace(/[^\d]+/g, '');
  },
  // 只能输入中文
  onlyCn: (value: string): string => {
    if (!value) return '';
    return value.replace(/[^\u4E00-\u9FA5]/g, '');
  },
  // 只能输入字母
  onlyLetters: (value: string): string => {
    if (!value) return '';
    return value.replace(/[^a-zA-Z]/g, '');
  },
  // 只能输入中文和字母
  onlyCnAndLetters: (value: string): string => {
    if (!value) return '';
    return value.replace(/[^a-zA-Z\u4E00-\u9FA5]/g, '');
  },
  // 只能输入数字和字母
  onlyNumericAndLetters: (value: string): string => {
    if (!value) return '';
    return value.replace(/[\W]/g, '');
  },
  // 只能输入浮点数
  onlyFloatingPoint: (value: string): string => {
    if (!value) return '';
    return value.replace(/[^0-9.]/g, '');
  },
	// 只能输入中文、数字和字母
  onlyCnAndNumericAndLetters: (value: string): string => {
    if (!value) return '';
    return value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g, '');
  },
};
