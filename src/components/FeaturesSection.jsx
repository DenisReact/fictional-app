function FeaturesSection() {
  const features = [
    { title: "Feature", description: "Lorem ipsum dolor sit amet." },
    { title: "Feature", description: "Lorem ipsum dolor sit amet." },
    { title: "Feature", description: "Lorem ipsum dolor sit amet." },
  ];

  return (
    <section id="features" className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-customBlue mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 shadow rounded">
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
