import React, { Component } from 'react';

import { Link, Route, Switch } from 'react-router-dom';
import routes from '../constants/routes';
import CounterPage from '../containers/CounterPage';
import HomePage from '../containers/HomePage';

class DefaultLayout extends Component {
  render() {
    return (
      <div className="wrapper">
        <nav id="sidebar">
          <div className="sidebar-header">
            <h3>Bootstrap Sidebar</h3>
          </div>

          <ul className="list-unstyled components">
            <p>Dummy Heading</p>
            <li className="active">
              <Link to={routes.HOME}>
                <i className="fa fa-arrow-left fa-3x" />
                Home
              </Link>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a
                href="#pageSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                Pages
              </a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <ul className="list-unstyled CTAs">
            <li>
              <a
                href="https://bootstrapious.com/tutorial/files/sidebar.zip"
                className="download"
              >
                Download source
              </a>
            </li>
            <li>
              <a
                href="https://bootstrapious.com/p/bootstrap-sidebar"
                className="article"
              >
                Back to article
              </a>
            </li>
          </ul>
        </nav>

        <div id="content">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button
                type="button"
                id="sidebarCollapse"
                className="btn btn-info"
              >
                <span>Toggle Sidebar</span>
              </button>
              <button
                className="btn btn-dark d-inline-block d-lg-none ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              />

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Page
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Page
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Page
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Page
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
            <Route path={routes.COUNTER} component={CounterPage} />
            <Route path={routes.HOME} component={HomePage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
