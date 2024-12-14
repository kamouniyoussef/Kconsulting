import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from '../img/banner.jpg'
import img1 from '../img/interns-fun-office.jpg'
import img2 from '../img/image-twoDY3FSX-transformed.png'
import img3 from '../img/implantation-au-Maroc-à-létranger.jpg'

const Comptable = () => {
  const service = {
    name: 'Assistance comptable et fiscale',
    description: 'Une assistance mensuelle, trimestrielle ou en fin année',
  };

  return (
    <div className="container p-2 my-12">
      {/* Header Section with Background Image */}
      <div
        className="text-[#092159] text-center py-5"
        style={{
          backgroundImage: `url(${banner})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
          <h2 className='text-5xl font-bold'>{service.name}</h2>
          <p className='font-sans from-indigo-900'>{service.description}</p>
      </div>

      <div className="row mt-5 d-flex align-items-center justify-content-center">
        {/* Image 1 */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={img1}
            alt={service.name}
            className="img-fluid rounded-4 common-image"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
        </div>

        {/* Some Text */}
        <div className="col-md-6">
          <div className="list-section">
            <h3 className="text-light-blue-900 fs-4">Tenue comptable et assistance fiscale courante</h3>
            <p className="text-gray-700 ms-1">Pour les petites et moyennes entreprises</p>
            <ul className="list-unstyled ms-1">
              <li>• Saisie mensuelle de la comptabilité</li>
              <li>• Etablissement des déclarations fiscales courantes (TVA, impôts sur les sociétés, ....)</li>
              <li>• Etablissement du bilan (comptes annuels) et de la liasse fiscale en fin d'exercice</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row mt-5 d-flex align-items-center justify-content-center">
        {/* Some Text */}
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="list-section">
            <h3 className="text-light-blue-900 fs-4">Révision de la comptabilité et arrêté des comptes annuels</h3>
            <p className="ms-1 text-gray-700">Pour les sociétés possédant un service comptable en interne</p>
            <ul className="list-unstyled ms-1">
              <li>• Révision de la comptabilité tenue en interne par la société</li>
              <li>• Assistance sur des points comptables ou fiscaux spécifiques</li>
              <li>• Etablissement des comptes annuels</li>
            </ul>
          </div>
        </div>

        {/* Image 2 */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={img2}
            alt={service.name}
            className="img-fluid rounded-4 common-image"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
        </div>
      </div>

      <div className="row mt-5 d-flex align-items-center justify-content-center">
        {/* Image 3 */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={img3}
            alt={service.name}
            className="img-fluid rounded-4 common-image"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
        </div>

        {/* Some Text */}
        <div className="col-md-6">
          <div className="list-section">
            <h3 className="text-light-blue-900 fs-4">Etablissement des comptes annuels selon les principes comptables Marocaine</h3>
            <p className="ms-1 text-gray-700">Pour les sociétés Marocaine filiales de groupes étrangers</p>
            <ul className="list-unstyled text-pretty ms-1">
                <li>• Revue de la comptabilité tenue en normes comptables internationales (US Gaap, IFRS, ....),</li>
                <li>• Enregistrement d'écritures pour se conformer à la législation étrangères, </li>
                <li>• Reporting mensuel pour la société mère étrangère</li>
                <li>• Etablissement des comptes annuels et de la liasse fiscale</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comptable;
