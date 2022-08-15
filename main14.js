let num =Number(prompt('the number = '))
function fac(n){
    let fa=1
    for(let i=1;i<=n;i++){
        fa=fa*i
    }
    return fa
}
console.log(fac(num))