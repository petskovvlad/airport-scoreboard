import React from "react";
import './information.scss';

const Information = () => {
  return (
    <section className="information">
      <div className="information__container">
        <div className="information__directions">
          <h1 className="information__directions-title">Airport Directions</h1>
          <div className="information__directions-text">2 Medova str., Kyiv Terminals A, B and D</div>
          <span className="information__directions-link">Get direction</span>
        </div>
        <div className="information__tickets">
          <h1 className="information__tickets-title">Airline Tickets</h1>
          <div className="information__tickets-text">Any destination. Best fares</div>
          <span className="information__tickets-link">Search</span>
        </div>
        <div className="information__parking">
          <h1 className="information__parking-title">Parking</h1>
          <div className="information__parking-text">Parking directions and fares</div>
          <span className="information__parking-link">Find out more</span>
        </div>
        <div className="information__express-line">
          <h1 className="information__express-line--title">Express Line</h1>
          <div className="information__express-line--text">Express security pass</div>
          <span className="information__express-line--link">Find out more</span>
        </div>
      </div>
      <div className="information__priority"></div>
      <div className="information__container">
        <div className="information__iev-services">
          <h1 className="information__iev-services--title">Iev Services</h1>
          <div className="information__iev-services--text">Online booking</div>
          <span className="information__iev-services--link">Find out more</span>
        </div>
        <div className="information__covid-testing">
          <h1 className="information__covid-testing--title">Covid-19 Testing</h1>
          <div className="information__covid-testing--text">You can get tested 24/7 at Terminal A</div>
          <span className="information__covid-testing--link">Find out more</span>
        </div>
        <div className="information__airlines-destinations">
          <h1 className="information__airlines-destinations--title">Airlines & Destinations</h1>
          <div className="information__airlines-destinations--text">Discover your flight and destionation options</div>
          <span className="information__airlines-destinations--link">View</span>
        </div>
        <div className="information__vip-terminal">
          <h1 className="information__vip-terminal--title">Vip Terminal</h1>
          <div className="information__vip-terminal--text">Exclusive services ffor VIPs</div>
          <span className="information__vip-terminal--link">Terminal B</span>
        </div>
      </div>
      <div className="information__container">
        <div className="information__mastercard">
          <h1 className="information__mastercard-title">Mastercard Fast Line</h1>
          <div className="information__mastercard-text">Easy passage through the controls</div>
          <span className="information__mastercard-link">Find out more</span>
        </div>
        <div className="information__info-centre">
          <h1 className="information__info-centre--title">Info Centre</h1>
          <div className="information__info-centre--text">{`24/7 Information +38(044)5004973`}
          </div>
          <span className="information__info-centre--link">Contact now</span>
        </div>
      </div>
    </section>
  )
}

export default Information;