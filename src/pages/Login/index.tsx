import React from 'react';
import {
  Box, Button, CircularProgress, Container, TextField, Typography,
} from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Credentials from '../../interfaces/credentials';
import { setTokenData, setUser } from '../../store/reducers/auth';
import authService from '../../services/auth.service';

const initialValues: Credentials = {
  email: '',
  password: '',
};

const schema = Yup.object({
  email: Yup.string()
    .email('Informe um e-mail valido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .required('A senha é obrigatória'),
});

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormikSubmit = async (credentials: Credentials, { setSubmitting }: any) => {
    setSubmitting(true);
    const tokenData = await authService.authenticate(credentials);
    dispatch(setTokenData(tokenData));
    const user = await authService.me();
    dispatch(setUser(user));
    setSubmitting(false);
    navigate('/');
  };

  return (
    <Box
      component="main"
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        minHeight: '85vh',
      }}
    >
      <Container maxWidth="sm">
        <Formik
          initialValues={initialValues}
          onSubmit={handleFormikSubmit}
          validationSchema={schema}
        >
          {({
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box sx={{ my: 3 }}>
                <Typography
                  color="textPrimary"
                  variant="h4"
                >
                  Login
                </Typography>
              </Box>
              <TextField
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
                fullWidth
                label="E-mail"
                margin="normal"
                name="email"
                type="email"
                required
                disabled={isSubmitting}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                variant="outlined"
              />
              <TextField
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
                fullWidth
                label="Senha"
                margin="normal"
                name="password"
                type="password"
                required
                disabled={isSubmitting}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                variant="outlined"
              />
              <Box sx={{ py: 2 }}>
                <Button
                  sx={{ height: 45 }}
                  color="primary"
                  fullWidth
                  size="large"
                  type="submit"
                  disabled={isSubmitting}
                  variant="contained"
                >
                  {
                    isSubmitting ? (
                      <CircularProgress color="inherit" size={25} />
                    ) : (
                      <>Entrar</>
                    )
                  }
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Container>
    </Box>
  );
};

export default LoginPage;
