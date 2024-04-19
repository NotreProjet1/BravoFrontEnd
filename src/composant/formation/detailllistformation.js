import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../css/detailleformation.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const SingleFormation = () => {
  const { id } = useParams();
  const [formation, setFormation] = useState(null);

  useEffect(() => {
    const fetchFormation = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/formationP/getFormationById/${id}`);
        setFormation(response.data.formation);
      } catch (error) {
        console.error('Erreur lors de la récupération de la formation :', error);
      }
    };

    fetchFormation();
  }, [id]);

  if (!formation) {
    return <div>Loading...</div>;
  }

  // Définition de la source du fichier à afficher dans l'iframe
  const fileSource = formation.plant ? `http://localhost:3000/uploads/${formation.plant}` : '';

  return (
    <div className="formation-details">
      <h1>Formation de <span>{formation.titre}</span></h1>
      <div className="formation-info">
        <div className="domaine-niveau">
          <p>Domaine : {formation.domaine}</p>
          <p>Niveau : {formation.niveaux}</p>
          <p>Prix : {formation.prix}</p>

        </div>
      </div>
      <p>Description : {formation.description}</p>

      {formation.plant && (
        <div className="formation-content">
          <h3>Plant de la formation :</h3>
          <a href={fileSource} download={formation.plant.split('').pop()} target="_blank" rel="noopener noreferrer">
            <button className="download-button">
              Télécharger le fichier <FontAwesomeIcon icon={faDownload} />
            </button>
          </a>
          <iframe title="Contenu de la formation" src={fileSource}></iframe>
          
        </div>
      )}
    </div>
  );
};

export default SingleFormation;
