// @flow
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';

type Props = {
  increment: (dir) => void,
  count: number,
  dir: []
};
const { remote } = require('electron');

export default class Home extends Component<Props> {
  props: Props;

  selectDirectory = () => {
    const { dialog } = remote;
    dialog.showOpenDialog(
      {
        properties: ['openDirectory']
      },
      dir => {
        console.log(dir);
        this.props.increment(dir);
      }
    );
  };

  render() {
    const {
      count,
      dir
    } = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Button color="danger" onClick={() => this.selectDirectory()}>
              Select Directory
            </Button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to={routes.COUNTER}>
                    Counter
                  </Link>
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
        <div className={styles['content-inner']}>
          <h2>Home</h2>
          <br />
          <div className={styles.cards}>
            <div className={styles.card}>
              <img
                className="card-img-top"
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1680551db1b%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1680551db1b%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.3984375%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                alt="Card cap"
              />
              <div className="card-body">
                <h5 className="card-title">title: {count}</h5>
                <p className="card-text">
                  Dir: {dir}
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
