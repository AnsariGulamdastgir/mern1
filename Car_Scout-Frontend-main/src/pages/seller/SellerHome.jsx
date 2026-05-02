import React from "react";
import { useNavigate } from "react-router-dom";

const SellerHome = () => {
  const navigate = useNavigate();

  const actionCards = [
    {
      title: "Add New Car",
      desc: "Create a fresh listing and showcase your car with premium presentation.",
      button: "Add Car",
      onClick: () => navigate("/seller/addcar"),
      accent: "from-emerald-500/20 to-emerald-400/5",
      btn: "bg-emerald-500 hover:bg-emerald-400 text-white",
    },
    {
      title: "My Listings",
      desc: "Manage all your active car listings and keep them updated easily.",
      button: "View Listings",
      onClick: () => navigate("/seller/my-listings"),
      accent: "from-cyan-500/20 to-cyan-400/5",
      btn: "bg-cyan-500 hover:bg-cyan-400 text-slate-950",
    },
    {
      title: "View Offers",
      desc: "Track buyer offers and respond quickly to serious customers.",
      button: "Check Offers",
      onClick: () => navigate("/seller/offers"),
      accent: "from-amber-500/20 to-amber-400/5",
      btn: "bg-amber-400 hover:bg-amber-300 text-slate-950",
    },
    {
      title: "Test Drive Requests",
      desc: "Review buyer test drive bookings and manage requests smoothly.",
      button: "View Requests",
      onClick: () => navigate("/seller/testdrives"),
      accent: "from-emerald-500/20 to-cyan-400/5",
      btn: "bg-emerald-500 hover:bg-emerald-400 text-white",
    },


  ];

  const stats = [
    { label: "Active Listings", value: "12+" },
    { label: "Buyer Interest", value: "24/7" },
    { label: "Quick Management", value: "Easy" },
  ];

  const sellSteps = [
    {
      step: "01",
      title: "Add Your Car",
      desc: "Create your listing in minutes with the guided seller flow, complete car details, and quality images.",
      image:
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80",
      accent: "from-emerald-400/20 to-emerald-500/5",
      badge: "bg-emerald-400 text-slate-950",
      iconWrap: "bg-emerald-400/15 text-emerald-300",
      icon: "↑",
    },

    {
      step: "03",
      title: "Book Test Drive",
      desc: "Interested buyers can schedule test drives smoothly, helping both sides move forward with confidence.",
      image:
        "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=900&q=80",
      accent: "from-amber-400/20 to-amber-500/5",
      badge: "bg-amber-400 text-slate-950",
      iconWrap: "bg-amber-400/15 text-amber-300",
      icon: "◷",
    },
    {
      step: "04",
      title: "Close the Deal",
      desc: "Receive offers, respond professionally, and finalize your sale through a smoother marketplace experience.",
      image:
        "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=900&q=80",
      accent: "from-rose-400/20 to-rose-500/5",
      badge: "bg-rose-400 text-slate-950",
      iconWrap: "bg-rose-400/15 text-rose-300",
      icon: "⇄",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b1120] text-white">
      <div className="bg-gradient-to-b from-[#0b1120] via-[#111827] to-[#0b1120]">
        
        {/* === HERO DASHBOARD SECTION === */}
        <section className="px-4 pt-6 sm:px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#111827] shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_left,rgba(16,185,129,0.10),transparent_24%)]" />

            <div className="relative grid gap-8 px-6 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-14">
              <div>
                <div className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
                  Seller Dashboard
                </div>

                <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
                  Manage your car listings
                  <span className="block text-cyan-300">like a pro</span>
                </h1>

                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                  Add cars, track offers, manage test drives, and handle your listings through a
                  clean professional seller workspace built for CarScout.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    onClick={() => navigate("/seller/addcar")}
                    className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-400"
                  >
                    Add New Car
                  </button>

                  <button
                    onClick={() => navigate("/seller/my-listings")}
                    className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
                  >
                    Manage Listings
                  </button>
                </div>
              </div>

              <div className="grid gap-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                  >
                    <p className="text-3xl font-bold text-cyan-300">{item.value}</p>
                    <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === QUICK ACTIONS SECTION === */}
        <section className="px-4 py-10 sm:px-6 lg:px-10">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
              Quick Actions
            </p>
            <h2 className="mt-2 text-3xl font-bold">Everything you need in one place</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {actionCards.map((item) => (
              <div
                key={item.title}
                className={`rounded-[28px] border border-white/10 bg-gradient-to-br ${item.accent} p-6 shadow-[0_10px_30px_rgba(0,0,0,0.22)]`}
              >
                <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.desc}</p>

                <button
                  onClick={item.onClick}
                  className={`mt-6 rounded-xl px-5 py-3 font-semibold transition ${item.btn}`}
                >
                  {item.button}
                </button>
              </div>
            ))}
          </div>
        </section>
        
        {/* === ADJUSTED WHY CARSCOUT & SELL WITH CARSCOUT === */}
        <section className="relative px-4 pb-6 sm:px-6 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[#111827] p-8 shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                Why CarScout
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                A cleaner way to discover used cars
              </h2>
              <p className="mt-4 leading-7 text-slate-400">
                CarScout is built to make car buying and selling feel more
                reliable, modern, and easy to navigate for both buyers and
                sellers.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-[#0f172a] p-4 transition duration-300 hover:border-cyan-400/20">
                  <h3 className="font-semibold">Professional presentation</h3>
                  <p className="mt-1 text-sm text-slate-400">
                    Clear listings and better visual trust for every car.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0f172a] p-4 transition duration-300 hover:border-cyan-400/20">
                  <h3 className="font-semibold">Better discovery flow</h3>
                  <p className="mt-1 text-sm text-slate-400">
                    Search, compare, and explore with less clutter.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0f172a] p-4 transition duration-300 hover:border-cyan-400/20">
                  <h3 className="font-semibold">Built for trust</h3>
                  <p className="mt-1 text-sm text-slate-400">
                    The experience is focused on confidence and clarity.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-8 shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />
              <p className="relative text-sm uppercase tracking-[0.2em] text-emerald-300">
                Sell with CarScout
              </p>
              <h2 className="relative mt-3 text-3xl font-bold">
                Reach buyers with a premium listing experience
              </h2>
              <p className="relative mt-4 leading-7 text-slate-300">
                Showcase your car in a more professional way and connect with
                serious buyers through a cleaner marketplace experience.
              </p>

              <button
                onClick={() => navigate("/seller/addcar")}
                className="relative mt-8 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-emerald-400"
              >
                Start Listing
              </button>
            </div>
          </div>
        </section>

        {/* === START SELLING FLOW === */}
        <section className="relative px-4 py-12 sm:px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#111827] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.24)] lg:p-8">
            <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative text-center">
              <span className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
                How It Works
              </span>

              <h2 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
                Sell your car in 3 easy steps
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                List your car, connect
                with serious buyers, and move toward the best deal through a
                cleaner seller experience.
              </p>
            </div>

            <div className="relative mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {sellSteps.map((item, index) => (
                <div key={item.title} className="relative">
                  <div className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#0f172a] shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-white/20">
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/25 to-transparent" />
                      <div
                        className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${item.accent}`}
                      />
                      <div
                        className={`absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold shadow-lg ${item.badge}`}
                      >
                        {item.step}
                      </div>
                    </div>

                    <div className="relative px-5 pb-6 pt-8 text-center">
                      <div
                        className={`mx-auto -mt-14 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 text-2xl font-bold shadow-[0_10px_25px_rgba(0,0,0,0.25)] ${item.iconWrap}`}
                      >
                        {item.icon}
                      </div>

                      <h3 className="mt-5 text-xl font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {index < sellSteps.length - 1 && (
                    <div className="absolute -right-4 top-[42%] hidden xl:flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#111827] text-slate-500 shadow-[0_8px_20px_rgba(0,0,0,0.18)]">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="relative mt-10 grid gap-4 rounded-[28px] border border-emerald-400/10 bg-gradient-to-r from-emerald-400/10 via-white/5 to-cyan-400/10 p-5 md:grid-cols-3">
              <div className="rounded-2xl bg-[#0f172a]/80 p-4">
                <p className="text-sm font-semibold text-white">
                  100% Verified Flow
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Build stronger trust with cleaner listings and
                  transparent vehicle details.
                </p>
              </div>

              <div className="rounded-2xl bg-[#0f172a]/80 p-4">
                <p className="text-sm font-semibold text-white">Save Time</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  A guided seller journey keeps listing, offers, and buyer
                  activity easier to manage.
                </p>
              </div>

              <div className="rounded-2xl bg-[#0f172a]/80 p-4">
                <p className="text-sm font-semibold text-white">
                  Better Offers
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Reach serious buyers and move toward better value with a more
                  professional experience.
                </p>
              </div>
            </div>

            <div className="relative mt-8 flex justify-center">
              <button
                onClick={() => navigate("/seller/addcar")}
                className="rounded-2xl bg-emerald-500 px-7 py-3.5 font-semibold text-white transition duration-300 hover:bg-emerald-400"
              >
                Start Selling Now
              </button>
            </div>
          </div>
        </section>

        {/* === READY TO MOVE FORWARD (SELLER ONLY) === */}
        <section className="relative px-4 pb-6 sm:px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#0b1120] p-8 shadow-[0_18px_45px_rgba(0,0,0,0.28)] lg:p-10">
            <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />

            <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">
                  Ready To List?
                </p>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  List yours with more confidence
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  CarScout brings verified listings, smoother offers, test
                  drives, and cleaner presentation into one modern used-car
                  marketplace. Start listing today.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-stretch">
                <button
                  onClick={() => navigate("/seller/addcar")}
                  className="rounded-2xl bg-emerald-500 px-6 py-3.5 font-semibold text-white transition duration-300 hover:bg-emerald-400"
                >
                  List Your Car
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* === FOOTER (SELLER ONLY) === */}
        <footer className="mt-12 border-t border-white/10 bg-[#09111f] px-4 py-12 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <h3 className="text-2xl font-bold text-white">CarScout</h3>
                <p className="mt-4 leading-7 text-slate-400">
                  A cleaner, trusted, and modern used-car marketplace for buyers
                  and sellers who want more confidence at every step.
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
                  For Sellers
                </h3>
                <ul className="mt-4 space-y-3 text-slate-400">
                  <li
                    className="cursor-pointer transition hover:text-cyan-300"
                    onClick={() => navigate("/seller/addcar")}
                  >
                    Start Selling / Add Listing
                  </li>
                  <li
                    className="cursor-pointer transition hover:text-cyan-300"
                    onClick={() => navigate("/seller/my-listings")}
                  >
                    My Listings
                  </li>

                  <li
                    className="cursor-pointer transition hover:text-cyan-300"
                    onClick={() => navigate("/seller/offers")}
                  >
                    Seller Offers
                  </li>
                  <li
                    className="cursor-pointer transition hover:text-cyan-300"
                    onClick={() => navigate("/seller/testdrives")}
                  >
                    Test Drives Requests
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">Support</h3>
                <ul className="mt-4 space-y-3 text-slate-400">
                  <li>support@carscout.com</li>
                  <li>+91 9876543210</li>
                  <li>Mon - Sat, 10:00 AM to 7:00 PM</li>
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

    </div>
  );
};

export default SellerHome;
