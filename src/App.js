import "./App.css";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Routes, Route } from "react-router-dom";
import PopOver from "./component/PopOver";
import TopNavebar from "./component/TopNavebar";
import SideNavebar from "./component/SideNavebar";
import Dashboard from "./Pages/Dashboard";
import Announced from "./Pages/Announced";
import Preparation from "./Pages/Preparation";
import Sorted from "./Pages/Sorted";
import Profile from "./Pages/Profile";
import Notification from "./Pages/Notification";
import Setting from "./Pages/Setting";
import FAQ from "./Pages/FAQ";

function App() {
  const [show, setShow] = useState(false);
  const showPop = () => setShow(true);
  const hidePop = () => setShow(false);
  return (
    <div className="bg-light">
      {show ? <PopOver hidePop={hidePop} /> : null}
      <TopNavebar />
      <Container fluid className="ps-0">
        <Row>
          <Col xs={3}>
            <SideNavebar showPop={showPop} />
          </Col>
          <Col xs={9} className=" pb-5">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="announced" element={<Announced />} />
              <Route path="preparation" element={<Preparation />} />
              <Route path="sorted" element={<Sorted />} />
              <Route path="profile" element={<Profile />} />
              <Route path="notification" element={<Notification />} />
              <Route path="setting" element={<Setting />} />
              <Route path="faq" element={<FAQ />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
