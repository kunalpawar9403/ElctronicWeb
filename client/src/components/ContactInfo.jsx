const ContactInfo = () => {
  return (
    <div className="contact-info-wrapper">
      <div className="contact-info-container">
        <h2 className="contact-info-title">Contact Information</h2>
        
        <div className="contact-details">
          <div className="contact-item">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div>
              <h3 className="contact-item-title">Address</h3>
              <address className="contact-item-content">
               A2 702, Kesar Tree Town, Near Jay Ganesh Lawns, Moshi-Alandi BRTS road, Moshi, Pune - 412105.
              </address>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div>
              <h3 className="contact-item-title">Email</h3>
              <p className="contact-item-content">
                <a href="mailto:aastechenergy@gmail.com" className="contact-link">
                  aastechenergy@gmail.com
                </a>
              </p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
            </div>
            <div>
              <h3 className="contact-item-title">Phone</h3>
              <p className="contact-item-content">
                <a href="tel:+919420418617" className="contact-link">+91 9420418617</a>
                <br />
                <a href="tel:+919284334398" className="contact-link">+91 9284334398</a>
              </p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
              </svg>
            </div>
            <div>
              <h3 className="contact-item-title">Business Hours</h3>
              <div className="contact-item-content">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Outer Wrapper */
        .contact-info-wrapper {
          padding: 2rem;
          max-width: 800px;
          margin: 0 auto;
          width: 100%;
        }

        /* Container Styles */
        .contact-info-container {
          background-color: white;
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid #e2e8f0;
        }

        /* Title Styles */
        .contact-info-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 2.5rem;
          text-align: center;
          position: relative;
          padding-bottom: 1rem;
        }

        .contact-info-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #2563eb, #3b82f6);
          border-radius: 2px;
        }

        /* Contact Details Layout */
        .contact-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        /* Contact Item Styles */
        .contact-item {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
        }

        .contact-icon {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .contact-icon svg {
          width: 24px;
          height: 24px;
        }

        .contact-item-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1e40af;
          margin-bottom: 0.75rem;
        }

        .contact-item-content {
          color: #475569;
          line-height: 1.6;
          font-size: 0.9375rem;
        }

        .contact-item-content p {
          margin: 0.25rem 0;
        }

        /* Link Styles */
        .contact-link {
          color: #2563eb;
          text-decoration: none;
          transition: all 0.2s ease;
          font-weight: 500;
        }

        .contact-link:hover {
          color: #1e40af;
          text-decoration: underline;
        }

        /* Address Specific Styles */
        address {
          font-style: normal;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .contact-info-wrapper {
            padding: 1.5rem;
          }

          .contact-info-container {
            padding: 2rem;
          }

          .contact-info-title {
            font-size: 1.75rem;
            margin-bottom: 2rem;
          }

          .contact-details {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .contact-info-wrapper {
            padding: 1rem;
          }

          .contact-info-container {
            padding: 1.5rem;
          }

          .contact-info-title {
            font-size: 1.5rem;
          }

          .contact-item {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 1rem;
          }
        }

        /* Dark Mode Support */
        @media (prefers-color-scheme: dark) {
          .contact-info-container {
            background-color: #1e293b;
            border-color: #334155;
          }

          .contact-info-title {
            color: #f8fafc;
          }

          .contact-item-content {
            color: #e2e8f0;
          }

          .contact-link {
            color: #93c5fd;
          }

          .contact-link:hover {
            color: #60a5fa;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactInfo;