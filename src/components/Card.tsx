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

    function MouseOver(event : any) {
        event.target.style.boxShadow = '2px 6px 30px rgba(0, 0, 0, 0.2)';
    }
    function MouseOut(event : any) {
        event.target.style.boxShadow = '2px 6px 25px rgba(0, 0, 0, .11)';
    }

    return (
        <>
            <div className="card" style={{ 
                width: 300,
                flex: 1,
                outline: '1px solid #efefef',
                margin: '30px',
                boxShadow: '2px 6px 25px rgba(0, 0, 0, .11)',
                transition:'all .3s ease'
             }} onMouseOver={MouseOver} onMouseOut={MouseOut}>
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