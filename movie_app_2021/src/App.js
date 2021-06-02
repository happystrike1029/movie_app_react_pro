import React from "react";

function Food({name, picture}){
  //만약 {fav}를 빼줬더라면 props를 가져와서 props의 fav를 입력해줘야 한다. 
  //console.log(props);
  return (
    <div>
    <h1>I like {name}</h1>
    <img src={picture} />
  </div>
  );
}

/*
function Food(props){
  return <h1>I like {props.fav}</h1>;
}
*/

// 2.0의 형태 
// function App() {
//   return (
//     // <div className="App"/>
//     <div> 
//       <h1>
//        Hello~!!
//       </h1>
//       <Food fav="rice"
//         // something = {true}
//         // papapa = {["hello", 1, 2, 3, 4, true]}
//       />
//       <Food fav="noodle" />
//       <Food fav="soup" />
//     </div>
//   );
// }
// export default App;

// 2.1 렌더링 하는 법 
const foodILike = [
  {
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];

function App() {
  return (
    // <div className="App"/>
    <div> 
      {foodILike.map(dish => (<Food name={dish.name} picture={dish.image}/>))}
    </div>
    // dish는 object 
  );
}
export default App;
