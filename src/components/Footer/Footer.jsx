import React from 'react'
import { 
  Box, 
  Stack, 
  styled, 
  Typography,
} from '@mui/material'
import Link from '@mui/material/Link';
import FooterTitle from './FooterTitle'
import FooterLink from './FooterLink'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {

  const StackColumn = styled(Stack) (() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box) (({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ededed',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  return (
    
    <BoxRow 
    component = 'footer'
    sx={{
      py: 4,
      px: 2,
    }}
    >
      <StackColumn>
        <FooterTitle text={'Address'} />
        <FooterLink 
        text={' Casablanca,Maarif'} 
        />
        <FooterLink 
        text={'0641812625'} 
        />
        <FooterLink 
        text={'Kamouniconsulting@gmail.com'} 
        />
      </StackColumn>
      
      <StackColumn>
        <FooterTitle text={'Our Services'} />
        <FooterLink text={"Création d'Entreprise"} />
        <FooterLink text={"Conseil Fiscal"} />
        <FooterLink text={'Domiciliation'} />
  
      </StackColumn>
     
      <StackColumn>
        <FooterTitle text={'Kamouni Consulting'} />
        <Stack 
        direction='row' 
        width= '70px'
        maxWidth='100%'
        justifyContent='space-between'
        >
          <Link href="https://www.linkedin.com/in/ahmed-kamouni-b38141226/" variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <InstagramIcon />  
          </Link> 
          <Link href="https://www.linkedin.com/in/ahmed-kamouni-b38141226/" variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <FacebookIcon />
          </Link> 
          <Link href="https://www.linkedin.com/in/ahmed-kamouni-b38141226/" variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <LinkedInIcon />  
          </Link> 
        </Stack>
        <Typography 
        variant='caption'
        component='p' 
        >
          &2022 K Consulting Inc.
        </Typography>
      </StackColumn>
    </BoxRow>
  )
}

export default Footer
