import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Organization = React.lazy(() => import('./views/organization'))
const Blog = React.lazy(() => import('./views/Blog'))
const FAQ = React.lazy(() => import('./views/FAQ'))
const updateOrganization = React.lazy(() => import('./views/organization/Update'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  { path: '/Organization', name: 'Organization', element: Organization },
  { path: '/Organization/Details', name: 'Deatils', element: Organization, exact: true },
  {
    path: '/Organization/Update',
    name: 'Update-Organization',
    element: updateOrganization,
    exact: true,
  },

  { path: '/Organization/Blog', name: 'Blog', element: Blog, exact: true },

  { path: '/Organization/FAQ', name: 'FAQ', element: FAQ, exact: true },

  // cut call route
]

export default routes
