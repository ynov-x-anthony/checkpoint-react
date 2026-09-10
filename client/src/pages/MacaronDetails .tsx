import { useParams } from "react-router"
import { useState, useEffect } from "react"
import Macaron from '../components/Macaron'

function MacaronDetail() {
    const { id } = useParams()

    const URL = import.meta.env.VITE_API_URL + `/api/macarons/${id}`

    const [data, setData] = useState<Macaron>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const controller = new AbortController

        async function load() {
            try {
                const response = await fetch(URL, { signal: controller.signal })

                if (!response.ok) {
                    throw new Error(`Error, status : ${response.status}`)
                }

                const result: Macaron = await response.json()
                setData(result)
            } catch (err) {
                if (err instanceof DOMException && err.name === "AbortError") {
                    return
                }

                setError(
                    err instanceof Error ? err.message :"Unable to get macaron data"
                )
            } finally {
                if (controller.signal.aborted) {
                    setLoading(false)
                }
            }
        }

        load()

        return () => controller.abort()
    }, [])
    
    return (
        <>
            {loading && <p>loading...</p>}
            {error && <p>Error : {error}</p>}
            {data && <Macaron data={data}/>} 
            <h2>{data?.name}</h2>
            <h4>{data?.accessory}</h4>
            <p>{data?.color1}</p>
            <p>{data?.color2}</p>
            <p>{data?.color3}</p>
        </>
    )
}

export default MacaronDetail