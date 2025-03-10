import {useState} from "react";
function App() {
  // return JSX that will be rendered
  return (
      // Apply inline styles to the div element
      <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
       <ToggleMessage />
       <ToggleMessage />
       <ToggleMessage />
         
      </div>
  );
}

// Create a style object to apply styles to the div element in PostComponent
// const style = {
//   width: 250,
//   backgroundColor: "white",
//   borderRadius: 10,
//   borderColor: "gray",
//   borderWidth: 1,
//   padding: 20,
//   margin: 10,
// };
const ToggleMessage = () => {
   const [notificationcount,setnotificationcount] = useState(0);

   console.log("re-rendered")

    function increment(){
        setnotificationcount(notificationcount + 1);
    }

    return (
        <div>
            <button onClick={ increment}>
                Toggle Message
            </button>
            {notificationcount}
        </div>
    );
};

// function PostComponent({ name, subtitle, time, image, description }) {
//   return (
//       <div style={style}>
//           <div style={{ display: "flex" }}>
//               <img src={image} style={{ width: 40, height: 40, borderRadius: 40 }} />
//               <div style={{ fontSize: 14, marginLeft: 10 }}>
//                   <b>{name}</b> 
//                   <div>{subtitle}</div>
//                   {time !== undefined && <div style = {{display:"flex",paddingTop:1}}>
//                   <div>{time}</div>
//                   <img src={"https://www.shutterstock.com/image-vector/clock-icon-trendy-flat-style-600nw-674379841.jpg"} style ={{width:12,height:12}}/>
//                   </div>}
//               </div>
//           </div>

//           <div style={{ fontSize: 14 }}>{description}</div>
//       </div>
//   );
// }


export default App; 