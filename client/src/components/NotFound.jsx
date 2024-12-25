import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-4xl font-bold text-red-500">404</h1>
            <p className="text-lg text-gray-600">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;
