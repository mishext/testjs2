import React from "react";
import "./index.css";
import Card from "../../Components/Card/Card.js";

export default function Dashboard() {
  return (
    <div className="Container">
      <p className="ifza">IFZA Portal</p>
      <div className="cardsContainer">
        <div>
          <p className="mainText">VISA REQUESTS</p>
          <div className="ContainerWrapper">
            <Card
              cardNumber="number numberColor"
              cardButton="red button"
              cardContent="Total Visa"
              statusNumber="0"
            />
            <Card
              cardNumber="number numberBlack"
              cardButton="black button"
              cardContent="Total Pending"
              statusNumber="0"
            />
            <Card
              cardNumber="number numberBlue"
              cardButton="blue button"
              cardContent="Total SC Issued"
              statusNumber="0"
            />
            <Card
              cardNumber="number numberGreen"
              cardButton="green button"
              cardContent="Total RV Issued"
              statusNumber="0"
            />
          </div>
        </div>
        <div>
          <p className="mainText">LICENCE REQUESTS</p>
          <div className="ContainerWrapperRQ">
            <Card
              cardNumber="number numberColor"
              cardButton="red button"
              cardContent="Due Payments"
              statusNumber="0"
            />
            <Card
              cardNumber="number numberBlack"
              cardButton="black button"
              cardContent="Partial Payments"
              statusNumber="0"
            />
            <Card
              cardNumber="number numberBlue"
              cardButton="blue button"
              cardContent="Full Payment"
              statusNumber="0"
            />
          </div>
        </div>
        <div className="CardContainer">
          <div className="Card">
            <p className="cardDescription">Visa_Partner View</p>
            <div className="CardInfo">
              <p style={{ fontWeight: "500", paddingBottom: "20px" }}>
                No records match your specified criteria!
              </p>
              <a className="importData" href="https://google.com">
                Import Data
              </a>
            </div>
          </div>
          <div className="Card">
            <p className="cardDescription">Licence Status</p>
            <div className="CardInfo">
              <p style={{ fontWeight: "500", paddingBottom: "20px" }}>
                No records match your specified criteria!
              </p>
              <a className="importData" href="https://google.com">
                Import Data
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
