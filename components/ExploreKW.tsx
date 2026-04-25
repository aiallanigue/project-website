import Link from 'next/link';

export default function ExploreKW() {
  const items = [
    {
      title: 'Culture',
      description: 'Join Keller Williams Seven Hills and become part of a company that celebrates boundless potential and possibilities. Discover our commitment to diversity, equity, and inclusion, as well as our profit share and growth share models. Explore KW Cares, RED Day, and KWKC initiatives to engage, enrich, and improve the communities we serve.',
      link: '/kw-culture'
    },
    {
      title: 'Training',
      description: 'Keller Williams Seven Hills offers a comprehensive ecosystem of education, training, coaching, mentorship, and professional development for real estate agents. Access award-winning on-demand learning, live training events, and a worldwide network of top talent to unlock your potential and achieve your goals.',
      link: '/kw-training-and-coaching'
    },
    {
      title: 'Coaching',
      description: 'Transform your real estate career with KW MAPS Coaching, offering tailored programs for agents and teams. Master your market, develop skills, and achieve your goals with award-winning coaching from Keller Williams.',
      link: '/kw-training-and-coaching'
    },
    {
      title: 'Communities',
      description: 'Join KW Communities and connect with like-minded individuals to gain inspiration, learn new ideas, and receive support for your business growth. Explore our diverse communities today!',
      link: '/undefined'
    },
    {
      title: 'Technology',
      description: 'At Keller Williams Seven Hills, we believe technology exists to simplify everyday life, making room for what truly matters and giving you the freedom to be more human, more present – more everything.',
      link: '/kw-technology'
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">EXPLORE KW</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-lg mb-4">{item.description}</p>
              <Link href={item.link} className="text-blue-600 hover:underline">Learn More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}