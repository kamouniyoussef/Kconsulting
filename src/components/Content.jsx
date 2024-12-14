import React from 'react'
import {  
    Grid, 
    Typography,
    IconButton,
    Card,
    CardContent,
} from "@mui/material";
// icons
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import WifiPasswordIcon from '@mui/icons-material/WifiPassword';
// components
import Title from './Title'
import Paragraph from './Paragraph'

const Content = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-4 py-10 sm:py-24 lg:py-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl font-extrabold text-[#004164] sm:text-5xl md:text-6xl">
              <span className="block xl:inline">KAMOUNI CONSULTING </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            KAMOUNI CONSULTING est un cabinet d'Expertise Comptable, de Conseil Fiscal, Financier, Juridique et de Commissariat aux comptes.
            </p>
            <div className="mt-8 sm:mt-10">
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#004164] hover:bg-[#05547e] transition duration-150 ease-in-out no-underline"
              style={{ textDecoration: 'none' }}
            >
              En savoir plus
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 ms-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content