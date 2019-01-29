import React, { Component } from 'react';

import { Link, Route, Switch } from 'react-router-dom';
import routes from '../constants/routes';
import CounterPage from '../containers/CounterPage';
import HomePage from '../containers/HomePage';
import SettingsPage from '../containers/SettingsPage';

class DefaultLayout extends Component {
  render() {
    return (
      <div className="wrapper">
        <nav id="sidebar">
          <div className="sidebar-header">
            <h3>Fishtank</h3>
          </div>

          <ul className="list-unstyled components">
            <p>Manage your photos</p>
            <li className="active">
              <Link to={routes.HOME}>
                <i className="fa fa-arrow-left fa-3x" />
                Home
              </Link>
            </li>
            <li>
              <Link to={routes.SETTINGS}>
                <i className="fa fa-arrow-left fa-3x" />
                Settings
              </Link>
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
          <Switch>
            <Route path={routes.COUNTER} component={CounterPage} />
            <Route path={routes.SETTINGS} component={SettingsPage} />
            <Route path={routes.HOME} component={HomePage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
