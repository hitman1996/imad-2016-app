var buttton=document.getElementById('counter');
var counter=0;
button.onClick=function(){
    //make request to counter end point
    //capture response and store
    //render the var in correct span
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};