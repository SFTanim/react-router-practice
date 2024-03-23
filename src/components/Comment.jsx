import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Comment = ({comment}) => {

    const navigate = useNavigate()
    
    const handleButtonComment = (comment)=>{
        navigate(`/comments/${comment.id}`)
    }

    return (
        <div className="flex flex-col border-2 rounded-2xl border-yellow-400">
            <h2 className="flex-grow text-2xl font-semibold">Name: {comment.name}</h2>
            <button onClick={()=>handleButtonComment(comment)} className="w-fit mx-auto py-2 px-6 rounded-xl m-2 border-2 ">Details</button>

        </div>
    );
};

Comment.propTypes = {
    comment: PropTypes.object
}
export default Comment;