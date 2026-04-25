import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-cover bg-center text-white py-20 pt-24" style={{backgroundImage: 'url(https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/jE5S7WWW9SaNL6x64MGB/media/66642ba3072c0685f887e850.png)'}}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto px-4 text-center z-10">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
          The <strong>#1</strong> <strong>Brokerage</strong> For Agents Who Want To Build A <strong>Profitable</strong> Real Estate Business...
        </h1>
        <h2 className="text-xl md:text-2xl font-serif mb-8">
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