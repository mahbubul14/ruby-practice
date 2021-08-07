function getMoneySpent(keyboards, drives, b) {
const sum = [];

keyboards.forEach(k => {
  drives.forEach(d => {
    if(k+d <= b) sum.push(k+d)
})
});
console.log(sum);
return sum.length === 0? -1: Math.max(...sum);
}

getMoneySpent([3,1], [5,2,8], [10,2,3]);