import React from 'react'
import {  
    Button,
    Stack,
} from '@mui/material'
 
import img1 from '../img/cnss.png'
import img2 from '../img/wizirat.png'
import img3 from '../img/bank.png'
import img4 from '../img/cgem.jpg'
 import img6 from '../img/markaz.jpg'
import img7 from '../img/ompic.png'
import img8 from '../img/modiriya.png'




import Title from './Title'
import Paragraph from './Paragraph'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
// import modiriya from '../'
const GetInTouch = () => {
    const partners = [
        { name: 'Partner 1',  logo: img1 },
        { name: 'Partner 2', logo:  img2 },
        { name: 'Partner 3', logo: img3  },
         { name: 'Partner 4', logo:   img4 },
        { name: 'Partner 5', logo: img6} ,
        { name: 'Partner 6', logo:   img7 },
        { name: 'Partner 7', logo:   img8},
       
      ];

    return (
    <>
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            mx: 6,
        }}
        >
            <Title 
            text={
                'Contact us'
                } 
            textAlign={'center'}
            />
            <Paragraph 
            text={
                'Si vous souhaitez bénéficier de solutions complètes et personnalisées pour maîtriser vos obligations tout en optimisant vos ressources, cliquez sur le bouton ci-dessous pour nous contacter.'
            }
            maxWidth = {'sm'}
            mx={0}
            textAlign={'center'}
            />
            <Button component={Link} 
            to={'/contact'}
            variant="contained" 
            type="submit"
            size="medium"
            sx= {{ 
                fontSize: '0.9rem',
                textTransform: 'capitalize', 
                py: 2,
                px: 4,
                mt: 3, 
                mb: 2,
                borderRadius: 0,
                backgroundColor: '#14192d',
                "&:hover": {
                    backgroundColor: '#1e2a5a',
                }
            }}
            >
               Contact us
            </Button>
 
        </Stack>

        <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8" style={{ fontFamily:"cursive"}}>Nos Partenaires</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
        {partners.map((partner, index) => (
            <motion.div
            key={index}
            className="bg-white p-4 rounded-lg shadow"
            whileHover={{ scale: 1.1, rotate: 5 }}
            >
            <img src={partner.logo} alt={partner.name} width={100} height={50} />
            </motion.div>
        ))}
        </div>
        </section>
    </>
    )
}

export default GetInTouch;