import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
 
import img2 from '../img/test3.jpg'
import img3 from '../img/test9.jpg'
 

import imgDetail from '../assets/pexels-alex-staudinger-1732414.jpg';
import imgDetail2 from '../assets/pexels-pixabay-271816.jpg';
import img1 from '../assets/imj1.jpg'
import { motion } from 'framer-motion';

const GetStarted = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })


    return (
        <>    
        <div className="row my-5 px-3 d-flex align-items-center justify-content-center">
        {/* Image 1 */}
        <div className="col-md-6 mb-2 mb-md-0 ">
          <img
            src={img2}
            className="img-fluid rounded-2  common-image"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
        </div>

        {/* Some Text */}
        <div className="col-md-6  ">
          <div className="list-section">
            <h3 className="text-light-blue-900 fs-2">Expertise Multidisciplinaire au Service de Votre Entreprise</h3>
            <p className="text-gray-700 ms-1">Chez KAMOUNI CONSULTING, nous mettons notre expertise pluridisciplinaire au service des entreprises pour répondre à leurs besoins en ingénierie financière, comptabilité, et fiscalité. En plus de notre savoir-faire en matière de conseil en gestion et d’audit, nous assistons les entreprises dans la structuration efficace de leurs processus et dans la mise en place de systèmes de gestion informatisés, adaptés aux spécificités de chaque secteur économique. Notre objectif est de fournir un accompagnement stratégique qui garantit la performance et la pérennité de nos clients.</p>
           
          </div>
        </div>
      </div>

      <div className="row my-5 px-3 d-flex align-items-center justify-content-center">
        {/* Some Text */}
        <div className="col-md-6 mb-2 mb-md-0  ">
          <div className="list-section">
            <h3 className="text-light-blue-900 fs-2">Des Services de Qualité pour Optimiser Votre Gestion Financière et Sociale</h3>
            <p className="ms-1 text-gray-700">KAMOUNI CONSULTING propose des solutions complètes et personnalisées en assistance comptable et fiscale, gestion de la paie, et conseil social. Nous vous aidons à maîtriser vos obligations comptables, sociales et fiscales tout en vous permettant d’optimiser vos ressources et de vous concentrer sur vos activités principales. En tant que partenaire de confiance, notre cabinet vous accompagne à chaque étape de votre développement, en assurant un audit rigoureux et en apportant des conseils adaptés à vos objectifs de croissance et de rentabilité.</p>
       
          </div>
        </div>

        {/* Image 2 */}
        <div className="col-md-6 mb-2 mb-md-0  ">
          <img
            src={img3}
            className="img-fluid rounded-2 common-image"
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          />
        </div>
      </div>


        </>
    )
}

export default GetStarted;
