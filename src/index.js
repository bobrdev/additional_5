module.exports = function check(str, bracketsConfig) {
  arr = str.split('');

  function isCloseBreaketExist(left, right){
    let isSlotClose = false;
    for (let index = 0; index < arr.length; index++) {
      if( left == arr[index]){
        isSlotClose = false;
        for (let k = index; k < arr.length; k++) {
          if( right == arr[k] ){
            isSlotClose = true;
            break;
          }
        }
      
      }
    }
    return isSlotClose;
  }

  function isExist(left, right){
    let countLeft = 0;
    let countRight = 0;
    for (let index = 0; index < arr.length; index++) {
      if(left == arr[index]) countLeft++;
      if(right == arr[index]) countRight++;
    }

    if (countLeft - countRight == 0)  
      return true;
    else 
      return false;

  }



  for (let index = 0; index < bracketsConfig.length; index++) {
    let subArr = bracketsConfig[index];
    //console.log(subArr[0] + " - " + subArr[1])
    if( !isCloseBreaketExist(subArr[0], subArr[1]) ) return false;
    else {
      if (!isExist(subArr[0], subArr[1]) ) return false;
    }   
  }
  return true;
  
}
