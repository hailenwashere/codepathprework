import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../client";

interface Creator {
    id: number
    name: string
    url: string
    description: string
    imageURL: string
}

const ViewCreator = ({creatorData}: {creatorData: Creator[] }) => {
    const creatorId = useParams().id
    const [currCreator, setCurrCreator] = useState<Creator>()
    const navigate = useNavigate()

    useEffect(() => {
        if (creatorData != undefined && creatorId != undefined) {
            const creator = creatorData.filter((creator) => creator.id == parseInt(creatorId));
            setCurrCreator(creator[0])
        } else {
            console.log("no data")
        }
    }, [creatorData, creatorId])


    return ( <>
        <h1>View Creators: {currCreator?.name}</h1>
        <p>{currCreator?.id}</p>
        <button onClick={() => navigate('/editcreator/'+currCreator?.id)}>Edit Creator</button>
        <br/>
        <img src={currCreator?.imageURL} />
        <p> Name: {currCreator?.name} </p>
        <p>URL: <a href={currCreator?.url} target="_blank"> {currCreator?.url} </a></p>
        <p> Description: {currCreator?.description} </p>
    </> );
}
 
export default ViewCreator;