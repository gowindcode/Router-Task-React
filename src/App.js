import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import { Refer } from "./Refer";
import { SpecialOffers } from "./SpecialOffers";
import { TrendingCourses } from "./TrendingCourses";
import { HackerKid } from "./HackerKid";
import { All } from "./Components/All";
import { FullStackDevelopment } from "./Components/FullStackDevelopment";
import { DataScience } from "./Components/DataScience";
import { CyberSecurity } from "./Components/CyberSecurity";
import { Career } from "./Components/Career";

export function App() {
  const location = useLocation();
  const isStartPage = location.pathname === "/";
  // const isAll = location.pathname === '/all';
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light col-custom-nav">
        <a
          className="navbar-brand"
          href="https://blog.guvi.in/?_gl=1*auk0oj*_gcl_au*MjAzMTQ3NzU0Mi4xNjk5ODY4MDg2LjM4Mjk2NzI1LjE3MDM4Njk3NTkuMTcwMzg2OTc1OQ.."
        >
          <img
            className="d-inline-block align-top col-custom-img"
            src="https://www.guvi.in/web-build/images/guvi-logo.e8ad68fbd8dc0a5fc2f7c4ffd580c54d.png"
            alt="guvi-logo-blog-default"
            width={110}
            height={48}
          />
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto col-custom-topnav">
            <li className="nav-item active">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/special" className="nav-link">
                Special Offers
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/trending" className="nav-link">
                Trending Courses
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/Refer" className="nav-link">
                Refer & Earn
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/Hacker" className="nav-link">
                Hacker Kid
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {isStartPage && (
        <div className="container-{breakpoint} col-custom-container">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-interval="4000">
                <a
                  href="https://www.guvi.in/mlp/combo-course-common-page?utm_source=GUVI-Website&utm_medium=Homepage&utm_campaign=Newyear-Banner2&_gl=1*1oyaz6t*_gcl_au*MjAzMTQ3NzU0Mi4xNjk5ODY4MDg2LjM4Mjk2NzI1LjE3MDM4Njk3NTkuMTcwMzg2OTc1OQ.."
                  target="-blank"
                >
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/guvi-2.0/banner/newyear_banner.webp"
                    className="d-block w-100"
                    alt="offer-banner1"
                  />
                </a>
              </div>
              <div className="carousel-item" data-interval="4000">
                <a
                  href="https://www.guvi.in/mlp/christmas-new-year-offer?utm_source=GUVI-Website&utm_medium=Homepage&utm_campaign=Zen-Chris-Banner1"
                  target="-blank"
                >
                  <img
                    src="https://s3.ap-south-1.amazonaws.com/guvi-2.0/banner/banner_1_.0_(2).webp"
                    className="d-block w-100"
                    alt="offer-banner1"
                  />
                </a>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-target="#carouselExampleControls"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-target="#carouselExampleControls"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </button>
            </div>
          </div>
          <div className="middle-navbar">
            <ul className="col-custom-midnav">
              <li id="midLink">
                <Link to="/all" className="navlink">
                  ALL
                </Link>
              </li>
              <li id="midLink">
                <Link to="/fullstack" className="navlink">
                  FULL STACK DEVELOPMENT
                </Link>
              </li>
              <li id="midLink">
                <Link to="/datascience" className="navlink">
                  DATA SCIENCE
                </Link>
              </li>
              <li id="midLink">
                <Link to="/cybersecurity" className="navlink">
                  CYBER SECURITY
                </Link>
              </li>
              <li id="midLink">
                <Link to="/career" className="navlink">
                  CAREER
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* <h1>You can click this 'Home' and can reach the page...</h1> */}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/special" element={<SpecialOffers />} />
        <Route path="/trending" element={<TrendingCourses />} />
        <Route path="/Refer" element={<Refer />} />
        <Route path="/Hacker" element={<HackerKid />} />
        <Route path="/all" element={<All />} />
        <Route path="/fullstack" element={<FullStackDevelopment />} />
        <Route path="/datascience" element={<DataScience />} />
        <Route path="/cybersecurity" element={<CyberSecurity />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </div>
  );
}

export default App;
