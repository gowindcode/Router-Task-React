import { Link, Route, Routes } from "react-router-dom";
import { All } from "./All";
import { FullStackDevelopment } from "./FullStackDevelopment";
import { DataScience } from "./DataScience";
import { Career } from "./Career";

export function CyberSecurity() {
  return (
    <div className="container-{breakpoint}">
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
                src="https://www.guvi.in/blog/wp-content/uploads/2022/04/July-last-week-offer-cover-1536x340.webp"
                alt="career poster"
                className="d-block w-100"
              />
            </a>
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
      <div className="display">
        <div className="card">
          <img
            src="https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Competitive-Analysis-for-a-UX-Design.webp"
            className="card-img-top"
            alt="card-img"
          />
          <div className="card-body">
            <h5 className="card-title">Competitive Analysis for a UX Design</h5>
            <p className="card-text">
              UX designers play a pivotal role in customer satisfaction and
              retention. Thus, a competitive analysis.
            </p>
            <a href="#" className="link-success">
              Read More &#187;
            </a>
          </div>
        </div>
        {/* div 2 */}
        <div className="card">
          <img
            src="https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Best-9-Opportunities-for-Mechanical-Engineers-in-Indias-EV-Industry.webp"
            className="card-img-top"
            alt="card-img"
          />
          <div className="card-body">
            <h5 className="card-title">
              Best 9 Opportunities for Mechanical Engineers in India’s EV
              Industry
            </h5>
            <p className="card-text">
              As the electric vehicle (EV) industry accelerates in India, it
              brings with it a range.
            </p>
            <a href="#" className="link-success">
              Read More &#187;
            </a>
          </div>
        </div>
        {/* div-3 */}
        <div className="card">
          <img
            src="https://www.guvi.in/blog/wp-content/uploads/2024/01/1.webp"
            className="card-img-top"
            alt="card-img"
          />
          <div className="card-body">
            <h5 className="card-title">
              Top 8 Big Data Visualization Tools That You Should Know in 2024
            </h5>
            <p className="card-text">
              The world is driven by data these days. You can almost predict
              future events if.
            </p>
            <a href="#" className="link link-success">
              Read More &#187;
            </a>
          </div>
        </div>
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

// export default CyberSecurity();
