import React, { useEffect, useState } from "react";
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import "./ProfileScreen.css";
import { useDispatch, useSelector } from "react-redux";
import FooterComponent from "../../components/Footer/FooterComponent";
import { updateUserProfile } from "../../redux/actions/UserAction";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [firstName, setFirstName] = useState(user.profile?.firstName || "");
  const [lastName, setLastName] = useState(user.profile?.lastName || "");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user.profile) {
      setFirstName(user.profile.firstName);
      setLastName(user.profile.lastName);
    }
  }, [user.profile]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(updateUserProfile({ firstName, lastName }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFirstName(user.profile.firstName);
    setLastName(user.profile.lastName);
    setIsEditing(false);
  };

  return (
    <>
      <NavbarComponent />
      {user.profile ? (
        <main className="main bg-dark">
          <div className="header">
            <h1>Welcome back</h1>
            {isEditing ? (
              <>
                <div className="edit-name-form">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                  />
                </div>
                <div className="edit-buttons">
                  <button onClick={handleSubmit}>Save</button>
                  <button onClick={handleCancel}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <h2>
                  {user.profile.firstName} {user.profile.lastName}
                </h2>
                <button
                  className="edit-button"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Name
                </button>
              </>
            )}
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
