import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link, withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import {SignUpLink} from '../SignUp';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        iResume
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignInPage = () => (
  <div>
    <SignInForm />
  </div>
)

const SignInFormBase = ({firebase, history}) =>  {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const onChange = event => {
    let { name, value } = event.target; // name/value from input element that changed
    setValues({ ...values, [name]: value }); // update corresponding field in values object
  };

  const onSubmit = (event) => {
    firebase
      .doSignInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        setValues({...values});
        history.push(ROUTES.HOME);
      })
      .catch(error => {
        setError(error);
      });
      event.preventDefault();
  }
  const isInvaid = values.password === '' || values.email === '';

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={onSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={values.email}
            onChange={onChange}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={values.password}
            onChange={onChange}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
                disabled={isInvaid}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                >Sign In
              </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
            <Link to={ROUTES.SIGN_UP} variant="body2">Don't have an account? Sign Up</Link>
            
            </Grid>
          </Grid>
          {error && <p>{error.message}</p>}
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

const SignInForm = withRouter(withFirebase(SignInFormBase));
export default SignInPage;
