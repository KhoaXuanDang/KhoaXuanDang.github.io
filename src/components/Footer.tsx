import { Code2, Terminal } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-950 border-t border-gray-300 dark:border-emerald-500/20 text-gray-900 dark:text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 font-mono">
            <Terminal size={16} className="text-emerald-400" />
            <span className="text-emerald-400">$</span>
            <span className="text-gray-500">echo</span>
            <span>"© {currentYear} Khoa Xuan Dang. All rights reserved."</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 font-mono">
            <Code2 size={16} className="text-cyan-400" />
            <span className="text-gray-500 dark:text-gray-600">//</span>
            <span>Built with React + TypeScript + Tailwind CSS</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-600 font-mono">
            <span className="text-emerald-500">&lt;</span>
            <span>Designed and developed by Khoa Dang</span>
            <span className="text-emerald-500">/&gt;</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
