import React from "react";
import { NavLink } from "react-router-dom";

const ModalBody = () => {
  return (
    <>
      {/* <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 bg-dark">
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
            id="menu"
          >
            <li>
              <button
                // data-bs-toggle="collapse"
                className="nav-link px-0 align-middle"
              >
                <i className="fs-4 bi-image" />{" "}
                <span className="ms-1 d-none d-sm-inline">Photos</span>{" "}
              </button>
            </li>
            <li>
              <button className="nav-link px-0 align-middle">
                <i className="fs-4 bi-collection" />{" "}
                <span className="ms-1 d-none d-sm-inline">Library</span>
              </button>
            </li>
          </ul>
          <hr />
          <div className="dropdown pb-4">
            <a
              href="#"
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                alt="hugenerd"
                width={30}
                height={30}
                className="rounded-circle"
              />
              <span className="d-none d-sm-inline mx-1">loser</span>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-dark text-small shadow"
              aria-labelledby="dropdownUser1"
            >
              <li>
                <a className="dropdown-item" href="#">
                  New project...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      <div className="row">
        <div className="col py-3">
          <h3>Dashboard</h3>
          <p className="lead">
            An example 2-level sidebar with collasible menu items. The menu
            functions like an "accordion" where only a single menu is be open at
            a time. While the sidebar itself is not toggle-able, it does
            responsively shrink in width on smaller screens.
          </p>
          <ul className="list-unstyled">
            <li>
              <h5>Responsive</h5> shrinks in width, hides text labels and
              collapses to icons only on mobile
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
};

const Modal = () => {
  return (
    <div
      className="modal modal-xl"
      tabIndex={-1}
      id="exampleModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Product Images</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div
            className="modal-body row flex-nowrap"
            style={{ padding: 0, paddingRight: "12px" }}
          >
            {/* <ModalBody></ModalBody> */}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
