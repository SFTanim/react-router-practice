import { useLoaderData } from "react-router-dom";
import Comment from "./Comment";

const Comments = () => {
    const allComments = useLoaderData()

    return (
        <div className="text-center">
            <h2 className="text-3xl font-semibold">Comments Section</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {
                    allComments.map((comment, idx) => {
                    if (comment.id <= 100) {
                        return <Comment comment={comment} key={idx}></Comment>
                    }}
                    )
                }
            </div>
        </div>
    );
};

export default Comments;