import { Flowbite, useThemeMode } from 'flowbite-react'
import { useEffect } from 'react'

import Navbar from '@/components/organisms/Navbar'
import Sidebar from '@/components/organisms/SideBar'

const Template = ({ children, contentSx }) => {
  const { setMode } = useThemeMode()

  useEffect(() => {
    // Automatically set the theme mode to "auto" to use the system preference
    setMode('auto')
  }, [setMode])

  return (
    <Flowbite>
      <div className='flex flex-col min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-white'>
        <Navbar />
        <div className='flex-1 flex stretch'>
          <Sidebar />
          <div className={`px-4 py-4 w-full ${contentSx}`}>{children}</div>
        </div>
      </div>
    </Flowbite>
  )
}

export default Template
