function solution(a, b){
  //find out which string is longer
  if (a.length > b.length) {
    return b + a + b;
  } else {
    return a + b + a;
  }
}