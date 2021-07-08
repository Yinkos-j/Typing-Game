var container = document.querySelector(".container")
var word = document.querySelector("h2")
var time = document.querySelector("h5")
var input = document.querySelector("input")
var game = document.querySelector(".game")
var load = Math.floor(Math.random()*10 + 1); 
function next(){
   if(word.innerText === input.value){
      console.log("hello");
    //   alert("you won")
      container.innerHTML = `<div><h4>Congratulations! You won<h4/>
      <p>You are fast </p></br>
      <button onclick="reload()" class="btn btn-warning">Play Again</button>
      <div/>`
   }
}
// function lose(){
//   if(0=time.innerText){
//     console.log("object");
//   }
// }

function lose(){
  // if(container.innerHTML != `<div><h4>Congratulations! You won<h4/>
  // <p>You are fast </p></br>
  // <button onclick="reload()" class="btn btn-warning">Play Again</button>
  // <div/>`){
    if(word.innerText === input.value){
   
   }
   else{
    container.innerHTML = `<div><h4>Sorry! You lost<h4/>
    <p>You have to improve better</p></br>
    <button onclick="reload()" class="btn btn-warning">Play Again</button>
    <div/>`
   }
  // }
  }



function reload(){
  document.location.reload()
}
setInterval(next,1000)
var words = ["speed","I love this","you are brilliant","Hello world","you are intelligent","how are you","This is perfect","Done deal","This is real","A car engine","I love speed"]
next()
console.log(words[load]);
word.innerText = words[load]
function changetime(){
    if(time.innerText > 0){
        time.innerText--;
    }
}
setInterval(changetime,1000)
setInterval(lose,20000)