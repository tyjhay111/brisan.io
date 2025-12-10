function BusinessExpansion() {
  try {
    const opportunities = [
      { icon: 'package', title: 'Agro-Processing', description: 'Value-added processing facilities for crop transformation' },
      { icon: 'truck', title: 'Logistics & Distribution', description: 'Efficient supply chain and distribution networks' },
      { icon: 'store', title: 'Retail & Packaging', description: 'Brand development and market-ready packaging solutions' },
      { icon: 'trending-up', title: 'Export Opportunities', description: 'Connect with international markets and buyers' }
    ];

    return (
      <section
        id="business"
        className="section-padding bg-white"
        data-name="business-expansion"
        data-file="components/BusinessExpansion.js"
      >
        <div className="container-custom">

          {/* Title */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--primary-color)] mb-4">
              Business Expansion Zone
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join our diverse ecosystem of agro-business opportunities. We support innovation and growth at every stage.
            </p>
          </div>

          {/* Opportunities */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
            {opportunities.map((opportunity, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-20 h-20 rounded-full bg-[var(--accent-color)] bg-opacity-30 flex items-center justify-center mx-auto mb-5 shadow-sm">
                  <div className={`icon-${opportunity.icon} text-3xl text-[var(--primary-color)]`}></div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {opportunity.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {opportunity.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="rounded-2xl p-10 md:p-14 text-center shadow-lg 
     bg-gradient-to-br from-[var(--primary-color)] to-green-700 text-white">

  <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-white">
    Ready to Grow Your Agro-Business?
  </h3>

  <p className="text-lg mb-8 max-w-2xl mx-auto text-white leading-relaxed">
    Our platform welcomes entrepreneurs, investors, and innovators looking to make an impact in agriculture. 
    Let's build the future together.
  </p>

  <button
    onClick={() =>
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    }
    className="bg-white text-[var(--primary-color)] px-10 py-3 rounded-lg font-semibold 
               shadow hover:bg-gray-100 hover:shadow-md transition-all duration-300"
  >
    Get Started Today
  </button>
</div>

        </div>
      </section>
    );
  } catch (error) {
    console.error("BusinessExpansion component error:", error);
    return null;
  }
}
