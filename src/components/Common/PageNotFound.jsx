import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiCompass } from "react-icons/fi";
import "./PageNotFound.css";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <div className="not-found__bg-orb not-found__bg-orb--left" aria-hidden="true" />
      <div className="not-found__bg-orb not-found__bg-orb--right" aria-hidden="true" />

      <div className="not-found__card glass-panel" data-aos="zoom-in" data-aos-duration="800">
        <p className="not-found__eyebrow">Signal Lost</p>

        <div className="not-found__code-wrap" aria-hidden="true">
          <span className="not-found__code-shadow">404</span>
          <h1 id="not-found-title" className="not-found__code">404</h1>
        </div>

        <p className="not-found__subtitle">This route drifted outside the market map.</p>
        <p className="not-found__text">
          The page you requested does not exist or has been moved. Jump back to the dashboard pulse and continue tracking live crypto signals.
        </p>

        <div className="not-found__actions">
          <Link className="not-found__btn not-found__btn--primary" to="/">
            <FiCompass size={18} aria-hidden="true" />
            <span>Explore Home</span>
          </Link>
          <button
            type="button"
            className="not-found__btn not-found__btn--ghost"
            onClick={() => navigate(-1)}
          >
            <FiArrowLeft size={18} aria-hidden="true" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;