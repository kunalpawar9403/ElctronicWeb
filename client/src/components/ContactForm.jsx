import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { useEffect } from 'react';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
      subject: Yup.string().required('Required'),
      message: Yup.string().required('Required')
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        // Send email using EmailJS with your template format
        const templateParams = {
          to_name: "Support Team", // Recipient's name
          from_name: values.name,
          from_email: values.email,
          phone: values.phone,
          subject: values.subject,
          message: values.message
        };

        await emailjs.send(
          'service_1bazu5u',     // EmailJS Service ID
          'template_plkwbop',    // EmailJS Template ID
          templateParams,
          'fJc9b3MU7f4iDfDU_'    // EmailJS User ID
        );

        console.log('Email successfully sent!');
        alert('Thank you for your message! We will get back to you soon.');
        resetForm();
      } catch (error) {
        console.error('Failed to send email:', error);
        alert('There was an error submitting your form. Please try again.');
      } finally {
        setSubmitting(false);
      }
    }
  });

  // Initialize EmailJS when component mounts
  useEffect(() => {
    emailjs.init("fJc9b3MU7f4iDfDU_");
  }, []);

  return (
    <div className="contact-form-wrapper">
      <div className="contact-form-container">
        <div className="form-header">
          <h2 className="form-title">Send Us a Message</h2>
          <p className="form-subtitle">We'll respond within 24 hours</p>
        </div>
        
        <form onSubmit={formik.handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name <span className="required-indicator">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`form-input ${formik.touched.name && formik.errors.name ? 'error' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                placeholder="Enter your full name"
              />
              {formik.touched.name && formik.errors.name && (
                <div className="error-message">
                  <svg className="error-icon" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                  </svg>
                  {formik.errors.name}
                </div>
              )}
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email <span className="required-indicator">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-input ${formik.touched.email && formik.errors.email ? 'error' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="your.email@example.com"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="error-message">
                  <svg className="error-icon" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                  </svg>
                  {formik.errors.email}
                </div>
              )}
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={`form-input ${formik.touched.phone && formik.errors.phone ? 'error' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                placeholder="1234567890"
              />
              {formik.touched.phone && formik.errors.phone && (
                <div className="error-message">
                  <svg className="error-icon" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                  </svg>
                  {formik.errors.phone}
                </div>
              )}
            </div>
            
            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject <span className="required-indicator">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className={`form-input ${formik.touched.subject && formik.errors.subject ? 'error' : ''}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
                placeholder="What's this about?"
              />
              {formik.touched.subject && formik.errors.subject && (
                <div className="error-message">
                  <svg className="error-icon" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                  </svg>
                  {formik.errors.subject}
                </div>
              )}
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message <span className="required-indicator">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className={`form-textarea ${formik.touched.message && formik.errors.message ? 'error' : ''}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              placeholder="Type your message here..."
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <div className="error-message">
                <svg className="error-icon" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                </svg>
                {formik.errors.message}
              </div>
            )}
          </div>
          
          <button
            type="submit"
            className="submit-button"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? (
              <>
                <svg className="spinner" viewBox="0 0 50 50">
                  <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                </svg>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>

      <style jsx>{`
        /* Outer Wrapper */
        .contact-form-wrapper {
          padding: 2rem;
          max-width: 800px;
          margin: 0 auto;
          width: 100%;
        }

        /* Form Container */
        .contact-form-container {
          background-color: white;
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid #e2e8f0;
        }

        /* Form Header */
        .form-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .form-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 0.5rem;
        }

        .form-subtitle {
          color: #64748b;
          font-size: 1.125rem;
          margin: 0;
        }

        /* Form Layout */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .form-row {
          display: flex;
          gap: 1.5rem;
          width: 100%;
        }

        /* Form Group */
        .form-group {
          flex: 1;
          display: flex;
          flex-direction: column;
          margin-bottom: 0.5rem;
        }

        /* Labels */
        .form-label {
          font-weight: 600;
          color: #334155;
          margin-bottom: 0.75rem;
          font-size: 0.9375rem;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .required-indicator {
          color: #dc2626;
          font-size: 1.2rem;
          line-height: 1;
        }

        /* Input Fields */
        .form-input, .form-textarea {
          padding: 0.875rem 1.25rem;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.2s ease;
          background-color: #f8fafc;
          color: #1e293b;
          width: 100%;
          font-family: inherit;
        }

        .form-input::placeholder, .form-textarea::placeholder {
          color: #94a3b8;
          opacity: 1;
        }

        .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
          background-color: white;
        }

        /* Error States */
        .form-input.error, .form-textarea.error {
          border-color: #dc2626;
          background-color: #fef2f2;
        }

        .form-input.error:focus, .form-textarea.error:focus {
          box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
        }

        /* Textarea */
        .form-textarea {
          resize: vertical;
          min-height: 150px;
          line-height: 1.6;
        }

        /* Error Message */
        .error-message {
          color: #dc2626;
          font-size: 0.8125rem;
          margin-top: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .error-icon {
          width: 16px;
          height: 16px;
          fill: currentColor;
        }

        /* Submit Button */
        .submit-button {
          background: linear-gradient(to right, #2563eb, #1e40af);
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-top: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          width: 100%;
        }

        .submit-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
        }

        .submit-button:active {
          transform: translateY(0);
        }

        .submit-button:disabled {
          background: #cbd5e1;
          transform: none;
          box-shadow: none;
          cursor: not-allowed;
        }

        /* Spinner Animation */
        .spinner {
          width: 20px;
          height: 20px;
          animation: spin 1s linear infinite;
        }

        .spinner circle {
          stroke: currentColor;
          stroke-linecap: round;
          stroke-dasharray: 90, 150;
          stroke-dashoffset: 0;
          animation: dash 1.5s ease-in-out infinite;
        }

        @keyframes spin {
          100% { transform: rotate(360deg); }
        }

        @keyframes dash {
          0% { stroke-dasharray: 1, 150; stroke-dashoffset: 0; }
          50% { stroke-dasharray: 90, 150; stroke-dashoffset: -35; }
          100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124; }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .contact-form-wrapper {
            padding: 1.5rem;
          }

          .contact-form-container {
            padding: 2rem;
          }

          .form-row {
            flex-direction: column;
            gap: 1.75rem;
          }

          .form-title {
            font-size: 1.75rem;
          }
        }

        @media (max-width: 480px) {
          .contact-form-wrapper {
            padding: 1rem;
          }

          .contact-form-container {
            padding: 1.5rem;
          }

          .form-title {
            font-size: 1.5rem;
          }

          .form-subtitle {
            font-size: 1rem;
          }

          .form-input, .form-textarea {
            padding: 0.75rem 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactForm;