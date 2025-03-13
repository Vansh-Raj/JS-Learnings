import { useEffect, useState } from "react";
import { PostComponent } from "./post";
function App() {
  const [currentTab , setCurrentTab] = useState("Notification");
return <div>
  <button onClick = {() => setCurrentTab("feed")} style = {{color:currentTab == "feed" ? "red":"black"}}>Feed</button>
  <button onClick = {() => setCurrentTab("Notification")} style = {{color:currentTab == "Notification" ? "red":"black"}}>Notification</button>
  <button onClick = {() => setCurrentTab("messages")} style = {{color:currentTab == "messages" ? "red":"black"}}>messages</button>
  <button onClick = {() => setCurrentTab("Jobs")} style = {{color:currentTab == "Jobs" ? "red":"black"}}>Jobs</button>
</div>
}

export default App; 