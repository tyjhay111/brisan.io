function Hero() {
  try {
    const scrollToContact = () => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-16"
        data-name="hero"
        data-file="components/Hero.js"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.65),
              rgba(0, 0, 0, 0.65)
            ),
            url(https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=1200&auto=format&fit=crop&q=80)
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container-custom text-center text-white drop-shadow-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Cultivating Quality, Growing Opportunities
          </h1>

          <p className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
            Premium food crop production combined with innovative agro-business solutions for sustainable growth
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={scrollToContact} className="btn-primary shadow-lg">
              stay With Us
            </button>

            <button
              onClick={() =>
                document.getElementById("about").scrollIntoView({ behavior: "smooth" })
              }
              className="bg-green-100 text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-lg transition-all duration-300 border border-green-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Hero component error:", error);
    return null;
  }
}
