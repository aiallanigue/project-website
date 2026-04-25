import Link from 'next/link';

export default function QuickLinks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">QUICK LINKS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="https://console.command.kw.com/login" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-center">
            KW Command Console
          </Link>
          <Link href="https://account.docusign.com/oauth/auth" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-center">
            DocuSign
          </Link>
          {/* Add more links as needed */}
        </div>
      </div>
    </section>
  );
}