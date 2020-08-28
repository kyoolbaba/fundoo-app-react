import React,{useState} from 'react'
import styles from "../scss/login.module.scss";
import {
    Card,
    CardContent,
    Typography,
    TextField,
    Grid,
    Button,
  } from "@material-ui/core";
  import "../css/logo.css";
  import { Link } from "react-router-dom";

export default function Forgotpassword() {
    const [values,setValues]=useState({
        emailId:"",
        password:"",
    })
    
    function handleOnChange(e){
      setValues({...values,[e.currentTarget.name]:e.currentTarget.value})
    }
    
    return (
        <Card className={styles.mainLogo} justify="center" boxShadow={3}>
        <CardContent>
          <Typography className="Logo" variant="h5">
            <span className="f-red">F</span>
            <span className="u-blue">u</span>
            <span className="n-yellow">n</span>
            <span className="d-red">d</span>
            <span className="o-green">o</span>
            <span className="o-blue">o</span>
          </Typography>
          <Typography className={styles.signInLabel} m={3} variant="h5">
          Find your email
          </Typography>
          <Typography className={styles.loginInfo}>Enter your recovery email</Typography>
  
          <form action="">
            <Grid
              container
          
              direction="column"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <TextField
                className={styles.EmailInput}
                value={values.emailId}
                name="emailId"
                onChange={handleOnChange}
                fullWidth="true"
                id="standard-basic"
                color="secondary"
                label="Email Id *"
              />
            </Grid>
          </form>
          <Link className={styles.goBackButton} to="/login">
           Back
          </Link>
          <Link className={styles.findEmail} to="/login">
          Next
        </Link>
        </CardContent>
      </Card>
    )
}
