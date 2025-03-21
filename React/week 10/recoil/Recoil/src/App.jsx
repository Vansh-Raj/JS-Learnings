import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { networkAtom } from './atoms'
import { RecoilRoot, useRecoilValue } from 'recoil'

function App() {
 return <RecoilRoot>
  <MainAPP />
 </RecoilRoot>
}

function MainAPP(){
  const networkNotificationCount  = useRecoilValue(networkAtom);
  

  return (
    <div>
    <button>Home</button>
    <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
    <button>Jobs ()</button>
    <button>Messages ()</button>
    <button>Notifications ()</button>
    </div>
  )
}

export default App
