const Footer = () => {
  // Footer data organized for better maintainability
  const footerData = {
    companyInfo: {
      title: "AASTECH",
      description: "Your trusted partner for comprehensive electrical service and energy solutions."
    },
    quickLinks: [
      { path: "/", label: "Home" },
      { path: "/about", label: "About" },
      { path: "/services", label: "Services" },
      { path: "/products", label: "Products" },
      { path: "/contact", label: "Contact" }
    ],
    services: [
      "Annual Maintenance Contracts",
      "Health Check-Up & Maintenance",
      "Installation & Commissioning",
      "Electrical Works",
      "Customized Solutions"
    ],
    contactInfo: {
      address: "A2 702, Kesar Tree Town, Near Jay Ganesh Lawns, Moshi-Alandi BRTS road, Moshi, Pune - 412105.",
      phones: ["+91 9420418617", "+91 9284334398"],
      email: "aastechenergy@gmail.com"
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-heading">{footerData.companyInfo.title}</h3>
            <p className="footer-text">{footerData.companyInfo.description}</p>
          </div>
          
          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-subheading">Quick Links</h4>
            <ul className="footer-links">
              {footerData.quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.path} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-subheading">Services</h4>
            <ul className="footer-services">
              {footerData.services.map((service, index) => (
                <li key={index} className="footer-service-item">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-subheading">Contact Us</h4>
            <address className="footer-address">
              <p>{footerData.contactInfo.address}</p>
              <div className="footer-contact-details">
                {footerData.contactInfo.phones.map((phone, index) => (
                  <p key={index}>
                    <a href={`tel:${phone.replace(/\s+/g, '')}`} className="footer-contact-link">
                      {phone}
                    </a>
                  </p>
                ))}
                <p>
                  <a href={`mailto:${footerData.contactInfo.email}`} className="footer-contact-link">
                    {footerData.contactInfo.email}
                  </a>
                </p>
              </div>
            </address>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} AASTECH Energy Solutions. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        /* Footer Styles */
        .footer {
          background-color: #1f2937;
          color: #f9fafb;
          padding: 3rem 0;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2.5rem;
          margin-bottom: 3rem;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
        }

        .footer-heading {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .footer-subheading {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .footer-text {
          color: #d1d5db;
          line-height: 1.6;
        }

        .footer-links,
        .footer-services {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-link {
          color: #d1d5db;
          transition: color 0.3s ease;
          text-decoration: none;
        }

        .footer-link:hover {
          color: #60a5fa;
        }

        .footer-service-item {
          color: #d1d5db;
          line-height: 1.6;
        }

        .footer-address {
          font-style: normal;
          color: #d1d5db;
          line-height: 1.6;
        }

        .footer-contact-details {
          margin-top: 0.5rem;
        }

        .footer-contact-link {
          color: #d1d5db;
          transition: color 0.3s ease;
          text-decoration: none;
        }

        .footer-contact-link:hover {
          color: #60a5fa;
        }

        .footer-copyright {
          border-top: 1px solid #374151;
          padding-top: 2rem;
          text-align: center;
          color: #9ca3af;
        }

        /* Responsive Styles */
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;