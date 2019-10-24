import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as ROUTES from '../../constants/routes';

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

const SignUpLink = () => (
  <Link to={ROUTES.SIGN_UP}>Don't have an account? Sign Up</Link>
);


const SignUp = (props) => {
    const classes = useStyles();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [passwordOne, setPasswordOne] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');
    const [error, setError] = useState('');

    const handleUserNameInput = e => {
        setUserName(e.target.value);
    };
    const handleEmailInput = e => {
        setEmail(e.target.value);
    };
    const handlePassword1Input = e => {
        setPasswordOne(e.target.value);
    };
    const handlePassword2Input = e => {
        setPasswordTwo(e.target.value);
    };

    /*const onSubmit = event => {
      props.firebase
          .doCreateUserWithEmailAndPassword(email, passwordOne)
          .then(authUser => {
            setUserName()
          })
      .catch(error => {
        setError(error)
      });
      event.preventDefault();
    }*/

    const isInvaid = passwordOne !== passwordTwo ||
          passwordOne === '' ||
          email === '' ||
          userName === '';
    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoFocus
                value={userName}
                onChange={handleUserNameInput}
                type="text"
                placeholder="Full Name"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email Address"
                autoFocus
                value={email}
                onChange={handleEmailInput}
                type="text"
                placeholder="Email Address"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password1"
                label="Password"
                autoFocus
                value={passwordOne}
                onChange={handlePassword1Input}
                type="password"
                placeholder="password"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password2"
                label="Confirm Password"
                autoFocus
                value={passwordTwo}
                onChange={handlePassword2Input}
                type="password"
                placeholder="Confirm Password"
              />
              <Button
                disabled={isInvaid}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                >Submit
              </Button>
            </form>
          </div>
          <Box mt={8}>
           <Copyright />
          </Box>
        </Container>
    );

};

/*const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
    
}

class SignUpForm extends Component {

    
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {

    }
    onChange = event => {
        this.setState({[event.target.name]:event.target.value});
    };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error
        } = this.state;
        const isInvaid = passwordOne !== passwordTwo ||
          passwordOne === '' ||
          email === '' ||
          username === '';

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
                <form onSubmit={this.onSubmit}>
              <input
                name="username"
                value={username}
                onChange={this.onChange}
                type="text"
                placeholder="Full Name"
             />
             <input
               name="email"
               value={email}
               onChange={this.onChange}
               type="text"
               placeholder="Email Address"
              />
              <input
                name="passwordOne"
                value={passwordOne}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
              />
              <input
                name="passwordTwo"
                value={passwordTwo}
                onChange={this.onChange}
                type="password"
                placeholder="Confirm Password"
              />
              <button disabled={isInvaid} type="submit">Sign Up</button>
              {error && <p>{error.message}</p>}
            </form>
              </div>
            </Container>
        );
    }

}*/


export default SignUp;
export {SignUpLink}