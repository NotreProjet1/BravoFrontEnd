// Register.js
import React, { useState } from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
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
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
  const history = useHistory();

  const [step, setStep] = useState(1);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [specialite, setSpecialite] = useState('');
  const [mots_de_passe, setPassword] = useState('');


  const handleNextStep = async () => {
    // Logique de validation pour chaque étape avant de passer à l'étape suivante
    switch (step) {
      case 1:
        if (!nom || !prenom || !email) {
          toast.error('Veuillez remplir tous les champs obligatoires.');
          return;
        }
        break;
      case 2:
        if (!tel || !specialite || !mots_de_passe) {
          toast.error('Veuillez remplir tous les champs obligatoires.');
          return;
        }
        if (!mots_de_passe) {
          toast.error('Le mot de passe est requis.');
          console.error('Le mot de passe est requis.');
          return;
        }
        break;
      default:
        break;
    }

    // Envoi de la demande d'inscription au backend
    const response = await fetch('http://localhost:3000/instructeur/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nom,
        prenom,
        email,
        tel,
        mots_de_passe,
        specialite,

      }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Inscription réussie:', result);
      toast.success('Inscription réussie!');

      history.push({
        pathname: '/login',

      });
      // Gérer l'inscription réussie, peut-être rediriger vers la page de connexion
    } else {
      console.error('Échec de l inscription:', response.statusText);
      // Gérer l'échec de l'inscription
    }

    setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique de soumission du formulaire
    console.log('Formulaire soumis avec succès!');
  };

  return (
    <div className="background_image background-radial-gradient">
      <MDBCard className='mx-auto mt-5 card-container'>
        <MDBCardBody className="form-wrapper">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <MDBRow className='mb-3'>
                  <MDBCol size='6'>
                    <label htmlFor="Nom" className="form-label">Nom</label>
                    <MDBInput
                      size='sm'
                      type='text'
                      id='nom'
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                      required
                    />
                  </MDBCol>
                  <MDBCol size='6'>
                    <label htmlFor="prenom" className="form-label">Prénom</label>
                    <MDBInput
                      size='sm'
                      type='text'
                      id='prenom'
                      value={prenom}
                      onChange={(e) => setPrenom(e.target.value)}
                      required
                    />
                  </MDBCol>
                </MDBRow>
                <label htmlFor="email" className="form-label">Email</label>

                <MDBInput
                  className='mb-3'
                  size='sm'
                  type='email'
                  id='email'

                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </>
            )}

            {step === 2 && (
              <>
                <label htmlFor="tel" className="form-label">Téléphone</label>
                <MDBInput
                  className='mb-3'
                  size='sm'
                  type='text'  // Changé de 'tel' à 'text'
                  id='tel'
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                  required
                />
                <MDBRow className='mb-3'>
                  <MDBCol>
                    <label className='form-label custom-label'>Spécialité</label>
                    <select
                      className='form-select mb-3'
                      value={specialite}
                      onChange={(e) => setSpecialite(e.target.value)}
                      required
                    >
                      <option value='' disabled>Choisissez votre spécialité</option>
                      <option value='developer'>Développeur</option>
                      <option value='designer'>Designer</option>
                      <option value='manager'>Manager</option>
                    </select>
                  </MDBCol>
                </MDBRow>
                <label htmlFor="mots_de_passe" className="form-label">Mot de passe</label>

                <MDBInput
                  size='sm'
                  type='password' // Utilisation correcte du type 'password'
                  id='mots_de_passe'

                  value={mots_de_passe}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </>
            )}

            <MDBBtn type='button' onClick={handleNextStep} className='mb-3' block>
              {step === 1 ? 'Suivant' : 'Inscription'}
            </MDBBtn>

            <div className='text-center'>
              {step === 1 && (
                <p>
                  Déjà membre? <a href='#!'>Se connecter</a>
                </p>
              )}

              <p>ou inscrivez-vous avec:</p>

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
        </MDBCardBody>
        <ToastContainer />

      </MDBCard>

    </div>

  );
};

export default Register;