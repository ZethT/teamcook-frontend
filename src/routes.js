import React from 'react'

const Dashboard = React.lazy(() => import('./dashboard/Dashboard'))
const Inventory = React.lazy(() => import('./inventory/Inventory'))
const RecipeBook = React.lazy(() => import('./recipe/RecipeBook'))
const Budget = React.lazy(() => import('./budget/Budget'))
const Calendar = React.lazy(() => import('./calendar/Calendar'))
const Team = React.lazy(() => import('./team/Team'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/inventory', name: 'Inventory', element: Inventory },
  { path: '/recipebook', name: 'RecipeBook', element: RecipeBook },
  { path: '/budget', name: 'Budget', element: Budget },
  { path: '/calendar', name: 'Calendar', element: Calendar },
  { path: '/team', name: 'Team', element: Team },
]

export default routes
