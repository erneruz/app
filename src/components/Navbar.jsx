import {Link, link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="border-b border-gray-200 p-4">
            <div>
                <Link>
                    My Blog
                </Link>
                <div>
                    <Link>Home</Link>
                    <Link>About</Link>
                </div>
            </div>
        </nav>
    )
}