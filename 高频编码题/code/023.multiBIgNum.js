function multiplyBigNum(num1, num2) {
  //判断输入是不是数字
  if (isNaN(num1) || isNaN(num2)) return "";
  let len1 = num1.length,
    len2 = num2.length;
  let pos = [];
  
  //j放外面，先固定被乘数的一位，分别去乘乘数的每一位，更符合竖式演算法
  for (let j = len2 - 1; j >= 0; j--) {
    for (let i = len1 - 1; i >= 0; i--) {
      //两个个位数相乘，最多产生两位数，index1代表十位，index2代表个位
      let index1 = i + j,
        index2 = i + j + 1;
      //两个个位数乘积加上当前位置个位已累积的数字，会产生进位，比如08 + 7 = 15，产生了进位1
      let mul = num1[i] * num2[j] + (pos[index2] || 0);
      //mul包含新计算的十位，加上原有的十位就是最新的十位
      pos[index1] = Math.floor(mul / 10) + (pos[index1] || 0);
      //mul的个位就是最新的个位
      pos[index2] = mul % 10;
    }
  }
  
  //去掉前置0
  let result = pos.join("").replace(/^0+/, "");
  
  return result || '0';
}


const result = multiplyBigNum('12', '12')
console.log({result})
