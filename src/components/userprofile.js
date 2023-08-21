import React from "react";
import styles from "./userprofile.module.css";
import { useSelector } from "react-redux";
import Navbar from "./navbar";
import FooterSection from "./footer";

export default function UserProfile() {
  const { user, loggedin } = useSelector((state) => state.userDetails);
  return (
    <>
      <Navbar className="mb-[200px]" />
      <div></div>
      {loggedin ? (
        <form className={`${styles.form} ${styles.profileform}`}>
          <h2>User Profile</h2>
          <div className={styles["form-group"]}>
            <label htmlFor="firstname">First Name:</label>
            <div className={`${styles.relative} mb-3`}>
              <input
                className={`${styles["form-control"]} w-full ${styles.profileinput}`}
                id="firstname"
                type="text"
                pattern="[a-zA-Z\s]+"
                value={user?.firstname || user.user?.firstname}
                required
                autoFocus
                title="first name should only contain letters. e.g. Piyush Gupta"
                autoComplete="off"
                placeholder="Type your name here..."
              />
            </div>
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="lastname">Last Name:</label>
            <div className={`${styles.relative} mb-3`}>
              <input
                className={`${styles["form-control"]} w-full ${styles.profileinput}`}
                id="lastname"
                value={user?.lastname || user.user?.lastname}
                type="text"
                pattern="[a-zA-Z\s]+"
                required
                autoFocus
                title="Last name should only contain letters. e.g. Piyush Gupta"
                autoComplete="off"
                placeholder="Type your name here..."
              />
            </div>
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="username">username:</label>
            <div className={`${styles.relative} mb-3`}>
              <input
                className={`${styles["form-control"]} w-full ${styles.profileinput}`}
                id="username"
                value={user?.username || user?.user?.username}
                type="text"
                pattern="[a-zA-Z\s]+"
                required
                autoFocus
                title="username should only contain letters. e.g. Piyush Gupta"
                autoComplete="off"
                placeholder="Type your name here..."
              />
            </div>
          </div>
          <div className={`${styles["form-group"]}`}>
            <label htmlFor="email">Email address:</label>
            <div className={`${styles.relative} mb-3`}>
              <input
                className={`${styles["form-control"]} w-full ${styles.profileinput}`}
                type="email"
                value={user?.email || user?.user?.email}
                required
                placeholder="Type your email address..."
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
              />
            </div>
          </div>

          <div className={`${styles.tright} mt-4`}>
            <button
              className={`${styles.movebtn} ${styles.movebtnre}`}
              type="reset"
            >
              <i
                className={`${styles.fa} ${styles["fa-fw"]} ${styles["fa-refresh"]}`}
              />
              Reset
            </button>

            <button
              className={`${styles.movebtn} ${styles.movebtnsu}`}
              type="submit"
            >
              Submit{" "}
              <i
                className={`${styles.fa} ${styles["fa-fw"]} ${styles["fa-paper-plane"]}`}
              />
            </button>
          </div>
        </form>
      ) : (
        <div className="text-xl text-center relative top-[120px]">
          <h3>log in to view profile</h3>
          <p>please Signup or use the details below to test login</p>
          <p>email: tboy701@gmail.com</p>
          <p>password: 123456789</p>
        </div>
      )}
      <hr className="border-1 border-[#0D1B2A] mt-[200px]" />
      <FooterSection />
    </>
  );
}
