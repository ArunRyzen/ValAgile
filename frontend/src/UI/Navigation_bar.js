import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
// import { useSelector } from 'react-redux';

Axios.defaults.withCredentials = true;

function Navigation_bar() {
  // const loginStatus = useSelector((state) => state.login.loginStatus);
  const navigate = useNavigate();
  const handleLogout = () => {
    Axios.get("http://localhost:8000/logout")
        .then((response) => {
            console.log(response.data);
            navigate("/Login");
            // Handle successful logout
        })
        .catch((error) => {
            console.error("Logout failed:", error);
        });
 };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
  <Container fluid> {/* Use fluid to make the container full width */}
    <Navbar.Brand href="/Project" style={{ marginLeft: '10px' }}>ValAgile</Navbar.Brand> {/* Add marginLeft for the gap */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/RequirementUS">RequirementUS</Nav.Link>
        <Nav.Link href="/TestCase">TestCases</Nav.Link>
        <Nav.Link href="/TCReviewandApprovalTracking">TCReviewandApprovalTracking</Nav.Link>
        <Nav.Link href="/TestReport">TestingReports</Nav.Link>
        <Nav.Link href="/TraceabilityMatrix">TraceabilityMatrix</Nav.Link>
        <Nav.Link href="/TestExecutionResults">TestExecutionResults</Nav.Link>
        <Nav.Link href="/TRReviewAndApprovalTracking">TRReviewAndApprovalTracking</Nav.Link>
        <Nav.Link href="/UATReports">UATReports</Nav.Link>
        <Nav.Link href="/ValidationDeliverables">ValidationDeliverables</Nav.Link>
        <button type="button" className="btn btn-dark" style={{ borderRadius: '10%', marginLeft: "150px" }}>Admin</button>
        {/* Use marginLeft: auto to push "SignOut" button to the right */}
        <button type="button" className="btn btn-dark" onClick={handleLogout} style={{ borderRadius: '10%', marginLeft: "20px" }}>SignOut</button>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default Navigation_bar;