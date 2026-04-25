export default function LeadershipTeam() {
  const leaders = [
    { name: 'Tara Smith', title: 'Operating Principal, Ohio Principal Broker', email: 'TaraSmith@kw.com', phone: '859.644.9095' },
    { name: 'Kelly Wyatt', title: 'General Manager', email: 'KellyWyatt@kw.com', phone: '239.850.8851' },
    { name: 'Lindsey Johnson', title: 'Market Center Administrator', email: 'klrw1074@kw.com', phone: '513.295.2497' },
    { name: 'Margaret Killough', title: 'Ohio Managing Salesperson', email: 'kw7hbroker@gmail.com', phone: '513.492.2998' },
    { name: 'Ryan Rowley', title: 'Productivity Coach', email: 'ryanrowley@kw.com', phone: '513.374.4798' },
    { name: 'Bo Smith', title: 'Principal Broker KY', email: 'bosmith62@gmail.com', phone: '859.983.6348' },
    { name: 'Jennifer Jung', title: 'Principal Broker- IN', email: 'Jenjung87@gmail.com', phone: '513.447.5840' }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">OUR LEADERSHIP TEAM</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
              <p className="text-gray-600 mb-4">{leader.title}</p>
              <p className="text-sm"> {leader.email}</p>
              <p className="text-sm">{leader.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}