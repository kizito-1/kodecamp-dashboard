import React from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineInfo } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePeople } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { FiDollarSign } from "react-icons/fi";
import "../styles/add.css";

const Add = () => {
  return (
    <>
      <section className="address-section">
        <div className="address-container">
          <div className="header">
            <div className="header-texts">
              <h2>Add address</h2>
              <p>3 of 3</p>
            </div>

            <div className="close">
              <Link to={"/register/personal-info"}>
              <IoCloseSharp size={25} />
              </Link>
            </div>
          </div>

          <form>
            <div className="search-input">
              <input
                type="search"
                placeholder="Search for address"
                name=""
                id
              />

              <p>Search query is required</p>
            </div>

            <div className="add-btns">
              <div className="current">
                <button>
                  <CiLocationOn size={20} />
                  Use current location
                </button>
              </div>
              <div className="manual">
                <Link to={"/register/add-manually"}>
                  <button>Add manually</button>
                </Link>
              </div>
            </div>
          </form>

          <div className="sharing">
            <h3>Sharing your address shows: </h3>
            <div className="people">
              <MdOutlinePeople size={20} />
              <p>People near you</p>
            </div>

            <div className="estimated">
              <GoClock size={20} />
              <p>Estimated delivery time</p>
            </div>

            <div className="dollar">
              <FiDollarSign size={20} />
              <p>Estimate shipping costs</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Add;
