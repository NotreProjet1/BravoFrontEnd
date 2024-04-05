import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Document, Page } from '@react-pdf/renderer';
import { Link } from 'react-router-dom';
import '../../css/formationlist.css'; 
const FormationsList = () => {
  const [formations, setFormations] = useState([]);
  const [allFormations, setAllFormations] = useState([]); 
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchFormations = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/formationP/lister`);
        setFormations(response.data.liste);
        setAllFormations(response.data.liste);
      } catch (error) {
        console.error('Erreur lors de la récupération des formations :', error);
      }
    };

    fetchFormations();
  }, []);

  const handleSearchChange = async (event) => {
    const searchTerm = event.target.value.trim().toLowerCase(); // Convertir en minuscules et supprimer les espaces au début et à la fin
  
    setSearchQuery(searchTerm);
  
    try {
      const response = await axios.get(`http://localhost:3000/formationP/searchByDomaine?domaine=${searchTerm}`);
      console.log('Réponse de la recherche :', response.data); 
      const filteredFormations = response.data.formations.filter(formation => {
        const lowerCaseDomaine = formation.domaine.toLowerCase(); // Convertir le domaine de la formation en minuscules
        return lowerCaseDomaine.includes(searchTerm); // Vérifier si le domaine contient la recherche (correspondance partielle)
      });
      setFormations(filteredFormations);
    } catch (error) {
      console.error('Erreur lors de la récupération des formations :', error);
    }
  };
  

  // Afficher toutes les formations si la recherche est vide, sinon afficher les formations filtrées 
  const displayFormations = searchQuery === '' ? allFormations : formations || [];

  return (
    <div className="formations-list">
      <h1>Liste des formations payantes :</h1>

      <input 
        type="text" 
        placeholder="Rechercher par domaine..." 
        value={searchQuery} 
        onChange={handleSearchChange} 
      />

      <div className="cards-container">
        {displayFormations.map((formation) => (
          <div className="card1" key={formation.id_fp}>
            <h2>{formation.titre}</h2>
            <p className="domaine-niveau">Domaine : {formation.domaine} | Niveau : {formation.niveaux}</p>
            <p className="description">Description : {formation.description}</p>
            <p className="prix">Prix : {formation.prix}</p>
            <div className="button-container">
              <Link to={`/formationP/getFormationById/${formation.id_fp}`} className="details-button">Voir les détails</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormationsList;

