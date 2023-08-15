import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'virtual:svg-icons-register'
import "./assets/css/global.less"
import "./assets/css/transition.less"

// console.log = (...a) => { console.info('----后台----',...a) }

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
)
