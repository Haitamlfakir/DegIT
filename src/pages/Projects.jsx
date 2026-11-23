import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  { no: '01', name: 'Noma Café', type: 'Brand website · Food & beverage', year: '2025', tone: 'project-orange', letters: 'NOMA', detail: 'A warm, editorial website concept for a modern neighbourhood café.' },
  { no: '02', name: 'Forma Studio', type: 'Portfolio · Architecture', year: '2025', tone: 'project-blue', letters: 'FORMA', detail: 'A minimal digital portfolio that puts the studio’s work in the spotlight.' },
  { no: '03', name: 'MoveWell', type: 'Landing page · Fitness', year: '2026', tone: 'project-lime', letters: 'MOVE\\nWELL', detail: 'A bold, energetic landing page built to turn visitors into members.' }
];

export default function Projects() {
  return <div className="page container inner-page">
    <div className="eyebrow"><span className="dot"/> SELECTED WORK · 2025—2026</div>
    <div className="page-heading"><h1>Ideas made<br/><span className="accent">real.</span></h1><p>A selection of concepts and projects showing how we bring brands to life online.</p></div>
    <div className="project-list">{projects.map(p => <article className="project" key={p.no}>
      <div className={`project-visual ${p.tone}`}><div className="project-browser"><span/><span/><span/><small>degit.studio / {p.name.toLowerCase().replace(' ', '-')}</small></div><div className="project-wordmark">{p.letters.split('\\n').map((line,i)=><span key={i}>{line}</span>)}</div><div className="visual-caption">DIGITAL EXPERIENCE / {p.no}</div></div>
      <div className="project-info"><div><span className="project-no">{p.no} / 03</span><h2>{p.name}</h2><p>{p.detail}</p></div><div className="project-meta"><span>{p.type}</span><span>{p.year}</span><span className="project-arrow"><ArrowUpRight/></span></div></div>
    </article>)}</div>
    <div className="projects-note"><p>Have a project that should be next?</p><Link to="/offer" className="text-link">Let’s work together <ArrowUpRight size={17}/></Link></div>
  </div>;
}