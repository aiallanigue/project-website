import Link from 'next/link';

export default function GrowYourBusiness() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center"  style={{ color: '#000' }}>
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">We Can Help You Grow Your Business... We Literally Wrote The Book On It</h2>
        <p className="text-lg mb-4 max-w-3xl mx-auto">
          Keller Williams is built by agents for agents.
        </p>
        <p className="text-lg mb-4 max-w-3xl mx-auto">
          As the #1 most agent centric company in the real estate industry, we are committed to supporting the ever-evolving needs of our associates and their businesses.
        </p>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          We are consistently recognized and awarded for our industry-leading training programs, courses and content written from KW Co-founder, Gary Keller.
        </p>
        <Link
          href="https://join.kw7h.com/join-keller-williams"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg"
        >
          Start the Conversation
        </Link>
      </div>
    </section>
  );
}