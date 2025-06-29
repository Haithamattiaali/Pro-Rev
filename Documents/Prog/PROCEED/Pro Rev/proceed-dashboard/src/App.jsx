import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from './components/layout/DashboardLayout'
import Overview from './pages/Overview'
import BusinessUnits from './pages/BusinessUnits'
import Customers from './pages/Customers'
import Upload from './pages/Upload'
import { FilterProvider } from './contexts/FilterContext'
import { DataRefreshProvider } from './contexts/DataRefreshContext'

function App() {
  return (
    <DataRefreshProvider>
      <FilterProvider>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Navigate to="/overview" replace />} />
            <Route path="overview" element={<Overview />} />
            <Route path="business-units" element={<BusinessUnits />} />
            <Route path="customers" element={<Customers />} />
            <Route path="upload" element={<Upload />} />
          </Route>
        </Routes>
      </FilterProvider>
    </DataRefreshProvider>
  )
}

export default App