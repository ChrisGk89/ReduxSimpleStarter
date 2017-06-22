import React, { Component } from 'react';

//const Component = React.Component; Same as { Component }
// We can delete previous line and { Component } and use
//class SearchBar extends React.Component

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};
  }

  render() {
    return (
      <div>
        <input 
          value = {this.state.term}
          onChange = { event => this.setState ({ term: event.target.value }) } />
      </div>
    );
  }
}
//We use arrow function instead of simple function-method

/*Method of the class
  onInputChange(event) {
    console.log (event.target.value);
  }
}*/


export default SearchBar;
