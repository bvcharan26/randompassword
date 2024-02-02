function hi(){
    var password1="";
    var uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercase="abcdefghijklmnopqrstuvwxyz";
    var num="1234567890";
    var symbol="!@#$%^&*()";
    for(var i=0;i<4;i++){
        password1+=uppercase[Math.floor(Math.random()*10)];
    }
    for(var i=0;i<4;i++){
        password1+=lowercase[Math.floor(Math.random()*10)];
    }
    for(var i=0;i<4;i++){
        password1+=symbol[Math.floor(Math.random()*10)];
    }
    for(var i=0;i<4;i++){
        password1+=num[Math.floor(Math.random()*10)];
    }
    document.getElementById('password').value=password1;
}
function copy(){
    var input=document.getElementById('password');
    input.select();
    document.execCommand("copy");
}