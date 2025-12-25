import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" bg-white text-black">
      <div className="max-w-6xl mx-auto px-4 py-2 space-y-16">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight text-blue-700">
            ShopX
          </h1>
          <nav className="flex items-center gap-6 text-sm text-black/70">
            <Link to="/products" className="hover:text-blue-500">
              Products
            </Link>
            <Link to="/about/Amazon" className="hover:text-blue-500">
              About
            </Link>
            <Link
              to="/login"
              className="px-4 py-1.5 rounded-full bg-white border border-blue-400 hover:border-blue-500 hover:bg-blue-50 text-xs"
            >
              Sign in
            </Link>
          </nav>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1.2fr,1fr] items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200">
              New · Winter collection 2025
            </span>

            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Elevate your style with curated{" "}
              <span className="text-yellow-500">fashion drops</span>.
            </h2>

            <p className="text-sm text-black/70 max-w-xl">
              Discover premium outfits, sneakers and accessories from top brands.
              Free shipping on orders above ₹1,999.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/products"
                className="px-6 py-2.5 rounded-full bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition"
              >
                Start shopping
              </Link>
              <Link
                to="/products"
                className="text-sm text-blue-700 hover:text-blue-500"
              >
                Browse all categories →
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 text-xs text-black/70">
              <div>
                <p className="text-lg font-semibold text-black">100+</p>
                <p>Curated products</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-black">4.7★</p>
                <p>Average rating</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-black">48h</p>
                <p>Express delivery</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="relative h-52 rounded-3xl overflow-hidden bg-blue-50 border border-blue-400">
              <img
                src="https://images.unsplash.com/photo-1514996937319-344454492b37?w=800"
                alt="Featured fashion"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-blue-700">Featured drop</p>
                  <p className="text-sm font-medium text-black">
                    Streetwear Essentials
                  </p>
                </div>
                <Link
                  to="/products"
                  className="px-3 py-1.5 rounded-full bg-white/80 text-xs border border-blue-400 hover:border-blue-500"
                >
                  View collection
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-blue-50 border border-blue-400 p-4 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-blue-700">For mens</p>
                  <p className="text-sm font-medium mt-1 text-black">Office & casual</p>
                </div>
                <Link
                  to="/products?category=Mens"
                  className="mt-3 text-xs text-yellow-500 hover:underline"
                >
                  Shop mens →
                </Link>
              </div>
              <div className="rounded-2xl bg-blue-50 border border-blue-400 p-4 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-blue-700">For womens</p>
                  <p className="text-sm font-medium mt-1 text-black">Party & daily</p>
                </div>
                <Link
                  to="/products?category=Womens"
                  className="mt-3 text-xs text-yellow-500 hover:underline"
                >
                  Shop womens →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-black">Popular categories</h3>
            <Link
              to="/products"
              className="text-xs text-blue-700 hover:text-blue-500"
            >
              View all
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Link className="group rounded-2xl bg-blue-50 border border-blue-400 p-4 flex flex-col gap-2 hover:border-blue-500 transition">
              <p className="text-sm font-medium text-black">Mens</p>
              <p className="text-xs text-blue-700">
                Shirts, jackets, shoes & more
              </p>
              <span className="text-xs text-yellow-500 mt-auto group-hover:underline">
                Explore →
              </span>
            </Link>
            <Link className="group rounded-2xl bg-blue-50 border border-blue-400 p-4 flex flex-col gap-2 hover:border-blue-500 transition">
              <p className="text-sm font-medium text-black">Womens</p>
              <p className="text-xs text-blue-700">
                Dresses, handbags, accessories
              </p>
              <span className="text-xs text-yellow-500 mt-auto group-hover:underline">
                Explore →
              </span>
            </Link>
            <Link className="group rounded-2xl bg-blue-50 border border-blue-400 p-4 flex flex-col gap-2 hover:border-blue-500 transition">
              <p className="text-sm font-medium text-black">Kids</p>
              <p className="text-xs text-blue-700">
                Everyday essentials & fun fits
              </p>
              <span className="text-xs text-yellow-500 mt-auto group-hover:underline">
                Explore →
              </span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
