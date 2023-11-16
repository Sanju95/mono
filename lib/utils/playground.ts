export const objDestructure = (obj) => {
  obj = { "key1": "value1", "key2": "value2", "key3": "value3" };

  Object.keys(obj).map((key) => console.log(key))
}