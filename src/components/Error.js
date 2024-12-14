import { useRouteError } from "react-router";

const Error =() =>{
    let err= useRouteError();
    console.log(err);
    return(
        <div className="error-container">
            <h1>Oop'ss</h1>
            <h2>Status :{err.status}</h2>
            <h2>{err.statusText}{"  "}Something went wong!!</h2>
        </div>
    );
}

export default Error;