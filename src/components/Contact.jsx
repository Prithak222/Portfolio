import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill in all required fields.',
      });
      return;
    }

    // Mock API call
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you! Your message has been sent successfully.',
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-title-wrap">
          <div className="section-tag"></div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's discuss your next project</p>
        </div>

        <div className="grid-2 contact-grid">
          {/* Contact Form */}
          <div className="contact-form-wrap card">
            <h3 className="contact-form-title">Send Me A Message</h3>
            {formStatus.message && (
              <div className={`form-alert ${formStatus.error ? 'alert-error' : 'alert-success'}`}>
                {formStatus.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject of Message"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Your Message..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-submit">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-wrap">
            <div className="info-block card">
              <h3 className="contact-info-title">Contact Information</h3>
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon-box">
                    <FaEnvelope className="info-icon" />
                  </div>
                  <div>
                    <span className="info-label">Email</span>
                    <a href="mailto:binodprasadhk@gmail.com" className="info-value">
                      binodprasadhk@gmail.com
                    </a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-box">
                    <FaPhone className="info-icon" />
                  </div>
                  <div>
                    <span className="info-label">Phone</span>
                    <a href="tel:+9779800000000" className="info-value">
                      +977-9800000000
                    </a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-box">
                    <FaMapMarkerAlt className="info-icon" />
                  </div>
                  <div>
                    <span className="info-label">Location</span>
                    <span className="info-value">Kathmandu, Nepal</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connect */}
            <div className="info-block card connect-card">
              <h3 className="contact-info-title">Connect With Me</h3>
              <p className="connect-desc">
                Follow me or reach out on social platforms:
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="#" className="social-link" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" className="social-link" aria-label="Facebook">
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
