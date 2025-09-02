import { useState } from 'react';

const ProductCategories = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);
  
  const categories = [
    {
      name: "UPS Systems",
      brands: ["Emerson", "Eaton", "APC", "Socomec"],
      range: "600VA to 500kVA",
      image: "/images/ups.jpg"
    },
    {
      name: "Inverters",
      brands: ["Luminous", "Su-Kam", "Genus", "Arise"],
      range: "400VA to 100kVA",
      image: "/images/inverter.jpg"
    },
    {
      name: "Forklifts",
      brands: ["Toyota", "STILL", "YALE", "Nilkamal", "Jugeinrich"],
      range: "Various capacities",
      image: "/images/forklift.jpg"
    },
    {
      name: "Batteries",
      brands: ["Exide", "Amaron", "INA-Rocket", "HBL", "Autobat"],
      range: "Various specifications",
      image: "/images/batteries.jpg"
    },
    {
      name: "Voltage Stabilizers",
      brands: ["Servo Controlled Voltage Stabilizers"],
      range: "01kVA to 500kVA",
      image: "/images/stabilizer.jpg"
    },
    {
      name: "Other Products",
      brands: [
        "Isolation Transformers",
        "Transient Voltage Surge Suppressor",
        "APFC Panels",
        "Harmonics Filters",
        "Fire Fighting Systems",
        "CCTV"
      ],
      range: "",
      image: "/images/electrical.jpg"
    }
  ];

  return (
    <section className="product-section">
      <div className="product-container">
        <h2 className="product-title">Product Categories</h2>
        <p className="product-subtitle">
          Explore our comprehensive range of electrical and energy solutions
        </p>

        <div className="product-grid">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="product-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setEnlargedImage(category.image)}
            >
              <div className="product-image-container">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="product-image"
                  loading="lazy"
                />
                <div className="product-overlay" />
              </div>
              <div className="product-content">
                <h3 className="product-name">{category.name}</h3>
                {category.range && (
                  <p className="product-range">{category.range}</p>
                )}
                
                <ul className="product-brands">
                  {category.brands.map((brand, i) => (
                    <li key={i} className="product-brand">
                      <svg className="brand-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{brand}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {enlargedImage && (
        <div className="image-modal" onClick={() => setEnlargedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={enlargedImage} 
              alt="Enlarged view" 
              className="enlarged-image"
            />
            <button 
              className="close-button"
              onClick={() => setEnlargedImage(null)}
              aria-label="Close image"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .product-section {
          padding: 6rem 1rem;
          background-color: #f8fafc;
          position: relative;
        }

        .product-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .product-title {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1rem;
          text-align: center;
          color: #1e293b;
          animation: fadeInUp 0.8s ease-out;
        }

        .product-subtitle {
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

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .product-card {
          background-color: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
          cursor: pointer;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .product-image-container {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .product-card:hover .product-image {
          transform: scale(1.05);
        }

        .product-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.1), transparent);
        }

        .product-content {
          padding: 1.5rem;
        }

        .product-name {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #1e40af;
        }

        .product-range {
          color: #2563eb;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .product-brands {
          display: grid;
          gap: 0.5rem;
        }

        .product-brand {
          display: flex;
          align-items: center;
          color: #475569;
        }

        .brand-icon {
          width: 1rem;
          height: 1rem;
          margin-right: 0.5rem;
          color: #2563eb;
          flex-shrink: 0;
        }

        /* Image Modal Styles */
        .image-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          cursor: pointer;
          animation: fadeIn 0.3s ease-out;
        }

        .modal-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
          animation: zoomIn 0.3s ease-out;
          cursor: default;
        }

        .enlarged-image {
          max-width: 100%;
          max-height: 80vh;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          object-fit: contain;
        }

        .close-button {
          position: absolute;
          top: -40px;
          right: 0;
          background: none;
          border: none;
          color: white;
          font-size: 2.5rem;
          cursor: pointer;
          transition: transform 0.2s ease;
          padding: 0.5rem;
        }

        .close-button:hover {
          transform: scale(1.2);
          color: #f8fafc;
        }

        /* Animations */
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

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes zoomIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        /* Responsive styles */
        @media (max-width: 1024px) {
          .product-title {
            font-size: 2.25rem;
          }
        }

        @media (max-width: 768px) {
          .product-section {
            padding: 4rem 1rem;
          }

          .product-title {
            font-size: 2rem;
          }

          .product-subtitle {
            font-size: 1.1rem;
            margin-bottom: 2rem;
          }

          .product-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }

          .close-button {
            top: -30px;
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .product-title {
            font-size: 1.75rem;
          }

          .product-image-container {
            height: 180px;
          }

          .modal-content {
            max-width: 95%;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductCategories;