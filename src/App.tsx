import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedLayout from "./components/ProtectedLayout";

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />}/>
            <Route 
              path='/'
              element={
                <ProtectedLayout>
                  <Home />
                </ProtectedLayout>
              } 
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
