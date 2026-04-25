export default function LeadershipTeam() {
  const leaders = [
    {
      name: 'Tara Smith',
      titleTop: 'Operating Principal',
      titleBottom: 'Ohio Principal Broker',
      email: 'TaraSmith@kw.com',
      phone: '859.644.9095',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Kelly Wyatt',
      titleTop: 'General Manager',
      titleBottom: '',
      email: 'KellyWyatt@kw.com',
      phone: '239.850.8851',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Lindsey Johnson',
      titleTop: 'Market Center Administrator',
      titleBottom: '',
      email: 'klrw1074@kw.com',
      phone: '513.295.2497',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Margaret Killough',
      titleTop: 'Ohio Managing Salesperson',
      titleBottom: '',
      email: 'kw7hbroker@gmail.com',
      phone: '513.492.2998',
      image: 'https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Ryan Rowley',
      titleTop: 'Productivity Coach',
      titleBottom: '',
      email: 'ryanrowley@kw.com',
      phone: '513.374.4798',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Bo Smith',
      titleTop: 'Principal Broker KY',
      titleBottom: 'License #: 212174',
      email: 'bosmith62@gmail.com',
      phone: '859.983.6348',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Jennifer Jung',
      titleTop: 'Principal Broker- IN',
      titleBottom: 'License #: RC52100115',
      email: 'Jenjung87@gmail.com',
      phone: '513.447.5840',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section className="py-16 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.86),_rgba(245,241,236,0.95))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-[0.15em] uppercase">OUR LEADERSHIP TEAM</h2>
          <div className="mx-auto mt-4 h-[1px] w-24 bg-black"></div>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6 rounded-full border-4 border-[#c30714] p-1">
                <div className="h-64 w-64 overflow-hidden rounded-full bg-white shadow-xl">
                  <img src={leader.image} alt={leader.name} className="h-full w-full object-cover" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl" style={{ fontFamily: 'var(--kaushan-script)' }}>{leader.name}</h3>
                <p className="text-base font-semibold">{leader.titleTop}</p>
                {leader.titleBottom && <p className="text-base">{leader.titleBottom}</p>}
              </div>
              <div className="mt-6 flex w-full flex-col items-center gap-3 px-4">
                <a href={`mailto:${leader.email}`} className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm shadow-sm transition hover:bg-gray-50">
                  <span>📧</span>
                  <span>{leader.email}</span>
                </a>
                <a href={`tel:${leader.phone}`} className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm shadow-sm transition hover:bg-gray-50">
                  <span>📞</span>
                  <span>{leader.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
