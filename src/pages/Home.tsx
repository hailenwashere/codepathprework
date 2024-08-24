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
        <h1>Welcome to CreatorVerse! ✧*.◟(ˊᗨˋ)◞.*✧</h1>
        <button onClick={() => window.location.href = '/addcreator'}>Add a Creator!</button>
        <ShowCreators creatorData={creatorData}/>
    </> );
}
 
export default Home;