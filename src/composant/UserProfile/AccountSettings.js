import React from 'react';
import './AccountSettings.css';

const AccountSettings = () => {
  return (
    <section className="text-center">
      {/* Background image */}
      <div className="p-5 bg-image" style={{
        backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')",
        height: "300px"
      }}></div>
      {/* Background image */}

      <div className="card mx-4 mx-md-5 shadow-5-strong" style={{
        marginTop: "-100px",
        background: "hsla(0, 0%, 100%, 0.8)",
        backdropFilter: "blur(30px)"
      }}>
        <div className="card-body py-5 px-md-5">

          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-5">Personal Information</h2>
              <form>
                {/* Champ de saisie pour le nom */}
                <div className="mb-4">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>

                {/* Champ de saisie pour le téléphone */}
                <div className="mb-4">
                  <input type="text" className="form-control" placeholder="Phone/Mobile" />
                </div>

                {/* Champ de saisie pour l'email */}
                <div className="mb-4">
                  <input type="email" className="form-control" placeholder="Email address" />
                </div>

                {/* Bouton pour enregistrer les modifications */}
                <button type="submit" className="btn btn-primary btn-block mb-4" style={{ width: "50%", margin: "0 auto" }}>
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountSettings;
