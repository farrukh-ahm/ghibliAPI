document.addEventListener("DOMContentLoaded", ()=>{
    getMovies()
})


const getMovies = async()=>{
    const response = await fetch("https://ghibliapi.vercel.app/films")
    const data = await response.json()
    if(response.ok){
        return console.log(data)
    }
    else{
        error
    }
}