var numbers = [43, 56, 44, 55, 80, 134, 78, 89];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}