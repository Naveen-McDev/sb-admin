
import "./App.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateUser from "./components/CreateUser";
import UserView from "./components/UserView";
import UserEdit from "./components/UserEdit";
import { UserProvider } from "./components/UserContext";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  return (
    <BrowserRouter>
      <div id="wrapper">
        <UserProvider value={{userName : "Naveen", users, setUsers}}>
        <Sidebar></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>

            <div class="container-fluid">
              <Routes>
               <Route path="/" element = {<Dashboard />}></Route> 
               <Route path="/Dashboard" element = {<Dashboard />}></Route> 
               <Route path="/Users" element = {<Users />}></Route>
               <Route path="/Users-create" element = {<CreateUser />}></Route>
               <Route path="/Users-view/:id" element = {<UserView />}></Route>
               <Route path="/Users-edit/:id" element = {<UserEdit />}></Route>
              </Routes>
            </div>
          </div>
        </div>
        </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
