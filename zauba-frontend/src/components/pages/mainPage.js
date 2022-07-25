import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomeComponent from "./home/home.component";
import AllCompanyListComponent from './companiesList/all-company-list.component';
export default function MainPage() {
  return (
    <Router>
      <Routes>
        <Route path="/all-companies" element={<AllCompanyListComponent />}></Route>
        <Route path="/" exact element={<HomeComponent />}></Route>
        <Route path="*" element={<Navigate to ="/" />}/>
      </Routes>
    </Router>
  );
}