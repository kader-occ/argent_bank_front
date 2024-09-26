import React, { useState } from "react";
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import "./ProfileScreen.css";
import { useDispatch, useSelector } from "react-redux";
import FooterComponent from "../../components/Footer/FooterComponent";
import { updateUserProfile } from "../../redux/actions/UserAction";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const { token, profile } = useSelector((state) => state.user);
  const [firstName, setFirstName] = useState(profile?.firstName || "");
  const [lastName, setLastName] = useState(profile?.lastName || "");
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    dispatch(updateUserProfile(firstName, lastName, token));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <>
      <NavbarComponent />
      {profile ? (
        <main className="main bg-dark">
          <div className="header">
            <h1>Welcome back</h1>
            <br />
            {isEditing ? (
              <>
                <div className="edit-name-form">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <div className="edit-buttons">
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                  </div>
                </div>
              </>
            ) : (
              <h2>
                {profile.firstName} {profile.lastName}
              </h2>
            )}
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              Edit Name
            </button>
          </div>
          <h2 className="sr-only">Accounts</h2>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Checking (x8349)</h3>
              <p className="account-amount">$2,082.79</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Savings (x6712)</h3>
              <p className="account-amount">$10,928.42</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
              <p className="account-amount">$184.30</p>
              <p className="account-amount-description">Current Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
        </main>
      ) : (
        <h1>Loading...</h1>
      )}
      <FooterComponent />
    </>
  );
};

export default ProfileScreen;
