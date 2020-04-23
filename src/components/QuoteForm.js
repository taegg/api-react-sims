import React from 'react';
import './QuoteForm.css';

class QuoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={character: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

     handleChange(event){
        const input = event.target;
        if(input.value.length<=30){
        this.setState({ character : input.value}); }   
         
    }

      handleSubmit(event){
        alert(`${this.state.character} is a Simpson character.`);
        event.preventDefault();
    }

    render() {
      return (
        <form
          className="QuoteForm" onSubmit={this.handleSubmit}
        >
          <label htmlFor="inputform">Character:</label>
          <input className={(this.state.character.length<30) ? 'length-ok' : 'length-maximum-reached'}  
            id="inputform"
            name="character"
            type="text"
            value={this.state.character}
            onChange={this.handleChange}
          />
          <span className='remaining-characters'>{(30-this.state.character.length)+' letters remain'}</span>
          <input type="submit" value="Submit" />
            <h1>{this.state.character}</h1>
        </form>
      );
    }
  }
  


  export default QuoteForm;