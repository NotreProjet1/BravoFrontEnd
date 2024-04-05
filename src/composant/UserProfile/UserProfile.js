import React from 'react';
import { useParams } from 'react-router-dom';
import UserSidebar from '../../composant/UserProfile/UserSidebar';
import { Card, Avatar, Typography, Button } from '@mui/material';
import './UserProfile.css';

const UserProfile = () => {
  const { activepage } = useParams();

  // Fonction fictive pour modifier le profil
  const handleEditProfile = () => {
    // Logique de modification du profil
    console.log("Modifier le profil");
  };

  return (
    <div className='userprofile'>
      <div className='profile-banner'>
        <img className='banner-image' src='https://media.istockphoto.com/id/467367026/fr/photo/ciel-parfait-et-loc%C3%A9an.jpg?s=612x612&w=0&k=20&c=3UFkx01SwfrzT2-PKEK8W0xcKGKUgzEWeZkBMgvcTuQ=' alt='Profile Banner' />
        <h2>Mon Profil</h2>
      </div>

      <div className='userprofilein'>
        <div className='left'>
          <UserSidebar activepage={activepage} />
        </div>
        <div className='right'>
          <Card className='profile-card' style={{ marginTop: '10px' }}>
            <div className="card-body p-4">
              <div className="d-flex text-black">
              <div className="flex-shrink-0">
  <Avatar src="https://app.scorf.fr/images/adherents/default-avatar.jpg" alt="Avatar" style={{ width: '150px', height: '200px', borderRadius: '50%' }} />
</div>


                <div className="flex-grow-1 ms-3">
                  <Typography variant="h5" className="mb-1">John Doe</Typography>
                  <Typography variant="subtitle1" className="mb-2 pb-1" style={{ color: '#2b2a2a' }}>Senior Journalist</Typography>
               
                  <div className="d-flex pt-1">
                  <div className="d-flex pt-1">
  <Button 
    variant="outlined" 
    color="primary" 
    className="me-1 flex-grow-1" 
    size="small" 
    onClick={handleEditProfile}  
    style={{ width: '100px', height: '30px', padding: '5px !important', fontSize: '12px !important' }}> Modifier
  </Button>
</div>

</div>

                </div>
              </div>
            </div>
          </Card>
          
          <div className="profile-table" style={{ marginTop: '20px' }}>
            <table className="table">
              <tbody>
                <tr>
                  <td><strong>Prénom</strong></td>
                  <td>John</td>
                </tr>
                <tr>
                  <td><strong>Email</strong></td>
                  <td>johndoe@example.com</td>
                </tr>
                <tr>
                  <td><strong>Téléphone</strong></td>
                  <td>123-456-7890</td>
                </tr>
              </tbody>
            </table>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
