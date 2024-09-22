import React from "react";
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import "./ProfileScreen.css";
import { useSelector } from "react-redux";
import FooterComponent from "../../components/Footer/FooterComponent";

const ProfileScreen = () => {
  const { profile } = useSelector((state) => state.user);

  return (
    <>
      <NavbarComponent />
      {profile ? (
        <main className="main bg-dark">
          <div className="header">
            <h1>
              Welcome back
              <br />
              {profile.firstName} {profile.lastName}!
            </h1>
            <button className="edit-button">Edit Name</button>
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
