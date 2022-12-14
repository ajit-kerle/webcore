function isValid(obj) {
  let key = Object.keys(obj);
  for (let k of key) {
    if (typeof obj[k] === "undefined" || obj[k] === null || obj[k].trim().length === 0) return false;
  }
  return true
}

export default isValid;
