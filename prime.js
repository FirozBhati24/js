let a = [4, 3, 2, 22, 31, 4, 52, 21];
let b = a.map((val) => (val%2==1) ? val + 5 : val);
console.log(b);