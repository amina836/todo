
function todo() {

	"use strick";

    var //variable
        input= document.getElementById('main').value;

        option= document.getElementById('option');

    if (input==="") { //if function

    	option.innerHTML ="you must input a text";

    }else{ 

       const li=document.createElement('li'); //creat list

       const btn = document.createElement("button"); //creat button

       btn.innerHTML = "remove";

       li.className="liStyle"; //li style

       btn.className= "btnStyle"; //button style

       li.innerHTML=input;

       option.appendChild(li);

       li .appendChild(btn);

       btn.addEventListener("click" , function(e){

       e.preventDefault();

       e.target.parentElement.remove()
    });
       
    }   
}
  








