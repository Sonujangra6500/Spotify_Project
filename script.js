console.log("Welcome To Spotify");
// Initialize the Variables
let songIndex = 0;
 let audioElement = new Audio ('song/1.mp3');
 let masterPlay = document.getElementById('masterplay');
 let myProgressBar = document.getElementById('myProgressBar');
 let Gif = document.getElementById('gif');
 let songItems = Array.from(document.getElementsByClassName('songItem'));
 let masterSongName = document.getElementById("masterSongName");
let songs = [
    {songName:"8_Asle_Sukha",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Kamla_Rajvir Jawanda",filePath:"song/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Rukh_Akhil",filePath:"song/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Mainu nai Pehcaandi Tu_Jerry",filePath:"song/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Dont Worry_Karn Aujla",filePath:"song/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"7 Knaalan_Happy Raikoti",filePath:"song/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Sheh_Singga",filePath:"song/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Game-Over_Karn Aujla",filePath:"song/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"Tere-layi_Nirvair Pannu",filePath:"song/9.mp3",coverPath:"covers/9.jpg"},
]
songItems.forEach((element,i)=>{
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
})
// audioElement.play();
// Handle play /pause clieck
masterPlay.addEventListener( 'click',()=>{
if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
     Gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        Gif.style.opacity = 0;
        e.target.classList.remove('fa-circle-play');
e.target.classList.add('fa-circle-pause');
    }
})
// Listen to the events
audioElement.addEventListener('timeupdate',()=>{
     //Update Seekbar
     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
     myProgressBar.value =  progress;
})
myProgressBar.addEventListener('change', () =>{
 audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemplay")).forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play') ;
    })  
}
Array.from(document.getElementsByClassName("songItemplay")).forEach((element)=>{
element.addEventListener('click',(e)=>{
    makeAllPlays();
songIndex = parseInt(e.target.id);
e.target.classList.remove('fa-circle-play');
e.target.classList.add('fa-circle-pause');
audioElement.src = `song/${songIndex+1}.mp3`;
masterSongName.innerText = songs[songIndex].songName;
audioElement.currentTime = 0;
audioElement.play();
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');
Gif.style.opacity = 1;
})
})
document.getElementById("next").addEventListener('click',()=>{
    if(songIndex>=8){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongName.innerText = songs[songIndex].songName;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    e.target.classList.remove('fa-circle-play');
e.target.classList.add('fa-circle-pause');
});
document.getElementById("previous").addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongName.innerText = songs[songIndex].songName;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    e.target.classList.remove('fa-circle-play');
e.target.classList.add('fa-circle-pause');
})