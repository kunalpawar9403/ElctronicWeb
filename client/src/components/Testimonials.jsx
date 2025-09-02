const Testimonials = () => {
  const testimonials = [
    {
      quote: "AASTECH has been our reliable partner for all electrical maintenance needs. Their AMC service is comprehensive and hassle-free.",
      author: "Tata Technologies",
      position: "Facility Manager",
      rating: 5
    },
    {
      quote: "The customized battery cabinet solution provided by AASTECH perfectly fit our space constraints and power requirements.",
      author: "Ruby Hall Clinic",
      position: "IT Head",
      rating: 5
    },
    {
      quote: "Their team is professional, knowledgeable, and always available when we need support. Highly recommended!",
      author: "Emcure Pharma",
      position: "Operations Manager",
      rating: 5
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">Client Success Stories</h2>
        <p className="testimonials-subtitle">
          Trusted by industry leaders for our reliable electrical solutions
        </p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="testimonial-quote">
                <svg className="quote-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p>"{testimonial.quote}"</p>
              </div>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="star-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="testimonial-author">
                <p className="author-name">{testimonial.author}</p>
                <p className="author-position">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          padding: 6rem 1rem;
          background-color: #f8fafc;
          position: relative;
        }

        .testimonials-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .testimonials-title {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1rem;
          text-align: center;
          color: #1e293b;
          animation: fadeInUp 0.8s ease-out;
        }

        .testimonials-subtitle {
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

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .testimonial-card {
          background-color: white;
          border-radius: 12px;
          padding: 2.5rem 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
          position: relative;
          overflow: hidden;
          border-top: 4px solid #2563eb;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .testimonial-quote {
          position: relative;
          margin-bottom: 1.5rem;
          color: #475569;
          line-height: 1.6;
        }

        .quote-icon {
          position: absolute;
          top: -1.5rem;
          left: -1rem;
          width: 3rem;
          height: 3rem;
          opacity: 0.1;
          color: #2563eb;
          z-index: 0;
        }

        .testimonial-rating {
          display: flex;
          gap: 0.25rem;
          margin-bottom: 1.5rem;
        }

        .star-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: #f59e0b;
        }

        .testimonial-author {
          border-top: 1px solid #e2e8f0;
          padding-top: 1.5rem;
        }

        .author-name {
          font-weight: 600;
          color: #1e40af;
          margin-bottom: 0.25rem;
        }

        .author-position {
          color: #64748b;
          font-size: 0.875rem;
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
          .testimonials-title {
            font-size: 2.25rem;
          }
        }

        @media (max-width: 768px) {
          .testimonials-section {
            padding: 4rem 1rem;
          }

          .testimonials-title {
            font-size: 2rem;
          }

          .testimonials-subtitle {
            font-size: 1.1rem;
            margin-bottom: 2rem;
          }
        }

        @media (max-width: 480px) {
          .testimonials-title {
            font-size: 1.75rem;
          }

          .testimonial-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;