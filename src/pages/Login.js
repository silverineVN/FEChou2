import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Sign Up</h1>
        <div style={styles.socialButtons}>
          <button style={styles.googleButton}>
            Sign in with Google <span style={styles.googleLogo}>G</span>
          </button>
          <span style={styles.orText}>OR</span>
          <button style={styles.githubButton}>
            Sign  with Github <span style={styles.githubLogo}>🐱</span>
          </button>
        </div>
        <input type="email" placeholder="Your email" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />
         
        
        
        <button style={styles.submitButton}>Sign In</button>
      </div>
      
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    maxWidth: '400px',
    width: '100%',
    marginRight: '20px',
  },
  title: { textAlign: 'center', marginBottom: '20px' },
  socialButtons: { display: 'flex', justifyContent: 'space-between', marginBottom: '20px' },
  googleButton: { backgroundColor: '#fff', border: '1px solid #ddd', padding: '10px', borderRadius: '4px', cursor: 'pointer' },
  githubButton: { backgroundColor: '#333', color: '#fff', border: 'none', padding: '10px', borderRadius: '4px', cursor: 'pointer' },
  googleLogo: { color: '#ea4335', marginLeft: '10px' },
  githubLogo: { marginLeft: '10px' },
  orText: { alignSelf: 'center', margin: '0 10px' },
  input: { width: '100%', padding: '10px', margin: '10px 0', border: '1px solid #ddd', borderRadius: '4px' },
  submitButton: { backgroundColor: '#007bff', color: '#fff', padding: '10px', border: 'none', borderRadius: '4px', width: '100%', cursor: 'pointer' },
  loginContainer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '30px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  loginText: { marginBottom: '20px' },
  loginButton: { backgroundColor: '#fff', color: '#333', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer' },
};

export default SignUpForm;