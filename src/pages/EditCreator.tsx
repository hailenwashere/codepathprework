import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import supabase from "../client";

interface Creator {
    id: number
    name: string
    url: string
    description: string
    imageURL: string
}

const EditCreator = ({creatorData}: {creatorData: Creator[] }) => {
    const [formData, setFormData] = useState({
        name: "",
        url: "",
        description: "",
        imageURL: ""
    });
    
    const creatorId = useParams().id

    useEffect(() => {
        if (creatorData != undefined && creatorId != undefined) {
            const creator = creatorData.filter((creator) => creator.id == parseInt(creatorId));
            setFormData(creator[0])
        }
    }, [creatorData])

    const handleChange = (event : any) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const navigate = useNavigate();
    async function handleSubmit(event : any) {
        event.preventDefault();
        console.log(formData);

        try {
            await supabase
                .from('creators')
                .update({ 
                    name: formData.name,
                    url: formData.url,
                    description: formData.description,
                    imageURL: formData.imageURL
                 })
                .eq('id', creatorId)
            alert("submitted!")
            navigate('/')
            navigate(0)
        } catch (error) {
            console.log(error)
        }
    }

    async function deleteCreator() {
        if (creatorId != undefined) {
            try {
                await supabase
                    .from('creators')
                    .delete()
                    .eq('id', creatorId)
                    
                alert("deleted!")
                navigate('/')
                navigate(0)
            } catch (error) {
                console.log(error)
            }
        } else {
            alert("creator not found")
        }
    }

    return ( <>
        <h1>Edit Creator</h1>
        <h2>Editing {}</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange}/>
            </label>
            <br/>
            <label>
                URL:
                <input type="text" name="url" value={formData.url} onChange={handleChange}/>
            </label>
            <br/>
            <label>
                Description:
                <input type="text" name="description" value={formData.description} onChange={handleChange}/>
            </label>
            <br/>
            <label>
                imageURL:
                <input type="text" name="imageURL" value={formData.imageURL} onChange={handleChange}/>
            </label>
            <br/>
            <input type="submit" value="Submit"/>
        </form>
        <button onClick={deleteCreator}>Delete Creator</button>
    </> );
}
 
export default EditCreator;