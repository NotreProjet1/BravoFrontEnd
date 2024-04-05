import { Collections } from '@mui/icons-material';
import React from 'react';

const PageCollections = () => {
  return (
    <> 
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 className="text-2xl font-bold text-gray-900">e-commerce</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  src="https://i.ytimg.com/vi/Y164xHQGrw0/hqdefault.jpg"
                  alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Desk and Office
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900">Work from home accessories</p>
            </div>
            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  src="https://www.wizishop.fr/media/61b315e4eed4ce66bd60e4f7/v1/ecommerce-wizishop.jpg"
                  alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Self-Improvement
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900">Journals and note-taking</p>
            </div>
            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  src="https://www.adfactory.mx/wp-content/uploads/ecom.png"
                  alt="Collection of four insulated travel bottles on wooden shelf."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Travel
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900">Daily commute essentials</p>
            </div>
          </div>
        </div>
      </div>
    </div> 
    
    </>
  );
};

export default   PageCollections;
