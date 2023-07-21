// Importing CSS styles from "./ClassStandards.css"
import "./ClassStandards.css";
// Importing components from the Ant Design library
import { Card, Col, Row } from "antd";
// Importing the Link component from "react-router-dom" to handle navigation
import { Link } from "react-router-dom";

// Functional component definition for ClassStandards
function ClassStandards() {
  // The component returns JSX to render the content on the page
  return (
    <div className="App-header">
      {/* Heading div */}
      <div className="StandardDiv">
        <div className="main_head">
          <h3>Enter a Class</h3>
        </div>

        {/* Standarad Cards Starts from here */}
        {/* Using the Ant Design Row component with gutter spacing of 50 */}
        <Row gutter={50}>
          {/* Using the Ant Design Col component to create a grid layout */}
          {/* Each Col contains a Link component wrapped around a Card component */}
          <Col span={8}>
            <Link
              to="/FourthStandard"
              onClick={() => localStorage.setItem("dynamic", "Class 4")}
            >
              {/* Card component with a bordered style and a custom class "StandardName" */}
              <Card bordered={true} className="StandardName">
                <b>
                  4<sup>th</sup>
                </b>
              </Card>
            </Link>
          </Col>
          {/* Repeat the above Col pattern for other class standards */}
          <Col span={8}>
            <Link
              to="/FifthStandard"
              onClick={() => localStorage.setItem("dynamic", "Class 5")}
            >
              <Card bordered={true} className="StandardName">
                <b>
                  5<sup>th</sup>
                </b>
              </Card>
            </Link>
          </Col>
          <Col span={8}>
            <Link
              to="/SixthStandard"
              onClick={() => localStorage.setItem("dynamic", "Class 6")}
            >
              <Card bordered={true} className="StandardName">
                <b>
                  6<sup>th</sup>
                </b>
              </Card>
            </Link>
          </Col>
        </Row>

        {/* Repeat the above Row and Col pattern for the second row */}
        <Row gutter={50} className="SecondRow">
          <Col span={8}>
            <Link
              to="/SeventhStandard"
              onClick={() => localStorage.setItem("dynamic", "Class 7")}
            >
              <Card bordered={true} className="StandardName">
                <b>
                  7<sup>th</sup>
                </b>
              </Card>
            </Link>
          </Col>
          <Col span={8}>
            <Link
              to="/EighthStandard"
              onClick={() => localStorage.setItem("dynamic", "Class 8")}
            >
              <Card bordered={true} className="StandardName">
                <b>
                  8<sup>th</sup>
                </b>
              </Card>
            </Link>
          </Col>
          <Col span={8}>
            <Link
              to="/NinthStandard"
              onClick={() => localStorage.setItem("dynamic", "Class 9")}
            >
              <Card bordered={true} className="StandardName">
                <b>
                  9<sup>th</sup>
                </b>
              </Card>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}

// Export the ClassStandards component to make it available for use in other files
export default ClassStandards;
