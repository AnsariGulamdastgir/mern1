import React, { useEffect, useMemo, useState } from "react";
import API from "../../api/Api";
import CarCard from "../../components/user/CarCard";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const quickFilters = [
    "BMW",
    "Venue",
    "Safari",
    "Automatic",
    "Petrol",
    "Hyundai",
  ];

  const brands = [
    "Maruti",
    "Hyundai",
    "Honda",
    "Tata",
    "Mahindra",
    "Toyota",
    "Kia",
    "BMW",
    "Mercedes",
    "Audi",
    "Volkswagen",
    "Ford",
  ];

  const highlights = [
    {
      title: "Verified Cars",
      desc: "Trusted listings with cleaner presentation and better clarity.",
    },
    {
      title: "Transparent Offers",
      desc: "Track real offers and seller responses without confusion.",
    },

    {
      title: "Test Drive Ready",
      desc: "Book visits and move forward with more confidence.",
    },
  ];

  const getCars = async () => {
    try {
      const res = await API.get("/car/cars");
      setCars(res.data.data || []);
    } catch (err) {
      console.log("Error fetching cars:", err);
      toast.error("Unable to fetch cars");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  const marketStats = [
    {
      value: `${cars.length}+`,
      label: "Live Listings",
      desc: "Fresh verified cars ready to explore",
    },
    {
      value: "98%",
      label: "Trusted Flow",
      desc: "Confidence-first marketplace experience",
    },
    {
      value: "24/7",
      label: "Smart Discovery",
      desc: "Browse, compare, and act anytime",
    },
    {
      value: "Easy",
      label: "Buyer Journey",
      desc: "From shortlist to decision in one place",
    },
  ];

  const filteredCars = useMemo(() => {
    if (!search.trim()) return cars;

    const query = search.toLowerCase();
    return cars.filter((car) => {
      return (
        car?.brand?.toLowerCase().includes(query) ||
        car?.model?.toLowerCase().includes(query) ||
        car?.fuelType?.toLowerCase().includes(query) ||
        car?.transmission?.toLowerCase().includes(query)
      );
    });
  }, [cars, search]);

  const sortedByRecent = useMemo(() => {
    return [...cars].sort((a, b) => {
      const aDate = new Date(a?.createdAt || 0).getTime();
      const bDate = new Date(b?.createdAt || 0).getTime();
      return bDate - aDate;
    });
  }, [cars]);

  const featuredCars = useMemo(() => {
    if (!search.trim()) return cars.slice(0, 3);
    return filteredCars;
  }, [cars, search, filteredCars]);

  const latestCars = useMemo(() => {
    if (search.trim()) return filteredCars;

    const featuredIds = new Set(featuredCars.map((car) => car._id));
    const recent = sortedByRecent.filter((car) => !featuredIds.has(car._id));

    return recent.length > 0 ? recent.slice(0, 6) : sortedByRecent.slice(0, 6);
  }, [search, filteredCars, sortedByRecent, featuredCars]);

  const handleSearch = () => {
    const section = document.getElementById("latest-cars");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#0b1120] text-white">
      <div className="relative bg-gradient-to-b from-[#0b1120] via-[#111827] to-[#0b1120]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl animate-pulse" />
        </div>

        <section className="relative px-4 pt-6 sm:px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80"
              alt="Hero car"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b1120]/95 via-[#0b1120]/82 to-[#0b1120]/35" />

            <div className="relative max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
              <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="max-w-3xl animate-[fadeIn_0.8s_ease-in-out]">
                  <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 backdrop-blur">
                    Trusted used car marketplace
                  </span>

                  <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                    Explore premium cars
                    <span className="block bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
                      with more confidence
                    </span>
                  </h1>

                  <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                    Search verified listings, compare better options, and move
                    from discovery to decision through a cleaner marketplace
                    experience.
                  </p>

                  <div className="mt-8 rounded-2xl border border-white/10 bg-[#0f172a]/90 p-3 shadow-2xl backdrop-blur">
                    <div className="flex flex-col gap-3 md:flex-row">
                      <input
                        type="text"
                        placeholder="Search by brand, model, fuel type..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full rounded-xl bg-[#111827] px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                      />
                      <button
                        onClick={handleSearch}
                        className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:bg-cyan-400"
                      >
                        Search
                      </button>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3">
                      {quickFilters.map((item) => (
                        <button
                          key={item}
                          onClick={() => setSearch(item)}
                          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <button
                      onClick={() => navigate("/user/cars")}
                      className="rounded-xl bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:bg-amber-300"
                    >
                      Browse Cars
                    </button>

                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:bg-white/10">
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                      CarScout Promise
                    </p>
                    <h3 className="mt-3 text-2xl font-bold">
                      Simple, trusted and premium
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Better design, smoother discovery, and a more confident
                      way to browse and shortlist used cars online.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                      <p className="text-2xl font-bold text-cyan-300">
                        {cars.length}+
                      </p>
                      <p className="mt-2 text-sm text-slate-400">Cars Live</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                      <p className="text-2xl font-bold text-emerald-300">
                        24/7
                      </p>
                      <p className="mt-2 text-sm text-slate-400">
                        Search Ready
                      </p>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-cyan-400/15 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 p-5">
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                      Marketplace Focus
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Verified cars, transparent offers, and test
                    drives built into one modern experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-10">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {marketStats.map((item, index) => (
              <div
                key={item.label}
                className="group rounded-[26px] border border-white/10 bg-[#111827]/90 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20"
                style={{ animation: `fadeUp 0.45s ease ${index * 0.08}s both` }}
              >
                <p className="text-3xl font-bold text-white">{item.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-cyan-300">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-10">
          <div className="grid gap-4 md:grid-cols-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-[#111827] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
                style={{ animation: `fadeUp 0.5s ease ${index * 0.08}s both` }}
              >
                <div className="mb-4 h-1 w-12 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-20" />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative px-4 py-6 sm:px-6 lg:px-10" id="latest-cars">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                Popular Listings
              </p>
              <h2 className="mt-2 text-3xl font-bold">Buyer favourites</h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-400">
                A refined shortlist of standout cars designed to feel premium
                without overwhelming the page.
              </p>
            </div>

            <button
              onClick={() => navigate("/user/cars")}
              className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
            >
              View All →
            </button>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-3">
            {loading ? (
              [...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-[#111827] animate-pulse"
                >
                  <div className="h-48 bg-slate-800" />
                  <div className="space-y-3 p-5">
                    <div className="h-5 w-2/3 rounded bg-slate-800" />
                    <div className="h-4 w-1/2 rounded bg-slate-800" />
                    <div className="h-10 rounded bg-slate-800" />
                  </div>
                </div>
              ))
            ) : featuredCars.length > 0 ? (
              featuredCars.map((car) => <CarCard key={car._id} car={car} />)
            ) : (
              <p className="text-red-400">No cars found</p>
            )}
          </div>
        </section>

        <section className="relative px-4 py-14 sm:px-6 lg:px-10">
          <div className="rounded-3xl border border-white/10 bg-[#111827] p-6 lg:p-8 shadow-[0_12px_30px_rgba(0,0,0,0.2)]">
            <div className="mb-6 flex items-end justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-amber-300">
                  Browse by Brand
                </p>
                <h2 className="mt-2 text-3xl font-bold">
                  Choose your preferred brand
                </h2>
              </div>
              <p className="hidden text-sm text-slate-400 md:block">
                Trusted brands, smarter search
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 mb-4">
              {brands.map((brand, index) => (
                <button
                  key={brand}
                  onClick={() => {
                    navigate("/user/cars", { state: { brand } });
                  }}
                  className="group relative flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#0f172a] px-4 py-6 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:shadow-[0_10px_25px_rgba(6,182,212,0.15)]"
                  style={{
                    animation: `fadeUp 0.45s ease ${index * 0.06}s both`,
                  }}
                >
                  <span className="text-3xl mb-3 grayscale group-hover:grayscale-0 transition duration-300 transform group-hover:scale-110">
                    {brand === "Maruti" && "🚗"}
                    {brand === "Hyundai" && "🚙"}
                    {brand === "Honda" && "🏎️"}
                    {brand === "Tata" && "🚜"}
                    {brand === "Mahindra" && "⛰️"}
                    {brand === "Toyota" && "🏔️"}
                    {brand === "Kia" && "🚀"}
                    {brand === "BMW" && "👑"}
                    {brand === "Mercedes" && "💎"}
                    {brand === "Audi" && "⭕"}
                    {brand === "Volkswagen" && "🛸"}
                    {brand === "Ford" && "🐃"}
                  </span>
                  <span className="font-semibold text-slate-200 group-hover:text-cyan-300">
                    {brand}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 h-1 scale-x-0 bg-cyan-400 transition-transform duration-300 group-hover:scale-x-100 rounded-b-2xl" />
                </button>
              ))}
            </div>
          </div>
        </section>
        <footer className="mt-12 border-t border-white/10 bg-[#09111f] px-4 py-12 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <h3 className="text-2xl font-bold text-white">CarScout</h3>
                <p className="mt-4 leading-7 text-slate-400">
                  A cleaner, trusted, and modern used-car marketplace for buyers
                  who want more confidence at every step.
                </p>
                <div className="mt-5 flex gap-3 text-sm text-slate-400">
                  <span className="rounded-full border border-white/10 px-3 py-1.5">
                    Verified Listings
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1.5">
                    Easy Offers
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Marketplace
                </h3>
                <ul className="mt-4 space-y-3 text-slate-400">
                  <li
                    className="cursor-pointer transition hover:text-cyan-300"
                    onClick={() => navigate("/user")}
                  >
                    Home
                  </li>
                  <li
                    className="cursor-pointer transition hover:text-cyan-300"
                    onClick={() => navigate("/user/cars")}
                  >
                    Browse Cars
                  </li>
                  <li
                    className="cursor-pointer transition hover:text-cyan-300"
                    onClick={() => navigate("/user/offers")}
                  >
                    My Offers
                  </li>
                  <li
                    className="cursor-pointer transition hover:text-cyan-300"
                    onClick={() => navigate("/user/testdrives")}
                  >
                    Test Drives
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">Support</h3>
                <ul className="mt-4 space-y-3 text-slate-400">
                  <li>support@carscout.com</li>
                  <li>+91 9724585140</li>
                  <li>Mon - Sat, 24&7</li>
                  <li>Ahmedabad, Gujarat, India</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
              <p>© 2026 CarScout. All rights reserved.</p>
              <div className="flex flex-wrap gap-4">
                <span className="transition hover:text-cyan-300">
                  Privacy Policy
                </span>
                <span className="transition hover:text-cyan-300">
                  Terms of Service
                </span>
                <span className="transition hover:text-cyan-300">
                  Contact Us
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
