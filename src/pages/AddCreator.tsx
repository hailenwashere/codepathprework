import { useState } from "react";
import supabase from '../client.ts'
import { redirect, useNavigate } from "react-router-dom";

const AddCreator = () => {
    const [formData, setFormData] = useState({
        name: "",
        url: "",
        description: "",
        imageURL: ""
    });

    const handleChange = (event : any) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const navigate = useNavigate();
    async function handleSubmit(event : any) {
        // alert("submitting...")
        event.preventDefault();
        console.log(formData);

        try {
            await supabase.from('creators').insert([
                {
                    name: formData.name,
                    url: formData.url,
                    description: formData.description,
                    imageURL: formData.imageURL
                }
            ])
            alert("submitted!")
            navigate(0)
        } catch (error) {
            console.log(error)
        }
    }

    return ( <>
        <h1>Add Creator</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange}/>
            </label>
            <label>
                URL:
                <input type="text" name="url" value={formData.url} onChange={handleChange}/>
            </label>
            <label>
                Description:
                <input type="text" name="description" value={formData.description} onChange={handleChange}/>
            </label>
            <label>
                imageURL:
                <input type="text" name="imageURL" value={formData.imageURL} onChange={handleChange}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
        <button onClick={() => navigate('/')}>Return to Home</button>
    </> );
}
 
export default AddCreator;