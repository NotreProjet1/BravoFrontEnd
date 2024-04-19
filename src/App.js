import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SearchComponent from './composant/SearchComponent';
import './css/themecolor.css';
import  './App.css';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import listeProfil from './composant/listeProfilPar';
import CertificatesTable from './composant/liste';
import login from './composant/login';
import VideoPage from './composant/vedio';
import publication from './composant/publication';

import HomeFinal from './composant/homefinal';
import ParticipantRegister from './composant/participant/registreparticipant';
import Register from './composant/registreinstructeur';
import AddCours from './composant/formation/addCours';
import AffichCours from './composant/formation/courslister';

import UserProfileParticipant from './composant/participant/profil';
import UserProfile from './composant/UserProfile/UserProfile';
import ModifierInstructeur from './composant/modifierInstructeur';
import ChangePassword from './composant/UserProfile/ChangePassword';
import AccountSettings from './composant/UserProfile/AccountSettings';
import Footer from './composant/footer';


import AddPublication from './composant/formation/addPublication';
import AddRessource from './composant/formation/addRessource';
import CoursGList from './composant/formation/courslister';
import Navbar from './composant/nav';
import Contact from './composant/contact';

import SingleCours from './composant/formation/iframCours';
import FormationsList from './composant/formation/FormationListe';
import SingleFormation from './composant/formation/detailllistformation';
import SinglePublication from './composant/formation/iframPublication';
import PublicationsList from './composant/formation/ListePublication';
import RessourceList from './composant/formation/listRessources';
import SingleRessource from './composant/formation/DetaillRessource';
import AddFormationForm from './composant/formation/newformation';


const App = () => {
  const [value, setValue] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);



  return (
    <Router>
      <div>
<Navbar/>

        {showSearch && <SearchComponent />}
        <Switch>
          <Route exact path="/" component={HomeFinal} />
        
 
          <Route path="/VideoPage" component={VideoPage} />
       
          <Route path="/UserProfile" component={UserProfile} />
          <Route path="/UserProfileParticipant" component={UserProfileParticipant} />

          <Route path="/listeProfil" component={listeProfil} />
          <Route path="/CertificatesTable" component={CertificatesTable} />
          <Route path="/Register" component={Register} />
          <Route path="/publication  " component={publication} />
          <Route path="/HomeFinal" component={HomeFinal} />
          <Route path="/login" component={login} />
          <Route path="/Contact" component={Contact} />

          <Route path="/PublicationsList" component={PublicationsList} />

        
          <Route path="/ParticipantRegister" component={ParticipantRegister} />
          <Route path="/AddCours" component={AddCours} />
          <Route path="/AffichCours" component={AffichCours} />
          <Route path="/AddRessource" component={AddRessource} />
  
          <Route path="/UserProfile" component={UserProfile} />
          <Route path="/AccountSettings/:userId" component={AccountSettings} />
          <Route path="/ModifierInstructeur" component={ModifierInstructeur} />
          <Route path="/ChangePassword" component={ChangePassword} />
          <Route path="/AccountSettings" component={AccountSettings} /> 
          <Route path="/AddPublication" component={AddPublication} />
    
     
          <Route path="/publication/getPublicationById/:id" component={SinglePublication} />     
          <Route path="/formationP/getFormationById/:id" component={SingleFormation} />    
          {/* http://localhost:3000/formationP/getFormationById/4  */}
          <Route path="/cours/getCoursGById/:id" component={SingleCours} />   
          <Route path="/Ressource/getressourceById/:id" component={SingleRessource} />   


          <Route path="/CoursGList" component={CoursGList} /> 
          <Route path="/FormationsList" component={FormationsList} /> 
          <Route path="/RessourceList" component={RessourceList} />  
          <Route path="/AddFormationForm" component={AddFormationForm} />  
      
        </Switch>

      </div>

      <Footer />
    </Router>
  );
};

export default App;