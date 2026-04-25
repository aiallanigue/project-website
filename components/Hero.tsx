import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          The #1 Brokerage For Agents Who Want To Build A Profitable Real Estate Business...
        </h1>
        <h2 className="text-xl md:text-2xl mb-8">
          Keller Williams Seven Hills is the #1 place for Real Estate Agents to grow their Business in Greater Cincinnati and Northern Kentucky
        </h2>
        <Link
          href="https://join.kw7h.com/join-keller-williams"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg"
        >
          CLICK HERE FOR A CONFIDENTIAL CONVERSATION ABOUT JOINING KW SEVEN HILLS
        </Link>
        <div className="mt-12 flex justify-center space-x-8">
          <div className="text-center">
            <span className="text-4xl"></span>
            <p>Technology and Training</p>
          </div>
          <div className="text-center">
            <span className="text-4xl"></span>
            <p>Consulting and Coaching</p>
          </div>
          <div className="text-center">
            <span className="text-4xl"></span>
            <p>Culture and Community</p>
          </div>
        </div>
      </div>
    </section>
  );
}