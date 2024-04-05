import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../css/detailleformation.css'; 



const SingleCours = () => {
  const { id } = useParams();
  const [CoursG, setCours] = useState(null);

  useEffect(() => {
    const fetchCoursG = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/coursgratuis/getCoursGById/${id}`);
        setCours(response.data.CoursG);
      } catch (error) {
        console.error('Erreur lors de la récupération de la Cours :', error);
      }
    };

    fetchCoursG();
  }, [id]);

  if (!CoursG) {
    return <div>Loading...</div>;
  }

  // Définition de la source du fichier à afficher dans l'iframe
  const fileSource = CoursG.contenu ? `http://localhost:3000/uploads/${CoursG.contenu}` : '';

  return (
    <div className="formation-details">
      <h1>Cours  de <h2>{CoursG.titre}</h2></h1>
   
      <p>Description : {CoursG.description}</p>

      {CoursG.contenu && (
        <div className="formation-content">
          <h3>Contenu de la Cours :</h3>
          <iframe title="Contenu de la Cours" src={fileSource} width="100%" height="500px"></iframe>
          <a href={fileSource} download={CoursG.contenu.split('').pop()} target="_blank" rel="noopener noreferrer">
            Télécharger le fichier
          </a>
        </div>
      )}
  =
    </div>
  );
};

export default SingleCours;