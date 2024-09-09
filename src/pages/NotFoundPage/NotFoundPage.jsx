import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return (
        <div>
            <Link to='/'>
            <button type="button">Go Home</button>
            </Link>
            <h1>Error 404! Page is not found!</h1>
        </div>
    )
}