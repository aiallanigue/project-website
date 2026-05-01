import Link from 'next/link';

export default function CompensationPlan() {
  return (
    <section className="py-16 bg-[#f5f3f0]">
      <div className="container mx-auto px-4"  style={{ color: '#000' }}>
        <div className="grid gap-10 items-center lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-xl">
            <p className="text-3xl font-semibold leading-tight">Explore The KW Compensation Plan</p>
            <p className="mt-4 text-lg text-gray-700">At Keller Williams, we win when you win.</p>
            <div className="mt-10">
              <h3 className="text-3xl font-semibold tracking-tight">The 100% Plan</h3>
              <p className="mt-3 text-xl text-gray-900">$18,000 Cap + Royalty Cap</p>
            </div>
            <div className="mt-8 space-y-4 text-lg text-gray-800">
              <p className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-3 shadow-sm">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#c30714] text-white">✓</span>
                Competitive Splits
              </p>
              <p className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-3 shadow-sm">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#c30714] text-white">✓</span>
                Low Monthly Technology & E&O Fee
              </p>
              <p className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-3 shadow-sm">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#c30714] text-white">✓</span>
                Office Space with Leadership Support
              </p>
              <p className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-3 shadow-sm">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#c30714] text-white">✓</span>
                Coaching and Consulting
              </p>
              <p className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-3 shadow-sm">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#c30714] text-white">✓</span>
                Profit Sharing
              </p>
              <p className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-3 shadow-sm">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#c30714] text-white">✓</span>
                And More!
              </p>
            </div>
            <Link
              href="https://kw7h.com/compensation-plans"
              className="mt-10 inline-flex w-full items-center justify-center rounded-md bg-[#c30714] px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-[#a30511] sm:w-auto"
            >
              Explore All Our Compensation Plans...
            </Link>
          </div>
          <div className="overflow-hidden rounded-[32px] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
              alt="Explore the compensation plan"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}