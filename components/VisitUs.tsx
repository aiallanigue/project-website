export default function VisitUs() {
  return (
    <div className="space-y-6">
      <div className="text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">Visit Us</h2>
        <p className="text-lg">8050 Hosbrook Rd Ste 406</p>
        <p className="text-lg">Cincinnati, Ohio 45236</p>
      </div>
      <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
        <iframe
          title="KW Seven Hills location"
          src="https://www.google.com/maps?q=8050+Hosbrook+Rd+Ste+406,+Cincinnati,+OH+45236&output=embed"
          className="h-[560px] w-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}