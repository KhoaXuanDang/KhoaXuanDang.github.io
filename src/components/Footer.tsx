import { Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>© {currentYear} Khoa Xuan Dang.</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Built with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>using React, TypeScript, and Tailwind CSS</span>
          </div>
        </div>

        <div className="mt-4 text-center text-xs text-gray-500">
          <p>Designed and developed by Khoa Dang</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
