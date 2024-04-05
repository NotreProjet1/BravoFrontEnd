import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faGoogle,
  faTwitter,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { Link } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import '../css/login.css'; // Importez le fichier CSS pour les styles spécifiques du formulaire

const Login = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    email: '',
    mots_de_passe: ''
  });
  const [role, setRole] = useState('participant'); // Rôle par défaut : participant

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleParticipantSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/participant/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          mots_de_passe: formData.mots_de_passe,
        }),
      });

      const responseData = await response.json();

      console.log('Request data:', { email: formData.email, mots_de_passe: formData.mots_de_passe });
      console.log('Response:', responseData);

      if (response.status === 200) {
        console.log('Login successful:', responseData);

        // Afficher une notification de succès
        toast.success('Login successful', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        history.push({
          pathname: '/UserProfileParticipant',
          state: { participantData: responseData.user }
        });
        // Gérer la suite après la connexion réussie
      } else {
        console.error('Login failed:', response.statusText);

        // Afficher une notification d'échec
        toast.error('Login failed', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Gérer l'échec de la connexion
      }
    } catch (error) {
      console.error('Error during login:', error);

      // Gérer les erreurs ici
    }
  };

  const handleInstructeurSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/instructeur/login', {
        email: formData.email,
        mots_de_passe: formData.mots_de_passe,
      });

      const responseData = response.data;

      if (response.status === 200) {
        toast.success('Login successful', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Redirection vers le profil de l'instructeur
        history.push('/UserProfile');
      } else {
        toast.error('Login failed', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  // Fonction pour changer le design du formulaire en fonction du rôle
  // const getFormClassName = () => {
  //   if (role === 'participant') {
  //     return 'participant-login-form'; // Ajoutez vos styles pour le formulaire participant ici
  //   } else if (role === 'instructeur') {
  //     return 'instructeur-login-form'; // Ajoutez vos styles pour le formulaire instructeur ici
  //   }
  //   return 'instructeur-login-form'; // Styles par défaut si le rôle n'est ni participant ni instructeur
  // };

  return (
    <div className="background_image background-radial-gradient">

    <MDBCard className="mx-auto login-card">
  <MDBCardBody>
    <form onSubmit={role === 'participant' ? handleParticipantSubmit : handleInstructeurSubmit}>
      {/* Boutons de sélection de rôle */}
      <div className='text-center mb-3'>
        <MDBBtn
          color='primary'
          onClick={() => setRole('participant')}
          className={`role-button ${role === 'participant' ? 'active' : ''}`}
          style={{ backgroundColor: role === 'participant' ? '#007bff' : '#ffffff', color: role === 'participant' ? '#ffffff' : '#007bff' }}
        >
          Participant
        </MDBBtn>
        <MDBBtn
          color='primary'
          onClick={() => setRole('instructeur')}
          className={`role-button ${role === 'instructeur' ? 'active' : ''}`}
          style={{ backgroundColor: role === 'instructeur' ? '#e01010' : '#ffffff', color: role === 'instructeur' ? '#ffffff' : '#007bff' }}
        >
          Instructeur
        </MDBBtn>
      </div>

      {/* Formulaire de connexion */}
      <div className="mb-3">
        <label htmlFor="form2Example1" className="form-label">Email address</label>
        <MDBInput
          name='email'
          className='form-control'
          size='sm'
          type='email'
          id='form2Example1'
          value={formData.email || formData.emailP}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="form2Example2" className="form-label">Password</label>
        <MDBInput
          name='mots_de_passe'
          className='form-control'
          size='sm'
          type='password'
          id='form2Example2'
          value={formData.mots_de_passe || formData.mots_de_passeP}
          onChange={handleChange}
        />
      </div>

      <MDBRow className='mb-3'>
        <MDBCol className='d-flex justify-content-center'>
          <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
        </MDBCol>
        <MDBCol>
          <a href='#!' className="forgot-link">Forgot password?</a>
        </MDBCol>
      </MDBRow>

      <MDBBtn type='submit' className={`mb-3 ${role === 'participant' ? 'participant-button' : 'instructeur-button'}`} style={{ backgroundColor: role === 'instructeur' ? '#e01010' : '#ffffff', color: role === 'instructeur' ? '#ffffff' : '#007bff' }} block>
        Sign in
      </MDBBtn>

      <div className='text-center'>
        <p>
          Not a member? {role === 'participant' ? (
            <Link to='/ParticipantRegister'>Register as a Participant</Link>
          ) : (
            <Link to='/Register'>Register as an Instructeur</Link>
          )}
        </p>

        <p>Login as: {role === 'participant' ? 'Participant' : 'Instructeur'}</p>
        <p>or sign up with:</p>

        <MDBBtn floating color='secondary' className='mx-1'>
          <FontAwesomeIcon icon={faFacebookF} />
        </MDBBtn>

        <MDBBtn floating color='secondary' className='mx-1'>
          <FontAwesomeIcon icon={faGoogle} />
        </MDBBtn>

        <MDBBtn floating color='secondary' className='mx-1'>
          <FontAwesomeIcon icon={faTwitter} />
        </MDBBtn>

        <MDBBtn floating color='secondary' className='mx-1'>
          <FontAwesomeIcon icon={faGithub} />
        </MDBBtn>
      </div>
    </form>
    <ToastContainer />
  </MDBCardBody>
</MDBCard>
</div>
  );
};

export default Login;