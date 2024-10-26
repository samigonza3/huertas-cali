import React from 'react';

export default function CommunitySection() {
  const gardens = [
    {
      name: "Sarah's Rooftop Garden",
      location: "Downtown",
      image: "https://images.unsplash.com/photo-1524247108137-732e0f642303?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      available: ["Tomato Seeds", "Herb Cuttings"]
    },
    {
      name: "Community Growth Project",
      location: "Westside",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      available: ["Surplus Vegetables", "Composting Workshop"]
    },
    {
      name: "Green Thumb Collective",
      location: "Eastside",
      image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      available: ["Seedling Exchange", "Garden Space"]
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Active Community Gardens</h2>
          <p className="mt-4 text-lg text-gray-500">Connect with gardens in your neighborhood</p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {gardens.map((garden) => (
            <div key={garden.name} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={garden.image} alt={garden.name} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{garden.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{garden.location}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-900">Available for sharing:</h4>
                    <ul className="mt-2 space-y-1">
                      {garden.available.map((item) => (
                        <li key={item} className="text-sm text-gray-600">• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="w-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 py-2 px-4 rounded-md text-sm font-medium">
                    Connect
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}