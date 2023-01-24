import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import TempHum from './pages/TempHum';
import Dashboard from './pages/Dashboard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <main className='w-screen y-screen bg-[#121220] pl-5 pr-5'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<TempHum />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </main>
    </QueryClientProvider>
  );
}

export default App;