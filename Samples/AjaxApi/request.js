var btn =document.querySelector("button");
const output=document.querySelector("#out");
btn.addEventListener("click",getJoke);

function getJoke(){
    console.log("joke is running");
var xhr = new XMLHttpRequest();
var url="https://api.chucknorris.io/jokes/random";
xhr.onreadystatechange = function(){
  //  console.log(xhr.readyState);

    if(xhr.readyState===4)
    {
       if (xhr.status === 200){
      //  console.log(xhr.responseText)
       
      //var str = xhr.responseText;
      const obj = JSON.parse(xhr.responseText);
    //  var str1 = JSON.stringify(obj);
     // console.log("***STRING***");
     // console.log(str1);
        output.innerHTML += obj.value+'<br><img src="'+obj.icon_url+'">';
       // console.log(obj);
    }else{
      output.innerHTML="ERROR";
    }
  }
}

xhr.open("GET",url);
xhr.send();
//console.log(xhr);

xhr.addEventListener("progress",callBackfn);
xhr.addEventListener("load",callBackfn);
xhr.addEventListener("error",callBackfn);
}

function callBackfn(e){
  console.log(e);
}