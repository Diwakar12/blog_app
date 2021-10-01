import React from "react";
import { Link } from "react-router-dom";

export function CardItem(props) {
  const { title, backgroundImage, Id, Description } = props;
  return (
    <div className="col-lg-9">
      <div className="card mb-4">
        <div className="row" style={{marginBottom:"-66px"}}>
          <div className="col-md-5">
            <img className="rounded-3" src={backgroundImage} alt="" />
          </div>
          <div className="col-md-7 mt-3 mt-md-0">
            <Link to="" class="badge bg-danger mb-2">
              <i class="fas fa-circle me-2 small fw-bold"></i>Lifestyle
            </Link>
            <h3>
              <Link to="" class="btn-link stretched-link text-reset">
                {title}
              </Link>
            </h3>
            <p>{Description}</p>
            <ul className="nav nav-divider align-items-center d-none d-sm-inline-block">
								<li className="nav-item">
									<div className="nav-link">
										<div className="d-flex align-items-center position-relative">
											<div className="avatar avatar-xs">
												<img className="avatar-img rounded-circle" src={backgroundImage} alt="avatar"/>
											</div>
											<span className="ms-3">by Samuel</span>
										</div>
									</div>
								</li>
								<li className="nav-item">Jan 22, 2021</li>
							</ul>
          </div>
        </div>
      </div>
    </div>
  );
}
