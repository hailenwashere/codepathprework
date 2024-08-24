import ShowCreators from "./ShowCreators";
interface Creator {
    id: number
    name: string
    url: string
    description: string
    imageURL: string
}
const Home = ({creatorData}: {creatorData: Creator[]}) => {
    return ( <>
        <h1>Home</h1>
        <a href="addcreator">Add a Creator!</a>
        <ShowCreators creatorData={creatorData}/>
    </> );
}
 
export default Home;