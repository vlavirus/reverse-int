module.exports = function reverse (n) {
    let math_n = Math.abs(n);
    let str_n = String( math_n );
    let reverse_n = "";

    for ( let i = str_n.length - 1; i >= 0; i-- ) {
        reverse_n += str_n[i];
    }
    
  return reverse_n;
}
