<Select
  value={this.state.selectedOption.label}
  onChange={this.handleChange}
  defaultValue={this.state.selectedOption}
/>
// Select(value, onChange, defaultValue)

props = {
  value: this.state.selectedOption.label,
  onChange: this.handleChange,
  defaultValue: this.state.selectedOption
}

value = props.value;
// sort of like calling a function like this
Select(props)

/**************************
      All act the same
***************************/

const Select = (props) => { return (<div></div>)}
// Or destructure
const Select = ( { value, onChange, defaultValue} ) => {
  return (<div></div>)}                             // ^

const Select = ( { value, onChange, defaultValue} ) =>  (
  <div onChange={onChange}>                          // ^
    {value}
  </div>)

class Select extends React.component {
  constructor(props) {
    super(props)
  }
  render() {
    return (<div></div>)
  }
}

/**************************/

/*
function es5Function() { return }<-- has a 'this' binding
  - Requires a return statement if expecting data back
  - Must use { } to enclose function block

const es6FunctionAutoReturn = () => <-- has no 'this' binding, binds to outer function or window
  - No function block necessary (Automatically returns first statement/function, dynamic for toggle [true/false] or really simple functions)
  - must only contain one function, or ( ) are needed to enclose a block expanding multiple lines, but still one parameter is returned

const es6Function = () => { return } <-- no 'this' binding

- Acts almost exactly like a standard function, except...
  - Has no 'this' binding, therefore, cannot be used to instantiate a functional class (pseudoclassical, prototypal, etc... )


to create a functional class, for es6, we use the 'class' keyword

class es6Class {
  constructor(param1, param2, param3) {
    this.param1 = param1;
    this.param2 = param2;
    this.param3 = param3;
  }

  get(val) {
    return this.param1
  }
}

    this.handleChange = this.handleChange.bind(this)
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }
*/




let props = {
  'prop1': 'This is a string',
  'prop2': {
    'a':1,
    'b':2
  },
  'prop3': [];
}

const Select = (props) => {
  return (
    <div id='some_NORMAL_HTML_can be used'>
      {/* but if we want to access a variable or javascript specific functions, like mapping over an array to pass dataq to another component or passing a prop in as text (must be string) we can use --> {} */}
    </div>
  )
}




/* Destructure Object */
let object = {
  a:1,
  b:2,
  c:3
}

let { a, b, c } = object


/* Destructure Array */
let array = [ 1, 2, 3, 4 ];

let [ a, b, c, d ] = array;
// a === 1
// b === 2
// c === 3
// d === 4



let array = [ 1, 2, 'a' ];

let [ a, b, c, d ] = array;
// a === 1 (Number)
// b === 2 (Number)
// c === 'a' (String)
// d === undefined