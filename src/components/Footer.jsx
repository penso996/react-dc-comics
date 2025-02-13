// Footer.jsx
export default function Footer() {
    return (
        <footer>

            <div className="upper-footer-container-background">
                <div className="upper-footer-container">

                    <div className="footer-links">
                        <h4>DC COMICS</h4>
                        <h4>SHOP</h4>
                        <h4>DC</h4>
                        <h4>SITES</h4>
                    </div>

                    <div>
                        <img src="\img\dc-logo-bg.png" alt="logo" />
                    </div>

                </div>
            </div>

            <div className="lower-footer-container-background">
                <div className="lower-footer-container">

                    <button>SIGN-UP NOW!</button>

                    <div className="follow-us">
                        <p>FOLLOW US</p>
                        <a href="#"><img src="\img\footer-facebook.png" alt="facebook" /></a>
                        <a href="#"><img src="\img\footer-twitter.png" alt="twitter" /></a>
                        <a href="#"><img src="\img\footer-youtube.png" alt="youtube" /></a>
                        <a href="#"><img src="\img\footer-pinterest.png" alt="pinterest" /></a>
                        <a href="#"><img src="\img\footer-periscope.png" alt="periscope" /></a>
                    </div>

                </div>
            </div>

        </footer>
    );
}