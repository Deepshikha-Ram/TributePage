//Function called whenever user tab on any box
function myFunc(){
    //Setting DOM to all boxes or input field
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1=document.getElementById("b1").value;
    b2=document.getElementById("b2").value;
    b3=document.getElementById("b3").value;
    b4=document.getElementById("b4").value;
    b5=document.getElementById("b5").value;
    b6=document.getElementById("b6").value;
    b7=document.getElementById("b7").value;
    b8=document.getElementById("b8").value;
    b9=document.getElementById("b9").value;

    //Checking if player X has won or not after that
    //diable all other fields.
    
    if((b1=='x' || b1=='X')&&(b2=='x' || b2=='X') && (b3=='x'||b3=='X')){
        document.getElementById(print).innerHTML="Player X won";
        document.getElementById("b4").disabled=true;
        document.getElementById("b5").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b9").disabled=true;
        window.alert("player X won");
    }

    else if((b1=='x' || b1=='X')&&(b4=='x' || b4=='X') &&(b7=='x'||b7=='X')){
        document.getElementById("print").innerHTML="Player X won";
        document.getElementById("b2").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b5").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b9").disabled=true;
        window.alert("Player X has won");
    }

    else if((b7=='x' || b7=='X')&&(b8=='x' || b8=='X') &&(b9=='x'||b9=='X')){
        document.getElementById("print").innerHTML="Player X won";
        document.getElementById("b1").disabled=true;
        document.getElementById("b2").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b5").disabled=true;
        document.getElementById("b6").disabled=true;
        window.alert("Player X has won");
    }

    else if((b3=='x' || b3=='X')&&(b6=='x' || b6=='X') &&(b9=='x'||b9=='X')){
        document.getElementById("print").innerHTML="Player X won";
        document.getElementById("b1").disabled=true;
        document.getElementById("b2").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b5").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;
        window.alert("Player X has won");
    }

    else if((b1=='x' || b1=='X')&&(b5=='x' || b5=='X') &&(b9=='x'||b9=='X')){
        document.getElementById("print").innerHTML="Player X won";
        document.getElementById("b2").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;
        window.alert("Player X has won");
    }

    else if((b3=='x' || b3=='X')&&(b5=='x' || b5=='X') &&(b7=='x'||b7=='X')){
        document.getElementById("print").innerHTML="Player X won";
        document.getElementById("b1").disabled=true;
        document.getElementById("b2").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b9").disabled=true;
        window.alert("Player X has won");
    }

    else if((b2=='x' || b2=='X')&&(b5=='x' || b5=='X') &&(b8=='x'||b8=='X')){
        document.getElementById("print").innerHTML="Player X won";
        document.getElementById("b1").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b9").disabled=true;
        window.alert("Player X has won");
    }

    else if((b4=='x' || b4=='X')&&(b5=='x' || b5=='X') &&(b6=='x'||b6=='X')){
        document.getElementById("print").innerHTML="Player X won";
        document.getElementById("b1").disabled=true;
        document.getElementById("b2").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b9").disabled=true;
        window.alert("Player X has won");
    }

    //Checking of player x finish
    //Checking for player zero starts, player 0 has won or not 
    //and after that disable all the other fields
    else if((b1=='o' || b1=='O')&&(b2=='0' || b2=='O') &&(b3=='o'||b3=='O')){
        document.getElementById("print").innerHTML="Player O won";
        document.getElementById("b4").disabled=true;
        document.getElementById("b5").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b9").disabled=true;
        window.alert("Player O has won");
    }

    else if((b1=='o' || b1=='O')&&(b4=='0' || b4=='O') &&(b7=='o'||b7=='O')){
        document.getElementById("print").innerHTML="Player O won";
        document.getElementById("b2").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b5").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b9").disabled=true;
        window.alert("Player O has won");
    }

    else if((b7=='o' || b7=='O')&&(b8=='0' || b8=='O') &&(b9=='o'||b9=='O')){
        document.getElementById("print").innerHTML="Player O won";
        document.getElementById("b1").disabled=true;
        document.getElementById("b2").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b5").disabled=true;
        document.getElementById("b6").disabled=true;
        window.alert("Player O has won");
    }

    else if((b3=='o' || b3=='O')&&(b6=='0' || b6=='O') &&(b9=='o'||b9=='O')){
        document.getElementById("print").innerHTML="Player O won";
        document.getElementById("b1").disabled=true;
        document.getElementById("b2").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b5").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;
        window.alert("Player O has won");
    }

    else if((b1=='o' || b1=='O')&&(b5=='0' || b5=='O') &&(b9=='o'||b9=='O')){
        document.getElementById("print").innerHTML="Player O won";
        document.getElementById("b2").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;
        window.alert("Player O has won");
    }

    else if((b3=='o' || b3=='O')&&(b5=='0' || b5=='O') &&(b7=='o'||b7=='O')){
        document.getElementById("print").innerHTML="Player O won";
        document.getElementById("b1").disabled=true;
        document.getElementById("b2").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b9").disabled=true;
        window.alert("Player O has won");
    }

    else if((b2=='o' || b2=='O')&&(b5=='0' || b5=='O') &&(b8=='o'||b8=='O')){
        document.getElementById("print").innerHTML="Player O won";
        document.getElementById("b1").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b9").disabled=true;
        window.alert("Player O has won");
    }

    else if((b4=='o' || b4=='O')&&(b5=='0' || b5=='O') &&(b6=='o'||b6=='O')){
        document.getElementById("print").innerHTML="Player O won";
        document.getElementById("b1").disabled=true;
        document.getElementById("b2").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b9").disabled=true;
        window.alert("Player O has won");
    }

    //Checking of player 0 finish 
    //Here checking about tie
    else if ((b1=='X' || b1=='x')&&(b2=='X' || b2=='x')&&(b3=='X'||b3=='x')
    &&(b4=='X' || b4=='x')&&((b5=='X' || b5=='x')&&(b6=='X' || b6=='x')
    &&(b7=='X' || b7=='x')&&(b8=='X' || b8=='x')&&(b9=='X' || b9=='x')){
        document.getElementById("print").innerHTML="Match Tie";
        window.alert ("Match Tie");
    }
    else{
        //Here, Printing result
        if(flag==1){
            document.getElementById("print").innerHTML="Player X Turn";
        }
        else{
            document.getElementById("print").innerHTML="Player O Turn";
        }
    }
}
function myfunc_2(){
    location.reload();
    document.getElementById("b1").value='';
    document.getElementById("b2").value='';
    document.getElementById("b3").value='';
    document.getElementById("b4").value='';
    document.getElementById("b5").value='';
    document.getElementById("b6").value='';
    document.getElementById("b7").value='';
    document.getElementById("b8").value='';
    document.getElementById("b9").value='';
}

    //Here onwards, function checks turn of the player
    //and put accordingly value X or O
