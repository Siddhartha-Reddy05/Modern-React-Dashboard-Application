import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Button, 
  Typography, 
  Container, 
  Paper,
  useTheme
} from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import styles from '../styles/NotFound.module.css';

const NotFound = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Container maxWidth="md">
      <Paper elevation={3} className={styles.notFoundContainer}>
        <div className={styles.notFoundContent}>
          <ErrorOutlineIcon 
            style={{ 
              fontSize: 80, 
              color: theme.palette.error.main,
              marginBottom: 16
            }} 
          />
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom
            className={styles.title}
          >
            404 - Page Not Found
          </Typography>
          <Typography 
            variant="h6" 
            color="textSecondary" 
            paragraph
            className={styles.subtitle}
          >
            Oops! The page you're looking for doesn't exist or has been moved.
          </Typography>
          <Typography 
            variant="body1" 
            color="textSecondary"
            className={styles.description}
          >
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            onClick={() => navigate('/')}
            className={styles.button}
          >
            Go to Homepage
          </Button>
        </div>
      </Paper>
    </Container>
  );
};

export default NotFound;
