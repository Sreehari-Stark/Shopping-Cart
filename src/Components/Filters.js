import React, { Component } from 'react';

const sortArr = [
  { name: 'Price -- High Low', isClicked: false },
  { name: 'Price -- Low High', isClicked: false },
  { name: 'Discount', isClicked: false },
];

class Filters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortByValue: '',
      sortValue: sortArr,
    };
  }

  handleClick = (e) => {
    console.dir(e.target);
    console.dir(e.target.innerText);
    const { sortValue } = this.state;
    const arr = [...sortValue].map((item) => {
      if (e.target.innerText === item.name) {
        return { ...item, isClicked: !item.isClicked };
      } else {
        return { ...item, isClicked: false };
      }
    });

    this.setState({ sortValue: arr, sortByValue: e.target.innerText }, () => {
      this.props.filter(this.state.sortByValue);
    });
  };

  render() {
    const { sortValue } = this.state;
    console.log(this.state, 'staet');
    return (
      <div style={{ display: 'flex', width: '80%', margin: '0.5rem' }}>
        <div>
          <h3 style={{ fontSize: '1rem', fontWeight: '900' }}>Sort By</h3>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '80%',
          }}
        >
          {sortValue.map((item) => (
            <p
              onClick={this.handleClick}
              style={{
                color: item.isClicked ? 'dodgerblue' : 'rgba(0,0,0,0.6)',
              }}
            >
              {item.name}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default Filters;
