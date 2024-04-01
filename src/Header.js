import './Header.css';
import { Link, Outlet } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className="header">
        <Link to="/">Blog</Link>
        <Link to="/contact">お問い合わせ</Link>
      </header>
      <Outlet/>
    </>
  )
}