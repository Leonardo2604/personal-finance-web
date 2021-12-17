import React, { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, CircularProgress } from '@mui/material';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleOnClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Button
      variant="contained"
      disabled={isLoading}
      onClick={handleOnClick}
      endIcon={!isLoading && <ArrowForwardIcon />}
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
        isLoading ? (
          <CircularProgress size={20} color="inherit" />
        ) : (
          <>Entrar</>
        )
      }
    </Button>
  );
};

export default App;
