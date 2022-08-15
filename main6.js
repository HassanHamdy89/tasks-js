let num1 =Number(prompt('First Number = '))
let num2 =Number(prompt('Second Number = '))
if(num1>0&&num2>0){
    console.log('Both is posstive')
}else if(num1>0&&num2<0){
    console.log('first posstive,second negative')
}else if(num1<0&&num2>0){
    console.log('first negative ,second postive')
}else if(num1<0&&num2<0){
    console.log('both is negative')
}
