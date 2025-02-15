export const getMoviesData = async () =>{
    try{
        const res = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=b660126e&s=titanic&page=1");
        const moviesData = res.json();
        return moviesData;
    }catch(error) {
        return console.log(error);
    }
}