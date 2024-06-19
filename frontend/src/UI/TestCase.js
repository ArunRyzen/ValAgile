import Navigation_bar from "./Navigation_bar";
import React from "react";
import { Chart } from "react-google-charts";
function TestCase(){
    const barchart1 = [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350],
      ];
    const option1 = {
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
    const option2 = {
        chart: {
          title: "TC Status"
        },
      };
      const barchart3 = [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350],
      ];
    const option3 = {
        chart: {
          title: "TC Status"
        },
      };
      const barchart4 = [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350],
      ];
    const option4 = {
        chart: {
          title: "TC Status"
        },
      };
    return(
        <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <Navigation_bar/>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
            <h2 style={{ textAlign: "center", fontWeight: 400 }}>TestCase</h2>
            </div>
        </div>
        <div class="row">
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
            <div class="col-md-6">
                <div>
                    <Chart
                        chartType="Bar"
                        width="100%"
                        height="400px"
                        data={barchart1}
                        options={option1}
                    />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div>
                    <Chart
                        chartType="Bar"
                        width="100%"
                        height="400px"
                        data={barchart2}
                        options={option2}
                    />
                </div>
            </div>
            <div class="col-md-6">
                <div>
                    <Chart
                        chartType="Bar"
                        width="100%"
                        height="400px"
                        data={barchart3}
                        options={option3}
                    />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div>
                    <Chart
                        chartType="Bar"
                        width="100%"
                        height="400px"
                        data={barchart4}
                        options={option4}
                    />
                </div>
            </div>
        </div>
    </div>   
    )
}
export default TestCase;