flag =1;
function myfunc_3(){
    if(flag==1){
        document.getElementById("b1").value='X';
        document.getElementById("b1").diabled='true';
        flag=0;
    }
    else{
        document.getElementById("b1").value='0';
        document.getElementById("b1").disabled='true';
        flag=1;
    }
}

function myfunc_4(){
    if(flag==1){
        document.getElementById("b2").value='X';
        document.getElementById("b2").disabled='true';
        flag=0;
    }
    else{
        document.getElementById("b2").value='O';
        document.getElementById("b2").disabled='true';
        flag = 1;
    }
}

function myfunc_5(){
    if(flag==1){
        document.getElementById("b3").value='X';
        document.getElementById("b3").disabled='true';
        flag=0;
    }
    else{
        document.getElementById("b3").value='O';
        document.getElementById("b3").disabled='true';
        flag = 1;
    }
}

function myfunc_6(){
    if(flag==1){
        document.getElementById("b4").value='X';
        document.getElementById("b4").disabled='true';
        flag=0;
    }
    else{
        document.getElementById("b4").value='O';
        document.getElementById("b4").disabled='true';
        flag = 1;
    }
}

function myfunc_7(){
    if(flag==1){
        document.getElementById("b5").value='X';
        document.getElementById("b5").disabled='true';
        flag=0;
    }
    else{
        document.getElementById("b5").value='O';
        document.getElementById("b5").disabled='true';
        flag = 1;
    }
}

function myfunc_8(){
    if(flag==1){
        document.getElementById("b62").value='X';
        document.getElementById("b6").disabled='true';
        flag=0;
    }
    else{
        document.getElementById("b6").value='O';
        document.getElementById("b6").disabled='true';
        flag = 1;
    }
}

function myfunc_9(){
    if(flag==1){
        document.getElementById("b7").value='X';
        document.getElementById("b7").disabled='true';
        flag=0;
    }
    else{
        document.getElementById("b7").value='O';
        document.getElementById("b7").disabled='true';
        flag = 1;
    }
}

function myfunc_10(){
    if(flag==1){
        document.getElementById("b8").value='X';
        document.getElementById("b8").disabled='true';
        flag=0;
    }
    else{
        document.getElementById("b8").value='O';
        document.getElementById("b8").disabled='true';
        flag = 1;
    }
}

function myfunc_11(){
    if(flag==1){
        document.getElementById("b9").value='X';
        document.getElementById("b9").disabled='true';
        flag=0;
    }
    else{
        document.getElementById("b9").value='O';
        document.getElementById("b9").disabled='true';
        flag = 1;
    }
}