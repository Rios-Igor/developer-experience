import React from 'react';
import Rotas from './routes';


import "./html-css-template/css/reset.css";
import "./html-css-template/css/style.css";

function App() {
  return (
    <>
      <Rotas />
    
    </>
  );
}

export default App;



// import {useNavigate} from 'react-router-dom';
// import Index from './pages/Index';

// export default function App() {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     // 👇️ replace set to true
//     navigate('/Home', {replace: true});
//   };

//   return (
//     <div>
//       <Index/>
//       <button onClick={handleClick}>Navigate to About</button>
//     </div>
//   );
// }

