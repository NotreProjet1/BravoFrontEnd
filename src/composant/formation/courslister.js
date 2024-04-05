import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Document, Page } from '@react-pdf/renderer';
import { Link } from 'react-router-dom';
import '../formation/courslister.css'; 

const CoursGList = () => {
  const [Courss, setCourss] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCourss = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:3000/coursgratuis/lister`);
        setCourss(response.data.liste);
      } catch (error) {
        console.error('Erreur lors de la récupération des Courss :', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourss();
  }, []);

  const handleSearchChange = async (event) => {
    const searchTerm = event.target.value.trim().toLowerCase();
    setSearchQuery(searchTerm);

    try {
      if (searchTerm) {
        setLoading(true);
        const response = await axios.get(`http://localhost:3000/coursgratuis/rechercherByTitre?titre=${searchTerm}`);
        console.log('Réponse de la recherche :', response.data); 
        setSearchResults(response.data.liste || []);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des cours :', error);
    } finally {
      setLoading(false);
    }
  };

  const displayCourss = searchResults.length > 0 ? searchResults : Courss;

  return (
    <div className='cours-list'>
      <h1>Liste des Cours Gratuits :</h1>
      <input 
        type="text" 
        placeholder="Rechercher par titre..." 
        value={searchQuery} 
        onChange={handleSearchChange} 
      />
      {loading && <div>Loading...</div>}
      <ul>
        {displayCourss.map((Cours) => {
          const baseFilePath = 'http://localhost:3000/uploads/';
          const filePath = baseFilePath + Cours.contenu;

          if (searchQuery && !Cours.titre.toLowerCase().includes(searchQuery)) {
            return null;
          }

          return (
            <li key={Cours.id_cg} className="cours-card">
              <h2 className="cours-title">{Cours.titre}</h2>
              <p className="cours-description">Description : {Cours.description}</p>
              {Cours.contenu && (
                <div>
                  <Document file={filePath}>
                    <Page pageNumber={1} />
                  </Document>
                  <a href={filePath} download={Cours.contenu.split('').pop()} className="cours-file-link" target="_blank">
                    Télécharger le fichier
                  </a>
                </div>
              )}
              <Link to={`/cours/getCoursGById/${Cours.id_cg}`} className="cours-details-link">Voir les détails</Link>
            </li> 
          );
        })}
      </ul>
      {/* Afficher l'image GIF uniquement si aucun résultat n'est trouvé */}
      {!loading && displayCourss.length === 0 && (
        <div>
          <img src='https://media.tenor.com/VZ3hn4SEFRwAAAAi/mochi-cat-chibi-cat.gif' alt="No Results" />
        </div>
      )}
    </div>
  );
};

export default CoursGList;
