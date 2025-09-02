const MapLocation = () => {
  return (
    <div className="map-section">
      <div className="map-container">
        <h2 className="map-title">Our Location</h2>
        <p className="map-subtitle">Visit us at Kesar Tree Town</p>
        
        <div className="map-wrapper">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.262715529847!2d73.7918573154166!3d18.56266098738481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e6a8f1f4b5%3A0x1a3b1d1b1b1b1b1b!2sKesar%20Tree%20Town!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{border:0}}
            allowFullScreen="" 
            loading="lazy"
            title="Kesar Tree Town Location"
          />
        </div>
        
        <div className="map-address">
          <div className="address-item">
            <svg className="address-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <p>A2 702, Kesar Tree Town, Near Jay Ganesh Lawns, Moshi-Alandi BRTS road, Moshi, Pune - 412105</p>
          </div>
          <div className="address-item">
            <svg className="address-icon" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <div>
              <p>+91 9420418617</p>
              <p>+91 9284334398</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .map-section {
          padding: 4rem 1rem;
          background-color: #f8fafc;
          position: relative;
        }

        .map-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .map-title {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1rem;
          text-align: center;
          color: #1e293b;
          animation: fadeInUp 0.8s ease-out;
        }

        .map-subtitle {
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

        .map-wrapper {
          height: 500px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          margin-bottom: 2rem;
          position: relative;
        }

        .map-wrapper iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        .map-address {
          background: white;
          border-radius: 8px;
          padding: 2rem;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          max-width: 800px;
          margin: 0 auto;
        }

        .address-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1rem;
          color: #334155;
        }

        .address-item:last-child {
          margin-bottom: 0;
        }

        .address-icon {
          width: 1.5rem;
          height: 1.5rem;
          margin-right: 1rem;
          color: #2563eb;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .address-item div p {
          margin: 0.25rem 0;
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
          .map-title {
            font-size: 2.25rem;
          }
        }

        @media (max-width: 768px) {
          .map-section {
            padding: 3rem 1rem;
          }

          .map-title {
            font-size: 2rem;
          }

          .map-subtitle {
            font-size: 1.1rem;
            margin-bottom: 2rem;
          }

          .map-wrapper {
            height: 400px;
          }

          .map-address {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .map-title {
            font-size: 1.75rem;
          }

          .map-wrapper {
            height: 300px;
          }

          .address-item {
            flex-direction: column;
            align-items: flex-start;
          }

          .address-icon {
            margin-right: 0;
            margin-bottom: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default MapLocation;