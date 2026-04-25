import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-12">
      <div className="bg-[#8b0a0f] text-white">
        <div className="container mx-auto px-4 py-10 text-center">
          <img
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/fgwiRtQjeAqF9KsALWaN/media/66a22dde6dce45b23fd16f60.png"
            alt="KW Seven Hills"
            className="mx-auto mb-4 max-w-xs"
          />
          <p className="text-sm uppercase tracking-[0.25em]">
            Each office is independently owned and operated.
          </p>
        </div>
      </div>
      <div className="bg-black text-white border-t border-white">
        <div className="container mx-auto px-4 py-4 flex flex-col items-center justify-center gap-3 md:flex-row md:justify-between">
          <Link href="/privacy-policy" className="text-sm hover:underline">
            Privacy Policy
          </Link>
          <Link href="/do-not-sell" className="text-sm hover:underline">
            Do Not Sell My Personal Information
          </Link>
        </div>
      </div>
    </footer>
  );
}
