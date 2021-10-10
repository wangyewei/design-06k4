### Yewei工具库用法

### 上手

`import { Yewei } from 06k4-design`

### sdk列表

#### 基本信息
- 获取所有开发信息

|  name   | parama  |  return |
|  ----  | ----  | ---- |
| Yewei.showAllInfo()  | null | object |

```javascript

Yewei.showAllInfo()

/**
 *    {
 *    name: '06k4-desgin',
      version: '0.1.1',
      description: 'React components library With Typescript & React',
      author: 'Wang Yewei',
      repository: 'https://github.com/wangyewei',
      license: 'Anti 996',
      motto: '求知若渴 虚心若愚'
      }
 * /

```

- 获取当前版本号

|  name   | parama  |  return |
|  ----  | ----  | ---- |
| Yewei.showVersion()  | null | string |

```javascript
Yewei.showVersion()
// 0.1.1
```

#### cookie方法
- 获取浏览器cookie值

|  name   | parama  |  return |
|  ----  | ----  | ---- |
| Yewei.getCookie()  | string | any |

```javascript
Yewei.getCookie('_ga')
// "GA1.2.192736587.1601974046"
```

- 清除全部cookie

|  name   | parama  |  return |
|  ----  | ----  | ---- |
| Yewei.clearCookies()  | null | void |

```javascript
Yewei.clearCookies()

```
#### 颜色方法
- rgb颜色转16进制

|  name   | parama  |  return |
|  ----  | ----  | ---- |
| Yewei.rgbaToHex()  | (number, number, numebr) | string |

```javascript
Yewei.rgbaToHex(0, 51, 255)

// "#0033ff"
```

- 随机生成16进制颜色

|  name   | parama  |  return |
|  ----  | ----  | ---- |
| Yewei.randomHex()  | null | string |

```javascript
Yewei.randomHex()

// "#0033ff"
```

#### 剪贴板方法
- 复制到剪贴板

|  name   | parama  |  return |
|  ----  | ----  | ---- |
| Yewei.copyToClipboard()  | string | void |

```javascript
Yewei.copyToClipboard('hello 06k4-design') 
```

- 获取用户选择的文本
|  name   | parama  |  return |
|  ----  | ----  | ---- |
| Yewei.getSelectedText()  | null | any |

```javascript
Yewei.getSelectedText()
```

#### 日期方法
- 检查日期是否合法

|  name   | parama  |  return |
|  ----  | ----  | ---- |
| Yewei.isDateValid()  | string | boolean |

```javascript
Yewei.isDateValid("December 17, 1995 03:24:00")
// true 
```

- 检查日期位于一年中的第几天

|  name   | parama  |  return |
|  ----  | ----  | ---- |
| Yewei.dayOfYear()  | any | number |

```javascript
Yewei.dayOfYear(new Date())
// 245
```


- 计算两个日期相差多少天

|  name   | parama  |  return |
|  ----  | ----  | ---- |
| Yewei.dayDif()  | (Date, Date) | number |

```javascript
Yewei.dayDif(new Date("2020-10-21"), new Date("2021-10-22"))
// 366
```


- 以 hour::minutes::seconds 格式记录时间

|  name   | parama  |  return |
|  ----  | ----  | ---- |
| Yewei.timeFromDate()  | Date | string |

```javascript
Yewei.timeFromDate(new Date(2021, 10, 17, 15, 17, 0))
// "15: 17: 0"
```

#### 字符串方法

- 英文字符串首字母大写

|  name   | parama  |  return |
|  ----  | ----  | ---- |
| Yewei.capitalize()  | sting | string |

```javascript
Yewei.capitalize('studio 06k4')
// "Studio 06k4"
```

- 翻转字符串

|  name   | parama  |  return |
|  ----  | ----  | ---- |
| Yewei.reverse()  | sting | string |

```javascript
Yewei.reverse('studio 06k4')
// "4k60 oiduts"
```

#### 数字方法
- 校验数字是不是偶数

|  name   | parama  |  return |
|  ----  | ----  | ---- |
| Yewei.isEven()  | number | boolean |

```javascript
Yewei.isEven(4)
// true
```

- 求多个数字的平均值

|  name   | parama  |  return |
|  ----  | ----  | ---- |
| Yewei.average()  | ...number: number[] | number |

```javascript
Yewei.average(1, 2, 3, 4)
// 2.5
```


#### 数组方法
- 数组去重

|  name   | parama  |  return |
|  ----  | ----  | ---- |
| Yewei.removeDuplicates()  | any[] | any[] |

```javascript
Yewei.removeDuplicates([1, 2, 2, 2, 3])
// [1, 2, 3]
```

- 校验数组是否为空
检查数组是否为空，是的话返回false，非空返回true

|  name   | parama  |  return |
|  ----  | ----  | ---- |
| Yewei.isNotEmpty()  | any[] | boolean |

```javascript
Yewei.isNotEmpty([1, 2, 2, 2, 3])
// true
```

- 打乱数组

|  name   | parama  |  return |
|  ----  | ----  | ---- |
| Yewei.shuffleArray()  | any[] | any[] |

```javascript
Yewei.shuffleArray([1, 2, 2, 2, 3])
// [2, 3, 1, 2, 2]
```

#### URL方法
- 从URL获取查询参数

|  name   | parama  |  return |
|  ----  | ----  | ---- |
| Yewei.getParameters()  | string | string |

```javascript
Yewei.getParameters(window.location)
/**
 * {
 *   member: 'wangyewei'
 *   id: '0001'
 * }
 * /
```

#### 页面交互
- 回到顶部

|  name   | parama  |  return |
|  ----  | ----  | ---- |
| Yewei.gotoTop()  | null | void |

```javascript
Yewei.gotoTop()
```

- 检查用户的设备是否处于暗模式
是的话返回true

|  name   | parama  |  return |
|  ----  | ----  | ---- |
| Yewei.isDarkMode()  | null | boolean |

```javascript
Yewei.isDarkMode()

// true or false
```


