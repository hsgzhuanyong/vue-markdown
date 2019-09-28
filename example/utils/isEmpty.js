/**
 * 判断对象的所有值是否有空的
 * @param {Object} object //需要验证的字段
 * @param {Array} ignore  //忽略的字段
 * @return { Object || Boolean } 返回false  或  为空的key跟value
 */
function isObjEmpty(args, ignore = []) {
  let result = false;
  if (typeof args !== 'object' || typeof ignore !== 'object') {
    return result;
  }

  for (let key in args) {
    if (isIgnore(key, ignore)) {
      continue;
    } else {
      if(isEmpty(args[key])) {
        result = {
          key: key,
          value: args[key]
        };
        break;
      }
    }
  }
  return result;
}

/**
 * 判断数组是否存在某个值
 * @param {Object} str
 * @param {Object} array
 * @return {Boolean} 存在返回true 否则返回false
 */
function isIgnore(str, array) {
  let arr = JSON.stringify(array);
  return arr.search(str) == -1 ? false : true;
}

/**
 * 判断是否为空
 * @param {Object} args
 * @return {Boolean} 空返回true 否则返回false
 */
function isEmpty(args) {
  switch (typeof args) {
    case 'undefined':
      return true;
    case 'string':
      if (args.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
      break;
    case 'boolean':
      if (!args) return true;
      break;
    case 'number':
      // if (0 === args || isNaN(args)) return true;
      if (isNaN(args)) return true;
      break;
    case 'object':
      if (null === args || args.length === 0) return true;
      for (var i in args) {
        return false;
      }
      return true;
  }
  return false;
}


export {
  isEmpty,
  isObjEmpty,
  isIgnore,
}
