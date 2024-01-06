import { Link, Route, Routes } from "react-router-dom";
import { All } from "./Components/All";
import { FullStackDevelopment } from "./Components/FullStackDevelopment";
import { DataScience } from "./Components/DataScience";
import { CyberSecurity } from "./Components/CyberSecurity";
import { Career } from "./Components/Career";

export function HackerKid() {
  return (
    <div className="container-{breakpoint}">
      <a href="https://www.hackerkid.org/">
        <img
          src="https://i.postimg.cc/L8Kncm2n/hacker-Kid-guvi-poster.jpg"
          alt="Hacker-kid-poster"
          className="d-block w-100"
        />
      </a>

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
  );
}
