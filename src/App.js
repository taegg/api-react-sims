import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
// import QuoteList from './components/QuoteList';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';


const simQuoteSam= {
   "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
   "character": "Nelson Muntz",
   "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
   "characterDirection" : "Left"
  };


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={ simQuote: simQuoteSam };
    this.getSimQuote=this.getSimQuote.bind(this);
  }
   

getSimQuote(){
  axios.get('https://simpsons-quotes-api.herokuapp.com/quotes').then(res=>res.data).then(data=>{
    console.log(data);
    this.setState({simQuote : data[0]});
  })
  }

  render(){
  return(
    <div className={'App '+this.state.simQuote.characterDirection}>
      <Navbar />
      <QuoteCard simQuote={this.state.simQuote} />
      <button onClick={this.getSimQuote}>Put Simpsons' quotes on your {this.state.simQuote.characterDirection}!</button>  
   </div>
      );
    }
}

export default App;
