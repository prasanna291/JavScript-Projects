

/*function getInput(){
    fetch(url).then(res => res.json())
    .then( json => console.log(json))
    .catch( error => console.log(error))
 
}*/

/*function getInput(){
   let params=new Request(url,{
       method:"GET",
       mode:"cors",
       headers:new Headers(),
       cache:"default"
   })

    fetch(params).then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log(error);
    })
}*/

/*function getInput(){
    let tempVal=intake.value;
    let tempURL=url+"?results="+tempVal;
    fetch(tempURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.results);
        for(let x=0;x<data.results.length;x++){
            output.innerHTML+=data.results[x].name.first +"<br>";
        }
    })
    .catch(function(error){
        console.log(error);
    })
} */

 /* function getInput(){ 
       let tempURL="angularjs.jpeg";
    fetch(tempURL).then(function(response){
        return response.blob();
    }).then(function(data){
        console.log(data);
        let pathImage=URL.createObjectURL(data);
        document.querySelector("img").src=pathImage;
    })
    .catch(function(error){
        console.log(error);
    })
} */