import React from "react";
import Home from "./routes/Home";
import Animals from "./routes/Animals";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Ticket from "./routes/Ticket";
import Plan from "./routes/Plan";
import Park from "./routes/Park";
import Admin from "./routes/Admin";
import Layout from "./components/Layout";
import NavDashboard from "./components/NavDashboard";
import AnimalDetails from "./routes/AnimalDetails";
import EditAnimal from "./routes/EditAnimal";
import ManageTickets from "./routes/ManageTickets";
import Report from "./routes/Report";
import Search from "./routes/Search";
import Profile from "./routes/Profile";
import ADashboard from "./routes/ADashboard";
import UpdateTicket from "./routes/UpdateTicket";
import AnimalUpdate from "./routes/AnimalUpdate";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { AuthContextProvider } from "./Context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Verify from "./routes/Verify";
import SDashboard from "./routes/SDashboard";
import VisitorsDetails from "./routes/VisitorsDetails";
import PastRecord from "./routes/PastRecord";
import Animals2 from "./routes/Animals2";
import AnimalId from "./components/AnimalId";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/animals/:id" element={<AnimalId />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/tickets" element={<Ticket />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/park" element={<Park />} />
      </Routes>

      <AuthContextProvider>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <ADashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/updatetickets" element={<UpdateTicket />} />
          <Route path="/animalupdate" element={<AnimalUpdate />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/NavDashboard" element={<NavDashboard />} />
          <Route path="/animaldetails" element={<AnimalDetails />} />
          <Route path="/edit" element={<EditAnimal />} />
          <Route path="/managetickets" element={<ManageTickets />} />
          <Route path="/report" element={<Report />} />
          <Route path="/search" element={<Search />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/sdashboard" element={<SDashboard />} />
          <Route path="/visitor" element={<VisitorsDetails />} />
          <Route path="/pastrecord" element={<PastRecord />} />
          <Route path="/sanimal" element={<Animals2 />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
