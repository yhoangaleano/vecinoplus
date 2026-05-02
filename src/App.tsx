import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './lib/theme'
import { SingleView } from './components/SingleView'
import { ShowcaseScreen } from './screens/ShowcaseScreen'
import { FeedScreen } from './screens/FeedScreen'
import { ServiceDetailScreen } from './screens/ServiceDetailScreen'
import { CreateScreen } from './screens/CreateScreen'
import { BusinessScreen } from './screens/BusinessScreen'
import { SocialScreen } from './screens/SocialScreen'
import { ProfileScreen } from './screens/ProfileScreen'
import { LoginScreen } from './screens/LoginScreen'
import { RegisterScreen } from './screens/RegisterScreen'
import { MessagesScreen } from './screens/MessagesScreen'
import { ChatScreen } from './screens/ChatScreen'
import { useUserStore } from './stores'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isLoggedIn = useUserStore((s) => s.isLoggedIn)
  if (!isLoggedIn) return <Navigate to="/login" replace />
  return <>{children}</>
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowcaseScreen />} />
          <Route path="/login" element={<SingleView><LoginScreen /></SingleView>} />
          <Route path="/registro" element={<SingleView><RegisterScreen /></SingleView>} />
          <Route
            path="/feed"
            element={
              <SingleView>
                <ProtectedRoute>
                  <FeedScreen />
                </ProtectedRoute>
              </SingleView>
            }
          />
          <Route
            path="/servicio/:id"
            element={
              <SingleView>
                <ProtectedRoute>
                  <ServiceDetailScreen />
                </ProtectedRoute>
              </SingleView>
            }
          />
          <Route
            path="/publicar"
            element={
              <SingleView>
                <ProtectedRoute>
                  <CreateScreen />
                </ProtectedRoute>
              </SingleView>
            }
          />
          <Route
            path="/comercio"
            element={
              <SingleView>
                <ProtectedRoute>
                  <BusinessScreen />
                </ProtectedRoute>
              </SingleView>
            }
          />
          <Route
            path="/social"
            element={
              <SingleView>
                <ProtectedRoute>
                  <SocialScreen />
                </ProtectedRoute>
              </SingleView>
            }
          />
          <Route
            path="/perfil"
            element={
              <SingleView>
                <ProtectedRoute>
                  <ProfileScreen />
                </ProtectedRoute>
              </SingleView>
            }
          />
          <Route
            path="/mensajes"
            element={
              <SingleView>
                <ProtectedRoute>
                  <MessagesScreen />
                </ProtectedRoute>
              </SingleView>
            }
          />
          <Route
            path="/chat/:id"
            element={
              <SingleView>
                <ProtectedRoute>
                  <ChatScreen />
                </ProtectedRoute>
              </SingleView>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
