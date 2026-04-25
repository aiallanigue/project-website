import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/fgwiRtQjeAqF9KsALWaN/media/66a22dde6dce45b23fd16f60.png" alt="KW7H Logo" className="h-10" />
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/about-us" className="text-gray-700 hover:text-blue-600">ABOUT US</Link>
          <Link href="/buy-sell" className="text-gray-700 hover:text-blue-600">BUY/SELL</Link>
          <Link href="/careers" className="text-gray-700 hover:text-blue-600">CAREERS</Link>
          <Link href="/affiliates" className="text-gray-700 hover:text-blue-600">AFFILIATES</Link>
          <Link href="/agent-resources" className="text-gray-700 hover:text-blue-600">AGENT RESOURCES</Link>
          <Link href="https://kwri.kw.com/" className="text-gray-700 hover:text-blue-600">KWRI</Link>
          <Link href="https://join.kw7h.com/join-keller-williams" className="text-gray-700 hover:text-blue-600">JOIN KW</Link>
        </nav>
        <button className="md:hidden text-gray-700">
          <span className="text-xl"></span>
        </button>
      </div>
    </header>
  );
}