import { Heading } from "@chakra-ui/react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";

function App() {
  return (
    <>
      <Heading></Heading>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/edit/:id" element={<UpdateUser />} />
      </Routes>
    </>
  );
}

export default App;
