import React from 'react';
import { useState } from 'react';
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import { ArrowUpRight, Menu, X, MoveUpRight } from 'lucide-react';
import About from './pages/About';
import Projects from './pages/Projects';
import Offer from './pages/Offer';

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="header">
    <Link to="/" className="brand" onClick={close}><span className="brand-mark">D.</span><span>DegiT</span></Link>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
    <nav className={open ? 'nav nav-open' : 'nav'}>
      <NavLink to="/" end onClick={close}>About us</NavLink>
      <NavLink to="/projects" onClick={close}>Our projects</NavLink>
      <NavLink to="/offer" onClick={close}>What we offer</NavLink>
    </nav>
    <Link to="/offer" className="header-cta">Let’s talk <ArrowUpRight size={16}/></Link>
  </header>;
}

function Footer() {
  return <footer className="footer">
    <Link to="/" className="brand"><span className="brand-mark">D.</span><span>DegiT</span></Link>
    <p>We turn good ideas into digital experiences.</p>
    <a href="mailto:hello@degit.studio">hello@degit.studio <ArrowUpRight size={15}/></a>
    <span className="copyright">© {new Date().getFullYear()} DegiT Studio</span>
  </footer>;
}

export default function App() {
  return <><Header/><main><Routes>
    <Route path="/" element={<About/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/offer" element={<Offer/>}/>
  </Routes></main><Footer/></>;
}