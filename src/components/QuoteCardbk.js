import React from 'react';
import './QuoteCard.css';  
import PropTypes from 'prop-types';

class QuoteCard extends React.Component{
  
  constructor({simQuote}) {
   super({simQuote});
   this.state={favori : false};
  }


  render(){
    
    return(      
      <figure className="QuoteCard">
      <img
        src={this.simQuote.image}
        alt={this.simQuote.character} />
      <figcaption>

        
        <blockquote>
          {this.simQuote.quote}
        </blockquote>
        <p>
        <cite>{this.simQuote.character}</cite>
        <span className={this.state.favori ? 'is-favorite' : '' } 
        onClick={event=>{
        if(this.state.favori===false){
           this.setState({favori : true})
            }
        else {this.setState({favori:false})
            }  
              }
          } >{this.state.favori ? 'Favori' : '' } &#9733;</span>
        </p>
      </figcaption>
    </figure>
        );
     }
}


QuoteCard.propTypes={
character: PropTypes.string.isRequired
};

export default QuoteCard;
