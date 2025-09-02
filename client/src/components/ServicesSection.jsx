import { useState } from 'react';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const services = [
    {
      title: "Annual Maintenance Contracts",
      description: "Specializing in UPS, Inverters, Forklifts, SCVS with Isolation Transformers, APFC, CCTV, and Fire Fighting Systems.",
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      details: {
        image: "/images/maintenance.jpg",
        content: "Our comprehensive Annual Maintenance Contracts ensure your critical equipment operates at peak performance year-round. We provide scheduled preventive maintenance, priority service response, and discounted repair rates. Our certified technicians perform thorough inspections, cleaning, calibration, and testing to extend equipment lifespan and prevent unexpected failures."
      }
    },
    {
      title: "Health Check-Up & Maintenance",
      description: "For any brand/make of UPS, Inverters, and Forklifts.",
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      details: {
        image: "/images/health-check.jpg",
        content: "Our diagnostic health check-ups identify potential issues before they become major problems. Using advanced testing equipment, we evaluate all critical parameters including battery health, load capacity, cooling system efficiency, and power quality. You'll receive a detailed report with findings and recommendations to optimize your equipment's performance and reliability."
      }
    },
    {
      title: "Installation & Commissioning",
      description: "For any brand/make of UPS, Inverters, and Forklifts.",
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      details: {
        image: "/images/installation.jpg",
        content: "Our professional installation services ensure your new equipment is set up correctly from day one. We handle all aspects including site preparation, equipment mounting, electrical connections, and system configuration. After installation, we perform comprehensive commissioning tests to verify proper operation and provide training for your staff on safe operation and basic maintenance procedures."
      }
    },
    {
      title: "Electrical Works",
      description: "Supply and installation of electrical wiring work with materials, existing setup shifting and recommissioning.",
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      details: {
        image: "/images/electrical-works.jpg",
        content: "Our certified electricians handle all types of electrical work from basic wiring to complex power distribution systems. We use high-quality materials and follow strict safety standards. Services include new circuit installations, panel upgrades, lighting systems, and equipment relocation. All work is tested and certified to meet local electrical codes and regulations."
      }
    },
    {
      title: "Customized Solutions",
      description: "Designing customized battery cabinets and racks based on space availability per site.",
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" />
        </svg>
      ),
      details: {
        image: "/images/custom-solutions.jpg",
        content: "We design and build tailored solutions to fit your specific space and power requirements. Our engineering team creates custom battery cabinets, racks, and enclosures that maximize space utilization while ensuring proper ventilation and accessibility for maintenance. All custom solutions are designed with safety, efficiency, and future expandability in mind."
      }
    },
    {
      title: "Rental Services",
      description: "Flexible rental services for UPS systems, batteries, stabilizers, and forklifts.",
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1v-2a1 1 0 00-.293-.707l-3-3A1 1 0 0016 7h-1V5a1 1 0 00-1-1H3z" />
        </svg>
      ),
      details: {
        image: "/images/rental-services.jpg",
        content: "Our flexible rental program provides temporary power solutions for events, construction projects, equipment failures, or peak demand periods. Choose from our inventory of well-maintained UPS systems, batteries, stabilizers, and forklifts. We offer daily, weekly, or monthly rental terms with optional maintenance packages and 24/7 support."
      }
    }
  ];

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setShowModal(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">
          We excel in blending current management practices and service expertise into cost-effective solutions.
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div 
                className="service-learn-more"
                onClick={() => handleLearnMore(service)}
              >
                Learn more
                <svg className="service-arrow" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for service details */}
      {showModal && selectedService && (
        <div className="service-modal">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-image-container">
              <img 
                src={selectedService.details.image} 
                alt={selectedService.title}
                className="modal-image"
              />
              <div className="image-overlay-text">
                <h3>{selectedService.title}</h3>
              </div>
            </div>
            <div className="modal-text">
              <p>{selectedService.details.content}</p>
              <a href="/contact" className="modal-contact-btn" onClick={closeModal}>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .services-section {
          padding: 6rem 1rem;
          background-color: #f8fafc;
          position: relative;
        }

        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .services-title {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1rem;
          text-align: center;
          color: #1e293b;
          animation: fadeInUp 0.8s ease-out;
        }

        .services-subtitle {
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

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background-color: white;
          border-radius: 12px;
          padding: 2.5rem 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
          position: relative;
          overflow: hidden;
          border-top: 4px solid #2563eb;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .service-icon {
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

        .service-icon svg {
          width: 1.5rem;
          height: 1.5rem;
        }

        .service-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1e40af;
        }

        .service-description {
          color: #475569;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .service-learn-more {
          display: flex;
          align-items: center;
          color: #2563eb;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .service-arrow {
          width: 1rem;
          height: 1rem;
          margin-left: 0.5rem;
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-learn-more {
          color: #1e40af;
        }

        .service-card:hover .service-arrow {
          transform: translateX(3px);
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

        /* Modal Styles */
        .service-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
        }

        .modal-content {
          position: relative;
          background: white;
          border-radius: 12px;
          width: 90%;
          max-width: 800px;
          max-height: 90vh;
          overflow: auto;
          z-index: 1001;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          animation: modalFadeIn 0.3s ease-out;
        }

        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-close {
          position: absolute;
          top: 15px;
          right: 15px;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #6b7280;
          z-index: 1002;
        }

        .modal-image-container {
          position: relative;
          height: 300px;
          overflow: hidden;
        }

        .modal-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .image-overlay-text {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 2rem;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
          color: white;
        }

        .image-overlay-text h3 {
          font-size: 1.75rem;
          margin: 0;
        }

        .modal-text {
          padding: 2rem;
          color: #4b5563;
          line-height: 1.6;
        }

        .modal-contact-btn {
          display: block;
          margin-top: 1.5rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          text-align: center;
          text-decoration: none;
        }

        .modal-contact-btn:hover {
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          transform: translateY(-2px);
        }

        /* Responsive styles */
        @media (max-width: 1024px) {
          .services-title {
            font-size: 2.25rem;
          }
        }

        @media (max-width: 768px) {
          .services-section {
            padding: 4rem 1rem;
          }

          .services-title {
            font-size: 2rem;
          }

          .services-subtitle {
            font-size: 1.1rem;
            margin-bottom: 2rem;
          }

          .services-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }

          .modal-image-container {
            height: 200px;
          }
          
          .image-overlay-text h3 {
            font-size: 1.5rem;
          }

          .modal-text {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .services-title {
            font-size: 1.75rem;
          }

          .service-card {
            padding: 1.5rem;
          }

          .modal-image-container {
            height: 150px;
          }

          .image-overlay-text h3 {
            font-size: 1.25rem;
          }

          .modal-text {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;