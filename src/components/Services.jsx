import React from 'react';
import { Outlet } from 'react-router-dom';
const Services = () => (
  <div>
    <h1>Our Services</h1>
    <ul>
      <li><a href="/services/design">Design</a></li>
      <li><a href="/services/development">Development</a></li>
    </ul>
    <Outlet />
  </div>
);
export default Services;
