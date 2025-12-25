import React, { useMemo, useState } from "react";
import { products, brands, categories, priceRanges } from "../data";

const Product = () => {
  const [brand, setBrand] = useState("All");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(priceRanges[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 6;

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const byBrand = brand === "All" || p.brand === brand;
      const byCategory = category === "All" || p.category === category;
      const byPrice = p.price >= priceRange.min && p.price <= priceRange.max;
      return byBrand && byCategory && byPrice;
    });
  }, [brand, category, priceRange]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">

        <div>
          <h1 className="text-3xl font-semibold">Products</h1>
          <p className="text-sm text-blue-700">
            Showing {filteredProducts.length} of {products.length}
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-400 rounded-2xl p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            value={brand}
            onChange={(e) => {
              setBrand(e.target.value);
              setCurrentPage(1);
            }}
            className="bg-white border border-blue-400 rounded-lg px-3 py-2 text-sm text-black"
          >
            <option value="All">All Brands</option>
            {brands.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>

          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setCurrentPage(1);
            }}
            className="bg-white border border-blue-400 rounded-lg px-3 py-2 text-sm text-black"
          >
            <option value="All">All Categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <select
            value={priceRange.label}
            onChange={(e) => {
              setPriceRange(priceRanges.find((r) => r.label === e.target.value));
              setCurrentPage(1);
            }}
            className="bg-white border border-blue-400 rounded-lg px-3 py-2 text-sm text-black"
          >
            {priceRanges.map((r) => (
              <option key={r.label} value={r.label}>{r.label}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 overflow-hidden sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentProducts.map((p) => (
            <div
              key={p.id}
              className="bg-white border border-blue-400 rounded-2xl overflow-hidden shadow-md"
            >
              <img
                src={p.image}
                alt={p.name}
                className="h-40 w-full object-cover border-b border-blue-400"
              />
              <div className="p-4 space-y-2">
                <h3 className="font-medium text-black">{p.name}</h3>
                <p className="text-sm text-blue-700">{p.category}</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-black">
                    ₹{p.price.toLocaleString()}
                  </span>
                  <span className="text-yellow-500 text-sm">★ {p.rating}</span>
                </div>
                <button
                  disabled={!p.inStock}
                  className={`w-full py-2 rounded-lg text-sm font-medium ${
                    p.inStock
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-gray-200 text-black cursor-not-allowed"
                  }`}
                >
                  {p.inStock ? "Add to Cart" : "Out of Stock"}
                </button>
              </div>
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <p className="col-span-full text-blue-700 text-sm">No products found.</p>
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span className="text-sm text-black">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
