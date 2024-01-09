import { Link, Route, Routes } from "react-router-dom";
import { All } from "./Components/All";
import { FullStackDevelopment } from "./Components/FullStackDevelopment";
import { DataScience } from "./Components/DataScience";
import { CyberSecurity } from "./Components/CyberSecurity";
import { Career } from "./Components/Career";

export function SpecialOffers() {
  return (
    <div>
      <div className="container-{breakpoint}">
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="4000">
            <div className="d-blockspecial w-100">
              <h1 className="specialTitle">
                Choose the course & Get additional as free!
              </h1>
              <p className="specialPera">
                Grap your offer now!
                <p className="specadd">
                  Guvi offer to Learn coding in your mother language தமிழ், so
                  don't miss this opertunity to upgrade your self. And land in
                  your dream job this year!
                </p>
                <button className="btn btn-success">GET OFFER NOW!</button>
              </p>
            </div>
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

        <Routes>
          <Route path="/all" element={<All />} />
          <Route path="/fullstack" element={<FullStackDevelopment />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
    </div>
  );
}
