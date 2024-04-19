import React from 'react';
import { Link } from 'react-router-dom';
import './UserSidebar.css';

const UserSidebar = ({ activepage ,userId,userdata}) => {
  return (
    <div className='usersidebar'>
<Link to={`/accountsettings?userId=${userId}&userData=${encodeURIComponent(JSON.stringify(userdata))}`} className={activepage === 'accountsettings' ? 'active' : ''}>
  <div className='s1'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
    <span>Account Settings</span>
  </div>
</Link>

      <Link to='/changepassword' className={activepage === 'changepassword' ? 'active' : ''}>
        <div className='s1'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Change Password</span>
        </div>
      </Link>
<Link to='/AddFormationForm' className={activepage === 'legalnotice' ? 'active' : ''}>
  <div className='s1'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v18M19 3v18" />
    </svg>
    <span>Créer Formation</span>
  </div>
</Link>
<Link to='/AddCours' className={activepage === 'legalnotice' ? 'active' : ''}>
  <div className='s1'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7H4a2 2 0 00-2 2v10a2 2 0 002 2h11a2 2 0 002-2v-5m-1-6l-7 4-7-4m14 4v6h4V7h-4z" />
    </svg>
    <span>Créer cours gratuit</span>
  </div>
</Link>
<Link to='/AddRessource' className={activepage === 'legalnotice' ? 'active' : ''}>
  <div className='s1'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
    <span>Créer une ressource</span>
  </div>
</Link>



      <Link to='/AddCours' className={activepage === 'legalnotice' ? 'active' : ''}>
        <div className='s1'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
          <span>creer cours gratuis</span>
        </div>
      </Link>
    </div>
  );
}

export default UserSidebar;