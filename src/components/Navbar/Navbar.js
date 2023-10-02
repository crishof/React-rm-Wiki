import React from "react";

const Navbar = () => {
  return (
    <nav class="Navbar Navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="Navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="Navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#NavbarNavAltMarkup"
          aria-controls="NavbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="Navbar-toggler-icon"></span>
        </button>
        <div class="collapse Navbar-collapse" id="NavbarNavAltMarkup">
          <div class="Navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a class="nav-link" href="#">
              Features
            </a>
            <a class="nav-link" href="#">
              Pricing
            </a>
            <a class="nav-link disabled" aria-disabled="true">
              Disabled
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
