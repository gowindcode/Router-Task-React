import { Link, Route, Routes } from "react-router-dom";
import { All } from "./Components/All";
import { FullStackDevelopment } from "./Components/FullStackDevelopment";
import { DataScience } from "./Components/DataScience";
import { CyberSecurity } from "./Components/CyberSecurity";
import { Career } from "./Components/Career";

export function Refer() {
  return (
    <div>
      <div className="container-{breakpoint}">
        {/* <a href="https://www.guvi.in/referral/5/ai-for-india-2-0">
        <img src="https://s3-alpha.figma.com/hub/file/1411389972/90a52ded-a491-4304-be03-a458ce8853fa-cover.png" alt="master-in-Tech" className="d-block w-100"/></a>
         */}
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="4000">
            <div className="d-blockrefer w-100">
              <h1 className="referTitle">Refer & Earn Great Rewards.</h1>
              <p className="referPera">
                Apple products, Amazon Voucher & much more to win!
                <p className="refers1">
                  It’s a win-win season. Refer GUVI Free industry accredited
                  courses to your friends & family to win exciting rewards. Earn
                  referral points upon each verified sign-up & redeem points
                  later to claim your prize.
                </p>
                <p className="refsign">1 Free Sign-up = 1 Verified Referral</p>
                <a
                  href="https://www.guvi.in/referral/5/ai-for-india-2-0"
                  target="-blank"
                >
                  <p>
                    <span className="claim">
                      Refer your friends, Claim your Rewards!
                    </span>{" "}
                  </p>
                </a>
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
