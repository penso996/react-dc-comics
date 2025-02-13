// HeaderNav.jsx
export default function HeaderNav(props) {
    return (
        <nav className="header-nav">
            {props.links.map((link) => (
                <a key={link.id} href={link.url} className={link.current ? 'active' : ''}>
                    {link.text}
                </a>
            ))}
        </nav>
    );
}