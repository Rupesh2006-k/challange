// import React from "react";
// import Nav from "./components/Nav";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
// import AppRouter from "./routes/AppRouter";
// const App = () => {
//   return (
//     <div className="flex ">
//       <AppRouter/>
//       <div className="h-screen w-[20%] bg-amber-50">
//         <Nav />
//       </div>
//       <div className="h-screen w-[80%] bg-amber-200">
//         <Routes>
//           <Route path="/home" element={<Home />} />
//         </Routes>
//         <Login />
//         <SignUp />
//       </div>
//     </div>
//   );
// };

// export default App;

import Nav from "./components/Nav";
import AppRouter from "./routes/AppRouter";
import { isAuthenticated } from "./utils/auth";

const App = () => {
  return (
    <div className="flex h-screen">
      {isAuthenticated() && (
        <div className="w-[20%]">
          <Nav />
        </div>
      )}

      <div className="w-full">
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
