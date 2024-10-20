import { Navbar, Home, Login } from "./components/index.js"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { WagmiProvider, useAccount } from 'wagmi'
import { config } from './config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import RouteGuard from './RouteGuard'

const queryClient = new QueryClient()

const App = () => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </WagmiProvider>
  )
}

const AppRoutes = () => {
  const { isConnected } = useAccount();

  return (
    <Router>
      <div className='bg-primary w-full'>
        <div className='flex justify-center items-center sm:px-16 px-6'>
          <Navbar/>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<RouteGuard walletConnected={isConnected}><Home /></RouteGuard>}/>
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App