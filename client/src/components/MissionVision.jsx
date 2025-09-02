const MissionVision = () => {
  return (
    <section className="mission-section">
      <div className="mission-container">
        <h2 className="mission-title">
          Our Mission & Vision
        </h2>
        <p className="mission-subtitle">
          Guiding principles that drive our company forward
        </p>

        <div className="mission-content">
          <div className="mission-card">
            <div className="mission-icon">
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="mission-card-title">Quality & Reliability</h3>
            <p className="mission-card-text">
              Achieve a reputation as a quality, high-standard, and reliable solution & service provider.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="mission-card-title">Customer Satisfaction</h3>
            <p className="mission-card-text">
              Achieve 100% customer satisfaction by delivering quality products and services at affordable costs.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
            <h3 className="mission-card-title">Future Growth</h3>
            <p className="mission-card-text">
              Strive to become a leading entity in technology-based corporate solutions, always ready to take achievements to the next level.
            </p>
          </div>

          <div className="mission-highlight">
            <p className="mission-highlight-text">
              Our keys for development include innovation, transparency, and teamwork. We believe in continuous motivation and adding value to our clients' needs.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mission-section {
          padding: 6rem 1rem;
          background-color: white;
          position: relative;
        }

        .mission-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .mission-title {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1rem;
          text-align: center;
          color: #1e293b;
          animation: fadeInUp 0.8s ease-out;
        }

        .mission-subtitle {
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

        .mission-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          animation: fadeInUp 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        .mission-card {
          background-color: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-top: 4px solid #2563eb;
        }

        .mission-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .mission-icon {
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #eff6ff;
          border-radius: 50%;
          margin-bottom: 1.5rem;
          color: #2563eb;
        }

        .mission-icon svg {
          width: 1.5rem;
          height: 1.5rem;
        }

        .mission-card-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1e40af;
        }

        .mission-card-text {
          color: #475569;
          line-height: 1.6;
        }

        .mission-highlight {
          grid-column: 1 / -1;
          background-color: #eff6ff;
          border-radius: 12px;
          padding: 2.5rem;
          text-align: center;
          border-left: 4px solid #2563eb;
        }

        .mission-highlight-text {
          font-size: 1.25rem;
          font-weight: 500;
          color: #1e40af;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
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
          .mission-title {
            font-size: 2.25rem;
          }
        }

        @media (max-width: 768px) {
          .mission-section {
            padding: 4rem 1rem;
          }

          .mission-title {
            font-size: 2rem;
          }

          .mission-subtitle {
            font-size: 1.1rem;
            margin-bottom: 2rem;
          }

          .mission-content {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .mission-title {
            font-size: 1.75rem;
          }

          .mission-card {
            padding: 1.5rem;
          }

          .mission-highlight {
            padding: 1.5rem;
          }

          .mission-highlight-text {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default MissionVision;