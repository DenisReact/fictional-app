function HeroSection() {
  return (
    <section className="container mx-auto text-center py-16 px-4">
      <h1 className="text-4xl font-bold text-customBlue mb-4">Welcome to Fictional App</h1>
      <p className="text-lg text-gray-600 mb-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, exercitationem.
      </p>
      <img
        src="https://via.placeholder.com/600x300"
        alt="Fictional App Showcase"
        className="mx-auto w-full max-w-md rounded"
      />
    </section>
  );
}

export default HeroSection;
