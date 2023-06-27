
const getThought = async ()=>{
 try{
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  const myThought = document.getElementById("thought");
  myThought.innerHTML= data.content;
 }
 catch(error){}
};

window.addEventListener("load", () => {
    getThought();
});