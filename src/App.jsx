import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { TripDetailsPage } from './pages/trip-details/index.jsx'
import { CreateTripPage } from './pages/create-trip/index.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <CreateTripPage />
  },
  {
    path: '/trips/:tripId',
    element: <TripDetailsPage />
  }
])

export const App = () => {
  return <RouterProvider router={router} />
}
