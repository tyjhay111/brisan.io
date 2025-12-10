function WhyChooseUs() {
  try {
    const features = [
      {
        icon: 'shield-check',
        title: 'Reliability',
        description: 'Consistent quality and on-time delivery you can count on'
      },
      {
        icon: 'leaf',
        title: 'Sustainability',
        description: 'Eco-friendly practices that protect our planet'
      },
      {
        icon: 'lightbulb',
        title: 'Innovation',
        description: 'Cutting-edge agricultural technology and methods'
      },
      {
        icon: 'users',
        title: 'Community Focus',
        description: 'Supporting local farmers and communities'
      },
      {
        icon: 'award',
        title: 'Quality Assurance',
        description: 'Rigorous testing and certification standards'
      },
      {
        icon: 'globe',
        title: 'Global Network',
        description: 'Connected to markets worldwide'
      }
    ];

    return (
      <section className="section-padding bg-[var(--secondary-color)]" data-name="why-choose-us" data-file="components/WhyChooseUs.js">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose BRISAN</h2>
            <p className="text-lg text-[var(--text-light)] max-w-3xl mx-auto">
              Experience the difference of working with a truly committed agricultural partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 rounded-xl bg-[var(--accent-color)] bg-opacity-20 flex items-center justify-center mb-4">
                  <div className={`icon-${feature.icon} text-2xl text-[var(--primary-color)]`}></div>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-[var(--text-light)]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('WhyChooseUs component error:', error);
    return null;
  }
}