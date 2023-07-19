import "./ClassStandards.css";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
function ClassStandards() {
  return (
    <div className="App-header">
      {/* Heading div */}
      <div className="StandardDiv">
        <div className="main_head">
          <h3>Enter a Class</h3>
        </div>

        {/* Standarad Cards Starts from here */}
        <Row gutter={50}>
          <Col span={8}>
            <Link
              to="/FourthStandard"
              onClick={() => localStorage.setItem("dynamic", "Class 4")}
            >
              <Card bordered={true} className="StandardName">
                <b>
                  4<sup>th</sup>
                </b>
              </Card>
            </Link>
          </Col>
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

export default ClassStandards;
