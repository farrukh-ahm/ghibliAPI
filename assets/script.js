
// document.addEventListener("DOMContentLoaded", ()=>{
//     getMovies()
// })

const container = document.querySelector("#container")
const button = document.querySelectorAll(".btn")
const body = document.getElementsByTagName("body")

button.forEach(btn => {
    btn.addEventListener("click", (e)=>{
        const category = e.target.getAttribute("data-category")
        console.log(category)
        category==="movies"? getMovies():category==="characters"?getCharacters():getSongs()
    })
});

const getMovies = async()=>{
    const response = await fetch("https://ghibliapi.vercel.app/films")
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
        characterHandler(data)
    }
}


const getSongs = async()=>{

}



const movieHandler = data => {

    // document.body.style.backgroundColor = "red";
    document.body.style.backgroundImage = "linear-gradient(to bottom, #d3b4f4, #d9b4f4, #dfb4f3, #e5b5f2, #ebb5f1, #f6b7e5, #fdbbda, #ffc0d2, #ffcdc7, #ffddc5, #ffeece, #f8fde0)";
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

const characterHandler = data =>{

    document.body.style.backgroundImage = "linear-gradient(to bottom, #d3b4f4, #d9b4f4, #dfb4f3, #e5b5f2, #ebb5f1, #f6b7e5, #fdbbda, #ffc0d2, #ffcdc7, #ffddc5, #ffeece, #f8fde0)";
    container.innerHTML = "";
    const cards = data.map(item=>{
        console.log(item.name.toLowerCase().replace(" ","-"))
        return( `<div class="cardContainer"> 
                <h2>${item.name}</h2>
                <img src="./assets/images/${item.name.toLowerCase().replaceAll(" ","-")}.webp" alt="${item.name}" />
                <p>Gender: ${item.gender}</p>
                <p>Age: ${item.age}</p>
                <p>Eye Color: ${item.eye_color}</p>
                <p>Hair Color: ${item.hair_color}</p>
            </div>`)
    })

    for(let i of cards){
        container.insertAdjacentHTML('beforeend', i)
    }
}