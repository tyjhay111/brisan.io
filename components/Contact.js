function Contact() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 3000);
    };

    return (
      <section id="contact" className="section-padding bg-white" data-name="contact" data-file="components/Contact.js">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-[var(--text-light)] max-w-3xl mx-auto">
              Ready to partner with us? Reach out and let's discuss how we can work together
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="icon-check-circle text-4xl text-green-600 mb-4"></div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
                <p className="text-green-700">We've received your message and will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                    placeholder="Tell us about your needs or questions..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn-primary">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Contact component error:', error);
    return null;
  }
}