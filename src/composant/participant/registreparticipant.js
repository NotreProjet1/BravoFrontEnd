// ParticipantRegister.js
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import '../../css/ParticipantRegister.css';
import { useHistory } from 'react-router-dom'
const ParticipantRegister = () => {
    const history = useHistory(); 
    const [step, setStep] = useState(1);
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [domaine, setDomaine] = useState('');
    const [categorie, setCategorie] = useState('');
    const [emailP, setEmail] = useState('');
    const [mots_de_passeP, setPassword] = useState('');
    const [tel, setTel] = useState('');

    const handleNextStep = async () => {
        // Logique de validation pour chaque étape avant de passer à l'étape suivante
        switch (step) {
            case 1:
                if (!nom || !prenom || !emailP) {
                    toast.error('Veuillez remplir tous les champs obligatoires.'); // Affichage du message d'erreur avec ReactToastify
                    return;
                }
                break;
            case 2:
                if (!tel || !mots_de_passeP) {
                    toast.error('Veuillez remplir tous les champs obligatoires.');
                    return;
                }
                if (!mots_de_passeP) {
                    toast.error('Le mot de passe est requis.');
                    return;
                }
                break;
            default:
                break;
        }

        // Envoi de la demande d'inscription au backend
        const response = await fetch('http://localhost:3000/participant/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nom,
                prenom,
                emailP,
                domaine,
                categorie,
                mots_de_passeP,
                tel,
            }),
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Inscription réussie:', result);
            toast.success('Inscription réussie!');
            history.push({
                pathname: '/login',
                
              });
        } else {
            console.error('Échec de l inscription:', response.statusText);
            toast.error('Échec de l\'inscription. Veuillez réessayer.'); 
        }

        setStep(step + 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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
                                <label htmlFor="Prénom" className="form-label">Prénom</label>
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

                            <MDBRow className='mb-3'>
                                <MDBCol>
                                    <label className='form-label'>Domaine</label>
                                    <select
                                        className='form-select mb-3'
                                        value={domaine}
                                        onChange={(e) => setDomaine(e.target.value)}
                                        required
                                    >
                                        <option value='' disabled>Choisissez votre domaine</option>
                                        <option value='ecommerce'>E-commerce</option>
                                        <option value='Développeur'>Développeur</option>
                                    </select>
                                </MDBCol>
                                <MDBCol>
                                    <label className='form-label'>Catégorie</label>
                                    <select
                                        className='form-select mb-3'
                                        value={categorie}
                                        onChange={(e) => setCategorie(e.target.value)}
                                        required
                                    >
                                        <option value='' disabled>Choisissez votre catégorie</option>
                                        <option value='professionnelle'>Professionnelle</option>
                                        <option value='debuitant'>Débutant</option>
                                    </select>
                                </MDBCol>
                            </MDBRow>
                            <label htmlFor="Téléphone" className="form-label">Téléphone</label>
                            <MDBInput
                                className='mb-3'
                                size='sm'
                                type='tel'
                                id='tel'
                                value={tel}
                                onChange={(e) => setTel(e.target.value)}
                                required
                            />
                                <label htmlFor="Email" className="form-label">Email</label>
                            <MDBInput
                                className='mb-3'
                                size='sm'
                                type='email'
                                id='emailP'
                                value={emailP}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                                <label htmlFor="mots_de_passeP" className="form-label">Mot de passe</label>
                            <MDBInput
                                className='mb-3'
                                size='sm'
                                type='password'
                                id='mots_de_passeP'
                                value={mots_de_passeP}
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

export default ParticipantRegister; 