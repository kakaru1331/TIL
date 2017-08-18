function count8_v2() {
  var string1to10000 = ''
  var count8 = 0;

  for (var i=1; i <= 10000; i++) {
    string1to10000 += i;
  }
  
  for (var j=0; j < string1to10000.length; j++)
    if (string1to10000[j] === '8') {
      count8++;
    }
  
  return count8
}
console.log(count8_v2());
