var givenRoast = 0;
while(givenRoast < 100){
    console.log('Roast dao');
    givenRoast++;
    console.log(givenRoast);
    if(givenRoast >= 50){
        break;
    }
}

var items = ['bottle', 'mouse', 'sunglass', 'pen'];
for(var i = 0; i < items.length; i++){
    var item = items[i];
    if(item == 'pen'){
        break;
    }
    console.log(item);
}