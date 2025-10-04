import React, { useEffect, useState } from 'react'
import Moviecard from '../Components/Moviecard'

const Home = () => {

    const [movies, setMovies] = useState([])
    const [page,setPage]=useState(1)
    const [search,setSearch]=useState("")
    useEffect(() => {

        let url=`https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=43b2e24488a0a0d1e98f860cd4a0ba40`
if(search){
    url=`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=43b2e24488a0a0d1e98f860cd4a0ba40`
}
        fetch(url)
            .then((response) => response.json())
            .then((data) => setMovies(data.results));
    },[page,search]);

    return (
        <>
            <div className='p-4 pt-16'>
                <input type="text" placeholder='Search Movies..'
                    className='w-3/4 p-4 md:w-1/2 border rounded
       border-gray-700 bg-gray-900 
       bg-opacity-60 backdrop-blur-md text-white
        fixed left-1/4 top-16 z-10'
        onChange={(e)=>setSearch(e.target.value)} />
                <div className="movie-container grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 mt-16">
                    {movies?.map((movie) => {
                        return (<Moviecard key={movie.id} movie={movie} />)
                    })}

                </div>

                <div className="pagination-container flex justify-between mt-5">
                    <button
                    disabled ={page==1}
                        className='p-2 bg-gray-700 text-white rounded'
                        onClick={()=>{
                            setPage(prev => prev -1);
                        }}>Previous</button>
                    <button className='p-2 bg-gray-700 text-white rounded'
                     onClick={()=>{
                            setPage(prev => prev +1);
                        }}>Next</button>
                </div>
            </div>
        </>
    )
}

export default Home
