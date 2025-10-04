import React from 'react'
import { useContext } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { WatchListContext } from '../Context/WatchListContext'



const Moviecard = ({ movie }) => {

    const {toggleWatchList,watchlist}=useContext(WatchListContext);

    const inwatchlist = watchlist.some((m)=>m.id === movie.id)
    return (
        <div className='bg-gray-800 p-4 rounded-lg shadow-md text-white relative'>
            <img className='w-full h-80 object-cover rounded-sm'
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <h3 className='text-lg font-bold mt-4'>{movie.title}</h3>
            <p className='text-sm text-gray-600'>{movie.release_date}</p>
            <button className='absolute top-2 right-2 text-red-500 text-xl'
            onClick={()=>
                toggleWatchList(movie)
            }>
                {inwatchlist ? <FaHeart /> : <FaRegHeart />}
            </button>
        </div>
    )
}

export default Moviecard;
