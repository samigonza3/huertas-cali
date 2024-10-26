import React from 'react';
import { Plus, Leaf, ShoppingBasket } from 'lucide-react';
import DashboardLayout from '../../components/Dashboard/DashboardLayout';
import AddItemModal from '../../components/Dashboard/AddItemModal';
import GardenMap from '../../components/Dashboard/GardenMap';

export default function Overview() {
  const [isAddSeedModalOpen, setIsAddSeedModalOpen] = React.useState(false);
  const [isAddProduceModalOpen, setIsAddProduceModalOpen] = React.useState(false);

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
          <div className="space-x-4">
            <button
              onClick={() => setIsAddSeedModalOpen(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700"
            >
              <Plus className="h-5 w-5 mr-2" />
              Add Seeds
            </button>
            <button
              onClick={() => setIsAddProduceModalOpen(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700"
            >
              <Plus className="h-5 w-5 mr-2" />
              Add Produce
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Leaf className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Available Seeds</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">12</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <ShoppingBasket className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Available Produce</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">8</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">Community Gardens in Cali</h2>
          <GardenMap />
        </div>

        <AddItemModal
          isOpen={isAddSeedModalOpen}
          onClose={() => setIsAddSeedModalOpen(false)}
          title="Add New Seeds"
        >
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Seed Type</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                placeholder="e.g., Tomato, Basil, etc."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Quantity</label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                rows={3}
              />
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setIsAddSeedModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 border border-transparent rounded-md hover:bg-emerald-700"
              >
                Add Seeds
              </button>
            </div>
          </form>
        </AddItemModal>

        <AddItemModal
          isOpen={isAddProduceModalOpen}
          onClose={() => setIsAddProduceModalOpen(false)}
          title="Add New Produce"
        >
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Produce Type</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                placeholder="e.g., Tomatoes, Lettuce, etc."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Quantity</label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="number"
                  className="block w-full rounded-l-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                />
                <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  lbs
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Harvest Date</label>
              <input
                type="date"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Notes</label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                rows={3}
                placeholder="Any additional information about your produce..."
              />
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setIsAddProduceModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 border border-transparent rounded-md hover:bg-emerald-700"
              >
                Add Produce
              </button>
            </div>
          </form>
        </AddItemModal>
      </div>
    </DashboardLayout>
  );
}