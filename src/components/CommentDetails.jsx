import { useLoaderData, useNavigate } from "react-router-dom";

const CommentDetails = () => {
    const commentDetails = useLoaderData()
    const navigate = useNavigate();
    const handleButtonComment = ()=>{
        navigate(-1)
    }
    return (
        <div className="text-center  mx-10">
            <h2 className="text-2xl font-semibold">Name: {commentDetails.name}</h2>
            <h4 className="text-xl font-medium">Email: {commentDetails.email}</h4>
            <p className="text-xl font-light">Description: {commentDetails.body}</p>
            <button onClick={()=>handleButtonComment()}  className="w-fit mx-auto py-2 px-6 rounded-xl m-2 border-2 ">Back</button>
        </div>
    );
};

export default CommentDetails;