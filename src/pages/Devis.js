import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../img/Business.jpg'

const Devis = () => {


  return (
    <div
      className="devis-section"
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Dark overlay for better text visibility */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        }}
      ></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, color: '#fff', padding: '80px 20px' }}>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 style={{ fontWeight: 'bold', fontSize: '2.5rem', letterSpacing: '1px', textAlign: 'center' }}>
              Besoin d'un cabinet comptable?
            </h1>
            <p style={{ textAlign: 'center', lineHeight: '1.8' }}>
              Confiez-nous votre recherche et nous vous aiderons donc à trouver l'expert comptable qui répondra à vos attentes
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card bg-white p-4 rounded shadow-lg">
              <h3 className="mb-4 text-center" style={{ color: '#007bff' }}>RECEVEZ VOTRE DEVIS</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-dark">Name </label>
                  <input type="text" className="form-control" id="name" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label text-dark">Subject </label>
                  <input type="text" className="form-control" id="subject" placeholder="Subject" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-dark">Email </label>
                  <input type="email" className="form-control" id="email" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-dark">Message </label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devis;
