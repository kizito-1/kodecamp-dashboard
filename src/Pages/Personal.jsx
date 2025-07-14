import { Link } from "react-router-dom";
import { IoCloseSharp} from "react-icons/io5";
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
              <IoCloseSharp size={25} />
            </div>
          </div>

          <form>
            <div className="name-input">
              <input type="text" placeholder="Full Name" />
            </div>

            <div className="checkbox">
              <p>Gender:</p>
              <input type="checkbox" name="" id="" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Personal;
