import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from '../img/banner.jpg'
import audit from '../img/audit.jpg'
import cal from '../img/calculate.jpg'


// import serviceimage from '../img/Audi.jpg';
const Audite = () => {
  const service = {
    name: 'Audit',
    description: 'Pour les sociétés devant faire certifier leurs comptes annuels',
 
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
        <h2 className='text-2xl font-bold'>{service.name}</h2>
        <p className='font-sans from-indigo-900'>{service.description}</p>
      </div>

      <div className="row mt-5 d-flex align-items-center justify-content-center">
        {/* Image 1 */}
        <div className="col-md-6 mb-4 mb-md-0 px-4">
          <img
            src={audit}
            alt={service.name}
            className="img-fluid rounded-4 common-image"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
        </div>

        {/* Some Text */}
        <div className="col-md-6 px-9">
          <div className="list-section">
            <h3 className="text-light-blue-900 fs-4">L'audit contractuel  financier
            </h3>
            <ul className="list-unstyled ms-1">
              <li>• Révision annuel des comptes et production d'un rapport général  </li>
              <li>• Missions et rapports spécifiques dans le cadre d'opérations particulières : augmentation de capital, transformation, apports en nature ... </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row mt-5 d-flex align-items-center justify-content-center">
        {/* Some Text */}
        <div className="col-md-6 mb-4 mb-md-0 px-9">
          <div className="list-section">
            <h3 className="text-light-blue-900 fs-4">Audit spécifique</h3>
            <ul className="list-unstyled ms-1">
              <li>• Audit des comptes de votre société dans le cadre d'un rachat</li>
              <li>• Evaluation de votre société</li>
              <li>• Assistance dans le cadre de montages financiers particuliers</li>
             </ul>
          </div>
        </div>

        {/* Image 2 */}
        <div className="col-md-6 mb-4 mb-md-0 px-4">
          <img
            src={cal}
            alt={service.name}
            className="img-fluid rounded-4 common-image"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Audite;