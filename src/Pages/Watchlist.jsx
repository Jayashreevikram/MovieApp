import React, { useContext, useState } from 'react'
import GenreFilter from '../Components/GenreFilter'
import Moviecard from '../Components/Moviecard'
import { WatchListContext } from '../Context/WatchListContext'

const Watchlist = () => {
const {watchlist, genrelist} =useContext(WatchListContext)
const [search,setSearch] =useState("")
const [selectedGenre,setSelectedGenre]=useState()
const filteredMovies =watchlist.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase()) ||
    movie.overview.toLowerCase().includes(search.toLowerCase()))
    .filter((movie) =>
    !selectedGenre || movie.genre_ids.includes(Number(selectedGenre))
  );



    return (
        <>
            <div className='p-4 pt-16'>
                <input type="text" placeholder='Search Movies..'
                    className='w-3/4 p-4 md:w-1/2 border rounded
                     border-gray-700 bg-gray-900 
                        bg-opacity-60 backdrop-blur-md text-
                        fixed left-1/4 top-16 z-10' onChange={(e)=>setSearch(e.target.value)} />

            </div>
            <div className='mt-16 flex justify-center'>
                <GenreFilter genrelist={genrelist} 
                selectedGenre={selectedGenre}
                setSelectedGenre={setSelectedGenre}/>
            </div>
            <div className="movie-container grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 mt-16">
                    {filteredMovies?.map((movie) => {
                        return (<Moviecard key={movie.id} movie={movie} />)
                    })}

                </div>
        </>

    )
}

export default Watchlist
