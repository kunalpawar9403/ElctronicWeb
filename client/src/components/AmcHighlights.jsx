const AmcHighlights = () => {
  const features = [
    {
      title: "All Parts Covered",
      description: "All parts of UPS and Forklifts are covered under the AMC contract, including battery replacements if faulty."
    },
    {
      title: "No Capacity Criteria",
      description: "No minimum capacity (kVA) criteria; any capacity from 01kVA to 500kVA is considered."
    },
    {
      title: "Any Make/Brand",
      description: "We offer AMC contracts for any make or brand of UPS and Forklifts, without specific brand restrictions."
    },
    {
      title: "All Forklift Types",
      description: "We cover all types of Forklifts (Electrical, Diesel, or any other) under our AMC."
    }
  ];

  return (
    <section className="amc-section">
      <div className="amc-container">
        <h2 className="section-title">AMC Highlights</h2>
        <p className="section-subtitle">
          AASTECH's Annual Maintenance Contracts (AMC) for UPS and Forklifts are designed for complete transparency and comprehensive coverage, ensuring no hidden costs or exclusions.
        </p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Section Styles */
        .amc-section {
          background-color: #f1f5f9;
          padding: 4rem 0;
        }

        .amc-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Title Styles */
        .section-title {
          text-align: center;
          font-size: 2rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 1rem;
       
        }

        .section-subtitle {
          text-align: center;
          color: #475569;
          font-size: 1.1rem;
          line-height: 1.6;
          max-width: 72rem;
          margin: 0 auto 2rem;
        }

        /* Features Grid */
        .features-grid {
          display: grid;
          gap: 2rem;
          margin-top: 3rem;
        }

        /* Feature Card */
        .feature-card {
          background-color: white;
          padding: 2rem;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #2563eb;
          margin-bottom: 1rem;
          text-align: center;
        }

        .feature-description {
          color: #475569;
          line-height: 1.6;
          text-align: center;
        }

        /* Responsive Styles */
        @media (min-width: 768px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 480px) {
          .amc-section {
            padding: 3rem 0;
          }

          .section-title {
            font-size: 1.75rem;
          }

          .section-subtitle {
            font-size: 1rem;
          }

          .feature-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AmcHighlights;