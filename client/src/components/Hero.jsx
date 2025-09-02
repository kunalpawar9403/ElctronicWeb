import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Comprehensive Electrical & Energy Solutions
        </h1>
        <p className="hero-subtitle">
          Your trusted partner for comprehensive electrical service and energy solutions.
        </p>
        <div className="hero-buttons">
          <Link to="/contact" className="primary-button">
            Contact Us
            <svg className="button-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link to="/services" className="secondary-button">
            Learn More
            <svg className="button-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
          color: white;
          padding: 6rem 1rem;
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 75% 50%, rgba(255,255,255,0.1) 0%, transparent 70%);
        }

        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
          animation: fadeInUp 0.8s ease-out;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          max-width: 600px;
          margin: 0 auto 3rem;
          opacity: 0.9;
          line-height: 1.6;
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .hero-buttons {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          animation: fadeInUp 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        .primary-button, .secondary-button {
          display: inline-flex;
          align-items: center;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1.125rem;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .primary-button {
          background-color: white;
          color: #2563eb;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .primary-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          background-color: #f8fafc;
        }

        .secondary-button {
          background-color: transparent;
          color: white;
          border: 2px solid rgba(255,255,255,0.3);
        }

        .secondary-button:hover {
          transform: translateY(-3px);
          background-color: rgba(255,255,255,0.1);
          border-color: white;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .button-icon {
          width: 1.25rem;
          height: 1.25rem;
          margin-left: 0.75rem;
          transition: transform 0.3s ease;
        }

        .primary-button:hover .button-icon {
          transform: translateX(3px);
        }

        .secondary-button:hover .button-icon {
          transform: rotate(45deg);
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
          .hero-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 4rem 1rem;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .primary-button, .secondary-button {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;