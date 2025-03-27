import { createBrowserRouter } from 'react-router-dom'

import { LayoutComponent } from './components'
import { WelcomePage, Notfound, MyLabPage, CollectionPage } from './pages'
import { CardsPage } from './pages/cards'

const withLayout = (Component: React.ComponentType) => {
  return (
    <LayoutComponent>
      <Component />
    </LayoutComponent>
  )
}
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <LayoutComponent>
        <WelcomePage />
      </LayoutComponent>
    ),
  },
  {
    path: '/my-lab',
    element: (
      <LayoutComponent>
        <MyLabPage />
      </LayoutComponent>
    ),
  },
  {
    path: '/collection',
    element: withLayout(CollectionPage),
  },
  {
    path: '*',
    element: (
      <LayoutComponent>
        <Notfound />
      </LayoutComponent>
    ),
  },
  {
    path: '/cards',
    element: withLayout(CardsPage),
  },
])

export default router
