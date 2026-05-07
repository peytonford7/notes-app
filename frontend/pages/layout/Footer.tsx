import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer style={{ marginTop: '20px', textAlign: 'center' }}>
            <Link to='/'><strong><h3>Home</h3></strong></Link>
        </footer>
    );
}