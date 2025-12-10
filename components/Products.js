function Products() {
  try {
    const products = [
      {
        name: 'Premium Rice',
        description: 'High-quality aromatic rice cultivated sustainably to support local farmers and healthy living',
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
        icon: 'wheat'
      },
      {
        name: 'Fresh Vegetables',
        description: 'Seasonal, nutrient-rich vegetables grown with eco-friendly practices for wholesome meals',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
        icon: 'carrot'
      },
      {
        name: 'Organic Fruits',
        description: 'Juicy fruits grown without harmful chemicals, promoting health and sustainable farming',
        image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=80',
        icon: 'apple'
      },
      {
        name: 'Grains & Spices',
        description: 'Premium spices and whole grains cultivated responsibly to enhance nutrition and community well-being',
        image: 'https://images.unsplash.com/photo-1608797178974-15b35a64ede9?auto=format&fit=crop&w=600&q=80',
        icon: 'layers'
      }
    ];

    return (
      <section id="products" className="section-padding bg-[var(--secondary-color)]" data-name="products" data-file="components/Products.js">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Food Crops</h2>
            <p className="text-lg text-[var(--text-light)] max-w-3xl mx-auto">
              Discover our range of premium food crops, grown sustainably with care for the environment and communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-[var(--secondary-color)] flex items-center justify-center mb-4">
                    <div className={`icon-${product.icon} text-xl text-[var(--primary-color)]`}></div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-[var(--text-light)]">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Products component error:', error);
    return null;
  }
}
