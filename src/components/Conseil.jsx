import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../img/trees.png'
import img2 from '../img/phone_call.png'
 
import banner from '../img/banner.jpg'

// import serviceimage from '../img/Audi.jpg';
const Conseil = () => {
  const service = {
    name: 'Paie et Conseil Social',
    description: 'La gestion de la paye prise en charge par des professionnels spécialistes du domaine',
 
  };

  return (
    <div className="container p-2 my-12">
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
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={img1}
            alt={service.name}
            className="img-fluid rounded-4 common-image"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
        </div>

        <div className="col-md-6">
          <div className="list-section">
            <h3 className="text-light-blue-900 fs-4">Gestion de la Paye</h3>
            <p className="text-gray-700 ms-1">Pour les salariés de votre entreprise</p>
            <ul className="list-unstyled ms-1">
              <li>• Etablissement des bulletins de paye</li>
              <li>• Préparation des déclarations sociales mensuelles ou trimestrielles (Cnss, Retraite,Cimr...)</li>
              <li>• Relation avec les organismes sociaux, Gestion des formalités d'entrée ou de sortie d'un salarié</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row mt-5 d-flex align-items-center justify-content-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="list-section">
            <h3 className="text-light-blue-900 fs-4">Conseil social</h3>
            <p className="ms-1 text-gray-700">En fonction des problématiques spécifiques rencontrées</p>
            <ul className="list-unstyled ms-1">
              <li>• Etablissement des contrats de travail</li>
              <li>• Accompagnement régulier en fonction des questions sociales que vous vous posez</li>
              <li>• Assistance sur un problématique social spécifique (rupture avec un salarié, contrôle cnss, relation inspecteur du travail...)</li>
            </ul>
          </div>
        </div>

        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={img2}
            alt={service.name}
            className="img-fluid rounded-4 common-image"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Conseil;
