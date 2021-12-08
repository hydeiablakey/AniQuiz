import mangaPage from '/game/guess_that_manga.html'
import axios from 'axios'

const guessMangaBtn = document.getElementById('guessManga'); 

export const guessMangaPage = () => {
    window.location.href=`${mangaPage}`
    //console.log("button was clicked");

}
guessMangaBtn && guessMangaBtn.addEventListener("click", guessMangaPage); 


// const getMangaImg = async () => {
// try {
//     const response = await axios.get(`https://api.jikan.moe/v3/manga/1/pictures`)
//     console.log(response.data.pictures[0].large);
//     console.log('help me'); 
//     return response.data.pictures[0].large;  
//     // console.log('th')

// } catch (err) {
//     console.log(err)
// }
// }

let rand = Math.floor(Math.random() * 51)
let rand2 = Math.floor(Math.random() * 51)
let rand3 = Math.floor(Math.random() * 51)
let rand4 = Math.floor(Math.random() * 51)
const getMangaImg = async () => {
try {
 
    const response = await axios.get(`
    https://api.jikan.moe/v3/top/manga/1/manga`)
    // console.log(response.data.top[rand].image_url)
    return response.data
    // console.log('th')

} catch (err) {
    console.log(err)
}
}

const getMangaResponse2 = async () => {
    try {
     
        const response = await axios.get(`
        https://api.jikan.moe/v3/top/manga/1/manga`)
        // console.log(response.data.top[rand].image_url)
        return response.data.top[rand2].title
        // console.log('th')
    
    } catch (err) {
        console.log(err)
    }
}

const getMangaResponse3 = async () => {
        try {
         
            const response = await axios.get(`
            https://api.jikan.moe/v3/top/manga/1/manga`)
            // console.log(response.data.top[rand].image_url)
            return response.data.top[rand3].title
            // console.log('th')
        
        } catch (err) {
            console.log(err)
        }
}

const getMangaResponse4 = async () => {
    try {
     
        const response = await axios.get(`
        https://api.jikan.moe/v3/top/manga/1/manga`)
        // console.log(response.data.top[rand].image_url)
        return response.data.top[rand4].title
        // console.log('th')
    
    } catch (err) {
        console.log(err)
    }
}

// getMangaImg(); 

const createMangaGame = async () => {
    const imgData = await getMangaImg(); 

    const imgTitle2 = await getMangaResponse2(); 
    const imgTitle3 = await getMangaResponse3(); 
    const imgTitle4 = await getMangaResponse4(); 

    const parentDiv = document.getElementById('mangaColumn')
    const mangaImg = document.createElement('img'); 
    console.log('response answer photo: ' + imgData.top[rand].image_url)
    console.log('response answer title: ' + imgData.top[rand].title); 
    mangaImg.src =`${imgData.top[rand].image_url}`
    parentDiv.appendChild(mangaImg); 

    //manga button choices 

    const choice1 = document.getElementById('mangaChoice1');
    const choice2 = document.getElementById('mangaChoice2');
    const choice3 = document.getElementById('mangaChoice3');
    const choice4 = document.getElementById('mangaChoice4');


    choice1.textContent = `${imgData.top[rand].title}`
    choice2.textContent = `${imgTitle2}`
    choice3.textContent = `${imgTitle3}`
    choice4.textContent = `${imgTitle4}`

}

createMangaGame(); 
