'use client';

export default function Header() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Trendings</a></li>
                        <li><a>Upcoming Show</a></li>
                        <li>
                        <a>Shows</a>
                        <ul className="p-2">
                            <li><a>Movies</a></li>
                            <li><a>TV Shows</a></li>
                        </ul>
                        </li>
                        <li><a>Login</a></li>
                        <li><a>Sign Up</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">MovieCritique</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    <li><a>Trendings</a></li>
                    <li><a>Upcoming Shows</a></li>
                    <li>
                        <details>
                        <summary>Shows</summary>
                        <ul className="p-2 bg-base-100 w-40 z-1">
                            <li><a>Movies</a></li>
                            <li><a>TV Shows</a></li>
                        </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="hidden lg:block space-x-2">
                    <a className="btn btn-accent">Login</a>
                    <a className="btn">Sign Up</a>
                </div>
            </div>
        </div>
    );
}