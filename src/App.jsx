import React from 'react';
import axios from 'axios';
import options from './Quantity.jsx';
import Select from 'react-select';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      selected: '1'
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(selectedOption){
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={this.state.selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    )
  }
}

export default App;