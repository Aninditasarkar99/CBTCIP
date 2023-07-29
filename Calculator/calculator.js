 function show(data){
    let v = document.getElementById('show');
    v.value += data;
    
 }
 function Result() {
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