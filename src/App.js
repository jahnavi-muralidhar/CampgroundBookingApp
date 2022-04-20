import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom';
import CampsiteMap from './CampsiteMap';
import AdminCalendar from './AdminCalendar';

export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/AdminCalendar">Admin Calendar</Link>
          </li>
          <li>
            <Link to="/CampgroundMap">Campground Map</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
      <Routes>
        <Route exact path="/AdminCalendar" element={<AdminCalendar />}>
        </Route>
        <Route exact path="/CampgroundMap" element={<CampsiteMap />}>

        </Route>
      </Routes>
    </div>

  );
}

