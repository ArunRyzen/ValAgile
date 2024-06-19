import Navigation_bar from "./Navigation_bar";
import React from "react";
import { Chart } from "react-google-charts";
function TraceabilityMatrix(){
    const pie1 = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7], // CSS-style declaration
      ];
      
     const option1 = {
        title: "My Daily Activities",
        pieHole: 0.4,
        is3D: false,
      };
      const pie2 = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7], // CSS-style declaration
      ];
      
     const option2 = {
        title: "My Daily Activities",
        pieHole: 0.4,
        is3D: false,
      };
      const pie3 = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7], // CSS-style declaration
      ];
      
     const option3 = {
        title: "My Daily Activities",
        pieHole: 0.4,
        is3D: false,
      };
      const pie4 = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7], // CSS-style declaration
      ];
      
     const option4 = {
        title: "My Daily Activities",
        pieHole: 0.4,
        is3D: false,
      };
    return(
        <div>
            <div>
                <Navigation_bar/>
            </div>
            <h1>TraceabilityMatrix</h1>
            <div>
            <div class="col-md-6">
            <form>
                <label><strong>Project:</strong></label><br />
                <select class="form-control">
                    <option>all</option>
                </select><br/>
                <label><strong>Version:</strong></label><br />
                <select class="form-control">
                    <option>all</option>
                </select><br/>
                <label><strong>TestPlan:</strong></label><br />
                <select class="form-control">
                    <option>all</option>
                </select><br/>
                <button class="btn btn-primary">
                    Submit
                </button>
                <button class="btn btn-secondary">
                    Reset
                </button>
            </form>
        </div>
            </div>
            <div>
                <Chart
                    chartType="PieChart"
                    width="100%"
                    height="400px"
                    data={pie1}
                    options={option1}
                />
            </div>
            <div>
                <Chart
                    chartType="PieChart"
                    width="100%"
                    height="400px"
                    data={pie2}
                    options={option2}
                />
            </div>
            <div>
                <Chart
                    chartType="PieChart"
                    width="100%"
                    height="400px"
                    data={pie3}
                    options={option3}
                />
            </div>
            <div>
                <Chart
                    chartType="PieChart"
                    width="100%"
                    height="400px"
                    data={pie4}
                    options={option4}
                />
            </div>
        </div>
        
    )
}
export default TraceabilityMatrix;