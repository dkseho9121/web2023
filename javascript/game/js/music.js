const allMusic = [
    {
        name :"1. RedMoon",
        artist : "Easda sas",
        img : "music_view01",
        audio : "Anachronist - Oddities - Kevin MacLeod"
    },{
        name :"2. 마마마마",
        artist : "Easda sas",
        img : "music_view02",
        audio : "Thump - Audionautix"
    },{
        name :"3. 마마마마",
        artist : "Easda sas",
        img : "music_view03",
        audio : "Will 2 Pwr - half.cool"
    },{
        name :"4. 마마마마",
        artist : "Easda sas",
        img : "music_view04",
        audio : "Digital Voyage - Twin Musicom"
    },{
        name :"5. 마마마마",
        artist : "Easda sas",
        img : "music_view05",
        audio : "Disco Sting - Kevin MacLeod"
    },{
        name :"6. 마마마마",
        artist : "Easda sas",
        img : "music_view06",
        audio : "Disco con Tutti - Kevin MacLeod"
    },{
        name :"7. 마마마마",
        artist : "Easda sas",
        img : "music_view07",
        audio : "music_audio07"
    },{
        name :"8. 마마마마",
        artist : "Easda sas",
        img : "music_view08",
        audio : "music_audio08"
    },{
        name :"9. 마마마마",
        artist : "Easda sas",
        img : "music_view09",
        audio : "music_audio09"
    },{
        name :"10. 마마마마",
        artist : "Easda sas",
        img : "music_view10",
        audio : "music_audio10"
    }
];

const musicWrap = document.querySelector(".music__wrap");
const musicName = musicWrap.querySelector(".music__control .title h3");
const musicArtist = musicWrap.querySelector(".music__control .title p");
const musicView = musicWrap.querySelector(".music__view .image img");
const musicAudio = musicWrap.querySelector("#main-audio");


let musicIndex = 2;     //현재 음악 인덱스

//음악 재생
const loadMusic = (num) => {
    musicName.innerText = allMusic[num-1].name;             //뮤직 이름
    musicArtist.innerText = allMusic[num-1].artist;         //뮤직 아티스트
    musicView.src = `img/${allMusic[num-1].img}.png`;       //뮤직 이미지
    musicView.alt = allMusic[num-1].name;;                  //뮤직 이미지 alt
    musicAudio.src = `audio/${allMusic[num-1].audio}.mp3`   //뮤직 파일
}

window.addEventListener("load", () => {
    loadMusic(musicIndex);

    musicAudio.play();

});