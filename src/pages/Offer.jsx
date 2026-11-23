import React from 'react';
import { ArrowUpRight, Check, Globe, Layout, ShoppingBag, Wrench } from 'lucide-react';
import { useState } from 'react';

const services = [
  { icon: <Layout/>, title: 'Business website', desc: 'A professional online home that explains what you do and builds trust.', items: ['Custom responsive design', 'Up to 5 pages', 'Contact form & map', 'Basic SEO setup'] },
  { icon: <ShoppingBag/>, title: 'E-commerce website', desc: 'A smooth shopping experience that helps turn visitors into customers.', items: ['Product and category pages', 'Shopping cart & checkout', 'Mobile-friendly experience', 'Store management guidance'] },
  { icon: <Globe/>, title: 'Landing page', desc: 'One focused page designed around a product, service or campaign.', items: ['Conversion-focused layout', 'Clear calls to action', 'Contact or lead form', 'Performance optimization'] },
  { icon: <Wrench/>, title: 'Website refresh', desc: 'Give your existing website a cleaner look and a better user experience.', items: ['Visual redesign', 'Responsive improvements', 'Content structure review', 'Speed and usability review'] }
];

export default function Offer() {
  const [selected, setSelected] = useState('Business website');
  return <div className="page container inner-page offer-page">
    <div className="eyebrow"><span className="dot"/> SERVICES · LET’S CREATE SOMETHING</div>
    <div className="page-heading"><h1>Your next step<br/>starts <span className="accent">online.</span></h1><p>Choose the service that fits your goals. We’ll shape the right solution around your business, audience and budget.</p></div>
    <div className="offer-layout"><div className="service-list">{services.map(s => <button key={s.title} onClick={() => setSelected(s.title)} className={selected === s.title ? 'service-option selected' : 'service-option'}><span className="service-icon">{s.icon}</span><span>{s.title}</span><ArrowUpRight className="service-arrow"/></button>)}</div>
      <div className="service-detail">{services.filter(s => s.title === selected).map(s => <div key={s.title}><span className="detail-kicker">THE SERVICE</span><div className="detail-icon">{s.icon}</div><h2>{s.title}</h2><p className="detail-desc">{s.desc}</p><div className="included-label">WHAT’S INCLUDED</div><ul>{s.items.map(item => <li key={item}><Check size={16}/>{item}</li>)}</ul><a className="button button-dark" href={`mailto:hello@degit.studio?subject=${encodeURIComponent(`Project enquiry: ${s.title}`)}`}>Request a quote <ArrowUpRight size={17}/></a></div>)}</div>
    </div>
    <section className="process"><div className="section-label">OUR PROCESS</div><h2>Clear steps.<br/><span className="accent">No guesswork.</span></h2><div className="process-grid"><div><b>01</b><h3>Discover</h3><p>We learn about your business, goals and audience.</p></div><div><b>02</b><h3>Design</h3><p>We plan the structure and create your visual direction.</p></div><div><b>03</b><h3>Build</h3><p>We develop, test and refine your website.</p></div><div><b>04</b><h3>Launch</h3><p>We publish your website and help you take it forward.</p></div></div></section>
    <section className="offer-contact"><div><p className="eyebrow">READY WHEN YOU ARE</p><h2>Tell us what<br/>you’re imagining.</h2></div><a href="mailto:hello@degit.studio" className="contact-circle">Start a<br/>conversation <ArrowUpRight/></a></section>
  </div>;
}