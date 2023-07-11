
// document.addEventListener("DOMContentLoaded", ()=>{
//     getMovies()
// })

const container = document.querySelector("#container")
const button = document.querySelectorAll(".btn")

button.forEach(btn => {
    btn.addEventListener("click", (e)=>{
        const category = e.target.getAttribute("data-category")
        console.log(category)
        category==="movies"? getMovies():category==="characters"?getCharacters():getSongs()
    })
});

const getMovies = async()=>{
    const response = await fetch("https://ghibliapi.vercel.app/films/")
    const data = await response.json()
    if(response.ok){
        console.log(data)
        movieHandler(data)
    }
    else{
        error
    }
}

const getCharacters = async()=>{
    const response = await fetch("https://ghibliapi.vercel.app/people/");
    const data = await response.json()
    if(response.ok){
        console.log(data)
    }
}


const getSongs = async()=>{

}



const movieHandler = data => {

    container.innerHTML = "";
    const cards = data.map(item=>{
        return( `<div class="cardContainer"> 
                <h2>${item.title}</h2>
                <h4>${item.original_title}</h4>
                <img src=${item.image} />
                <p>Writer: ${item.director}</p>
                <p>Producer: ${item.producer}</p>
            </div>`)
    })

    for(let i of cards){
        container.insertAdjacentHTML('beforeend', i)
    }

}

