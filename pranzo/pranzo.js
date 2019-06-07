function myFunction() {
    var str =$("#meal").val();
    var res = str.split("+");
    var c=0;
    for(i=0;i<res.length;i++){
        res[i] = parseInt(res[i], 10);
        c=c+res[i];
    }
    document.getElementById("demo").innerHTML = c;
    if(str==""){
      document.getElementById("demo").innerHTML = 0;
    }
  }

  function myFunction1() {
    var str =$("#stu").val();
    var res = str.split("+");
    var c=0;
    for(i=0;i<res.length;i++){
        res[i] = parseInt(res[i], 10);
        c=c+res[i];
    }
    document.getElementById("stui").innerHTML = c;
    if(str==""){
      document.getElementById("stui").innerHTML = 0;
    }
  }

  function myFunction2() {
    var str =$("#lei").val();
    var res = str.split("+");
    var c=0;
    for(i=0;i<res.length;i++){
        res[i] = parseInt(res[i], 10);
        c=c+res[i];
    }
    document.getElementById("leii").innerHTML = c;
    if(str==""){
      document.getElementById("leii").innerHTML = 0;
    }
  }

  function myFunction3() {
    var str =$("#boy").val();
    var res = str.split("+");
    var c=0;
    for(i=0;i<res.length;i++){
        res[i] = parseInt(res[i], 10);
        c=c+res[i];
    }
    document.getElementById("boyi").innerHTML = c;
    if(str==""){
      document.getElementById("boyi").innerHTML = 0;
    }
  }

  function myFunction4() {
    var str =$("#tra").val();
    var res = str.split("+");
    var c=0;
    for(i=0;i<res.length;i++){
        res[i] = parseInt(res[i], 10);
        c=c+res[i];
    }
    document.getElementById("trai").innerHTML = c;
    if(str==""){
      document.getElementById("trai").innerHTML = 0;
    }
  }

  function myFunction5() {
    var str =$("#oth").val();
    var res = str.split("+");
    var c=0;
    for(i=0;i<res.length;i++){
        res[i] = parseInt(res[i], 10);
        c=c+res[i];
    }
    document.getElementById("othi").innerHTML = c;
    if(str==""){
      document.getElementById("othi").innerHTML = 0;
    }
  }

  function canpay() {
    myFunction();myFunction1();myFunction2();myFunction3();myFunction4();myFunction5();
    var b=parseInt(document.querySelector("#othi").textContent,10)+parseInt(document.querySelector("#trai").textContent,10)
    +parseInt(document.querySelector("#boyi").textContent,10)+parseInt(document.querySelector("#stui").textContent,10)+
    parseInt(document.querySelector("#leii").textContent,10)+parseInt(document.querySelector("#demo").textContent,10);
    var c=parseInt(b,10);
    var can=$("#can").val();
    if(can!=""){
      var d=parseInt(can,10);
    }else{
      var d=0;
      alert("you did not type in the cost,so what are you check for?");
    }
    
    var k=Math.max(parseInt(document.querySelector("#othi").textContent,10),parseInt(document.querySelector("#trai").textContent,10)
    ,parseInt(document.querySelector("#boyi").textContent,10),parseInt(document.querySelector("#stui").textContent,10),
    parseInt(document.querySelector("#leii").textContent,10),parseInt(document.querySelector("#demo").textContent,10))
    var g=c-d;
    document.getElementById("summary").innerHTML = g;
    var f="";
    if(k==parseInt(document.querySelector("#othi").textContent,10)){
      f=f+"other ";
    }
    if(k==parseInt(document.querySelector("#trai").textContent,10)){
      f=f+"traffic ";
    }
    if(k==parseInt(document.querySelector("#boyi").textContent,10)){
      f+="your lover(so sweet) ";
    }
    if(k==parseInt(document.querySelector("#stui").textContent,10)){
      f+="study(cool) ";
    }
    if(k==parseInt(document.querySelector("#leii").textContent,10)){
      f+="leisure ";
    }
    if(k==parseInt(document.querySelector("#demo").textContent,10)){
      f+="eat ";
    }
    document.getElementById("most").innerHTML = f;
    return g;
  }


  function div(){
    var ff=canpay();
    var t=$("#thing").val();
    if(t==""){
      alert("do you remember to type in the price?");
    }
    else{
      var hh=parseInt($("#thing").val(),10);
          var gg=-hh/ff;
          document.getElementById("long").innerHTML=gg;
        }


  }

  function hi(){
        $("#in").show();
  }

  function hide(){
    $("#in").hide();
  }

  function ne(){
    var e=$("#memo").val();
      $("#me").append(e+' ');
    }

    function cl(){
      $("#mo").remove();

    }