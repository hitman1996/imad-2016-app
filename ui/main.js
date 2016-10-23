var buttton=document.getElementById('counter');
button.onClick=function(){
    //create request object
    var request=new XMLHttpRequest();
    //capture response and store
    request.onreadystatechange= function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if (request.status === 200){
               var counter= request.responseText;
                  var span=document.getElementById('count');
                  span.innerHTML=counter.toString();
            }
        }
    
    //render the var in correct span
    };
    //make request
    request.open('GET','http://hitman1996.imad.hasura-app.io/counter',true);
    request.send(null);
};