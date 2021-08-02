var button=document.getElementById("button");
// var audio=document.getElementById("audio");
var displayJoke=document.getElementById("joke");

// getting jokes from joke api
async function getJokes()
{
    const apiUrl="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&format=txt";
    try{
        const response=await fetch(apiUrl);
        const data=await response.text();
        // console.log(data);
        var msg = new SpeechSynthesisUtterance(data);
        speechSynthesis.speak(msg);
        displayJoke.innerHTML=data;
    }catch(error)
    {
        console.log("Oops!",error);
    }
}

button.addEventListener('click',getJokes);


