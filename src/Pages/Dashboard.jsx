import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import user1 from "../assets/images/er.png"; // Replace with real images or avatars
import user2 from "../assets/images/ho.png";
import user3 from "../assets/images/er.png";
import user4 from "../assets/images/ho.png";
import user5 from "../assets/images/er.png";
import { BsPeople } from "react-icons/bs";
import { TbUserCheck } from "react-icons/tb";
import { PiDesktop } from "react-icons/pi";
import { IoMdArrowUp, IoMdArrowDown } from "react-icons/io";
import Sidebar from "../components/Sidebar.jsx"
import "../styles/dashboard.css";

const headers = [
  "Customer Name",
  "Company",
  "Phone Number",
  "Email",
  "Country",
  "Status",
];

const data = [
  [
    "Jane Cooper",
    "Microsoft",
    "(225) 555-0118",
    "jane@microsoft.com",
    "United States",
    "Active",
  ],
  [
    "Floyd Miles",
    "Yahoo",
    "(205) 555-0100",
    "floyd@yahoo.com",
    "Kiribati",
    "Inactive",
  ],
  [
    "Ronald Richards",
    "Adobe",
    "(302) 555-0107",
    "ronald@adobe.com",
    "Israel",
    "Inactive",
  ],
  [
    "Marvin McKinney",
    "Tesla",
    "(252) 555-0126",
    "marvin@tesla.com",
    "Iran",
    "Active",
  ],
  [
    "Jerome Bell",
    "Google",
    "(629) 555-0129",
    "jerome@google.com",
    "Réunion",
    "Active",
  ],
  [
    "Kathryn Murphy",
    "Microsoft",
    "(406) 555-0120",
    "kathryn@microsoft.com",
    "Curaçao",
    "Active",
  ],
  [
    "Jacob Jones",
    "Yahoo",
    "(208) 555-0112",
    "jacob@yahoo.com",
    "Brazil",
    "Active",
  ],
  [
    "Kristin Watson",
    "Facebook",
    "(704) 555-0127",
    "kristin@facebook.com",
    "Åland Islands",
    "Inactive",
  ],
];

const totalEntries = 40;
const rowsPerPage = 8;
const totalPages = 40;

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageData = data.slice(0, rowsPerPage);

  return (
    <>
    <div className="full">
      <Sidebar /> 
      <div className="dashboard-section">
        <div className="dashboard-header">
          <div className="hello">
            <h1>Hello Evano 👋🏻,</h1>

            <div className="search-bar">
              <input type="search" placeholder="Search" />
            </div>
          </div>

          <div className="stats-container">
            {/* Total Customers */}
            <div className="stat-box">
              <div className="icon green">
                <BsPeople />
              </div>
              <div>
                <p className="label">Total Customers</p>
                <h2>5,423</h2>
                <p>
                  <span className="change up">
                    <IoMdArrowUp /> 16%{" "}
                  </span>
                  this month
                </p>
              </div>
            </div>

            {/* Members */}
            <div className="stat-box">
              <div className="icon green">
                <TbUserCheck />
              </div>
              <div>
                <p className="label">Members </p>
                <h2>1,893</h2>
                <p>
                  <span className="change down">
                    <IoMdArrowDown /> 1%{" "}
                  </span>
                  this month
                </p>
              </div>
            </div>

            {/* Active Now */}
            <div className="stat-box">
              <div className="icon green">
                <PiDesktop />
              </div>
              <div>
                <p className="label">Active Now</p>
                <h2>189</h2>
                <div className="avatars">
                  {[user1, user2, user3, user4, user5].map((img, index) => (
                    <img key={index} src={img} alt={`user-${index}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-table">
          <h1 className="cust">All Customers</h1>
          <div className="active-features">
            <div className="active-text">
              <p>Active Members</p>
            </div>

            <div className="active-search">
              <div className="search-bar">
                <input type="search" placeholder="Search" />
              </div>
              <div className="sort-by">
                <p className="newest">Sort by:</p>
                <p>
                  Newest <RxCaretDown />
                </p>
              </div>
            </div>
          </div>
          <div className="table-titles">
            {headers.map((header, idx) => (
              <p key={idx}>{header}</p>
            ))}
          </div>
          {pageData.map((row, idx) => (
            <div className="table-data" key={idx}>
              {row.map((cell, cidx) =>
                cidx === row.length - 1 ? (
                  <span
                    key={cidx}
                    className={`status-badge ${
                      cell === "Active" ? "active" : "inactive"
                    }`}
                  >
                    {cell}
                  </span>
                ) : (
                  <p key={cidx}>{cell}</p>
                )
              )}
            </div>
          ))}

          {/* Pagination Bar */}
          <div className="pagination-bar">
            <span className="pagination-info">
              Showing data 1 to 8 of {totalEntries.toLocaleString()} entries
            </span>
            <div className="pagination-controls">
              <button
                className="pagination-btn"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                &lt;
              </button>
              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  className={`pagination-btn${
                    currentPage === page ? " active" : ""
                  }`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              <span className="pagination-ellipsis">...</span>
              <button
                className="pagination-btn"
                onClick={() => setCurrentPage(totalPages)}
              >
                {totalPages}
              </button>
              <button
                className="pagination-btn"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
