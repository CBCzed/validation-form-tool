export default {
  // 验证是否是手机号
  isMobile: (phoneNumber: string): boolean => {
    return /^1[3-9]\d{9}$/.test(phoneNumber);
  },
  // 验证固定电话格式
  isTel: (tel: string): boolean => {
    return /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(tel);
  },
  // 验证邮箱格式
  isEmail: (email: string): boolean => {
    return /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/.test(email);
  },
  // 验证身份证
  isIdCard: (id: string): boolean => {
    const id_card_15 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
    const id_card_18 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/;
    return id_card_15.test(id) || id_card_18.test(id);
  },
  // 银行卡号
  isBankCardNo: (id: string): boolean => {
    return /^([1-9]{1})(\d{15}|\d{18})$/.test(id);
  },
  // 护照（包含港澳）
  isPassport: (id: string): boolean => {
    return /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/.test(id);
  },
  // 网址
  isWebsite: (link: string): boolean => {
    return /^((https?|ftp):\/\/)?([\da-z.-]+)\.([a-z.]{2,6})(\/\w\.-]*)*\/?/.test(link);
  },
  // 是否包含 html 标签
  isIncludeHTMLTags: (str: string) => {
    return /<(.*)>.*<\/\1>|<(.*) \/>/.test(str);
  },
  // 中国邮政编码
  isPostalCode: (code: string): boolean => {
    return /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/.test(code);
  },
  // 中国车牌号
  isLicensePlateNo: (str: string): boolean => {
    const reg =
      /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
    return reg.test(str);
  },
  // 是否包含中文
  isIncludeChinese: (str: string): boolean => {
    return /[u4E00-u9FA5]/.test(str);
  },
};
