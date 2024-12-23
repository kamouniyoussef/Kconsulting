import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from '@emailjs/browser';
import backgroundImage from '../img/Business.jpg'

const Contact = () => {
    const [subject,setsubject] =useState('');
  const [massage,setmassage] =useState('');
  const [email,setemail] =useState('');
  const [name,setname] =useState('');
  const [number,setnumber] =useState('');
 
  const form = useRef();
   
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm('service_ttg8hzt', 'template_zop091v',  form.current, {
        publicKey: 'jsw70p_kvPm8gMEj4',
      })
      .then(
        () => {
         alert('MESSAGE BIEN ENVOYÉ!');
         setsubject("");
         setmassage("");
         setemail("");
         setname("");
         setnumber("");

         
        },
        (error) => {
          alert('PROBLEME DE CONTACT NOUS');
        },
      );
  };

  
  

  return (
    <div
      className="contact-section"
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
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
        {/* Header Section */}
       
        {/* Content Section */}
        <div className="row">
          {/* Left Side: Custom Information Section */}
          <div className="col-md-6">
          <h1 style={{ fontWeight: 'bold', fontSize: '3rem', letterSpacing: '1px', fontFamily:"cursive" }}>Contact Us</h1>
            <p>
            KAMOUNI CONSULTING a besoin des informations que vous nous fournissez pour vous contacter au sujet de votre question. Vous pouvez vous désabonner de notre e-mail à tout moment. Pour plus d'informations sur la façon dont vous vous abonnez,
                ainsi que sur nos pratiques de confidentialité et notre engagement à protéger votre vie privée
            </p>
            <p>
                 Pour nous adresser vos remarques, vos questions et vos demandes de service, veuillez nous contactez via le formulaire ci-dessous. Kamouni consulting vous répondez dans un délai de 24 heures.            
            </p>
            <p>
                Pour plus d'informations, un devis gratuit, une question sur nos compétences ou sur nos tarifs à Casablanca et partout au Maroc, n'hésitez pas à nous contacter, notre équipe est à votre disposition. 
                Nous prendrons contact avec vous dès réception de votre message.
            </p>
            <p>
                 Vous souhaitez nous faire part d'une remarque ou suggestion, nous poser une question complétez le formulaire de votre choix.
            </p>
            <p>
                 Contactez-Nous, Pour nous adresser vos remarques, vos questions et vos demandes de service, veuillez nous contacter via le formulaire ci-dessous. 
                   Nous vous répondrons dans un délai de 24 heures.
            </p>
          </div>

          {/* Right Side: Form Section */}
          <div className="col-md-6">
          <div className="contact-form bg-white p-4 rounded shadow-lg">
              {/* Phone Numbers Section in the Form Header */}
              <h3 className="mb-4 text-center " style={{ color: '#007bff' , fontFamily:"cursive"}}>APPELEZ-NOUS</h3>
              <div className="text-center text-dark mb-4">
                 
                <p style={{ fontFamily:"cursive"}}>+212 641812625</p>
              </div>

              {/* Contact Form */}
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-dark" style={{ fontFamily:"cursive"}} >Name </label>
                  <input type="text" required className="form-control" value={name} name='from_name' onChange={(e)=> setname(e.target.value)} id="name" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label text-dark"  style={{ fontFamily:"cursive"}} >Subject </label>
                  <input type="text" required className="form-control" name='subject'  value={subject} onChange={(e)=> setsubject(e.target.value)} id="subject"  placeholder="Subject" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-dark"  style={{ fontFamily:"cursive"}}>Email </label>
                  <input type="email" name='email' required className="form-control" value={email} onChange={(e)=> setemail(e.target.value)} id="email" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="number" className="form-label text-dark"  style={{ fontFamily:"cursive"}}>Number </label>
                  <input type="number" name='number' required className="form-control" value={number} onChange={(e)=> setnumber(e.target.value)} id="number" placeholder="Your Number" />
                </div>
                <div className="mb-3">
                  <label htmlFor="massage"  className="form-label text-dark "  style={{ fontFamily:"cursive"}}>Message </label>
                  <input className="form-control" name='massage' value={massage} onChange={(e)=> setmassage(e.target.value)} required id="message"   placeholder="Your Message" />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-block"  style={{ fontFamily:"cursive"}}>Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="row mt-5">
          <div className="col">
 
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53189.680466794576!2d-7.677219614587789!3d33.57013014235154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2e9854fbd49%3A0xcb8dc82bd8575005!2sMaarif%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1732660878227!5m2!1sfr!2sma"              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
