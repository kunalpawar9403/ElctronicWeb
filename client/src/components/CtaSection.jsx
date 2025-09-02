import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">Ready to Get Started?</h2>
        <p className="cta-subtitle">
          Contact us today to discuss your energy solution needs and how we can help your business.
        </p>
        <Link to="/contact" className="cta-button">
          Contact Us Now
          <svg className="cta-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>

      <style jsx>{`
        .cta-section {
          background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
          color: white;
          padding: 5rem 1rem;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 70%);
        }

        .cta-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .cta-subtitle {
          font-size: 1.25rem;
          max-width: 700px;
          margin: 0 auto 2.5rem;
          opacity: 0.9;
          line-height: 1.6;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          background-color: white;
          color: #2563eb;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.125rem;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          position: relative;
          overflow: hidden;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          background-color: #f8fafc;
        }

        .cta-button:active {
          transform: translateY(0);
        }

        .cta-icon {
          width: 1.25rem;
          height: 1.25rem;
          margin-left: 0.75rem;
          transition: transform 0.3s ease;
        }

        .cta-button:hover .cta-icon {
          transform: translateX(3px);
        }

        /* Responsive styles */
        @media (max-width: 768px) {
          .cta-section {
            padding: 4rem 1rem;
          }

          .cta-title {
            font-size: 2rem;
          }

          .cta-subtitle {
            font-size: 1.1rem;
            padding: 0 1rem;
          }
        }

        @media (max-width: 480px) {
          .cta-title {
            font-size: 1.75rem;
          }

          .cta-button {
            padding: 0.875rem 2rem;
            font-size: 1rem;
          }
        }

        /* Animation */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default CtaSection;