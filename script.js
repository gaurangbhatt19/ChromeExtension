var reset=()=>{
return fetch("https://icanhazdadjoke.com/slack")
.then((data)=>{
 return data.json();
})
.then((Data)=>{
    
    const text=Data.attachments[0].text;
    const jokeElement=document.getElementById("joketext");
    jokeElement.innerHTML=text;
});
};
reset();

document.getElementById("reset").addEventListener("click",()=>{
reset();
});