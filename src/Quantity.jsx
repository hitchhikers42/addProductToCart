import React from "react";
import ReactDOM from "react-dom";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const defaultOption = options[0];

const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two', className: 'myOptionClassName' },
  {
   type: 'group', name: 'group1', items: [
     { value: 'three', label: 'Three', className: 'myOptionClassName' },
     { value: 'four', label: 'Four' }
   ]
  },
  {
   type: 'group', name: 'group2', items: [
     { value: 'five', label: 'Five' },
     { value: 'six', label: 'Six' }
   ]
  }
]

<Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />

<Dropdown disabled onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />

<Dropdown className='myClassName' />

<Dropdown controlClassName='myControlClassName' />

<Dropdown placeholderClassName='myPlaceholderClassName' />

<Dropdown menuClassName='myMenuClassName' />

<Dropdown arrowClassName='myArrowClassName' />

<Dropdown
  arrowClosed={<span className="arrow-closed" />}
  arrowOpen={<span className="arrow-open" />}
/>

export default options;