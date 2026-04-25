export default function SuiteOfTools() {
  const tools = [
    {
      title: 'Proprietary Technology',
      description: 'As homes become offices and virtual life weaves itself into reality, you need a partner with the right tools and tech to help you thrive in times of disruption. Whether you are an individual, team or independent brokerage, the Keller Cloud is built to scale with you.'
    },
    {
      title: 'Training & Education',
      description: 'Real estate is always evolving – and so should you. As an agent at Keller Williams Realty, you have access to an unprecedented number of award-winning live, local, and on-demand education opportunities. Improve your skills, uncover new streams of income, and unlock your personal and professional potential.'
    },
    {
      title: '100% Commission',
      description: 'In order to build a profitable real estate business, you need a compensation plan that doesn\'t hold back your growth. At KW, our cap model allows you to scale with a 100% model that redefined the industry. Whether you want to sell a few houses a year or a few thousand, our model supports your business.'
    },
    {
      title: 'Brokerage Support',
      description: 'At KW, we believe the most productive environment for real estate entrepreneurs is digitally based and physically enhanced. Our local, regional and national leadership is equipped to support your unique needs. Regardless of your business goals, KW has the systems, models and support to help you win.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The Suite Of Tools To Support Your Business</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">{tool.title}</h3>
              <p className="text-lg">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}