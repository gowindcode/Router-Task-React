import { Link, Route, Routes } from "react-router-dom";
import { All } from "./Components/All";
import { FullStackDevelopment } from "./Components/FullStackDevelopment";
import { DataScience } from "./Components/DataScience";
import { CyberSecurity } from "./Components/CyberSecurity";
import { Career } from "./Components/Career";

export function TrendingCourses() {
  return (
    <div>
      <div className="container-{breakpoint}">
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="4000">
            <div className="d-blockTrend w-100">
              <img
                className="learn"
                src="https://contentstatic.techgig.com/thumb/msid-86001236,width-800,resizemode-4/Coding-for-students-Learn-with-these-7-apps.jpg?10556"
                alt="coding-learn"
              />
              <img
                className="logos"
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/swift-programming-language-icon.png"
                alt="coding-logos"
              />
              <img
                className="logos"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png"
                alt="coding-logos"
              />
              <img
                className="logos"
                src="https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png"
                alt="coding-logos"
              />
              <img
                className="logos"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHOcjv23NFs8q6vP9wcm9-Ooa92ooXDHE-XQ&usqp=CAU"
                alt="coding-logos"
              />
              <img
                className="logos"
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/r-programming-language-icon.png"
                alt="coding-logos"
              />
              <img
                className="logos"
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/php-programming-language-icon.png"
                alt="coding-logos"
              />
              <img
                className="logos"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkwrfMRM6IARAyj3Q9WTFwlBEt8ev164JKkg&usqp=CAU"
                alt="coding-logos"
              />
              <img
                className="logos"
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/typescript-programming-language-icon.png"
                alt="coding-logos"
              />
              <img
                className="logos"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSorJDx8MhJ9bGlC94tuvwlhvh7tF9Pj0F2lw&usqp=CAU"
                alt="coding-logos"
              />
              <img
                className="logos"
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/javascript-programming-language-icon.png"
                alt="coding-logos"
              />
              <img
                className="logos"
                src="https://images.vexels.com/media/users/3/166383/isolated/preview/6024bc5746d7436c727825dc4fc23c22-html-programming-language-icon.png"
                alt="coding-logos"
              />
              <img
                className="logos"
                src="https://www.technource.com/wp-content/uploads/2021/09/SQL.png"
                alt="coding-logos"
              />
              <img
                className="logos"
                src="https://logowik.com/content/uploads/images/rust4784.logowik.com.webp"
                alt="coding-logos"
              />
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
