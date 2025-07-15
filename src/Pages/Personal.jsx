import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineInfo } from "react-icons/md";
import "../styles/personal.css";

const Personal = () => {
  return (
    <>
      <section className="personal-section">
        <div className="personal-container">
          <div className="header">
            <div className="header-texts">
              <h2>Personal Information</h2>
              <p>2 of 3</p>
            </div>

            <div className="close">
              <Link to={"/login"}>
                <IoCloseSharp size={25} />
              </Link>
            </div>
          </div>

          <form>
            <div className="name-input">
              <input type="text" placeholder="Full Name" />
            </div>

            <div className="checkbox">
              <p>Gender:</p>
              <div className="male-check">
                <input type="radio" name="" id="" />
                <p>Male</p>
              </div>

              <div className="female-check">
                <input type="radio" name="" id="" />
                <p>Female</p>
              </div>
            </div>

            <div className="warn">
              <MdOutlineInfo />
              <p>The phone number and birthday are only visible to you </p>
            </div>
            <div className="number-section">
              <select name="" id="">
                <option value="">+598</option>
              </select>
              <input type="tel" placeholder="Phone number" />
            </div>

            <div className="b-day">
              <input type="date" name="" id="" placeholder="birthday" />
            </div>

            <div className="let">
              <p>Let us know about your birthdays so as not to miss a gift</p>
            </div>

            <div className="save-btn">
              <Link to={"/register/add-address"}>
                <button>Save Information</button>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Personal;
