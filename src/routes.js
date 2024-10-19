import React from 'react'

const Dashboard = React.lazy(() => import('./dashboard/Dashboard'))
const Inventory = React.lazy(() => import('./inventory/Inventory'))
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/inventory', name: 'Inventory', element: Inventory },
]

export default routes
