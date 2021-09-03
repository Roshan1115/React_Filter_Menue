import {React, useState } from 'react'
import Options from './Options'
import Card from './Card'
import Menue from './Menue'
import Container from '@material-ui/core/Container';

const containerStyle = {
  // border: "2px solid blue",
  padding : "0",
  display : "flex",
  flexWrap: "wrap",
}

let AllOptions = Menue.map((ele) => ele.category);

// for deleting repeating options
AllOptions = [ ...AllOptions.filter((ele, index, ar) => {
  return ar.indexOf(ele) === index;
}), 'all' ]

console.log(AllOptions);



function App() {

  const [Items, setItems] = useState(Menue);

  const filterItem = (category) => {
    if(category === 'all'){
      setItems(Menue);
      return;
    }
    else{
      const filtered_item = Menue.filter((ele) => {
        return ele.category === category;
      })
      setItems(filtered_item);
    }
  }


  return (
    <div className="App">
    <h1 id="firstH1">
      Galary Filter Menue
    </h1>
    
    <div className="optionHolder">
      {
        AllOptions.map((ele, index) => {
          return (
            <Options 
            key={index}
            title={ele}
            filter={filterItem}
          />)
        })
      } 
    </div>
    
    <Container maxWidth="lg" style={containerStyle}>

      {
        Items.map((ele, index) => {
          return(
            <Card 
              key={index}
              title= {ele.title}
              subTitle = {ele.subTitle}
              image={ele.image}
            />
          )
        })
      }
      
    </Container>

  </div>
  );
}

export default App;
