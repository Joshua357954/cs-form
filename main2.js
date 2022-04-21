let query=window.location.search.split("&");
let name=query[0].split("=")[1].replace("+"," ")
let password=query[1].split("=")[1]

let nam=document.querySelector(".my-name");
let pass=document.querySelector(".my-pass");


if (name && password){
	nam.textContent=`Name : ${name}`
	pass.textContent=`Password : ${password}`
}








