import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { Chart } from 'react-google-charts';
import "./RequirementUS.css";
import { useSelector } from 'react-redux';
import Navigation_bar from "./Navigation_bar";
import "bootstrap/dist/css/bootstrap.min.css";

function RequirementUS() {
Axios.defaults.withCredentials = true;
  const[project,setproject] = useState("All")
  const[version,setversion] = useState("All")
  const loginStatus = useSelector((state) => state.login.loginStatus);
  const [data, setData] = useState({ responseData1: {}, responseData2: {} , responseData3: {} , responseData4:{}, responsedata5:{}});
  console.log("loginstatusla enna varuthu:", loginStatus)
  console.log("responsedata 1 :",data.responseData1)
  console.log("responsedata 2 :",data.responseData2)
  console.log("responsedata 3 :",data.responseData3)
  console.log("responsedata 4 :",data.responseData4)
  console.log("responsedata 5 :",data.responsedata5)

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Selected Project:", project);
    console.log("Selected Version:", version);
    Axios.post('http://localhost:8000/RequirementUS',{
      project:project,
      version:version
    }).then((response)=>{
      console.log("nama code alter panna aprm enna response vanthuruku",response)
      setData(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  };
  useEffect(() => {
    Axios.get('http://localhost:8000/RequirementUS')
      .then((res) => {
        setData(res.data);
        console.log("res.data......:",res.data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(data)
  const colors = [ '#3366cc', '#dc3912', '#ff9900'];
  const options = {
    title: "US by Assignee",
    chartArea: { width: "50%" },
    isStacked: true,
    hAxis: {
      minValue: 0,
    },
  };
  const bar2options = {
    title: "US by EPIC (Features)",
    chartArea: { width: "50%" },
    isStacked: true,
    hAxis: {
      minValue: 0,
    },
  };

  const optionspiechart = {
    pieSliceText: 'value',
    title: "US Status",
    pieHole: 0.4,
    is3D: false,
  };
  return (
    <div>
        <Navigation_bar/>
      <div>
        <h1 className="heading">Requirement (US)...  
        <span className="user-info">{`${loginStatus}`}</span>
        </h1> 
      </div>
      <div className="App">
          <form className="box form" onSubmit={handleSubmit}>
            <label><strong>Project:</strong></label><br />
            <select id="project" name="project" value={project} onChange={(e) => setproject(e.target.value)}>
            <option value="All" >All</option>
        {Object.entries(data.responseData4).map(([key, value]) => (
          <option key={key} value={value}>{value}</option>
        ))}
            </select><br />
            <label><strong>Version:</strong></label><br />
            <select id="version" name="version" value={version} onChange={(e) => setversion(e.target.value)}>
              <option value="All" >All</option>
              {Object.entries(data.responsedata5).map(([key,value]) => (
                <option key={key} value={value}>{value}</option>
              ))}
            </select><br />
            <div className="formbutton">
              <button type="submit" >Submit</button>
              <button type="reset">Reset</button>
            </div>
          </form>
        <div className="box">
        <Chart
        className="piechartsize"
      chartType="PieChart"
      data={data.responseData1}
      options={optionspiechart}
    />
          <button className="butreport">Report</button>
        </div>
        <ul >
          {data.responseData1.xValues && data.responseData1.xValues.map((city, index) => (
            <li key={index}>
              <span className="bullet" style={{ backgroundColor: colors[index % colors.length] }}></span>
              {city}
            </li>
          ))}
        </ul>
        <div className="chartbar">
          <Chart
            chartType="BarChart"
            data={data.responseData2.series}
            options={options}
          />
           <button className="barchartbutton">Report</button>
        </div>
      </div>
      <div className="chart2-container">
      <Chart
          className="bar-2"
            chartType="BarChart"
            data={data.responseData3.series}
            options={bar2options}
          />
           <button className="barchart2button">Report</button>
      </div>
    </div>
  );
}
export default RequirementUS;