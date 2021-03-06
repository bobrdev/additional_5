module.exports = function check(str, bracketsConfig) {
  
  if(str.length % 2 != 0) return false;

  let strLen = Math.floor(str.length / 2);
  let bracketsLen = bracketsConfig.length;

  for (let pos = 0; pos < strLen; pos++) {
    for (let config = 0; config < bracketsLen; config++) {
      let strConfig = bracketsConfig[config].join('');
      str = str.replace(strConfig, '');   
    }
  }

  return (str.length > 0) ? false : true;
}
