"use client"

import React, { useEffect } from 'react';
import Navbar from '@/app/(components)/Navbar';
import Siderbar from '@/app/(components)/Siderbar';
import StoreProvider, { useAppSelector} from '@/app/redux';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

  const isSiderbarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  )

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  })

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  return (
    <div className={`${isDarkMode ? "dark" : "light"} flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
      <Siderbar />
      <main
        className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50
           ${isSiderbarCollapsed ? "md:pl-24" : "md:pl-72"}`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  )
}

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </StoreProvider>
  )
}

export default DashboardWrapper;