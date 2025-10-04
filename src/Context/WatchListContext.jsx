import { createContext, useState , useEffect} from "react";


export const WatchListContext = createContext()

export const WatchListProvider = ({ children }) => {
    const [watchlist, setWatchList] = useState([])
    const [genrelist,setGenreList] =useState([])
useEffect(() => {

        let url=`https://api.themoviedb.org/3/genre/movie/list?api_key=43b2e24488a0a0d1e98f860cd4a0ba40`

        fetch(url)
            .then((response) => response.json())
            .then((data) => setGenreList(data.genres || []));
    },[]);

    const toggleWatchList = (movie) => {
        const index = watchlist.findIndex((m) => m.id === movie.id);
        if (index === -1) {
            setWatchList([...watchlist, movie])
        }
        else {
            setWatchList([
                ...watchlist.slice(0, index),
                ...watchlist.slice(index + 1)]);
        }
    }

    return (

        <WatchListContext.Provider value={{ watchlist, toggleWatchList , genrelist}}>
            {children}
        </WatchListContext.Provider>
    )

}

