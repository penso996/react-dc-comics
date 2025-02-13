// Header.jsx
import HeaderNav from '../single_components/HeaderNav'

export default function Header() {

    return (
        <header>
            <div className="header-container">

                <div>
                    <img className="logo" src="\img\dc-logo.png" alt="logo" />
                </div>

                <HeaderNav />

            </div>
        </header>
    );
}