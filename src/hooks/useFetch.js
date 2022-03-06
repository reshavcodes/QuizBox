import {useState,useEffect} from 'react';


const API_KEY=process.env.VITE_GIPHY_API


const useFetch=({keyword})=>{
    const [gifUrl, setGifUrl] = useState("")
    

    const fetchGifs=async()=>{
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=1`)

            const {data}=await response.json()

            setGifUrl(data[0].images.downsized?.url)
        } catch (error) {
            setGifUrl("https://media.giphy.com/media/CNpSnDZk0GD8724ZnB/giphy-downsized.gif")
        }
    }


    useEffect(()=>{
        if(keyword){
            fetchGifs()
        }
        
    },[keyword])


    return gifUrl
}

export default useFetch;