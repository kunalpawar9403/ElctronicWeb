const AboutSection = () => {
  const aboutData = {
    title: "About AASTECH",
    heading: "Introduction to AASTECH Energy Solutions",
    paragraphs: [
      "AASTECH Energy Solutions (AES) provides excellent service solutions for various trades and industries. We offer optimum, customized solutions tailored to your organization's specific requirements, regardless of its size or field.",
      "Established in September 2017, AES began as an electrical service and solutions provider. We focus exclusively on high-quality, cost-effective services and implementation for existing setups. Our skilled and experienced team ensures tremendous progress.",
      "Our commitment to excellence and customer satisfaction drives us to continuously improve and expand our service offerings."
    ],
    image: {
      src: "/images/team-1.png",
      alt: "AASTECH Team Working Together"
    }
  };

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">{aboutData.title}</h2>
          <p className="about-subtitle">Innovative Solutions for Your Energy Needs</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3 className="about-heading">{aboutData.heading}</h3>
            <div className="about-paragraphs">
              {aboutData.paragraphs.map((paragraph, index) => (
                <p key={index} className="about-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
            <a href="/about" className="about-button">
              Learn More About Us
              <svg className="button-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          
          <div className="about-image-container">
            <div className="image-wrapper">
              <img 
                src={aboutData.image.src} 
                alt={aboutData.image.alt} 
                className="about-image"
                loading="lazy"
              />
              <div className="image-overlay"></div>
              <div className="image-badge">
                <span className="years-badge">20+ Years</span>
                <span className="experience-text">of Industry Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* About Section Styles */
        .about-section {
          padding: 6rem 0;
          background-color: #f9fafb;
          position: relative;
          overflow: hidden;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        .about-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .about-title {
          font-size: 2.75rem;
          font-weight: 800;
          color: #111827;
          margin-bottom: 0.5rem;
          position: relative;
          display: inline-block;
        }

        .about-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #10b981);
          border-radius: 2px;
        }

        .about-subtitle {
          font-size: 1.25rem;
          color: #6b7280;
          margin-top: 1rem;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }

        .about-text {
          order: 2;
        }

        .about-heading {
          font-size: 2rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 1.5rem;
          line-height: 1.3;
        }

        .about-paragraphs {
          margin-bottom: 2rem;
        }

        .about-paragraph {
          color: #4b5563;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .about-button {
          display: inline-flex;
          align-items: center;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          color: white;
          border: none;
          border-radius: 0.375rem;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-decoration: none;
        }

        .about-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
          background: linear-gradient(135deg, #2563eb, #4f46e5);
        }

        .button-icon {
          width: 1.25rem;
          height: 1.25rem;
          margin-left: 0.5rem;
          transition: transform 0.3s ease;
        }

        .about-button:hover .button-icon {
          transform: translateX(3px);
        }

        .about-image-container {
          order: 1;
          position: relative;
        }

        .image-wrapper {
          position: relative;
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
                      0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .about-image {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%);
          z-index: 1;
        }

        .image-badge {
          position: absolute;
          bottom: 2rem;
          left: 2rem;
          z-index: 2;
          color: white;
          display: flex;
          flex-direction: column;
        }

        .years-badge {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1;
          background: linear-gradient(90deg, #3b82f6, #10b981);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 0.25rem;
        }

        .experience-text {
          font-size: 1rem;
          font-weight: 500;
          color: white;
        }

        /* Responsive Styles */
        @media (min-width: 768px) {
          .about-content {
            grid-template-columns: repeat(2, 1fr);
            gap: 5rem;
          }

          .about-text {
            order: 1;
            padding-right: 1rem;
          }

          .about-image-container {
            order: 2;
          }

          .about-title {
            font-size: 3rem;
          }

          .about-heading {
            font-size: 2.25rem;
          }
        }

        @media (min-width: 1024px) {
          .about-section {
            padding: 8rem 0;
          }

          .about-container {
            padding: 0 3rem;
          }

          .about-header {
            margin-bottom: 5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;