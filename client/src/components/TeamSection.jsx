const TeamSection = () => {
  const teamMembers = [
    {
      name: "Mr. Sachin Patil",
      role: "Founder & CEO",
      bio: "With over 20 years of experience in the electrical solutions industry, our founder established AASTECH to provide reliable and innovative energy solutions.",
      social: {
        linkedin: "https://www.linkedin.com/in/sachin-patil-7463791a5/",
        email: "aastechenergy@gmail.com"
      },
      image: "/images/team-1.png" // Specific image path
    }
  ];

  return (
    <section className="team-section">
      <div className="team-container">
        <h2 className="team-title">Our Founder</h2>
        <p className="team-subtitle">
          Meet the dedicated professional powering AASTECH Energy Solutions
        </p>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="team-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="team-image-container">
                <div className="image-wrapper">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="team-image"
                    onError={(e) => {
                      e.target.src = '/images/team-default.jpg'; // Fallback image
                    }}
                  />
                </div>
              </div>
              <div className="team-content">
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
                <p className="team-member-bio">{member.bio}</p>
                
                <div className="team-social-links">
                  <a href={member.social.linkedin} className="team-social-link" aria-label={`${member.name} LinkedIn`}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href={`mailto:${member.social.email}`} className="team-social-link" aria-label={`Email ${member.name}`}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .team-section {
          padding: 6rem 1rem;
          background-color: #f8fafc;
          position: relative;
        }

        .team-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .team-title {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1rem;
          text-align: center;
          color: #1e293b;
          animation: fadeInUp 0.8s ease-out;
        }

        .team-subtitle {
          font-size: 1.25rem;
          max-width: 600px;
          margin: 0 auto 3rem;
          opacity: 0.8;
          line-height: 1.6;
          text-align: center;
          color: #475569;
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 500px;
          margin: 0 auto;
        }

        .team-card {
          background-color: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem 2rem 3rem;
        }

        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .team-image-container {
          position: relative;
          width: 200px;
          height: 200px;
          margin-bottom: 1.5rem;
        }

        .image-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          border-radius: 50%;
          overflow: hidden;
          border: 5px solid #eff6ff;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .team-image {
          width: 100%;
          height: 150%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.5s ease;
        }

        .team-card:hover .team-image {
          transform: scale(1.05);
        }

        .team-content {
          padding: 0;
          text-align: center;
        }

        .team-member-name {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #1e40af;
        }

        .team-member-role {
          color: #2563eb;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .team-member-bio {
          color: #475569;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .team-social-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .team-social-link {
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #eff6ff;
          border-radius: 50%;
          color: #2563eb;
          transition: all 0.3s ease;
        }

        .team-social-link:hover {
          background-color: #2563eb;
          color: white;
          transform: translateY(-3px);
        }

        .team-social-link svg {
          width: 1rem;
          height: 1rem;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive styles */
        @media (max-width: 1024px) {
          .team-title {
            font-size: 2.25rem;
          }
        }

        @media (max-width: 768px) {
          .team-section {
            padding: 4rem 1rem;
          }

          .team-title {
            font-size: 2rem;
          }

          .team-subtitle {
            font-size: 1.1rem;
            margin-bottom: 2rem;
          }

          .team-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          }

          .team-image-container {
            width: 180px;
            height: 180px;
          }
        }

        @media (max-width: 480px) {
          .team-title {
            font-size: 1.75rem;
          }

          .team-image-container {
            width: 160px;
            height: 160px;
          }

          .team-card {
            padding: 1.5rem 1.5rem 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default TeamSection;