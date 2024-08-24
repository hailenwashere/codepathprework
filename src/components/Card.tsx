import { useNavigate } from "react-router-dom";

interface CardProps {
    id: number;
    name: string;
    url: string;
    description: string;
    imageURL: string;
}

const Card = ({ id, name, url, description, imageURL }: CardProps) => {
    const navigate = useNavigate()
    return (
        <>
            <div className="card" style={{ 
                width: 300,
                flex: 1,
                outline: '1px solid black',
                margin: '30px'
             }}>
                <img 
                    src={imageURL} 
                    style={{ width: 300, height: 300 }}
                />
                <p> Name: {name} </p>
                <p>URL: <a href={url} target="_blank"> {url} </a></p>
                <p> Description: {description} </p>
                <button onClick={() => navigate('/creators/'+id)}>View Creator</button>
                <button onClick={() => navigate('/editcreator/'+id)}>Edit Creator</button>
            </div>
        </>
    );
}
 
export default Card;