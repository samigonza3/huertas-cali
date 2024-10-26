import React from 'react';
import { Leaf, Share2, BookOpen } from 'lucide-react';

export default function FeaturedSection() {
  return (
    <div className="bg-emerald-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-emerald-600" />
              <h3 className="ml-3 text-lg font-semibold text-gray-900">Seed Exchange</h3>
            </div>
            <p className="text-gray-600">Share and trade seeds with local gardeners. Build a diverse garden with heirloom varieties.</p>
            <button className="mt-4 text-emerald-600 font-medium hover:text-emerald-700">Browse Seeds →</button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Share2 className="h-8 w-8 text-emerald-600" />
              <h3 className="ml-3 text-lg font-semibold text-gray-900">Produce Share</h3>
            </div>
            <p className="text-gray-600">Connect with neighbors to share your surplus harvest and reduce food waste.</p>
            <button className="mt-4 text-emerald-600 font-medium hover:text-emerald-700">Share Produce →</button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-emerald-600" />
              <h3 className="ml-3 text-lg font-semibold text-gray-900">Learn & Grow</h3>
            </div>
            <p className="text-gray-600">Access gardening tips, workshops, and connect with experienced urban gardeners.</p>
            <button className="mt-4 text-emerald-600 font-medium hover:text-emerald-700">Start Learning →</button>
          </div>
        </div>
      </div>
    </div>
  );
}