import Logo from "../assets/img/logo.png"

const Header = () => {
    return (
        <header>
            <nav>
                <div>
                    <div className="logo">
                        <img className="logo-name" src={Logo} alt="Logo" />
                    </div>
                    <div>
                        <ul>
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>About</a>
                            </li> 
                            <li>
                                <a>Portfolio</a>
                            </li>  
                        </ul>
                    </div>
                    <div>
                        <button>Contact Us</button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;