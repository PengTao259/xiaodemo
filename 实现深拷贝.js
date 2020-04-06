const isComplexDataType = obj => (typeof obf === 'object' || typeof obj === 'function') && (obj !== null)

const deepClone = function (obj, hash = new WeakMap()) {
  if (hash.has(obj)) return hash.get(obj)
  let type = [Date, RegExp, Set, Map, WeakMap, WeakSet]
  if (type.includes(obj.constructor)) return new obj.constructor(obj)
  let allDesc = Object.getOwnPropertyDescriptors(obj) // 遍历传入参数所有键的特性
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc)  // 继承原型
  hash.set(obj, cloneObj)
  for (let key of Reflect.ownKeys(obj)) {   // Reflect.ownKeys(obj) 可以拷贝不可枚举的属性和类型
    // 如果函数引用类型(非函数)则递归调用deepClone
    cloneObj[key] =
      (isComplexDataType(obj[key]) && typeof obj[key] !== 'function') ? deepClone(obj[key], hash) : obj[key]

  }
  return cloneObj
}