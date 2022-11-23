import { useRouter } from "next/router";
import Post from "../../components/Post";


const PostRoute = () =>{
    const router = useRouter()   
    const { pid } = router.query 
 
    return (
        <Post id={pid}/>
    )
}
export default PostRoute