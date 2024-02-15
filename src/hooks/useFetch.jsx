import { useState } from "react"


export const useFetch = (url, arr=[]) => {
    const [data, setData] = useState(null)

    useFetch(()=>{
        fetch(url)
        .then((response) => response.json())
        .then((apiData) => {
            setData(apiData)
        })
        .catch((e) => console.log(e))
    },arr)

    return {data}
}