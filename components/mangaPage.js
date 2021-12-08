import mangaPage from '/game/guess_that_manga.html'
import axios from 'axios'

const guessMangaBtn = document.getElementById('guessManga'); 

export const guessMangaPage = () => {
    window.location.href=`${mangaPage}`
    //console.log("button was clicked");

}
guessMangaBtn && guessMangaBtn.addEventListener("click", guessMangaPage); 


const getMangaImg = async () => {
try {
    const response = await axios.get(`https://api.jikan.moe/v3/manga/1/pictures`)
    console.log(response.data.pictures[0].large);
    console.log('help me'); 
    return response.data.pictures[0].large;  
    // console.log('th')

} catch (err) {
    console.log(err)
}
}

const createMangaImg = async () => {
    const imgData = await getMangaImg(); 
    const parentDiv = document.getElementById('mangaColumn')
    const mangaImg = document.createElement('img'); 
    mangaImg.src =`${imgData}`
    parentDiv.appendChild(mangaImg); 

}

createMangaImg(); 
