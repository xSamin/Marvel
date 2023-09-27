import { Link } from "react-router-dom"
import ErrorMessage from "../errorMesage/ErrorMesage"


const Page404 = () =>{
    return (
        <>
        <ErrorMessage/>
        <p>Page doesn't exist</p>
        <Link to="/">Back to main page</Link>
        </>
    )
}

export default Page404