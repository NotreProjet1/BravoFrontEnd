// UserProfileModal.js

import React, { useState } from 'react';
import Modal from 'react-modal';
import '../../css/modal.css'; // Assurez-vous d'importer le CSS du modal si nécessaire

const UserProfileModal = ({ onClose, userData }) => {
  const [editedUserData, setEditedUserData] = useState(userData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData({ ...editedUserData, [name]: value });
  };

  const handleSaveChanges = () => {
    // Ajoutez ici la logique pour sauvegarder les modifications
    // Vous pouvez appeler une API, mettre à jour le backend, etc.
    console.log('Modifications sauvegardées :', editedUserData);
    onClose();
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      contentLabel="Modifier le profil"
    >
      <h2>Modifier le profil</h2>
      <div className="student-info">
        <h3>Informations étudiant</h3>
        <form>
          <label htmlFor="nom">Nom:</label>
          <input type="text" id="nom" name="nom" value={editedUserData.nom} onChange={handleInputChange} />

          <label htmlFor="prenom">Prénom:</label>
          <input type="text" id="prenom" name="prenom" value={editedUserData.prenom} onChange={handleInputChange} />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={editedUserData.email} onChange={handleInputChange} />

          <label htmlFor="formation">Formation:</label>
          <input type="text" id="formation" name="formation" value={editedUserData.domaine} onChange={handleInputChange} />

          <button type="button" onClick={handleSaveChanges}>Enregistrer</button>
        </form>
      </div>
      <button type="button"className='btnn' onClick={onClose}>Annuler</button>
    </Modal>
  );
};

export default UserProfileModal;
