import { GetServerSideProps } from "next";
import {prisma} from '../../lib/prisma'
import { signOut } from "next-auth/react";
import { FormEvent, useState } from "react";
import { AppBar, Box, Button, Card, CardActions, CardContent, CardHeader, Checkbox, Container, CssBaseline, DialogContent, FormControlLabel, GlobalStyles, Grid, Link, Modal, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField, Toolbar, Typography } from "@mui/material";
import ModalLogout from "../../components/ModalLogout";
import React from "react";
import { BlueWarning } from "../../components/BlueWarning";
import { Copyright, Title } from "@material-ui/icons";
import Orders from "../../components/history";
// import {Post} from '@prisma/client'

// type PostProps = {
//     Post: Post[]
// }
export default function AppAleatorio({data}) {
    const [newTask, setNewTask] = useState('')
    const [newCNPJ, setnewCNPJ] = useState('')
    const [newAddress, setnewAddress] = useState('')
    const [newPrice, setnewPrice] = useState(0)
    const [newQnt, setnewQnt] = useState(0)
    const [newURL, setnewURL] = useState('')
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

   async function handleCreateTask(event) {
        event.preventDefault();
        
       await fetch('http://localhost:3000/api/post/create', {
            method: 'POST',
            body: JSON.stringify({eventName: newTask, CNPJ: newCNPJ, adress: newAddress, price: newPrice, quantity: newQnt, url: newURL}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setOpen(false)
    }

    
    const footers = [
      {
        title: 'Company',
        description: ['Team', 'History', 'Contact us', 'Locations'],
      },
      {
        title: 'Features',
        description: [
          'Cool stuff',
          'Random feature',
          'Team feature',
          'Developer stuff',
          'Another one',
        ],
      },
      {
        title: 'Resources',
        description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
      },
      {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
      },
    ];
    

    return  (
    <div>
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
            backgroundPosition: 'center',
            marginLeft: "1rem"
          }}
        >
        </Grid>
          <ModalLogout/>
        </Toolbar>
      </AppBar>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      {/* Hero unit */}
      <Container disableGutters component="main" sx={{ pt: 4, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          gutterBottom
          sx={{color: "#1b3c4d", fontWeight: "600" }}
        >
          Anuncie seus ingressos
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container component="main">
        <Grid container spacing={5} sx={{display: "flex", justifyContent: "center"}}>
            <Grid
              item
              key={1}
              xs={12}
              md={4}
            >
              <Card sx={{borderRadius: "64px", boxShadow: "0 2px 8px 0 rgb(0 0 0 / 20%)"}}>
                <CardHeader
                  title={"Descomplica eventos"}
                  subheader={"Processo seguro, transparente, rastreável e online, que simplifica o processo da reserva ao pagamento."}
                  titleTypographyProps={{ align: 'center', color: "1b144b", fontSize:"20px",  fontWeight: "700" }}
                  action={""}
                  subheaderTypographyProps={{
                    align: 'center', color: "#1b3c4d", fontSize: "16px",fontWeight: "300"
                  }}
                  sx={{color: "#1b144b"}}
                />
                <CardContent sx={{padding: 0}}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                    }}
                  >
                  </Box>
                  <ul>
                  </ul>
                </CardContent>
                <CardActions sx={{justifyContent: "center"}}>
                <div>
      <Button onClick={handleOpen} sx={{background: "#1b144b", color: "#FFF", borderRadius: "64px", padding: "16px", fontWeight: "600"}}>Cadastrar</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <DialogContent style={{padding: "40px"}}>
        <Paper
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <Typography variant="h6" gutterBottom sx={{color: "#273472", fontSize: "1.5rem", fontWeight: "600"}}>
            Cadastro para venda de ingressos
          </Typography>
          <BlueWarning
          text={`Preencha o formulário com as informações básicas do evento. O nome do evento será emitido junto ao ingresso para o cliente. Escolha um nome que o auxilie na identificação da compra. Ex.: “Palestra universitária”`}
        />
<form onSubmit={handleCreateTask}>
      <Grid container spacing={3}>

        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName"
            name="firstName"
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            label="Nome do evento"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            value={newCNPJ}
            onChange={e => setnewCNPJ(e.target.value)}
            label="CNPJ"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            value={newPrice}
            onChange={()=> {"Feature do preço ainda não finalizada"}}
            label="Endereço"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="address2"
            value={newAddress}
            type="number"
            onChange={e => setnewAddress(e.target.value)}
            label="Preço $"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />

        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            value={newQnt}
            type="number"
            // onChange={e => setnewQnt(e.target.value)}
            name="city"
            label="Quantidade"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
        <TextField
            id="state"
            name="state"
            value={newURL}
            onChange={e => setnewURL(e.target.value)}  
            label="URL da imagem"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
      </Grid>
        </Grid>
        <Box sx={{display: "flex", flexDirection: "row-reverse", mb: "5px"}}>
        <Button onClick={() => {handleCreateTask}} variant={"contained"} color={"primary"} type={"submit"} sx={{marginLeft: "30px"}}>
        Salvar
      </Button>
        <Button
        onClick={() => {
          setOpen(false)
        }}
      >
        Cancelar
      </Button>
        </Box>
            </form>
            </Paper>
            </DialogContent>
      </Modal>
    </div>
                </CardActions>
              </Card>
            </Grid>
        </Grid>
      </Container>
      {/* Footer */}
      <Grid sx={{marginTop: "2.5rem"}}>
      <Orders data={data} />
      </Grid>
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
      </Container>
      
        <ul>
            {/* {PostEvent.map(post => <li key="post.id">{post.title}</li>)} */}
            <>
      
      
            </>
        </ul>
    </div>
 )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const PostEvent = await prisma.postEvent.findMany()

    const data = PostEvent.map(post => {
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