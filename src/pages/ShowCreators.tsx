import { useEffect, useState } from "react"
import Card from "../components/Card"

interface Creator {
    id: number
    name: string
    url: string
    description: string
    imageURL: string
}

const ShowCreators = ({creatorData}: {creatorData: Creator[]}) => {
    const [creators, setCreators] = useState<Creator[]>([])
    useEffect(() => {
        if (creatorData != undefined) {
            setCreators(creatorData)
        }
    }, [creatorData])

    function displayCreators(){
        let cards: JSX.Element[] = [<p key={"no-creators"}>No Creators</p>];
        
        if (creators != undefined && creators.length > 0) {
            cards = creators.map((creator: any) => {
                return <Card id={creator.id}name={creator.name} url={creator.url} description={creator.description} imageURL={creator.imageURL} key={creator.name}/>
            })
        }
        return cards
    }

    return ( <>
        <h1>All Creators</h1>
        <div className="cards"
        style={{
            display: 'flex', 
            flexDirection: 'row', 
            flexWrap: 'wrap'
        }}>
            {displayCreators()}
        </div>
    </> );
}
 
export default ShowCreators;