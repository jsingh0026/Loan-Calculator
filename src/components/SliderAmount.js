import React, { Component } from 'react';
import { Row, Col, FormGroup } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  color: #888;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  .value{
    flex: 1;
    font-size: 2rem;
    padding-left: 46px;
  }
  .sliderHeading{
    font-size: 19px;
  }
input[type=range] {
    height: 20px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 80%;
    display:initial;
  }
  input[type=range]:focus {
    outline: none;
  }
  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 15px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 4px #50555C;
    background: #50555C;
    border-radius: 33px;
    border: 0px solid #000000;
  }
  input[type=range]::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 0px solid #000000;
    height: 14px;
    width: 35px;
    border-radius: 47px;
    background: #529DE1;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: 0.5px;
  }
  input[type=range]:focus::-webkit-slider-runnable-track {
    background: #50555C;
  }
  input[type=range]::-moz-range-track {
    width: 100%;
    height: 15px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 4px #50555C;
    background: #50555C;
    border-radius: 33px;
    border: 0px solid #000000;
  }
  input[type=range]::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 0px solid #000000;
    height: 14px;
    width: 35px;
    border-radius: 47px;
    background: #529DE1;
    cursor: pointer;
  }
  input[type=range]::-ms-track {
    width: 100%;
    height: 15px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type=range]::-ms-fill-lower {
    background: #50555C;
    border: 0px solid #000000;
    border-radius: 66px;
    box-shadow: 0px 0px 4px #50555C;
  }
  input[type=range]::-ms-fill-upper {
    background: #50555C;
    border: 0px solid #000000;
    border-radius: 66px;
    box-shadow: 0px 0px 4px #50555C;
  }
  input[type=range]::-ms-thumb {
    margin-top: 1px;
    box-shadow: 0px 0px 0px #000000;
    border: 0px solid #000000;
    height: 14px;
    width: 35px;
    border-radius: 47px;
    background: #529DE1;
    cursor: pointer;
  }
  input[type=range]:focus::-ms-fill-lower {
    background: #50555C;
  }
  input[type=range]:focus::-ms-fill-upper {
    background: #50555C;
  }
  .text{
      float:right;
  }
`;

export default class SliderAmount extends Component {
    render() {
        return (
        <Styles>
        <FormGroup>
            <Row>
                <Col sm={12}>
                    <Row>
                        <Col xs={12} sm={4} className="sliderHeading">
                            Loan Amount
                            </Col>
                    </Row>
                </Col>

                <Col sm={12}>
                    <input 
                        id="sliderAmount" 
                        type="range" 
                        value={this.props.value} 
                        min={this.props.min} 
                        max={this.props.max} 
                        onChange={this.props.onChange} />
                        <Col xs={12} sm={4} className="text">
                        <div id="amountValueDisplay" className="value">{this.props.value}&nbsp;{this.props.currancy}</div>
                        </Col>
                </Col>
            </Row>
        </FormGroup></Styles>);
    }
}
