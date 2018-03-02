module.exports = function check(str, bracketsConfig) {

  let strLen = str.length * bracketsConfig.length;
  let bracketsLen = bracketsConfig.length;

  for (let pos = 0; pos < strLen; pos++) {
    for (let config = 0; config < bracketsLen; config++) {
      let strConfig = bracketsConfig[config].join('');
      str = str.replace(strConfig, '');   
    }
  }

  return (str.length > 0) ? false : true;
}