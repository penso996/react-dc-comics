// Header.jsx
export default function Header() {
    return (<header>
        <div className="header-size">
            <div>
                <img className="logo" src="\img\dc-logo.png" alt="logo" />
            </div>
            <nav className="header-nav">
                <a href="#">CHARACTERS</a>
                <a className="active" href="#">COMICS</a>
                <a href="#">MOVIES</a>
                <a href="#">TV</a>
                <a href="#">GAMES</a>
                <a href="#">COLLECTIBLES</a>
                <a href="#">VIDEOS</a>
                <a href="#">FANS</a>
                <a href="#">NEWS</a>
                <a href="#">SHOP</a>
            </nav>
        </div>
    </header>
    );
}