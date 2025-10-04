import React from 'react'

const GenreFilter = ({genrelist,setSelectedGenre}) => {
    return (
        <div>
            <select className='p-2 bg-gray-900 bg-opacity-60 text-white backdrop-blur-md border rounded mb-4'
            onChange={(e)=>setSelectedGenre(e.target.value)}>
                {genrelist.map((genre)=>{
                    return(
                        <option key={genre.id} value={genre.id}>{genre.name}</option>
                    )})
                }
            </select>
        </div>
    )
}

export default GenreFilter
