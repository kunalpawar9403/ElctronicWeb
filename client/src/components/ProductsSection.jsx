const ProductsSection = () => {
  const products = [
    {
      category: "UPS Brands",
      items: ["Emerson", "Eaton", "APC", "Socomec (600VA to 500kVA)"],
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      category: "Inverter Brands",
      items: ["Luminous", "Su-Kam", "Genus", "Arise (400VA to 100kVA)"],
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      category: "Forklift Brands",
      items: ["Toyota", "STILL", "YALE", "Nilkamal", "Jugeinrich"],
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1v-2a1 1 0 00-.293-.707l-3-3A1 1 0 0016 7h-1V5a1 1 0 00-1-1H3z" />
        </svg>
      )
    },
    {
      category: "Battery Brands",
      items: ["Exide", "Amaron", "INA-Rocket", "HBL", "Autobat"],
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3.5 2A1.5 1.5 0 002 3.5v13A1.5 1.5 0 003.5 18h13a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-13zm10.907 4.464a.75.75 0 10-1.214-.883l-2.35 3.226-1.522-1.463a.75.75 0 00-1.06 1.061l2.221 2.136a.75.75 0 001.14-.094l3.1-4.25a.75.75 0 00.116-.832l-.028-.05z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      category: "Other Products",
      items: [
        "Servo Controlled Voltage Stabilizers (01kVA to 500kVA)",
        "Isolation Transformers (01kVA to 500kVA)",
        "Transient Voltage Surge Suppressor (TVSS)",
        "APFC Panel and Electrical Panel",
        "Harmonics Filters",
        "Fire Fighting Systems",
        "CCTV"
      ],
      icon: (
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6 4.75A.75.75 0 016.75 4h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 4.75zM6 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 10zm0 5.25a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75zM1.99 4.75a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1v-.01zM1.99 15.25a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1v-.01zM1.99 10a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V10z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <section className="products-section">
      <div className="products-container">
        <h2 className="products-title">Our Products</h2>
        <p className="products-subtitle">
          Premium quality electrical solutions from trusted brands
        </p>

        <div className="products-grid">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="product-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="product-header">
                <div className="product-icon">
                  {product.icon}
                </div>
                <h3 className="product-category">{product.category}</h3>
              </div>
              <ul className="product-items">
                {product.items.map((item, i) => (
                  <li key={i} className="product-item">
                    <svg className="item-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .products-section {
          padding: 6rem 1rem;
          background-color: #f8fafc;
          position: relative;
        }

        .products-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .products-title {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1rem;
          text-align: center;
          color: #1e293b;
          animation: fadeInUp 0.8s ease-out;
        }

        .products-subtitle {
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

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .product-card {
          background-color: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
          border-top: 4px solid #2563eb;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .product-header {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e2e8f0;
        }

        .product-icon {
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #eff6ff;
          border-radius: 8px;
          margin-right: 1rem;
          color: #2563eb;
        }

        .product-icon svg {
          width: 1.25rem;
          height: 1.25rem;
        }

        .product-category {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1e40af;
        }

        .product-items {
          display: grid;
          gap: 0.75rem;
        }

        .product-item {
          display: flex;
          align-items: flex-start;
          color: #475569;
        }

        .item-icon {
          width: 1rem;
          height: 1rem;
          margin-right: 0.75rem;
          margin-top: 0.25rem;
          color: #2563eb;
          flex-shrink: 0;
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
          .products-title {
            font-size: 2.25rem;
          }
        }

        @media (max-width: 768px) {
          .products-section {
            padding: 4rem 1rem;
          }

          .products-title {
            font-size: 2rem;
          }

          .products-subtitle {
            font-size: 1.1rem;
            margin-bottom: 2rem;
          }

          .products-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .products-title {
            font-size: 1.75rem;
          }

          .product-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductsSection;