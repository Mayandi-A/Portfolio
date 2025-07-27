import { Link } from "wouter";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center px-4">
        <div className="max-w-md mx-auto">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-gray-200 dark:text-gray-700">
              404
            </h1>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Page Not Found
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link href="/">
              <a className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </a>
            </Link>
            
            <div>
              <button 
                onClick={() => window.history.back()}
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;