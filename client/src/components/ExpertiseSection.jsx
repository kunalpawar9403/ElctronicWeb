const ExpertiseSection = () => {
  return (
    <section className="expertise-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Areas of Expertise</h2>
          <p className="section-subtitle">
            AES's main strength lies in its blend of specialized professionals and highly focused operations. 
            Our ability to increase customer awareness sets us apart from competitors.
          </p>
        </div>
        
        <div className="expertise-grid">
          <div className="expertise-card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </div>
            <h3 className="card-title">Service Approach</h3>
            <div className="card-content">
              <p>
                We excel in blending current management practices and service expertise into cost-effective service solutions and products.
              </p>
              <p>
                We also prioritize skill transfer to client personnel, ensuring your team can handle basic maintenance and troubleshooting.
              </p>
            </div>
          </div>
          
          <div className="expertise-card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            <h3 className="card-title">Key Service Areas</h3>
            <ul className="service-list">
              <li className="service-item">
                <svg className="bullet-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                <span>Annual Maintenance Contracts (AMC) for UPS, Inverters, Forklifts, etc.</span>
              </li>
              <li className="service-item">
                <svg className="bullet-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                <span>Health Check-Up & Maintenance for any brand/make</span>
              </li>
              <li className="service-item">
                <svg className="bullet-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                <span>Installation & Commissioning services</span>
              </li>
              <li className="service-item">
                <svg className="bullet-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                <span>Complete Electrical Works</span>
              </li>
              <li className="service-item">
                <svg className="bullet-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                <span>Customized Solutions based on your requirements</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .expertise-section {
          padding: 5rem 0;
          background-color: #f8fafc;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1rem;
          position: relative;
          display: inline-block;
           padding-bottom: 15px;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #2563eb, #3b82f6);
          border-radius: 2px;
        }
        
        .section-subtitle {
          font-size: 1.125rem;
          color: #64748b;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .expertise-card {
          background: white;
          border-radius: 12px;
          padding: 2.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(226, 232, 240, 0.7);
        }
        
        .expertise-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        .card-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: white;
        }
        
        .card-icon svg {
          width: 30px;
          height: 30px;
        }
        
        .card-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 1.5rem;
        }
        
        .card-content {
          color: #475569;
          line-height: 1.7;
        }
        
        .card-content p {
          margin-bottom: 1rem;
        }
        
        .card-content p:last-child {
          margin-bottom: 0;
        }
        
        .service-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .service-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1rem;
          color: #475569;
          line-height: 1.6;
        }
        
        .bullet-icon {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          margin-right: 1rem;
          color: #2563eb;
        }
        
        /* Responsive styles */
        @media (max-width: 768px) {
          .expertise-section {
            padding: 3rem 0;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .expertise-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 480px) {
          .section-title {
            font-size: 1.75rem;
          }
          
          .expertise-card {
            padding: 1.75rem;
          }
        }
        
        /* Animation */
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
        
        .expertise-card {
          animation: fadeInUp 0.6s ease forwards;
        }
        
        .expertise-card:nth-child(1) {
          animation-delay: 0.1s;
        }
        
        .expertise-card:nth-child(2) {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
};

export default ExpertiseSection;