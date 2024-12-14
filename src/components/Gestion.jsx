import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../img/workers.jpg'
import img2 from '../img/image-twoDY3FSX-transformed.png'
import img3 from '../img/advice.jpg'
import banner from '../img/banner.jpg'


// import serviceimage from '../img/Audi.jpg';
const Gestion = () => {
  const service = {
    name: 'Conseil en Gestion',
    description: 'Pour vous accompagner à tous les stades de la vie de votre entreprise',
 
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
            <h3 className="text-light-blue-900 fs-4">Assistance à la création d'une entreprise</h3>
            <p className="text-gray-700 ms-1">Un accompagnement du porteur de projet par des spécialistes</p>
            <ul className="list-unstyled ms-1">
              <li>• Assistance à l'établissement du business plan</li>
              <li>• Validation de la rentabilité et de l'équilibre financier du projet</li>
              <li>• Choix de la structure juridique adaptée au projet (SARL, SA, CNC, PH….)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row mt-5 d-flex align-items-center justify-content-center">
        {/* Some Text */}
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="list-section">
            <h3 className="text-light-blue-900 fs-4">Etablissement d'un tableau de bord et d'un suivi de projet</h3>
            <p className="ms-1 text-gray-700">Aider à piloter et à maîtriser la gestion de votre entreprise</p>
            <p className="ms-1 font-medium italic">Dans le cadre du suivi de la gestion de votre entreprise, la mise en place d'un reporting ou de tableaux de bord mensuels permet d'anticiper les dérapages et le suivi des objectifs :</p>
            <ul className="list-unstyled ms-1">
              <li>• Assistance à l'élaboration d'un prévisionnel et d'un budget</li>
              <li>• Etablissement d'un reporting mensuel</li>
              <li>• Mise en évidence des écarts par rapport aux budgets et objectifs</li>
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
            <h3 className="text-light-blue-900 fs-4">Conseil en organisation</h3>
            <p className="ms-1 text-gray-700">Pour une entreprise plus performante</p>
            <ul className="list-unstyled text-pretty ms-1">
                <li>• Mission d'assistance à l'organisation et à la mise en place des procédures de contrôle dans un ou plusieurs services de votre entreprise (commercial, production, administration,...)</li>
                <li>• Diagnostic des faiblesses de votre organisation et proposition de contrôles correctifs.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gestion;
