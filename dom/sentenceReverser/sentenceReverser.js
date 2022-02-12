let button = document.getElementById('go-btn')

function test(){
   let phrase = document.getElementById('phrase').value
   let filter = document.getElementById('filter').value
   let output = document.getElementById('result')

   for(i = phrase.length-1;i<phrase.length;i--){
let result = ''
result += phrase[i]
   }
   output.textContent = result
}
