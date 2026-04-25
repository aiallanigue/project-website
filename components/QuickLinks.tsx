import Link from 'next/link';

export default function QuickLinks() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">QUICK LINKS</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            href="https://console.command.kw.com/login"
            className="group inline-flex h-40 w-40 flex-col items-center justify-center rounded-3xl bg-white p-4 text-center shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="flex h-20 w-full items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Keller_Williams_Logo.svg/640px-Keller_Williams_Logo.svg.png"
                alt="KW Command"
                className="max-h-16 max-w-full object-contain"
              />
            </div>
            <span className="mt-3 text-sm font-semibold text-gray-900">KW Command</span>
          </Link>
          <Link
            href="https://account.docusign.com/oauth/auth"
            className="group inline-flex h-40 w-40 flex-col items-center justify-center rounded-3xl bg-white p-4 text-center shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="flex h-20 w-full items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Docusign_logo.svg/640px-Docusign_logo.svg.png"
                alt="DocuSign"
                className="max-h-16 max-w-full object-contain"
              />
            </div>
            <span className="mt-3 text-sm font-semibold text-gray-900">DocuSign</span>
          </Link>
          <Link
            href="https://app.dotloop.com/login"
            className="group inline-flex h-40 w-40 flex-col items-center justify-center rounded-3xl bg-white p-4 text-center shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="flex h-20 w-full items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Dotloop_logo.svg/640px-Dotloop_logo.svg.png"
                alt="dotloop"
                className="max-h-16 max-w-full object-contain"
              />
            </div>
            <span className="mt-3 text-sm font-semibold text-gray-900">dotloop</span>
          </Link>
          <Link
            href="https://www.kwconnect.com/"
            className="group inline-flex h-40 w-40 flex-col items-center justify-center rounded-3xl bg-white p-4 text-center shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="flex h-20 w-full items-center justify-center">
              <img
                src="https://img.icons8.com/fluency/480/calendar--v2.png"
                alt="Training Calendar"
                className="max-h-16 max-w-full object-contain"
              />
            </div>
            <span className="mt-3 text-sm font-semibold text-gray-900">Training Calendar</span>
          </Link>
          <Link
            href="https://www.kwconnect.com/"
            className="group inline-flex h-40 w-40 flex-col items-center justify-center rounded-3xl bg-white p-4 text-center shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="flex h-20 w-full items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Keller_Williams_logo.svg/640px-Keller_Williams_logo.svg.png"
                alt="KW Connect"
                className="max-h-16 max-w-full object-contain"
              />
            </div>
            <span className="mt-3 text-sm font-semibold text-gray-900">KW Connect</span>
          </Link>
          <Link
            href="https://kwu.com/"
            className="group inline-flex h-40 w-40 flex-col items-center justify-center rounded-3xl bg-white p-4 text-center shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="flex h-20 w-full items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Keller_Williams_U-logo.svg/640px-Keller_Williams_U-logo.svg.png"
                alt="KW University"
                className="max-h-16 max-w-full object-contain"
              />
            </div>
            <span className="mt-3 text-sm font-semibold text-gray-900">KW University</span>
          </Link>
          <Link
            href="https://kw7h.com/"
            className="group inline-flex h-40 w-40 flex-col items-center justify-center rounded-3xl bg-white p-4 text-center shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="flex h-20 w-full items-center justify-center">
              <img
                src="https://img.icons8.com/color/480/square-logo.png"
                alt="SLM"
                className="max-h-16 max-w-full object-contain"
              />
            </div>
            <span className="mt-3 text-sm font-semibold text-gray-900">SLM</span>
          </Link>
        </div>
      </div>
    </section>
  );
}