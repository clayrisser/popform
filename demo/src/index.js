import popform from '../../lib';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function main() {
  const demo = document.createElement('div');
  demo.id = 'demo';
  document.body.appendChild(demo);
  ReactDOM.render(<Demo />, demo);

  const config = [
    {
      delay: 10000,
      fields: {
        username: {
          value: 'some-username'
        },
        password: 'some-password'
      },
      elements: [
        {
          query: '.box',
          style: {
            backgroundColor: 'blue'
          }
        }
      ],
      submit: '#submit'
    },
    {
      fields: {
        username: {
          value: 'some-username2'
        },
        password: 'some-password2'
      },
      elements: [
        {
          query: '.box',
          style: {
            backgroundColor: 'green'
          }
        }
      ],
      submit: '#submit'
    }
  ];

  popform(config);
}

class Demo extends Component {
  render() {
    return (
      <div>
        <form>
          <div>
            Username: <input name="username" />
          </div>
          <div>
            Password: <input name="password" type="password" />
          </div>
          <button id="submit" onClick={this.handleClick.bind(this)}>Send</button>
        </form>
        <div className="box" style={{
          width: '40px',
          height: '40px',
          backgroundColor: 'red'
        }} />
      </div>
    );
  }

  handleClick(e) {
    e.preventDefault();
    console.log('Submitting form');
  }
}

main();
