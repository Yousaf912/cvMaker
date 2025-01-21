import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.css"
import { RouterProvider } from 'react-router-dom'
import { AllRoutes } from './Components/Routes/Allroutes.jsx'
import { Provider } from 'react-redux'
import store from './Components/ReduxStore/ReduxStore.js'
import 'react-toastify/dist/ReactToastify.css';



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    
    <RouterProvider router={AllRoutes}></RouterProvider>
  </Provider>
)
