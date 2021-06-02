import React from "react";

function Food({fav}){
  //만약 {fav}를 빼줬더라면 props를 가져와서 props의 fav를 입력해줘야 한다. 
  //console.log(props);
  return <h1>I like {fav}</h1>;
}

/*
function Food(props){
  return <h1>I like {props.fav}</h1>;
}
*/


function App() {
  return (
    // <div className="App"/>
    <div> 
      <h1>
       Hello~!!
      </h1>
      <Food fav="rice"
        // something = {true}
        // papapa = {["hello", 1, 2, 3, 4, true]}
      />
      <Food fav="noodle" />
      <Food fav="soup" />
    </div>
  );
}
export default App;
