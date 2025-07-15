// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './page/Homepage'
import PrivacyPolicy from './page/PrivacyPolicy'
import TermsAndConditions from './page/TermsAndConditions'
import RefundPolicy from './page/RefundPolicy'
import ContactUs from './page/ContactUs'
import CapitalMarketing from './page/CapitalMarketing'
import Leasing from './page/Leasing'
import Properties from './page/Properties.jsx'
import AssetManagement from './page/AssetManagement'
import ProjectManagement from './page/ProjectManagementConsulting.jsx'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-condition" element={<TermsAndConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/capital-marketing" element={<CapitalMarketing />} />
        <Route path="/leasing" element={<Leasing />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/asset-management" element={<AssetManagement />} />
        <Route path="/project-management" element={<ProjectManagement />} />
        {/* You can add more routes here */}
      </Routes>
    </Router>
  )
}

export default App
