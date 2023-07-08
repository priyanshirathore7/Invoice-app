import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css'
import { BrowserRouter as Router,  Route,Redirect } from 'react-router-dom';

import { Container } from 'react-bootstrap'
import InvoiceForm from './components/InvoiceForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login';


function App() {
  // const [count, setCount] = useState(0)
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

//   return (
//     <Router>
//     <Route exact path="/">
//         {/* {loggedIn ? <Redirect to="/invoice-form" /> : <Login handleLogin={handleLogin} />} */}
//         <div className="App d-flex flex-column align-items-center justify-content-center w-100 ">
//       <Container>
//         <Login/>
//       </Container>
      
//     </div>
//       </Route>
//       {/* <Route exact path="/">
//       {loggedIn ? <Dashboard /> : <Login handleLogin={handleLogin} />}
//         </Route>
//        */}


//     {/* <Route exact path="/invoice-Form">
    

//     {loggedIn ? <InvoiceForm /> : <Login handleLogin={handleLogin} />} */}
   
//    <Route exact path="/invoice-form">
//         {loggedIn ? (
//     <div className="App d-flex flex-column align-items-center justify-content-center w-100 ">
//       <Container>
//         <InvoiceForm/>
//       </Container>
      
//     </div>
//     ) : (
//       <Redirect to="/" />
//     )}
//   </Route>
    

      
//     </Router>
//   );
// }

// export default App;


return (
  <Router>
    {/* <Route exact path="/">
      {loggedIn ? (
        <Redirect to="/invoice-form" />
      ) : ( */}
      <Route exact path="/">
        <div className="App d-flex flex-column align-items-center justify-content-center w-100 ">
          <Login/>
          </div>
          
            {/* <Login handleLogin={handleLogin} />
         
        </div>
      )}
    </Route> */}
    </Route>

    {/* <Route exact path="/invoice-form">
      {loggedIn ? ( */}
         <Route exact path="/invoice-form">
        <div className="App d-flex flex-column align-items-center justify-content-center w-100">
          <Container>
            <InvoiceForm />
          </Container>
        </div>
    {/* //   ) : (
    //     <Redirect to="/" />
    //   )}
    // </Route> */}
    </Route>
  </Router>
);
}

export default App;