import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './lib/theme'
import { SingleView } from './components/SingleView'
import { ShowcaseScreen } from './screens/ShowcaseScreen'
import { OnboardingScreen } from './screens/OnboardingScreen'
import { FeedScreen } from './screens/FeedScreen'
import { ServiceDetailScreen } from './screens/ServiceDetailScreen'
import { CreateScreen } from './screens/CreateScreen'
import { BusinessScreen } from './screens/BusinessScreen'
import { SocialScreen } from './screens/SocialScreen'
import { ProfileScreen } from './screens/ProfileScreen'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowcaseScreen />} />
          <Route
            path="/onboarding"
            element={
              <SingleView>
                <OnboardingScreen />
              </SingleView>
            }
          />
          <Route
            path="/feed"
            element={
              <SingleView>
                <FeedScreen />
              </SingleView>
            }
          />
          <Route
            path="/servicio/:id"
            element={
              <SingleView>
                <ServiceDetailScreen />
              </SingleView>
            }
          />
          <Route
            path="/publicar"
            element={
              <SingleView>
                <CreateScreen />
              </SingleView>
            }
          />
          <Route
            path="/comercio"
            element={
              <SingleView>
                <BusinessScreen />
              </SingleView>
            }
          />
          <Route
            path="/social"
            element={
              <SingleView>
                <SocialScreen />
              </SingleView>
            }
          />
          <Route
            path="/perfil"
            element={
              <SingleView>
                <ProfileScreen />
              </SingleView>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
