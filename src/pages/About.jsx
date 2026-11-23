import React from 'react';
import { ArrowDown, ArrowUpRight, Code2, Compass, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  { icon: <Compass/>, title: 'Purpose before pixels', text: 'Every project starts with your goals. We design around the people you want to reach and the results you want to achieve.' },
  { icon: <Code2/>, title: 'Built to perform', text: 'We combine thoughtful design and reliable development to create websites that are fast, responsive and easy to use.' },
  { icon: <Sparkles/>, title: 'Made to stand out', text: 'Your business is unique. Your digital presence should be too — clear, memorable and unmistakably yours.' }
];

export default function About() {
  return <div className="page">
    <section className="hero container">
      <div className="eyebrow"><span className="dot"/> DIGITAL AGENCY · MOROCCO & BEYOND</div>
      <h1>We make your<br/><span className="accent">business digital.</span></h1>
      <div className="hero-bottom">
        <p className="hero-copy">We are DegiT — a creative team helping businesses grow online through purposeful websites and digital experiences.</p>
        <Link to="/projects" className="round-link" aria-label="Explore projects"><ArrowDown/></Link>
      </div>
      <div className="hero-art">
        <div className="art-grid"/>
        <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
        <div className="art-center"><span>D</span><i>✳</i></div>
        <div className="art-note note-one">IDEAS → IMPACT</div><div className="art-note note-two">DIGITAL BY DESIGN</div>
        <div className="art-number">01 / 03</div>
      </div>
    </section>
    <section className="intro-section container">
      <div className="section-label">01 — WHO WE ARE</div>
      <div className="intro-content"><h2>Small team.<br/>Big digital energy.</h2><div><p className="large-copy">We believe every business deserves a strong place online.</p><p className="muted">DegiT is a digital team focused on transforming ideas and businesses into effective online experiences. From the first sketch to the final launch, we work closely with our clients to make the process clear, collaborative and result-driven.</p><Link className="text-link" to="/offer">Discover what we do <ArrowUpRight size={17}/></Link></div></div>
    </section>
    <section className="values-section">
      <div className="container"><div className="section-label">02 — HOW WE WORK</div><div className="values-heading"><h2>Digital, with<br/><span className="accent">intention.</span></h2><p>We bring strategy, creativity and technology together to help your business move forward.</p></div>
        <div className="value-grid">{values.map((v, i) => <article className="value-card" key={v.title}><div className="value-top"><span>0{i+1}</span>{v.icon}</div><h3>{v.title}</h3><p>{v.text}</p></article>)}</div>
      </div>
    </section>
    <section className="cta-section container"><p className="eyebrow">HAVE A PROJECT IN MIND?</p><h2>Let’s build your<br/><span className="accent">next big thing.</span></h2><Link to="/offer" className="button button-light">Explore our offer <ArrowUpRight size={17}/></Link></section>
  </div>;
}