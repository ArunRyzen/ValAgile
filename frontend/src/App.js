import{BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./UI/Login"
import Register from "./UI/Register";
import RequirementUS from "./UI/RequirementUS";
import { Provider } from 'react-redux';
import store from './UI/Store'; 
import Project from "./UI/Project";
import TestCase from "./UI/TestCase";
import TCReviewandApprovalTracking from "./UI/TCReviewandApprovalTracking";
import TestReport from "./UI/TestReport";
import TraceabilityMatrix from "./UI/TraceabilityMatrix";
import TestExecutionResults from "./UI/TestExecutionResults";
import TRReviewAndApprovalTracking from "./UI/TRReviewAndApprovalTracking";
import UATReports from "./UI/UATReports";
import ValidationDeliverables from "./UI/ValidationDeliverables";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path="/Register" element={<Register/>} />
        <Route path ="/Project" element={<Project/>}/>
        <Route path="/RequirementUS" element={<RequirementUS/>}/>
        <Route path="/TestCase" element={<TestCase/>}/>
        <Route path ="/TCReviewandApprovalTracking" element={<TCReviewandApprovalTracking/>}/>
        <Route path="/TestReport" element={<TestReport/>}/>
        <Route path="/TraceabilityMatrix" element={<TraceabilityMatrix/>}/>
        <Route path="/TestExecutionResults" element={<TestExecutionResults/>}/>
        <Route path="/TRReviewAndApprovalTracking" element={<TRReviewAndApprovalTracking/>}/>
        <Route path="/UATReports" element={<UATReports/>}/>
        <Route path="/ValidationDeliverables" element={<ValidationDeliverables/>}/>
      </Routes>
      </BrowserRouter>
    </Provider>
  );
}


export default App;
