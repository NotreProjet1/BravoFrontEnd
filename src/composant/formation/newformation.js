import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, Input } from '@mui/material';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../css/addformation.css';
import { Link } from 'react-router-dom';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const AddFormationForm = () => {
  const [formationData, setFormationData] = useState({
    titre: '',
    description: '',
    domaine: '',
    prix: '',
    certeficat: '',
    niveaux: '',
    plantFile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormationData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormationData((prevData) => ({
      ...prevData,
      plantFile: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('titre', formationData.titre);
      formData.append('description', formationData.description);
      formData.append('domaine', formationData.domaine);
      formData.append('prix', formationData.prix);
      formData.append('certeficat', formationData.certeficat);
      formData.append('niveaux', formationData.niveaux);
      formData.append('plant', formationData.plantFile);

      const response = await axios.post('http://localhost:3000/formationP/ajouter', formData);

      if (response.status === 201) {
        toast.success('Formation créée avec succès', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        console.error('Erreur lors de la création de la formation:', response.data.message);
        toast.error('Erreur lors de la création de la formation', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error('Error during formation creation:', error);
      toast.error('Erreur interne du serveur', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <section className="background-radial-gradient overflow-hidden">
      <style>{`
        .background-radial-gradient {
          background-color: rgba(255, 255, 255, 0.3);
          background-image: radial-gradient(650px circle at 0% 0%,
            hsl(218, 41%, 35%) 15%,
            hsl(218, 41%, 30%) 35%,
            hsl(218, 41%, 20%) 75%,
            hsl(218, 41%, 19%) 80%,
            transparent 100%),
            radial-gradient(1250px circle at 100% 100%,
            hsl(218, 41%, 45%) 15%,
            hsl(218, 41%, 30%) 35%,
            hsl(218, 41%, 20%) 75%,
            hsl(218, 41%, 19%) 80%,
            transparent 100%);
        }

        .add-formation-container {
          display: flex;
          justify-content: space-between;
          margin: 20px;
        }

        .sidebar {
          width: 20%;
          padding: 20px;
          background-color: #ddd;
          border-right: 1px solid #ddd;
        }

        .main-content {
          width: 78%;
          padding: 20px;
        }

        .form-control {
          margin-bottom: 20px;
        }

        .file-input {
          margin-bottom: 20px;
        }

        .submit-button {
          margin-top: 20px;
          width: 100%;
        }

        .header {
          text-align: center;
          margin-bottom: 20px;
        }

        .form-label {
          margin-top: 20px;
          display: block;
          font-weight: bold;
          color: #333;
        }

        .sidebar-button {
          margin-bottom: 10px;
        }

        .MuiMenuItem-root {
          font-size: 14px;
        }

        .Mui-selected {
          background-color: #f0f0f0;
        }

        .Mui-focused .MuiOutlinedInput-notchedOutline {
          border-color: #007bff;
        }

        #radius-shape-1 {
          height: 220px;
          width: 220px;
          top: -60px;
          left: -130px;
          background: radial-gradient(#44006b, #ad1fff);
          overflow: hidden;
        }

        #radius-shape-2 {
          border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
          bottom: -60px;
          right: -110px;
          width: 300px;
          height: 300px;
          background: radial-gradient(#44006b, #ad1fff);
          overflow: hidden;
        }

        .bg-glass {
          background-color: hsla(0, 0%, 100%, 0.9) !important;
          backdrop-filter: saturate(200%) blur(25px);
        }
      `}</style>
       <div className="add-formation-container">
      <div className="sidebar">
        <h3 className="header">Ajouter les cours correspondants</h3>
        <Button variant="outlined" color="primary" fullWidth className="sidebar-button">
          <Link to={`/AddCours`} className="mt-4 block text-center text-blue-500 hover:underline"> + cours </Link>
        </Button>
      </div>
      <div className="main-content">
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth variant="outlined" required className="form-control">
            <InputLabel htmlFor="domaine-label">
              Domaine
            </InputLabel>
            <Select
              labelId="domaine-label"
              label="Domaine"
              name="domaine"
              value={formationData.domaine}
              onChange={handleChange}
            >
              <MenuItem value="Technology">Technology</MenuItem>
              <MenuItem value="Business">Business</MenuItem>
              <MenuItem value="Healthcare">Healthcare</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth variant="outlined" required className="form-control">
            <InputLabel htmlFor="niveaux-label">
              Niveaux
            </InputLabel>
            <Select
              labelId="niveaux-label"
              label="Niveaux"
              name="niveaux"
              value={formationData.niveaux}
              onChange={handleChange}
            >
              <MenuItem value="Beginner">Débutant</MenuItem>
              <MenuItem value="Intermediate">Intermédiaire</MenuItem>
              <MenuItem value="Professional">Professionnel</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Titre"
            variant="outlined"
            fullWidth
            name="titre"
            value={formationData.titre}
            onChange={handleChange}
            required
            className="form-control"
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            name="description"
            value={formationData.description}
            onChange={handleChange}
            required
            className="form-control"
          />

          <TextField
            label="Prix"
            variant="outlined"
            fullWidth
            name="prix"
            value={formationData.prix}
            onChange={handleChange}
            className="form-control"
          />
          <TextField
            label="Certificat"
            variant="outlined"
            fullWidth
            name="certeficat"
            value={formationData.certeficat}
            onChange={handleChange}
            required
            className="form-control"
          />

          <InputLabel htmlFor="plantFileInput" className="form-label">
            <CloudUploadIcon/> {/* Icône d'upload */}
            Ajouter un fichier pour le Plant
          </InputLabel>
          <Input
            id="plantFileInput"
            name="plantFile"
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            required
            className="file-input"
          />

          <Button type="submit" variant="contained" color="primary" className="submit-button">
            Ajouter Formation
          </Button>
        </form>
      </div>
      <ToastContainer />
    </div>
    </section>
  );
};

export default AddFormationForm;
