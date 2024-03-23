import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    const navigate = useNavigate();
    const handleButtonComment = ()=>{
        navigate(`/`)
    }
    return (
        <div>
            <h2 className="">Error Page</h2>
            {
                error.status === 404 && <div className="">
                    <h2>Page not found</h2>
                    <h2>Go Back To Home</h2>
                    <button onClick={()=>handleButtonComment()}  className="w-fit mx-auto py-2 px-6 rounded-xl m-2 border-2 ">Back</button>
                </div>
            }
        </div>
    );
};

export default ErrorPage;