

function App() {
 
  return (
    
      <div style = {{background:"#dfe6e9",height:"100vh"}}>
        <div style = {{display:"flex",justifyContent:"center"}}>
        <PostComponent/>
        </div>
      </div>
       
  )
}
const style = {width:200,backgroundColor:"White",borderRadius:10,
              borderColor:"gray",borderWidth:1,padding:"30"}
function PostComponent(){
  return <div style={style} >
  <div style = {{display:"flex"}} >
    <img src = {"https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
    style = {{width:20,
      height:20,
      borderRadius:20
    }}/>
    <div style = {{fontSize:12,marginLeft:10}}>
      <b>
        100xdevs
      </b>
      <div>23,888 followers</div>
      <div>12m</div>
    </div>
  </div>
  <div style = {{fontSize:12}}>
Learning react components
  </div>
</div>
}

export default App
