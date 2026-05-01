import Link from 'next/link';

export default function TrainingCalendar() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center"  style={{ color: '#000' }}>
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">KW Seven Hills</h2>
        <h3 className="text-2xl font-serif font-bold mb-8">Training Calendar</h3>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          At Keller Williams Seven Hills, we offer a diverse range of training opportunities for individuals to participate in.
        </p>
        <Link href="https://kw7h.com/training-calendar" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded">
          Learn More
        </Link>
      </div>
    </section>
  );
}