import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ClientsSection = () => {
  const clients = [
    "Tata Technologies", "Richhold", "Greaves Cotton Limited", "Plastic Omnium", 
    "Bobst India", "Duroshox", "Sogefi ADM", "Parksons Packaging", "Taurai India", 
    "Setco Spindles", "Cilicant", "Nice Interactive", "Rubicon Research", 
    "Orchid Hotels", "Fariyas Hotel", "Sycamore Software", "Amit Enterprises", 
    "Ruby Hall Clinic", "Emcure Pharma", "Chitale Dairy"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="clients-section">
      <div className="clients-container">
        <h2 className="section-title">Our Valued Customers</h2>
        
        <Slider {...settings} className="clients-slider">
          {clients.map((client, index) => (
            <div key={index} className="client-slide">
              <div className="client-card">
                <h3 className="client-name">{client}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx>{`
        /* Section Styles */
        .clients-section {
          background-color: #f1f5f9;
          padding: 4rem 0;
        }

        .clients-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-title {
          text-align: center;
          font-size: 2rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 2rem;
        }

        /* Client Card Styles */
        .client-slide {
          padding: 0 1rem;
        }

        .client-card {
          background-color: white;
          padding: 1.5rem;
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          height: 8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .client-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .client-name {
          font-weight: 500;
          color: #1e293b;
        }

        /* Slider Customization */
        :global(.slick-dots li button:before) {
          color: #2563eb;
        }

        :global(.slick-dots li.slick-active button:before) {
          color: #2563eb;
        }

        :global(.slick-prev:before, .slick-next:before) {
          color: #2563eb;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .clients-section {
            padding: 3rem 0;
          }

          .section-title {
            font-size: 1.75rem;
          }
        }

        @media (max-width: 480px) {
          .clients-section {
            padding: 2rem 0;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .client-card {
            height: 6rem;
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;