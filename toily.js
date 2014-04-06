//Variable types
var myString = "Toily!";
console.log(myString);

var myNum = 20;
console.log(myNum+10);

var myArray = ["joaquin", "benitez", '3', 23, [1,2,3]];
console.log(myArray[4][2]);

var myObj = {
    nombre : 'toily',
    edad   : 29,
    awesomeness : [87]
};
console.log(myObj['awesomeness'][0]);

var myBool = true;
console.log(myBool);

if(myBool){
    console.log('This is true');
}else{
    console.log('This is false');
}

//ternary operator (another form of if)
var myNewWeirdDeclaredVar = myBool ? 5 : 3;
console.log(myNewWeirdDeclaredVar);

//increment how-to
var token = 0;
console.log('Mi token vale: ', token);
token = token+1;
console.log('Mi token vale: ', token);
token+=1;
console.log('Mi token vale: ', token);
token++;
console.log('Mi token vale: ', token);
token--;
console.log('Mi token vale: ', token);
token-=1;
console.log('Mi token vale: ', token);
token = token-1;
console.log('Mi token vale: ', token);

var myBuffer = 'uno';
console.log(myBuffer);
myBuffer = myBuffer+' dos';
console.log(myBuffer);
myBuffer +=' tres';
console.log(myBuffer);

var myNewArray = ['uno','dos','tres','cuatro','cinco'];

// for(estado inicial; condicion de salida; incremento){}
for(var i=0; i<4; i = i+1){
    console.log('i:', i);
    console.log('array in the index:'+i+': ',myNewArray[i]);
}

//While cycle
var myWhileCondition = true;
var myIterator = 0;

while(myWhileCondition){
    myIterator+=5;
    if(myIterator === 100){
        myWhileCondition = false;
    }
    console.log('iterator: ', myIterator, 'condition', myWhileCondition);
}


//Comparation operands
//Double vs triple
var myString = '10';
var myNumber = 10;

if(myString == myNumber){
    console.log('You can see this');
}

if(myString === myNumber){
    console.log("You won't see this");
}

var myLittleNumber = 2;
var myGreaterNumber = 50;

if(myLittleNumber < myGreaterNumber){
    console.log('in fact is smaller');
}

if(myGreaterNumber > myLittleNumber){
    console.log('in fact is greater');
}

var myFirstLetter = 'a';
var mySecondLetter = 'b';

if(myFirstLetter < mySecondLetter){
    console.log('b in fact is greater than an a');
}

for(var i=0; i<=10; i++){
    console.log('i: ', i);
}

for(var i=10; i>=3; i--){
    console.log('i: ', i);
}

var myFirstValue = 5;
var mySecondValue = '5';

//!== evaluates type the != don't evaluate type
if(myFirstValue !== mySecondValue){
    console.log('in fact they are distinct');
}

var myFunction = function myFunctionName(){
    console.log('This function was called!!!!!');
    return 6;
};

var myNumberSix = myFunction();
myNumberSix = myNumberSix+8;
console.log(myNumberSix);
//now myNumberSix is actually the number 6+8 value that the function returned;

var functionArray = [
    function(){console.log('spy la 1')},
    function(){console.log('spy la 2')},
    function(){return 8+3;}
];

var myArguments = function(a, b){
    return a+b;
};

var myChanger = function(node){
    node.html('this is your new html content');
};

//Jquery trickery
$(document).ready(function(){

    $('h1').click(function(){
        $('p').css('background-color', 'yellow');
    });

    var myInputA = $('input.my-input-a'),
        myInputB = $('input.my-input-b'),
        myResult = $('p.result'),
        myButton = $('button.go');

    myButton.click(function(){
        var firstArg = parseInt(myInputA.val()),
            secondArg = parseInt(myInputB.val());

        myResult.html(firstArg + secondArg);
    });


});
