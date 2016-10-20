console.log('Loaded!');
alert('im java script');
var imag=document.getElementById('imag');
var marginLeft=0;
 function moveRight(){
     marginLeft=marginLeft +10;
     img.style.marginLeft+'px';
 }
img.onclick=function(){
    var interval=setInterval(moveRight,100);
}