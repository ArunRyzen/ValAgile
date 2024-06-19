import Navigation_bar from "./Navigation_bar";
import React from "react";
import { Chart } from "react-google-charts";
function TCReviewandApprovalTracking(){
    const barchart1 = [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350],
      ];
    const baroption1 = {
        chart: {
          title: "TC Status"
        },
      };
      const barchart2 = [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350],
      ];
    const baroption2 = {
        chart: {
          title: "TC Status"
        },
      };
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
    return(
<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
            <Navigation_bar/>
        </div>
    </div>
    <div class="row mt-3">
        <div class="col-md-12">
            <h1>TCReviewandApprovalTracking</h1>
        </div>
    </div>
    <div class="container-fluid">
    <div class="row">
        <div class="col-md-2">
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
        <div class="col-md-3">
            <div class="embed-responsive embed-responsive-1by1">
                <Chart
                    chartType="PieChart"
                    width="100%"
                    height="300px"
                    data={pie1}
                    options={option1}
                />
            </div>
        </div>
        <div class="col-md-3">
            <div class="embed-responsive embed-responsive-1by1">
                <Chart
                    chartType="PieChart"
                    width="100%"
                    height="400px"
                    data={pie2}
                    options={option2}
                />
            </div>
        </div>
        <div class="col-md-3">
            <div class="embed-responsive embed-responsive-1by1">
                <Chart
                    chartType="PieChart"
                    width="100%"
                    height="400px"
                    data={pie3}
                    options={option3}
                />
            </div>
        </div>
    </div>
</div>
    <div class="row mt-3">
        <div class="col-md-4">
            <div class="embed-responsive embed-responsive-1by1">
                <Chart
                    chartType="Bar"
                    width="100%"
                    height="400px"
                    data={barchart1}
                    options={baroption1}
                />
            </div>
        </div>
        <div class="col-md-4">
            <div class="embed-responsive embed-responsive-1by1">
                <Chart
                    chartType="Bar"
                    width="100%"
                    height="400px"
                    data={barchart2}
                    options={baroption2}
                />
            </div>
        </div>
    </div>
</div>
    )
}
export default TCReviewandApprovalTracking;