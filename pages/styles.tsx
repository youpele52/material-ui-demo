import { makeStyles } from '@material-ui/core/styles'
// makeStyles is used for styling material ui, useStyles is a made from makeStyles
// theme is used for making additonal styling

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  icon: {
    // marginRight: '20px',
    marginRight: '1rem',
  },
  button: {
    // marginTop: '40px',
    marginTop: '2rem',
  },
  cardGrid: {
    // padding: '20px 0',
    padding: '4rem 0',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.26%', //16:9 ratio
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    // backgroundColor: '#808080',
    padding: '2rem 0',
  },
}))

export default useStyles
