import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GetServerSideProps } from 'next';
// import { prisma } from '../../lib/prisma';
import { PrismaClient } from '@prisma/client';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import ModalLogout from '../../components/ModalLogout';

const theme = createTheme();

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


export default function ViewProduct({data}) {

  const styles = theme => ({
    hover: {
      "&:hover": {
        backgroundColor: 'rgb(7, 177, 77, 0.42)'
      }
    }
  });

 console.log(data)
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          background: "#BDBFF1",
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            width: "100px",
            height: "40px",
            backgroundImage: `url(${"/logo.svg"})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            marginLeft: "1rem"
          }}
        >
        </Grid>
          <ModalLogout/>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            pt: 1,
            pb: 1,
          }}
        >
          <Container>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              sx={{color: "#1b3c4d", fontWeight: "600" }}
            >
              Compre seu ingresso
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph sx={{ color: "#1b3c4d", fontSize: "16px",fontWeight: "300", maxWidth: "40%", margin: "0 auto"}}>
              Você não precisa mais sair de casa para garantir seu lugar no evento que você tanto deseja.
              Compre seu ingresso diretamente com a descomplica eventos.
            </Typography>
            <Stack
              sx={{ pt: 1 }}
              direction="row"
              justifyContent="center"
            >
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 2 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {data.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                    }}
                    image={card.url}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1, padding: "24px" }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.eventName}
                    </Typography>
                    <Typography>
                      {card.date}
                    </Typography>
                    <Link sx={{textDecoration: 'none'}}>R$:{card.adress}</Link>
                  </CardContent>
                  <CardActions>
                    <Button size="small" sx={{background: '#1b144b', borderRadius: "64px", padding: "16px", color: "#fff", fontWeight: "600", '&:hover': {color: '#1b144b'}}}>Comprar</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{margin: "0 auto"}}>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      </Box>
      </Grid>
    </ThemeProvider>
  );
}

const prisma = new PrismaClient();

export const getServerSideProps: GetServerSideProps = async () => {
    
    const PostEvent = await prisma.postEvent.findMany()
    const data = PostEvent.map(post => {
        console.log(post)
        return {
            url: post.url,
            adress: post.adress,
            price: post.price,
            eventName: post.eventName,
            published: post.published,
            date: post.createdAt.toISOString().split('T')[0]
        }
    })
    return {
        props: {
          data
        }
    }
}