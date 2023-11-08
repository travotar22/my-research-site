import React from 'react';
import './Contactpage.css'; // Make sure to create an accompanying CSS file for styling

// Dummy data for team members - replace with actual data
const teamMembers = [
    {
        name: 'Mrs. Narmada Gamage',
        role: 'Supervisor',
        description: 'Computer Systems Engineering - SLIIT ',
        image: process.env.PUBLIC_URL + '/Narmada-Gamage-2.jpg',
        // replace with actual path
        },
    {
    name: 'Sunil Gunasinghage R.W',
    role: 'IT20212704 (Leader)',
    description: 'Computer Systems Engineering - SLIIT',
    image: process.env.PUBLIC_URL + '/ravitha.jpg', // replace with actual path
    },
    {
    name: 'Ekanayake J.S.P.A',
    role: 'IT20108922',
    description: 'Computer Systems Engineering - SLIIT',
    image: process.env.PUBLIC_URL + '/sadev.jpg' // replace with actual path
  },
  {
    name: 'M.M.S Silve',
    role: 'IT20383770',
    description: 'Computer Systems Engineering - SLIIT',
    image: process.env.PUBLIC_URL +  '/Malith.jpg' // replace with actual path
  },
  {
    name: 'R.K. Kodikara',
    role: 'IT20182182',
    description: 'Computer Systems Engineering - SLIIT',
    image: process.env.PUBLIC_URL + '/ravindu.jpg' // replace with actual path
  },

  
];
const AboutPage = () => {
    return (
      <div className="about-container">
        <h1>Meet Our Team</h1>
        <div className="team-grid">
          {teamMembers.map(member => (
            <div className="team-member-card" key={member.name}>
              <div className="team-member-photo" style={{ backgroundImage: `url(${member.image})` }}></div>
              <div className="team-member-info">
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
                <p className="team-member-description">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default AboutPage;