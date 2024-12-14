// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../img/advice.jpg'
import img2 from '../img/trees.png'
import img3 from '../img/Comptable.png'
import img4 from '../img/test1.jpg'
import img5 from '../img/Business.jpg'
import img6 from '../img/Audi.jpg'


import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

const Homepage = () => {
  const services = [
    {
       title: "Création d'Entreprise",
      description: "Bénéficiez d’un accompagnement sur mesure pour la création de votre entreprise. Du conseil à la création, nos agents sont à votre disposition pour offrir un service de qualité, rapide et efficace au meilleur tarif. Contactez nous rapidement pour répondre à toutes vos questions.",      image: img1,
      servicePath: '/contact'
    },
    {
      title: 'Conseil Fiscal',
      description:" Nos experts passionnés et  aguerris en matière de fiscalité sont à votre service pour vous apporter conseils et orientations. N’hésitez pas à nous contacter et prendre RDV avec un de nos experts.",
      image: img2,
      servicePath: '/contact'
    },
    {
      title: 'Domiciliation',
      description: 'Toute entreprise opérant sur le territoire marocain se doit d’avoir un siège social conformément à la loi. Nous vous offrons le meilleur service de domiciliation avec un rapport qualité prix imbattables et le choix entre deux adresses à la clé.',
      image: img3,
      servicePath:'/contact'
    },
    {
      title: 'Conseil Juridique',
      description: 'Nos experts sont toujours à jour en matière de législation marocaine pour vous conseiller et vous orienter dans vos démarches en vous prêtant une assistance juridique pour une meilleure gestion de votre entreprise.',
      image: img4,
      servicePath: '/contact'
    },
    {
      title: 'Tenue de Comptabilité',
      description: 'Toute entreprise se doit de répondre aux obligations légales de l’administration fiscale. Nos experts vous accompagnent tout au long de ces procédures annuelles (Bilan, Assemblé générale …), mensuelles (Gestion de paie …) et même ponctuelles.',
      image: img5,
      servicePath: '/contact'
    },
    {
      title: 'Audit Financier  ',
      description: " audit financier constractuel : Expertise et Sécurisation de vos Finances , mon objectif est de vous offrir une vision claire et précise de la santé financière de votre entreprise. Je réalise des audits sur mesure, adaptés à vos besoins spécifiques, en identifiant les risques potentiels, en vérifiant la fiabilité des informations comptables et en évaluant l'efficacité de vos contrôles internes.",
      image: img6,
      servicePath: '/contact'
    },
    
  ];
   return (
    <div >
      <Typography className="font-bold text-4xl" variant="h4" component="h1" style={{ textAlign: 'center' }}>
      <span style={{ fontFamily:"cursive"}}>  Nos Services</span>  <p className='text-danger ' style={{fontFamily:'cursive',fontSize:"20px"}} > Plus de 5 ans d'experience </p>
      </Typography>
      {/* Services */}
      <div className="flex flex-wrap justify-center gap-10">
  {services.map((service, index) => (
    <Link to={service.servicePath || '#'} key={index} className="no-underline">
      <Card className="w-64 h-80 overflow-hidden shadow-md hover:scale-105 hover:shadow-xl focus:scale-105 focus:shadow-none active:scale-100">
        <CardHeader floated={false} shadow={false} color="transparent" className="m-0 rounded-none">
          <img className="w-full h-40 object-cover" src={service.image} />
        </CardHeader>
        <CardBody>
          <Typography variant="h7" color="blue-gray">
              <span   style={{fontFamily:"cursive"}}>   {service.title}</span> 
          </Typography>
          <p className="text-gray-600 mt-2 font-light text-[10px] m-0">
            {service.description}
          </p>
        </CardBody>
      </Card>
    </Link>
  ))}
</div>

    </div>
  );
};

export default Homepage;
