import React from "react";
import { Link } from "react-router-dom";

export function CardItem(props) {
  const { title, backgroundImage, Id, Description } = props;
  return (
    <div className="card border rounded-3 up-hover p-4 mb-4">
      <div className="row g-3">
        <div className="col-sm-9">
          <h2 class="card-title">
            <Link
              to={{
                pathname: `/${Id}`,
              }}
              class="btn-link text-reset stretched-link"
            >
              {title}
            </Link>
          </h2>
          <div class="d-flex align-items-center position-relative mt-3">
            <div class="avatar me-2">
              <img
                class="avatar-img rounded-circle"
                src={backgroundImage}
                alt="avatar"
              />
            </div>
            <div>
              <h5 class="mb-1">Lori Ferguson</h5>
              <ul class="nav align-items-center small">
                <li class="nav-item me-3">Mar 07, 2021</li>
                <li class="nav-item">
                  <i class="far fa-clock me-1"></i>5 min read
                </li>
              </ul>
            </div>
          </div>
        </div>
       
        <div class="col-sm-3">
          <img class="rounded-3" src={backgroundImage} alt={backgroundImage} />
        </div>
      </div>
    </div>
  );
}
