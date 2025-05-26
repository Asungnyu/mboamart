import React from "react";

const features = [
  "Trusted Local & Global Sellers — Quality and authenticity you can count on.",
  "User-Friendly Experience — Intuitive design, smooth navigation.",
  "Secure Payments — Top-notch protection for your peace of mind.",
  "Fast Delivery & Tracking — Real-time updates, reliable shipping.",
  "Diverse Product Range — Tech, fashion, beauty, home essentials and more.",
  "Community-Centric — Empowering local businesses across Cameroon and beyond.",
];

export default function LandingAbout() {
  return (
    <section className="max-w-6xl mx-auto px-1 sm:px-6 lg:px-12 py-12 sm:py-16 rounded-lg shadow-lg bg-light">
      {/* About Us */}
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold italic font-serif mb-6"
          style={{
            background:
              "linear-gradient(90deg, #0B081D 0%, #646C6F 50%, #000411 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About <span>MboaMart</span>
        </h2>
        <p className="text-dark text-base sm:text-lg leading-relaxed tracking-wide">
          At{" "}
          <span className="font-semibold" style={{ color: "#0B081D" }}>
            MboaMart
          </span>
          , we’re not just another online marketplace — we’re your digital
          hometown hub, powered by the spirit of <em>Mboa</em> (home). We
          connect you with trusted sellers, authentic products, and unbeatable
          deals, all wrapped in a seamless, secure shopping experience. Whether
          you’re hunting for local treasures or trending tech, MboaMart makes it
          easy, fast, and downright enjoyable. We honor tradition but move at
          the speed of now — your one-stop shop with a personal touch.
        </p>
      </div>

      {/* Features */}
      <div>
        <h3
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-10 sm:mb-12 text-center tracking-wide"
          style={{ color: "#0B081D", textShadow: "0 1px 2px rgba(0,0,0,0.1)" }}
        >
          Why MboaMart?
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className="rounded-xl p-6 sm:p-8 border transition-all duration-300 cursor-default"
              style={{
                backgroundColor: "#E1EFE6", // mint
                borderColor: "#AEB7B3", // cloud
                boxShadow: "0 2px 8px rgba(101, 108, 111, 0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 4px 16px rgba(101, 108, 111, 0.3)";
                e.currentTarget.style.borderColor = "#646C6F"; // gray2
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 2px 8px rgba(101, 108, 111, 0.15)";
                e.currentTarget.style.borderColor = "#AEB7B3";
              }}
              title={feature}
            >
              <div className="flex items-center mb-2 sm:mb-3">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="#0B081D"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <h4
                  className="font-semibold text-lg sm:text-xl leading-tight"
                  style={{ color: "#0B081D" }}
                >
                  {feature.split("—")[0]}
                </h4>
              </div>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#62626E" }}
              >
                {feature.split("—")[1].trim()}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
