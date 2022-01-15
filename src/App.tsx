import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, CircularProgress } from '@mui/material';
import { connect, useDispatch } from 'react-redux';
import { types } from './store/ducks/auth';

type Props = {
  isLoadingUser: boolean,
  user: {
    id: number,
    name: string,
    email: string,
  } | null
};

const App = ({ isLoadingUser, user }: Props) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch({ type: types.ASYNC_REQUEST_USER });
  };

  return (
    <>
      <Button
        variant="contained"
        disabled={isLoadingUser}
        onClick={handleOnClick}
        endIcon={!isLoadingUser && <ArrowForwardIcon />}
        size="small"
        style={{
          height: 40,
          width: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
          marginLeft: 10,
        }}
      >
        {
          isLoadingUser ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            <>Entrar</>
          )
        }
      </Button>
      {user && <span>{user.name}</span>}
    </>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.auth.user,
  isLoadingUser: state.auth.loading,
});

export default connect(mapStateToProps)(App);
