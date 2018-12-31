// @flow
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';

type Props = {};
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
      }
    );
  };

  render() {
    return (
      <div>
        <h2>Home</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
        <br />
        <Button color="danger" onClick={() => this.selectDirectory()}>
          Select Directory
        </Button>
      </div>
    );
  }
}
