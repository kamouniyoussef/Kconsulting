import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Formation = () => {
  const service = {
    name: 'Formation en comptabilité et fiscalité',
    description: 'Ce service offre une solution complète pour vos besoins de formation en comptabilité et fiscalité',
  };

  return (
    <div className="container p-2 my-12">
      {/* Header Section with Background Image */}
      <div
        className="text-[#092159] text-center py-5"
        style={{
          backgroundImage: 'url(/img/banner.jpg)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2 className='text-5xl font-bold'>{service.name}</h2>
        <p className='font-sans from-indigo-900'>{service.description}</p>
      </div>

      <div className="row mt-5 d-flex align-items-center justify-content-center">
        {/* Image 1 */}
        <div className="col-md-6 mb-4 mb-md-0 px-4">
          <img
            src="/img/no-info.jpg"
            alt={service.name}
            className="img-fluid rounded-4 common-image"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
        </div>

        {/* Some Text */}
        <div className="col-md-6 px-9">
          <div className="list-section">
            <h3 className="text-light-blue-900 fs-4">Lorem Ipsum Dolor Sit Amet</h3>
            <p className="text-gray-700 ms-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul className="list-unstyled ms-1">
              <li>• Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>• Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li>• Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row mt-5 d-flex align-items-center justify-content-center">
        {/* Some Text */}
        <div className="col-md-6 mb-4 mb-md-0 px-9">
          <div className="list-section">
            <h3 className="text-light-blue-900 fs-4">Lorem Ipsum Dolor Sit Amet</h3>
            <p className="ms-1 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul className="list-unstyled ms-1">
              <li>• Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>• Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li>• Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            </ul>
          </div>
        </div>

        {/* Image 2 */}
        <div className="col-md-6 mb-4 mb-md-0 px-4">
          <img
            src="/img/no-info.jpg"
            alt={service.name}
            className="img-fluid rounded-4 common-image"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
        </div>
      </div>

      <div className="row mt-5 d-flex align-items-center justify-content-center">
        {/* Image 3 */}
        <div className="col-md-6 mb-4 mb-md-0 px-4">
          <img
            src="/img/no-info.jpg"
            alt={service.name}
            className="img-fluid rounded-4 common-image"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
        </div>

        {/* Some Text */}
        <div className="col-md-6 px-9">
          <div className="list-section">
            <h3 className="text-light-blue-900 fs-4">Lorem Ipsum Dolor Sit Amet</h3>
            <p className="ms-1 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul className="list-unstyled text-pretty ms-1">
              <li>• Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>• Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formation;
