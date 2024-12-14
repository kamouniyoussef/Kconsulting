import React,{ useState } from 'react'
// mui
import img1 from '../img/gallery1.png'
import img2 from '../img/gallery2.png'
import img3 from '../img/gallery3.jpg'
import img4 from '../img/gallery4.jpg'
import banner from '../img/banner.jpg'

import { 
    Typography,
    Box,
    Stack,
} from "@mui/material";
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
// components
import Title from './Title'
import Paragraph from './Paragraph'
import { Carousel } from "@material-tailwind/react";
 

export default function Gallery() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-background p-4 mb-10  ">
      <div className="w-full max-w-5xl text-center mb-8">
        <Typography variant="h1" className="text-3xl font-bold text-[#004164] mb-6 ">Créez Votre Entreprise Maintenant</Typography>
        <p className="text-lg text-muted-foreground">Nos Services couvrent l'ensemble des besoins d'accompagnement d'une société dans le domaine de sa gestion et de son administration</p>
      </div>
      <div className="w-full max-w-5xl">
        <Carousel
          className="rounded-xl"
          autoplay={true}
          autoplayInterval={3000} // Adjust the interval as needed
          loop={true} // Enable looping
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <div className="relative h-64 md:h-80 lg:h-[30rem]">
            <img
              src={img1}
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="relative h-64 md:h-80 lg:h-[30rem]">
            <img
              src={img2}
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="relative h-64 md:h-80 lg:h-[30rem]">
            <img
              src={img3}
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="relative h-64 md:h-80 lg:h-[30rem]">
            <img
              src={img4}
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
          </div>
        </Carousel>
      </div>
    </div>
  )
}
