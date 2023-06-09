import './ClassStandards.css';
// const { createRoot } = ReactDOM;
import { Card, Col, Row } from 'antd';
// const {  Card, Col, Row  } = antd;
import { Link } from 'react-router-dom';
function ClassStandards() {
    return (
        <div className="App-header">
        <div className='StandardDiv'>
            <div>
                <h3>Enter a Class</h3>
            </div>
            <Row gutter={32}> 
                <Col span={8}>
                    <Link to="/FourthStandard">
                        <Card  bordered={true} className='StandardName'>
                            <b>4<sup>th</sup></b>
                        </Card>
                    </Link>
                </Col>
                <Col span={8}>
                    <Card bordered={true} className='StandardName'>
                        <b>5<sup>th</sup></b>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card  bordered={true} className='StandardName'>
                    <b>6<sup>th</sup></b>
                    </Card>
                </Col>
            </Row>
            

            <Row gutter={32} className='SecondRow'> 
                <Col span={8}>
                    <Card  bordered={true} className='StandardName'>
                    <b>7<sup>th</sup></b>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true} className='StandardName'>
                    <b>8<sup>th</sup></b>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card  bordered={true} className='StandardName'>
                    <b>9<sup>th</sup></b>
                    </Card>
                </Col>
            </Row>
        </div>
        </div>
    )
}

export default ClassStandards;