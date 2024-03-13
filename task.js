var display = 0;

while(display < 39){
    //console.log('Ajke Amar mon valo nei');
    display++;
    //console.log(display);
}

var number = 58;
while(number <= 98){
    //console.log(number);
    number++;
}

var numbers = 412;
while(numbers <= 456){
    if(numbers%2 == 0){
        //console.log(numbers);
    }
    numbers++;
}

var oddNum = 581;
while(oddNum <= 623){
    if(oddNum % 2 != 0){
        //console.log(oddNum);
    }
    oddNum++;
}

var coding = ['Html', 'Css', 'Tailwind', 'javascript'];
 
for(var i = 0; i < coding.length; i++){
    var learnCode = coding[i];
    //console.log(learnCode);
}

var mobile = ['Oppo', 'Samsung', 'Vivo', 'Apple'];
var i =0;
while(i < mobile.length){
    var mobileName = mobile[i];
      i++;
      //console.log(mobileName);
}

var num = 30;
while(num <= 86){
    if(num > 44){
        break;
    }
    //console.log(num);
    num++;
}

var booksPrice =[200, 300, 150, 67, 180, 250, 140];

for(var i = 0; i < booksPrice.length; i++){
    var bookPrice = booksPrice[i];
    if(bookPrice > 200){
        continue;
    }
    console.log(bookPrice);
}