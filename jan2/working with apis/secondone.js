const moviedata = async () => {
    try{
        const res = await axios.get('http://api.tvmaze.com/search/shows?q=matrix');
        // console.log(res.data)
        dataforus.innerHTML = res.data
        // console.log(res)
        
    } catch (e) {
        console.log("error", e)
    }
}
moviedata()