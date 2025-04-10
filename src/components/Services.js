import React from "react";
import '../styles/services.css';
const services = [
  { title: "Web Development", 
    description: "As a skilled web developer, I offer custom website development from scratch, website redesign and revamp, e-commerce website development, and ongoing website maintenance and updates." },
  { title: "Responsive Design", 
    description: "I specialize in responsive design, ensuring that your website is mobile-friendly, cross-browser compatible, and provides a seamless user experience across devices." },
  { title: "Frontend Development", 
    description: "My frontend development expertise includes building fast, secure, and scalable solutions using HTML, CSS, JavaScript, and modern frontend frameworks" },
  { title: "Backend Development", 
    description: "I also offer backend development services, building robust and scalable solutions using server-side programming languages, databases, and APIs." },
  { title: "Support & Maintenance", 
    description: "Provide ongoing support, bug fixes, and feature updates to keep your application running smoothly." },
  { title: "Web Identity & Branding", 
    description: "My web ideation services involve brainstorming and conceptualizing web project ideas, defining project scope, goals, and objectives, and developing tailored web strategies." },
  { title: "Creative Thinking & Problem-Solving", 
    description: "I bring creative thinking to the table, applying problem-solving skills to web development challenges and collaborating with clients to bring their unique vision to life." },
  {title:"Website Security",
   description:"I provide website security services, protecting your website from hackers, malware, and other online threats. From firewall configuration to regular security audits, I'll work with you to ensure your website is secure and protected."
  },
  ];

const Services = () => {
  return (
    <div className="services-con" id="services">
  <h1>MY <span>SERVICES</span></h1>
  <div className="services-grid">
    {services.map((service, index) => (
      <div className="service-card" key={index}>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    ))}
  </div>
</div>

  );
};

export default Services;
