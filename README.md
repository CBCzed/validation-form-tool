# validation-form-tool
该工具包，主要包含对常见表单输入框的格式验证以及文本替换


## Getting started
<hr>

**Installation**
```javascript
// npm
npm install validation-form-tool

// or yarn

yarn add validation-form-tool
```

**Usage**
```javascript
import validator from 'validation-form-tool'
// 格式验证
validator.isMobile('18118761259') // true
validator.isMobile('1811876125') // false

// 文本替换
validator.onlyNumeric('123abc') // return 123
```

## API
<hr>

### 格式验证函数

* isMobile
验证手机号格式(中国)
```javascript
validator.isMobile('18118761259') // true
validator.isMobile('1811876125') // false
```

* isTel
验证固定电话格式(中国)
```javascript
validator.isTel('0755-88868187') // true
```

* isEmail
验证邮箱格式，大部分常见邮箱都支持
```javascript
validator.isEmail('cbczed@gmail.com') // true
validator.isEmail('123456@qq.com') // true
```

* isIdCard
验证身份证格式(中国)，支持一代(15位)和二代(18位)
```javascript
validator.isIdCard('xxxxxxxxxxxxxxx')
validator.isIdCard('xxxxxxxxxxxxxxxxxx')
```

* isPassport
验证护照格式(中国)，包含港澳
```javascript
validator.isPassport('xxx')
validator.isPassport('xxx')
```

* isWebsite
验证网址格式
```javascript
validator.isWebsite('https://www.baidu.com') // true
validator.isWebsite('www.baidu.com') // true
```

* isIncludeHTMLTags
验证是否包含html标签
```javascript
validator.isIncludeHTMLTags('<a>include tag</a>') // true
validator.isIncludeHTMLTags('<>include tag<>') // false
```

* isPostalCode
验证邮政编号(中国)
```javascript
validator.isPostalCode('065001') // true
```

* isLicensePlateNo
验证车牌号(中国)
```javascript
validator.isLicensePlateNo('京A00001') // true
```

* isIncludeChinese
验证是否包含中文字符
```javascript
validator.isIncludeChinese('hello中国') // false
validator.isIncludeChinese('中国') // true
```

### 文本替换函数

* onlyNumeric
只能输入数字
```javascript
validator.onlyNumeric('123abc') // return 123
```

* onlyCn
只能输入中文字符
```javascript
validator.onlyCn('123abc你好') // return 你好
```

* onlyLetters
只能输入字母
```javascript
validator.onlyLetters('123abcABC') // return abcABC
```

* onlyNumericAndLetters
只能输入数字和字母
```javascript
validator.onlyNumericAndLetters('123abc你好') // return 123abc
```

* onlyFloatingPoint
只能输入浮点数
```javascript
validator.onlyFloatingPoint('123.34abc') // return 123.34
```

* onlyCnAndNumericAndLetters
只能输入中文、数字、字母
```javascript
validator.onlyCnAndNumericAndLetters('*&^123你好abc') // return 123你好abc
```
