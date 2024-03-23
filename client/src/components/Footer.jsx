import { Logo } from './Logo';
export const Footer = () => {
    return (
        <div className="container-fluid bg-body-tertiary">
            <footer className="py-3 my-4 container">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <a href="/" className="nav-link px-2 text-body-secondary">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/login" className="nav-link px-2 text-body-secondary">
                            Dashbooard
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/about" className="nav-link px-2 text-body-secondary">
                            About us
                        </a>
                    </li>
                </ul>
                <p className="text-center text-body-secondary">
                    <Logo /> &copy; 2024 Company, Inc 
                </p>
            </footer>
        </div>
    );
};
