import { Metadata } from 'next';
import Link from 'next/link';
import { Home } from 'lucide-react';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Vidyayatan AI',
  description: 'The page you\'re looking for doesn\'t exist. Explore our AI solutions and services.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-[#a0a3e8] to-[#888ae0] text-white rounded-lg font-medium hover:from-[#888ae0] hover:to-[#a0a3e8] transition-all duration-300"
          >
            <Home size={20} />
            Back to Home
          </Link>

          <div className="flex gap-2">
            <Link
              href="/#services"
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Our Services
            </Link>
            <Link
              href="/#ai-employees"
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              AI Employees
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            Looking for something specific?
          </p>
          <div className="space-y-2 text-sm">
            <Link href="/#use-cases" className="block text-blue-600 hover:text-blue-800">
              Industry Use Cases
            </Link>
            <Link href="/#services" className="block text-blue-600 hover:text-blue-800">
              AI Solutions & Tools
            </Link>
            <Link href="/#problems" className="block text-blue-600 hover:text-blue-800">
              Business Challenges We Solve
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 