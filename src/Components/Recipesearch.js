import React,{Component} from 'react';
import "./Recipesearch.css";


class RecipeShow extends Component {
    constructor(props){
      super(props)
      this.inputRef  = React.createRef();
    }

    componentDidMount(){
      this.inputRef.current.focus();
      console.log(this.inputRef);
    }

  render(){

    
    

      return (
        <div className="search-form ">
          <input
            ref={this.inputRef}
            id="searchval"
            className="search-bar br3 ba b--black-10 mv4 w-100 w-50-m w-25-l  mw6 shadow-5"
            onChange={this.props.type}
            type="text"
            placeholder=" Search for Recipies"
            
          />
          <button
            className=" search-button br3 ba b--black-10 mv4   mw6 shadow-5"
            type="submit"
            onClick={this.props.onSearch}
          >
            search
          </button>
        </div>
      );

    }

    


}


export default RecipeShow;