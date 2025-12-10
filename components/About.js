function About() {
  try {
    return (
      <section id="about" className="section-padding bg-white" data-name="about" data-file="components/About.js">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About BRISAN</h2>
            <p className="text-lg text-[var(--text-light)] max-w-3xl mx-auto">
              Leading the way in sustainable agriculture and innovative business solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80" 
                alt="Sustainable farming" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-[var(--text-light)] mb-6">
                BRISAN is dedicated to cultivating premium ginger and turmeric while delivering high-quality food crops and seedlings. We drive innovation in agriculture through sustainable practices that protect the environment, support local communities, and provide expert consultancy to empower farmers and businesses."              </p>
              
              <h3 className="text-2xl font-bold mb-4">Why It Matters</h3>
              <p className="text-[var(--text-light)] mb-6">
                Sustainable crop production isn't just about feeding people today—it's about ensuring food security for future generations. Our platform combines traditional farming wisdom with modern technology to maximize yield while minimizing environmental impact.
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center">
                  <div className="icon-check text-xl text-[var(--primary-color)]"></div>
                </div>
                <div>
                  <p className="font-semibold">100% Sustainable Practices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}