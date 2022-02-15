function getFormvalue(){

let fname = document.querySelector(".first").value
let lname = document.querySelector(".last").value
let displayDiv = document.querySelector(".result")
let para1 = document.createElement("p")
let text1 = document.createTextNode(fname)
let text2 = document.createTextNode(lname)
para1.appendChild(text1)
let para2 = document.createElement("p")
para2.appendChild(text2)
displayDiv.appendChild(para1)
displayDiv.appendChild(para2)
}