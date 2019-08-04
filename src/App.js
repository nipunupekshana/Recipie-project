import React, { useState } from "react";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import "./App.css";
import Recipesearch from "./Components/Recipesearch";
import Navbar from "./Components/Navbar";
import CardList from "./Components/CardList";
import About from './Components/About';
import Contact from './Components/Contact';


const App = () => {
  const [searchfield, setSearchfield] = useState("");
  const [recipes, setRescipes] = useState([]);
  


  const ontype = event => {
    console.log(event.target.value);
    setSearchfield(event.target.value);
  };

  const searchRecipe = async searchfield => {
    const APP_ID = "24d18315";
    const APP_KEY = "83f5a5a35f4cd65ec2a4d7ba912f8509";

    const response = await fetch(
      `https://api.edamam.com/search?q=${searchfield}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=12`
    );

    const data = await response.json();
    setRescipes(data.hits);
    console.log(data.hits);
    
  
    //console.log(data.hits[1].recipe);

    //  data.hits.map((obj,id) => {

    //   i = seti(id);
    //   label = setlabel(data.hits[id].recipe.label);
    //   calories = setcalories(data.hits[id].recipe.calories);
    //   image = setimage(data.hits[id].recipe.image);

    //  } )
       
   
  };
  const cardData = (props) => {
    return(
      <div className="card" >
      {recipes.map(res => (
            <CardList
              key={res.recipe.label}
              label={res.recipe.label}
              calories={res.recipe.calories}
              image={res.recipe.image}
              url={res.recipe.url}
              {...props}
            />
          ))}

        </div>
    )
  }

  const onSearch = () => {
    if (searchfield.length > 0) {
      searchRecipe(searchfield);
      
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path='/' exact render={(props) => <Recipesearch{...props} type={ontype} onSearch={onSearch} /> }
        />
        {/* <Recipesearch type={ontype} onSearch={onSearch} /> */}
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

        {/* <div className="flex flex-wrap flex justify-center pl3 pr3">
          {recipes.map(res => (
            <CardList
              key={res.recipe.label}
              label={res.recipe.label}
              calories={res.recipe.calories}
              image={res.recipe.image}
              url={res.recipe.url}
            />
          ))}
        </div> */}

        <Route path="/" exact render={cardData} />


      </div>
    </Router>
  );
};

export default App;

