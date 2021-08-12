import Head from 'next/head'
import Image from 'next/image'
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'
import useStyles from './styles'
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// SIDE NOTE
// Typography is used for styling text, h1, h2..., p
// CssBaseline add default styling to your materialui applications
// toolbar is the blue line/bar
// Grid for positioning and responsive design
// card media is used for the image
// SCREEN SIZES
// xs is mobile, sm is ipad, md: is desktop and ipadpro,
export default function Home() {
  const classes = useStyles() // calling the useStyles hook
  return (
    <div>
      <Head>
        <title>Material-UI Demo</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
      </Head>

      <div>
        <CssBaseline />
        <AppBar position='relative'>
          <Toolbar>
            <PhotoCamera className={classes.icon} />
            <Typography variant='h6'>Photo Album</Typography>
          </Toolbar>
        </AppBar>
      </div>
      <main className={classes.container}>
        <div>
          <Container maxWidth='sm'>
            <Typography
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph
            >
              This is a photo album Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quasi mollitia nemo explicabo praesentium
              reprehenderit consectetur enim quibusdam neque incidunt
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            {cards.map((card) => {
              return (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image='https://source.unsplash.com/random'
                      title='Image title'
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography variant='h5' gutterBottom>
                        Heading
                      </Typography>
                      <Typography>
                        {' '}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dicta excepturi vero nulla odit exercitationem omnis nam
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size='small' color='primary'>
                        View
                      </Button>
                      <Button size='small' color='primary'>
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography align='center' variant='h6' gutterBottom>
          Footer
        </Typography>
        <Typography align='center' variant='subtitle1' color='textSecondary'>
          2021
        </Typography>
      </footer>
    </div>
  )
}