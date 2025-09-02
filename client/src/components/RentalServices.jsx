import { useState } from 'react';

const RentalServices = () => {
  const rentalItems = [
    {
      name: "UPS Systems",
      description: "Temporary power solutions for events or during maintenance periods.",
      introText: "Power Protection",
      detailText: "Our UPS rental systems provide uninterrupted power supply for critical operations during power outages. Available in various capacities from 600VA to 500kVA.",
      image: "/images/ups-rental.jpg",
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: "Batteries",
      description: "Backup power solutions for short-term requirements.",
      introText: "Energy Backup",
      detailText: "High-quality battery rental solutions for temporary power needs. Our batteries are maintained at optimal performance levels.",
      image: "/images/battery-rental.jpg",
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3.5 2A1.5 1.5 0 002 3.5v13A1.5 1.5 0 003.5 18h13a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-13zm10.907 4.464a.75.75 0 10-1.214-.883l-2.35 3.226-1.522-1.463a.75.75 0 00-1.06 1.061l2.221 2.136a.75.75 0 001.14-.094l3.1-4.25a.75.75 0 00.116-.832l-.028-.05z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: "Stabilizers",
      description: "Voltage stabilization equipment for temporary setups.",
      introText: "Voltage Control",
      detailText: "Rent high-performance voltage stabilizers to protect your equipment from voltage fluctuations. Suitable for both commercial and industrial applications.",
      image: "/images/stabilizer-rental.jpg",
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: "Forklifts",
      description: "Material handling equipment for short-term projects.",
      introText: "Material Handling",
      detailText: "Our forklift rental service provides well-maintained equipment for your material handling needs. Suitable for warehouses and industrial applications.",
      image: "/images/forklift-rental.jpg",
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1v-2a1 1 0 00-.293-.707l-3-3A1 1 0 0016 7h-1V5a1 1 0 00-1-1H3z" />
        </svg>
      )
    }
  ];

  return (
    <section className="rental-section">
      <div className="rental-container">
        <h2 className="rental-title">Rental Services</h2>
        <p className="rental-subtitle">
          Beyond our comprehensive AMC services, AASTECH Energy Solutions also provides flexible rental services for various essential equipment.
        </p>
        
        <div className="rental-grid">
          {rentalItems.map((item, index) => (
            <div 
              key={index} 
              className="rental-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="rental-icon">
                {item.icon}
              </div>
              <h3 className="rental-item-name">{item.name}</h3>
              <p className="rental-item-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .rental-section {
          padding: 6rem 1rem;
          background-color: #f8fafc;
          position: relative;
        }

        .rental-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .rental-title {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1rem;
          text-align: center;
          color: #1e293b;
          animation: fadeInUp 0.8s ease-out;
        }

        .rental-subtitle {
          font-size: 1.25rem;
          max-width: 800px;
          margin: 0 auto 3rem;
          opacity: 0.8;
          line-height: 1.6;
          text-align: center;
          color: #475569;
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .rental-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .rental-card {
          background-color: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
          position: relative;
          overflow: hidden;
          border-top: 4px solid #2563eb;
        }

        .rental-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .rental-icon {
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #eff6ff;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          color: #2563eb;
        }

        .rental-icon svg {
          width: 1.5rem;
          height: 1.5rem;
        }

        .rental-item-name {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1e40af;
        }

        .rental-item-description {
          color: #475569;
          line-height: 1.6;
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
          .rental-title {
            font-size: 2.25rem;
          }
        }

        @media (max-width: 768px) {
          .rental-section {
            padding: 4rem 1rem;
          }

          .rental-title {
            font-size: 2rem;
          }

          .rental-subtitle {
            font-size: 1.1rem;
            margin-bottom: 2rem;
          }

          .rental-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          }
        }

        @media (max-width: 480px) {
          .rental-title {
            font-size: 1.75rem;
          }

          .rental-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default RentalServices;