import './App.css';
import Home from './Pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/SignIn",
      element: <SignIn/>
    },
    {
      path: "/SignUp",
      element: <SignUp/>
    },
  ]);
  

  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
