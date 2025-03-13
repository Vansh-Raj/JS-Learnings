const style = {
    width: 250,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    padding: 20,
    margin: 10,
  };
  
export function PostComponent({ name, subtitle, time, image, description }) {
    return (
        <div style={style}>
            <div style={{ display: "flex" }}>
                <img src={image} style={{ width: 40, height: 40, borderRadius: 40 }} />
                <div style={{ fontSize: 14, marginLeft: 10 }}>
                    <b>{name}</b> 
                    <div>{subtitle}</div>
                    {time !== undefined && <div style = {{display:"flex",paddingTop:1}}>
                    <div>{time}</div>
                    <img src={"https://www.shutterstock.com/image-vector/clock-icon-trendy-flat-style-600nw-674379841.jpg"} style ={{width:12,height:12}}/>
                    </div>}
                </div>
            </div>
  
            <div style={{ fontSize: 14 }}>{description}</div>
        </div>
    );
  
}

