import Link from 'next/link';

export default function ExploreTransitioning() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Explore Transitioning Your Business To KW!</h2>
        <p className="text-lg mb-4">Schedule a confidential conversation to discuss your business and what we can offer you in a transition package.</p>
        <p className="text-lg mb-8">Our team will present a transition offer tailored to your unique business needs, typically valued at over $15,750.</p>
        <h3 className="text-2xl font-serif font-bold mb-4">Are You At Another Brokerage?</h3>
        <h3 className="text-2xl font-serif font-bold mb-8">Let Us Present You With A Transition Offer</h3>
        <Link href="https://join.kw7h.com/join-keller-williams" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
          Schedule A Confidential Conversation
        </Link>
      </div>
    </section>
  );
}