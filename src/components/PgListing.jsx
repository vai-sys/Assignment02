import React, { useState } from 'react';
import { Search, Filter, Star, MapPin } from 'lucide-react';

const listings = [
  {
    id: 1,
    title: "Cozy PG in Kothrud",
    rent: 8500,
    security: 17000,
    area: 120,
    location: "Kothrud",
    forFamily: false,
    forBoys: true,
    forGirls: false,
    amenities: ["Wi-Fi", "Laundry", "Meals"],
    image: "public/10001.jpg"
  },
  {
    id: 2,
    title: "Spacious PG near Hinjewadi IT Park",
    rent: 12000,
    security: 24000,
    area: 150,
    location: "Hinjewadi",
    forFamily: false,
    forBoys: true,
    forGirls: true,
    amenities: ["Wi-Fi", "AC", "Gym"],
    image: "public/862dcdf3-376f-4023-aa47-373b1e2091c2.gif"
  },
  {
    id: 3,
    title: "Female PG in Viman Nagar",
    rent: 9500,
    security: 19000,
    area: 100,
    location: "Viman Nagar",
    forFamily: false,
    forBoys: false,
    forGirls: true,
    amenities: ["Wi-Fi", "Security", "Meals"],
    image: "public/6ae5bf7c-e24b-4e90-a572-82ff7010c4c4.gif"
  },
  {
    id: 4,
    title: "Budget PG in Wakad",
    rent: 7000,
    security: 14000,
    area: 90,
    location: "Wakad",
    forFamily: false,
    forBoys: true,
    forGirls: true,
    amenities: ["Wi-Fi", "Laundry"],
    image: "public/10005.jpg"
  },
  {
    id: 5,
    title: "Luxury PG in Koregaon Park",
    rent: 15000,
    security: 30000,
    area: 180,
    location: "Koregaon Park",
    forFamily: true,
    forBoys: true,
    forGirls: true,
    amenities: ["Wi-Fi", "AC", "Gym", "Swimming Pool"],
    image: "public/10002.jpg"
  },
  {
    id: 25,
    title: "Student PG near Symbiosis College",
    rent: 8000,
    security: 16000,
    area: 110,
    location: "Model Colony",
    forFamily: false,
    forBoys: true,
    forGirls: true,
    amenities: ["Wi-Fi", "Study Room", "Meals"],
    image: "public/10001.jpg"
  },
   {
    id: 25,
    title: "Student PG near Symbiosis College",
    rent: 8000,
    security: 16000,
    area: 110,
    location: "Model Colony",
    forFamily: false,
    forBoys: true,
    forGirls: true,
    amenities: ["Wi-Fi", "Study Room", "Meals"],
    image: "public/220a1a57-1b52-4dda-a776-4ec061b779e1.jpeg"
  },
  {
    id: 26,
    title: "Modern PG in Baner",
    rent: 11000,
    security: 22000,
    area: 130,
    location: "Baner",
    forFamily: false,
    forBoys: true,
    forGirls: true,
    amenities: ["Wi-Fi", "AC", "Power Backup", "Gym"],
    image: "public/d1bce07f-78a2-4133-9352-2c6925bd5050.gif"
  },
  {
    id: 27,
    title: "Eco-friendly PG in Aundh",
    rent: 10500,
    security: 21000,
    area: 140,
    location: "Aundh",
    forFamily: true,
    forBoys: true,
    forGirls: true,
    amenities: ["Wi-Fi", "Solar Power", "Organic Garden", "Recycling"],
    image: "public/220a1a57-1b52-4dda-a776-4ec061b779e1.jpeg"
  }
];

const PGListing = () => {
  const [filteredListings, setFilteredListings] = useState(listings);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [occupantFilter, setOccupantFilter] = useState('');

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    filterListings(term, priceFilter, locationFilter, occupantFilter);
  };

  const handlePriceFilter = (event) => {
    const price = event.target.value;
    setPriceFilter(price);
    filterListings(searchTerm, price, locationFilter, occupantFilter);
  };

  const handleLocationFilter = (event) => {
    const location = event.target.value;
    setLocationFilter(location);
    filterListings(searchTerm, priceFilter, location, occupantFilter);
  };

  const handleOccupantFilter = (event) => {
    const occupant = event.target.value;
    setOccupantFilter(occupant);
    filterListings(searchTerm, priceFilter, locationFilter, occupant);
  };

  const filterListings = (term, price, location, occupant) => {
    let filtered = listings.filter(listing =>
      listing.title.toLowerCase().includes(term) &&
      (location === '' || listing.location === location) &&
      (price === '' || listing.rent <= parseInt(price)) &&
      (occupant === '' || 
        (occupant === 'Boys' && listing.forBoys) ||
        (occupant === 'Girls' && listing.forGirls) ||
        (occupant === 'Family' && listing.forFamily)
      )
    );
    setFilteredListings(filtered);
  };

  const puneLocations = [...new Set(listings.map(listing => listing.location))];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className=" bg-white text-black p-4">
        <h1 className="text-2xl font-bold">HostelHunt - Find Your Home Away From Home!</h1>
      </header>
      
      <main className="container mx-auto p-4">
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search PGs..."
                className="w-full p-2 pl-10 rounded border"
                onChange={handleSearch}
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" />
            </div>
          </div>
          <div className="flex-1">
            <select
              className="w-full p-2 rounded border"
              onChange={handlePriceFilter}
            >
              <option value="">Filter by Price</option>
              <option value="8000">Up to ₹8,000</option>
              <option value="10000">Up to ₹10,000</option>
              <option value="15000">Up to ₹15,000</option>
            </select>
          </div>
          <div className="flex-1">
            <select
              className="w-full p-2 rounded border"
              onChange={handleLocationFilter}
            >
              <option value="">Filter by Location</option>
              {puneLocations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <select
              className="w-full p-2 rounded border"
              onChange={handleOccupantFilter}
            >
              <option value="">Filter by Occupant</option>
              <option value="Boys">Boys</option>
              <option value="Girls">Girls</option>
              <option value="Family">Family</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map(listing => (
            <div key={listing.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{listing.title}</h2>
                <p className="text-gray-600 mb-2">₹{listing.rent.toLocaleString()} / month</p>
                <p className="text-sm text-gray-500 mb-2">{listing.area} sq.ft</p>
                <div className="flex items-center mb-2">
                  <MapPin className="text-gray-400 mr-1" size={16} />
                  <span className="text-sm text-gray-600">{listing.location}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {listing.amenities.map((amenity, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">{amenity}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {listing.forFamily && <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Family</span>}
                  {listing.forBoys && <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Boys</span>}
                  {listing.forGirls && <span className="px-2 py-1 bg-pink-100 text-pink-800 rounded-full text-xs">Girls</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      
    </div>
  );
};

export default PGListing;