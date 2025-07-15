import React from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import "../styles/manual.css";

const Manual = () => {
  return (
        <>
      <section className="manual-section">
        <div className="manual-container">
          <div className="header">
            <div className="header-texts">
              <h2>Add address</h2>
              <p>3 of 3</p>
            </div>

            <div className="close">
              <Link to={"/register/add-address"}>
              <IoCloseSharp size={25} />
              </Link>
            </div>
          </div>

          <form>
            <div className="street-input">
              <input type="text" placeholder="Street address" />
            </div>

            <div className="apartment-input">
              <input type="text" placeholder="Apartment" />
            </div>

            <div className="city-input">
              <input type="text" placeholder="City" />
            </div>
            <div className="code-input">
                <input type="text" placeholder="State/Province" />
              <input type="number" placeholder="Zip code" />
            </div>

            <div className="save-btn">
              <Link to={"/register/success"}>
              <button>Save Information</button>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Manual