function getOptions(){
    let options = document.querySelector('#mySelect')
    let optLength = document.getElementsByTagName("option").length
    let text = ""
for(i = 0;i < options.length;i++){
text += options[i].text + "\n"
}
    window.alert("The number of options is " + optLength + " \n and the inner elements are \n" + text)
}