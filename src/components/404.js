import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
            <div className="error-page-container">
                <div className="error-page-container_box">
                    <h1>404</h1>
                    <h2>oops! Page not found</h2>
                    <p>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                    <div className="project-links error-page-link">
                        <Link to="/">Home</Link>
                    </div>
                </div>
            </div>
    )
}

export default ErrorPage