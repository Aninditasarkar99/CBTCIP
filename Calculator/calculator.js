let backData;
let calculate=0;
 
 
 function show(data){
   
   notdoubleSign(backData,data);

   backData=data;
    
 }

function notdoubleSign(backData,data){
   let vari=document.getElementById('show');
   if(data==="+" || data==="/" || data ==='*' ||  data==='-' || data==='.' || data==='%'){
   if( backData==="+" || backData==="/"|| backData ==='*' || backData==='-' || backData==='.'|| backData==='%'){
 
    vari.value= vari.value.slice(0,-1)
     vari.value += data;
   }else{
     vari.value += data;
   }
   }else{
     vari.value += data;
   }
 }

 function output() {
    var number1 = document.getElementById('show').value;
    var number2 = eval(number1);
    document.getElementById('show').value = number2;
 }

 function Clear() {
    var clr = document.getElementById('show');
    clr.value = '';
 }

 function Backspace() {
    var del = document.getElementById('show');
    del.value = del.value.slice(0,-1);
 }