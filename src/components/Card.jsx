import React from 'react'

function Card(props) {
    
  return <div className="col-lg-4" >
  <div className="card mb-5 mb-lg-0">
    <div className="card-body">
      <h5 className="card-title text-muted text-uppercase text-center">{props.cardData.plan}</h5>
      <h6 className="card-price text-center">{props.cardData.dolloar}/month</h6>
      <hr/>
      <ul className="fa-ul">
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData.user}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.cardData.storage}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
        <li className={props.cardData.privateprojects}><span className="fa-li"><i className={props.cardData.projectIcon}></i></span>Unlimited
          Private Projects</li>
        <li className={props.cardData.support}><span className="fa-li"><i className={props.cardData.suupportIcon}></i></span>Dedicated
          Phone Support</li>
        <li className={props.cardData.subdomain}><span className="fa-li"><i className={props.cardData.subdomainIcon}></i></span>Free Subdomain
        </li>
        <li className={props.cardData.reports}><span className="fa-li"><i className={props.cardData.reportsIcon}></i></span>Monthly Status
          Reports</li>
      </ul>
      <div className="d-grid">
        <a href="#" className="btn btn-primary text-uppercase">Button</a>
      </div>
    </div>
  </div>
</div>
}

export default Card