import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import SliderAmount from './components/SliderAmount';
import SliderDuration from './components/SliderDuration';
import styled from 'styled-components';
import logo from './images/bank_logo1.jpg';
import './fonts/customFont.ttf';
import SideBar from './components/SideBar';

//css defined using external components Styled Components
//So That we have Separated CSS for separate components
const Styles = styled.div`
    .App {    
        display: flex;    
        justify-content: center;
        color: white;
      }
      .heading{
        font-family: custom;
        font-size: 357%;
        margin-top: 47px;
        color: grey;
        width: 1025px;
      }
      .lowerValues{
        margin: 0px;
      }
      .bodyArea {
        background-color: white;
        color: black;
        border-radius: 60px;
        margin-top: 30px;
      }
      .rowheading{
        font-family: custom;
        font-size: 150%;
      }
      .valueDisplay1{
        color: #888;
        width: 30%;
        float: left;
        background-color: lightgray;
        margin-left: 20%;
        font-size: 24px;       
        border-radius: 18px;
      }
      .valueDisplay2{
        color: #888;
        width: 30%;
        float: left;
        background-color: lightgray;
        font-size: 24px;
        border-radius: 18px;
        margin-left: 2px;
      }
    `;
      var values = true;
class EMICalculator extends Component {

    /**
     * ================================
     * ==========CONSTRUCTOR ==========
     * ===============================
     * @param props
     */
    constructor(props) {
        super(props);

        // save props values in to the state
        this.state = {

            valueAmount: this.props.valueA,
            maxAmount: this.props.maxA,
            minAmount: this.props.minA,

            valueDuration: this.props.valueD,
            maxDuration: this.props.maxD,
            minDuration: this.props.minD,
            
            emiData: [],
            data: [],

            localData: [] ,
        };
    }
    /**
     * ===============================================
     * ======== UPDATE FUNCTION ==================
     * =============================================
     * @param event
     */

    update( event ){
        // Assign to let changedID ID of slider which has been changed
        let changedID = event.target.id;
        // let value = e.target.value;
        if (changedID === 'sliderAmount') {
            this.setState({valueAmount: event.target.value});
            this.state.valueAmount = event.target.value;
          }
        if (changedID === 'sliderDuration'){
            this.setState({valueDuration: event.target.value});
            this.state.valueDuration = event.target.value;
          }
          this.componentDidMount();
          localStorage.setItem("valueAmount", this.state.valueAmount);
          localStorage.setItem("valueDuration", this.state.valueDuration);
          this.refs.child.setValues();
    }
    historyValues(){
      this.state.valueAmount = localStorage.getItem("valueAmount");
      this.state.valueDuration = localStorage.getItem("valueDuration");
      this.componentDidMount();
    }

    //API call to Calculate the values
    componentDidMount() {
      fetch(`https://ftl-frontend-test.herokuapp.com/interest?amount=${this.state.valueAmount}&numMonths=${this.state.valueDuration}`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              emiData: result,
              data: result.monthlyPayment
            });
          },
          //Error handled to display error on the page.
          (error) => {
            values = false;
          }
        )
    }
    /**
     * =================================================
     * =========== RENDER ============================
     * =============================================
     * @returns {XML}
     */
    render()
    {
        return(
          <Styles>
            <SideBar onClick={this.historyValues.bind(this)} ref="child"/>
            <div className="App">
            <div className="container">
            <div className="row">
              <img src={logo} className="logo" alt="Logo of Bank"/>
              <div className="heading">Iron Bank of Braavos</div>
            </div>
            <div className="bodyArea">
            &nbsp;
            <div className="rowheading">
              <p>Emi Calculation</p>
            </div>
              <div className="row ">
                <SliderAmount
                  value={this.state.valueAmount}   
                  max={this.state.maxAmount}
                  min={this.state.minAmount}
                  onChange={this.update.bind(this)}
                  currancy={this.props.currancy}
                  />
                </div>
                <div className="row">
                  <SliderDuration
                    value={this.state.valueDuration}
                    min={this.state.minDuration}
                    max={this.state.maxDuration}
                    onChange={this.update.bind(this)}
                    />
                </div>
                { values
                  ? 
                  <div className="row lowerValues">
                  <div className="valueDisplay1">
                  <p>Interest rate</p>
                  <p>{this.state.emiData.interestRate}</p>
                  </div>
                  <div className="valueDisplay2">
                    <p>Monthly Payment</p>
                    <p>{this.state.data.amount}&nbsp;{this.state.data.currency}</p>
                  </div>
                  </div>        
                  : 
                  <div class = "row">
                  Please check your connection or Contact Support.
                  </div>
                }
                &nbsp;
                </div>
            </div>
            </div>
          </Styles>
        );
    }
}

//  Assign Types for props
EMICalculator.propTypes = {

    valueD: PropTypes.number,
    maxD: PropTypes.number,
    minD: PropTypes.number,

    valueA: PropTypes.number,
    maxA: PropTypes.number,
    minA: PropTypes.number,
};

// Assign deafault values to props

EMICalculator.defaultProps = {
    valueD: 6,
    maxD: 24,
    minD: 6,

    valueA : 500,
    maxA : 5000,
    minA : 500,

    currancy: 'USD',
};

export default EMICalculator;

