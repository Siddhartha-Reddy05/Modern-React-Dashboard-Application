import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import styles from '../styles/Login.module.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted');
    try {
      // In a real app, you would validate credentials here
      localStorage.setItem('isAuthenticated', 'true');
      console.log('Authentication successful, redirecting to /');
      navigate('/', { replace: true });
    } catch (err) {
      console.error('Login error:', err);
      setError('Failed to log in. Please try again.');
    }
  };
  
  console.log('Login component rendering');

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.leftPanel}>
        <h1 className={styles.logoText} style={{ 
          fontSize: '2.5rem',
          fontWeight: 700,
          color: 'white',
          margin: 0
        }}>
          Board.
        </h1>
      </div>
      
      <div className={styles.rightPanel}>
        <div className={styles.loginBox}>
          <div className={styles.logoContainer}>
            <h2 className={styles.logoTextMobile} style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#333',
              margin: '0 0 20px 0',
              display: 'none'
            }}>
              Board.
            </h2>
          </div>
        
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          margin: '0 0 8px 0',
          color: '#333'
        }}>
          Sign in
        </h3>
        
        <p style={{
          fontSize: '1rem',
          color: '#666',
          margin: '0 0 24px 0'
        }}>
          Sign in to your account
        </p>
        
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '12px',
          marginBottom: '24px',
          width: '100%'
        }}>
          <button
            type="button"
            onClick={() => console.log('Sign in with Google')}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid #E0E0E0',
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontWeight: 500,
              minWidth: '120px',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => e.target.style.borderColor = '#ccc'}
            onMouseOut={(e) => e.target.style.borderColor = '#E0E0E0'}
          >
            <GoogleIcon style={{ fontSize: '1.1rem' }} />
            Sign in with Google
          </button>
          <button
            type="button"
            onClick={() => console.log('Sign in with Apple')}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid #E0E0E0',
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontWeight: 500,
              minWidth: '120px',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => e.target.style.borderColor = '#ccc'}
            onMouseOut={(e) => e.target.style.borderColor = '#E0E0E0'}
          >
            <AppleIcon style={{ fontSize: '1.1rem' }} />
            Sign in with Apple
          </button>
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          margin: '20px 0',
          color: '#E0E0E0'
        }}>
          <div style={{
            flex: 1,
            height: '1px',
            backgroundColor: '#E0E0E0'
          }}></div>
          <span style={{
            margin: '0 10px',
            color: '#666',
            fontSize: '0.875rem'
          }}>OR</span>
          <div style={{
            flex: 1,
            height: '1px',
            backgroundColor: '#E0E0E0'
          }}></div>
        </div>
        
        <form onSubmit={handleSubmit} style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            marginBottom: '16px'
          }}>
            <EmailOutlinedIcon style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#999',
              fontSize: '1.25rem'
            }} />
            <input
              type="email"
              placeholder="Email address"
              required
              style={{
                width: '100%',
                padding: '12px 12px 12px 44px',
                borderRadius: '8px',
                border: '1px solid #E0E0E0',
                fontSize: '0.875rem',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3A86FF'}
              onBlur={(e) => e.target.style.borderColor = '#E0E0E0'}
            />
          </div>
          
          <div style={{
            position: 'relative',
            width: '100%',
            marginBottom: '24px'
          }}>
            <LockOutlinedIcon style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#999',
              fontSize: '1.25rem'
            }} />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              required
              style={{
                width: '100%',
                padding: '12px 44px 12px 44px',
                borderRadius: '8px',
                border: '1px solid #E0E0E0',
                fontSize: '0.875rem',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3A86FF'}
              onBlur={(e) => e.target.style.borderColor = '#E0E0E0'}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#999',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px'
              }}
              onMouseEnter={(e) => e.target.style.color = '#333'}
              onMouseLeave={(e) => e.target.style.color = '#999'}
            >
              {showPassword ? (
                <VisibilityOffIcon style={{ fontSize: '1.25rem' }} />
              ) : (
                <VisibilityIcon style={{ fontSize: '1.25rem' }} />
              )}
            </button>
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            marginBottom: '24px',
            marginTop: '-8px'
          }}>
            <a href="#" style={{
              color: '#3A86FF',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: 500
            }}
            onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
            onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>
              Forgot password?
            </a>
          </div>
          
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              backgroundColor: '#000000',
              color: 'white',
              border: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#333333';
              e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#000000';
              e.target.style.boxShadow = 'none';
            }}
            onMouseDown={(e) => e.target.style.transform = 'scale(0.98)'}
            onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
          >
            Sign In
          </button>
          
          <div style={{
            textAlign: 'center',
            marginTop: '24px',
            fontSize: '0.875rem',
            color: '#666'
          }}>
            Don't have an account?{' '}
            <Link to="/register" style={{
              color: '#3A86FF',
              textDecoration: 'none',
              fontWeight: 500
            }}
            onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
            onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>
              Register here
            </Link>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
