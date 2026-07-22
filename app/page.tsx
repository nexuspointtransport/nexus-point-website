import FadeUp from "@/components/FadeUp";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="flex w-full items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-3">
  <Image
  src="/Nexus Point Transport.jpeg"
  alt="Nexus Point Passenger Transport"
  width={180}
  height={60}
  className="h-14 w-auto"
  priority
/>
  <div className="flex flex-col">
    <span className="text-xl font-bold tracking-tight text-[#777ed8] sm:text-2xl">
      Nexus Point
    </span>

    <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 sm:text-xs">
      Passenger Transport L.L.C
    </span>
  </div>
</Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            <Link
              href="#home"
              className="font-medium text-[#777ed8] transition hover:text-[#555dc4]"
            >
              Home
            </Link>

            <Link
              href="#about"
              className="font-medium text-slate-700 transition hover:text-[#777ed8]"
            >
              About
            </Link>

            <Link
              href="#services"
              className="font-medium text-slate-700 transition hover:text-[#777ed8]"
            >
              Services
            </Link>

            <Link
               href="#why-choose-us"
               className="font-medium text-slate-700 transition hover:text-[#777ed8]"
              >
               Why Choose Us
              </Link>

            <Link
              href="#fleet"
              className="font-medium text-slate-700 transition hover:text-[#777ed8]"
            >
              Fleet
            </Link>

          
            <Link
              href="#contact"
              className="font-medium text-slate-700 transition hover:text-[#777ed8]"
            >
              Contact
            </Link>
          </nav>

          {/* Header contact buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:+971523147661"
              className="rounded-full border border-[#777ed8] px-5 py-2.5 text-sm font-semibold text-[#666dd0] transition hover:bg-[#f0f1ff]"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/971523147661"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1fb959]"
            >
              WhatsApp
            </a>
          </div>

          {/* Temporary mobile buttons */}
          <div className="flex gap-2 md:hidden">
            <a
              href="tel:+971523147661"
              aria-label="Call Nexus Point"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#777ed8] text-lg"
            >
              ☎
            </a>

            <a
              href="https://wa.me/971523147661"
              target="_blank"
              rel="noreferrer"
              aria-label="Message Nexus Point on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-lg text-white"
            >
              💬
            </a>
          </div>
        </div>

        {/* Mobile navigation */}
        <nav className="flex items-center justify-center gap-5 overflow-x-auto border-t border-slate-100 px-4 py-3 text-sm lg:hidden">
          <Link href="#home" className="font-semibold text-[#777ed8]">
            Home
          </Link>

          <Link
            href="#about"
            className="whitespace-nowrap font-medium text-slate-700"
          >
            About
          </Link>

          <Link
            href="#services"
            className="whitespace-nowrap font-medium text-slate-700"
          >
            Services
          </Link>

          <Link
            href="#fleet"
            className="whitespace-nowrap font-medium text-slate-700"
          >
            Fleet
          </Link>

          <Link
            href="#contact"
            className="whitespace-nowrap font-medium text-slate-700"
          >
            Contact
          </Link>
        </nav>
      </header>

      {/* HERO SECTION */}
      <FadeUp>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#eef0ff] via-white to-[#cbd0ff]">
        {/* Decorative background circles */}
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#9299eb]/20 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-[#777ed8]/20 blur-3xl" />

        <div className="relative mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          {/* Hero text */}
          <div>
            <p className="mb-5 inline-flex rounded-full border border-[#a9aef0] bg-white/80 px-4 py-2 text-sm font-semibold text-[#6269ca] shadow-sm">
              Available 24/7 Across UAE
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">
              Reliable Passenger Transport{" "}
              <span className="text-[#777ed8]">Across Dubai</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Safe, comfortable and professional transportation for airport
              transfers, city tours, corporate travel and private vehicle hire.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-slate-700 sm:text-base">
              <span>✓ Professional Drivers</span>
              <span>✓ Clean Vehicles</span>
              <span>✓ 24/7 Service</span>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+971523147661"
                className="rounded-full bg-[#777ed8] px-8 py-4 text-center text-base font-bold text-white shadow-lg shadow-[#777ed8]/25 transition hover:-translate-y-1 hover:bg-[#6269ca]"
              >
                ☎ Call Now
              </a>

              <a
                href="https://wa.me/971523147661"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#25D366] px-8 py-4 text-center text-base font-bold text-white shadow-lg shadow-green-500/20 transition hover:-translate-y-1 hover:bg-[#1fb959]"
              >
                💬 WhatsApp Now
              </a>
            </div>
          </div>

          {/* Hero visual placeholder */}
          <div className="relative">
            <div className="rounded-[2rem] border border-white/80 bg-white/70 p-5 shadow-2xl backdrop-blur">
              <div className="flex min-h-[390px] flex-col items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-[#777ed8] to-[#aeb3f3] px-8 text-center text-white">
                <div className="mb-6 text-7xl">🚐</div>

                <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/80">
                  Nexus Point Passenger Transport
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Safe • Reliable • Comfortable
                </h2>

                <p className="mt-4 max-w-md leading-7 text-white/85">
                  Professional passenger transportation for individuals,
                  families, tourists and corporate clients.
                </p>

                <div className="mt-8 grid w-full max-w-md grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-white/15 px-3 py-4 backdrop-blur">
                    <p className="text-xl font-bold">24/7</p>
                    <p className="mt-1 text-xs text-white/80">Available</p>
                  </div>

                  <div className="rounded-2xl bg-white/15 px-3 py-4 backdrop-blur">
                    <p className="text-xl font-bold">Dubai</p>
                    <p className="mt-1 text-xs text-white/80">Service Area</p>
                  </div>

                  <div className="rounded-2xl bg-white/15 px-3 py-4 backdrop-blur">
                    <p className="text-0xl md:text-xl font-bold">Luxury Fleet</p>
                    <p className="mt-1 text-xs text-white/80">Premium Vehicles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-slate-200 md:grid-cols-4">
          <div className="bg-white px-5 py-7 text-center">
            <p className="font-bold text-slate-900">Available 24/7</p>
            <p className="mt-1 text-sm text-slate-500">Contact us anytime</p>
          </div>

          <div className="bg-white px-5 py-7 text-center">
            <p className="font-bold text-slate-900">Professional Drivers</p>
            <p className="mt-1 text-sm text-slate-500">
              Safe and courteous service
            </p>
          </div>

          <div className="bg-white px-5 py-7 text-center">
            <p className="font-bold text-slate-900">Comfortable Fleet</p>
            <p className="mt-1 text-sm text-slate-500">
              Clean passenger vehicles
            </p>
          </div>

          <div className="bg-white px-5 py-7 text-center">
            <p className="font-bold text-slate-900">Across UAE</p>
            <p className="mt-1 text-sm text-slate-500">
              Reliable local & Inter-city transport
            </p>
          </div>
        </div>
      </section>
      </FadeUp>
      {/* ABOUT SECTION */}
      <FadeUp>
<section id="about" className="bg-white px-5 py-20 lg:px-8">
  <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
    {/* About visual */}
    <div className="relative">
      <div className="rounded-[2rem] bg-gradient-to-br from-[#777ed8] to-[#aeb3f3] p-8 shadow-2xl sm:p-12">
        <Image
          src="/Dubai Pixel.jpg"
          alt="Nexus Point Passenger Transport"
          width={600}
          height={300}
          className="w-full rounded-2xl object-contain"
        />

        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white/15 p-5 text-center text-white backdrop-blur">
            <p className="text-2xl font-bold">Always On Time</p>
            <p className="mt-1 text-sm text-white/80">
              Punctual Every Journey
            </p>
          </div>

          <div className="rounded-2xl bg-white/15 p-5 text-center text-white backdrop-blur">
            <p className="text-2xl font-bold">Premium Comfort</p>
            <p className="mt-1 text-sm text-white/80">
              Smooth & Relaxing Rides
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* About text */}
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#777ed8]">
        About Nexus Point
      </p>

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
        Your Trusted Passenger Transport Partner
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Nexus Point Passenger Transport L.L.C provides safe, reliable and
        comfortable transportation for tourists, families, corporate clients
        and private groups.
      </p>

      <p className="mt-4 text-lg leading-8 text-slate-600">
        Our professional drivers and well-maintained vehicles are available
        around the clock for Airport transfers, Hotel transfers, Dubai city
        tours, Inter-city Transfer and Private vehicle hire.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="font-bold text-slate-950">
            ✓ Professional Drivers
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Courteous and experienced drivers focused on passenger safety.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="font-bold text-slate-950">
            ✓ Clean Vehicles
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Comfortable and well-maintained vehicles for every journey.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="font-bold text-slate-950">
            ✓ Reliable Service
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Punctual pickup and dependable passenger transportation.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="font-bold text-slate-950">
            ✓ Available 24/7
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Contact our team anytime by telephone or WhatsApp.
          </p>
        </div>
      </div>

      <div className="mt-9 flex flex-col gap-4 sm:flex-row">
        <a
          href="tel:+971523147661"
          className="rounded-full bg-[#777ed8] px-8 py-4 text-center font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#6269ca]"
        >
          ☎ Call Now
        </a>

        <a
          href="https://wa.me/971523147661"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[#25D366] px-8 py-4 text-center font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#1fb959]"
        >
          💬 WhatsApp Now
        </a>
      </div>
    </div>
  </div>
</section>
</FadeUp>
{/* SERVICES SECTION */}
<FadeUp>
<section id="services" className="bg-slate-50 px-5 py-20 lg:px-8">
  <div className="mx-auto max-w-7xl">
    {/* Section heading */}
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#777ed8]">
        Our Services
      </p>

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
        Transportation Solutions for Every Journey
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        Whether you are arriving in Dubai, exploring the city or travelling
        for business, Nexus Point offers safe, reliable and comfortable
        transportation tailored to your needs.
      </p>
    </div>

    {/* Service cards */}
    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Airport Transfers */}
<article className="group relative overflow-hidden rounded-3xl border border-slate-200 p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#aeb3f3] hover:shadow-xl">

  <Image
    src="/Airport Transfers.jpg"
    alt="Airport Transfers"
    fill
    className="object-cover transition brightness-90 duration-500 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-white/60"></div>

  <div className="relative z-10">
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef0ff] text-3xl transition group-hover:bg-[#777ed8]">
      ✈️
    </div>

    <h3 className="mt-6 text-2xl font-bold text-slate-950">
      Airport Transfers
    </h3>

    <p className="mt-3 leading-7 text-slate-700">
      Pickup and drop-off at Dubai airports with punctual service,
      comfortable vehicles and professional drivers.
    </p>

    <a
      href="https://wa.me/971523147661"
      target="_blank"
      rel="noreferrer"
      className="mt-6 inline-flex font-bold text-[#696fd2] transition hover:text-[#555bc1]"
    >
      Contact on WhatsApp →
    </a>
  </div>

</article>

      {/* Hotel Transfers */}
<article className="group relative overflow-hidden rounded-3xl border border-slate-200 p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#aeb3f3] hover:shadow-xl">

  <Image
    src="/Hotel Transfers.jpg"
    alt="Hotel Transfers"
    fill
    className="object-cover brightness-90 transition duration-500 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-white/60"></div>

  <div className="relative z-10">
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef0ff] text-3xl transition group-hover:bg-[#777ed8]">
      🏨
    </div>

    <h3 className="mt-6 text-2xl font-bold text-slate-950">
      Hotel Transfers
    </h3>

    <p className="mt-3 leading-7 text-slate-700">
      Comfortable transportation between airports, hotels and popular
      destinations across Dubai.
    </p>

    <a
      href="https://wa.me/971523147661"
      target="_blank"
      rel="noreferrer"
      className="mt-6 inline-flex font-bold text-[#696fd2] transition hover:text-[#555bc1]"
    >
      Contact on WhatsApp →
    </a>
  </div>

</article>

     {/* Dubai City Tours */}
<article className="group relative overflow-hidden rounded-3xl border border-slate-200 p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#aeb3f3] hover:shadow-xl">

  <Image
    src="/Dubai city tour.avif"
    alt="Dubai City Tours"
    fill
    className="object-cover brightness-90 transition duration-500 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-white/60"></div>

  <div className="relative z-10">
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef0ff] text-3xl transition group-hover:bg-[#777ed8]">
      🌆
    </div>

    <h3 className="mt-6 text-2xl font-bold text-slate-950">
      Dubai City Tours
    </h3>

    <p className="mt-3 leading-7 text-slate-700">
      Explore Dubai's famous landmarks with private, convenient and
      comfortable passenger transportation.
    </p>

    <a
      href="https://wa.me/971523147661"
      target="_blank"
      rel="noreferrer"
      className="mt-6 inline-flex font-bold text-[#696fd2] transition hover:text-[#555bc1]"
    >
      Contact on WhatsApp →
    </a>
  </div>

</article>

      {/* Corporate Transport */}
<article className="group relative overflow-hidden rounded-3xl border border-slate-200 p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#aeb3f3] hover:shadow-xl">

  <Image
    src="/dubai corporate.avif"
    alt="Corporate Transport"
    fill
    className="object-cover brightness-90 transition duration-500 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-white/60"></div>

  <div className="relative z-10">
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef0ff] text-3xl transition group-hover:bg-[#777ed8]">
      💼
    </div>

    <h3 className="mt-6 text-2xl font-bold text-slate-950">
      Corporate Transport
    </h3>

    <p className="mt-3 leading-7 text-slate-700">
      Professional transportation for business meetings, company guests,
      executives and corporate events.
    </p>

    <a
      href="https://wa.me/971523147661"
      target="_blank"
      rel="noreferrer"
      className="mt-6 inline-flex font-bold text-[#696fd2] transition hover:text-[#555bc1]"
    >
      Contact on WhatsApp →
    </a>
  </div>

</article>

      {/* Private Vehicle Hire */}
<article className="group relative overflow-hidden rounded-3xl border border-slate-200 p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#aeb3f3] hover:shadow-xl">

  <Image
    src="/Private Vehicle Hire.avif"
    alt="Private Vehicle Hire"
    fill
    className="object-cover brightness-90 transition duration-500 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-white/60"></div>

  <div className="relative z-10">
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef0ff] text-3xl transition group-hover:bg-[#777ed8]">
      🚐
    </div>

    <h3 className="mt-6 text-2xl font-bold text-slate-950">
      Private Vehicle Hire
    </h3>

    <p className="mt-3 leading-7 text-slate-700">
      Enjoy flexible private transportation with professional drivers,
      perfect for families, tourists, business travelers, airport
      transfers, shopping trips, and special occasions across Dubai and
      the UAE.
    </p>

    <a
      href="https://wa.me/971523147661"
      target="_blank"
      rel="noreferrer"
      className="mt-6 inline-flex font-bold text-[#696fd2] transition hover:text-[#555bc1]"
    >
      Contact on WhatsApp →
    </a>
  </div>

</article>

      {/* Intercity Travel */}
<article className="group relative overflow-hidden rounded-3xl border border-slate-200 p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#aeb3f3] hover:shadow-xl">

  <Image
    src="/Intercity.jpg"
    alt="Intercity Travel"
    fill
    className="object-cover brightness-90 transition duration-500 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-white/60"></div>

  <div className="relative z-10">
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef0ff] text-3xl transition group-hover:bg-[#777ed8]">
      🛣️
    </div>

    <h3 className="mt-6 text-2xl font-bold text-slate-950">
      Intercity Travel
    </h3>

    <p className="mt-3 leading-7 text-slate-700">
      Reliable passenger transportation between Dubai and other
      destinations throughout the UAE.
    </p>

    <a
      href="https://wa.me/971523147661"
      target="_blank"
      rel="noreferrer"
      className="mt-6 inline-flex font-bold text-[#696fd2] transition hover:text-[#555bc1]"
    >
      Contact on WhatsApp →
    </a>
  </div>

</article>
    </div>

    {/* Contact buttons */}
    <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <a
        href="tel:+971523147661"
        className="rounded-full bg-[#777ed8] px-8 py-4 text-center font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#6269ca]"
      >
        ☎ Call Now
      </a>

      <a
        href="https://wa.me/971523147661"
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-[#25D366] px-8 py-4 text-center font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#1fb959]"
      >
        💬 WhatsApp Now
      </a>
    </div>
  </div>
</section>
</FadeUp>
      {/* Why Choose Us */}
      <FadeUp>
      <section
        id="why-choose-us"
        className="py-24 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-purple-600 font-semibold uppercase tracking-widest">
              Why Choose Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              Why Choose Nexus Point?
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-6">
              We provide safe, reliable and comfortable passenger transport
              services with professional drivers and premium vehicles across
              Dubai and the UAE.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:-translate-y-2 hover:border-purple-600 hover:shadow-2xl transition duration-300">

              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-3xl mb-6">
                ⏰
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Always On Time
              </h3>

              <p className="text-gray-600">
                We value your time with punctual pickups and drop-offs,
                ensuring every journey starts and ends on schedule.
              </p>

            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:-translate-y-2 hover:border-purple-600 hover:shadow-2xl transition duration-300">

              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-3xl mb-6">
                👨‍✈️
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Professional Drivers
              </h3>

              <p className="text-gray-600">
                Our experienced and licensed drivers are committed to
                providing safe, courteous and reliable transportation.
              </p>

            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:-translate-y-2 hover:border-purple-600 hover:shadow-2xl transition duration-300">

              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-3xl mb-6">
                🚘
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Premium Fleet
              </h3>

              <p className="text-gray-600">
                Travel in modern, clean and well-maintained vehicles
                designed for maximum comfort and convenience.
              </p>

            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:-translate-y-2 hover:border-purple-600 hover:shadow-2xl transition duration-300">

              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-3xl mb-6">
                ⭐
              </div>

              <h3 className="text-2xl font-bold mb-4">
                24/7 Customer Support
              </h3>

              <p className="text-gray-600">
                Our support team is available around the clock to assist
                with bookings, inquiries and travel assistance whenever
                you need us.
              </p>

            </div>

          </div>

        </div>
      </section>
      </FadeUp>
      {/* Fleet Section */}
      <FadeUp>
<section id="fleet" className="bg-slate-50 px-6 py-24">
  <div className="mx-auto max-w-7xl">

    {/* Heading */}
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <span className="font-semibold uppercase tracking-widest text-[#777ed8]">
        Our Fleet
      </span>

      <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
        Premium Vehicles for Every Journey
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Choose from our clean, comfortable and well-maintained vehicles for
        airport transfers, city tours, corporate transport and group travel
        across the UAE.
      </p>
    </div>

    {/* First Four Cars */}
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

      {/* KIA */}
      <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="relative h-72 overflow-hidden">
          <Image
            src="/Kia 7 seater.jpeg"
            alt="KIA 7 seater passenger vehicle"
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-8">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className="text-2xl font-bold text-slate-900">
              KIA
            </h3>

            <span className="rounded-full bg-[#777ed8]/10 px-4 py-2 text-sm font-semibold text-[#555dc4]">
              7 Seater
            </span>
          </div>

          <p className="mb-7 leading-7 text-slate-600">
            Spacious and comfortable for families and airport transfers.
          </p>
          

          <a
            href="https://wa.me/971523147661?text=Hello%20Nexus%20Point,%20I%20would%20like%20to%20book%20the%20KIA%207%20Seater."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-[#777ed8] px-6 py-3 font-semibold text-white transition hover:bg-[#555dc4]"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Honda Odyssey */}
      <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="relative h-72 overflow-hidden">
          <Image
            src="/Honda 7.jpg"
            alt="Honda Odyssey 7 seater passenger vehicle"
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-8">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className="text-2xl font-bold text-slate-900">
              Honda Odyssey
            </h3>

            <span className="rounded-full bg-[#777ed8]/10 px-4 py-2 text-sm font-semibold text-[#555dc4]">
              7 Seater
            </span>
          </div>

          <p className="mb-7 leading-7 text-slate-600">
            Comfortable and spacious MPV for families, airport transfers and
            city travel.
          </p>

          <a
            href="https://wa.me/971523147661?text=Hello%20Nexus%20Point,%20I%20would%20like%20to%20book%20the%20Honda%20Odyssey."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-[#777ed8] px-6 py-3 font-semibold text-white transition hover:bg-[#555dc4]"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Lexus ES 300H */}
      <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="relative h-72 overflow-hidden">
          <Image
            src="/lexus white.webp"
            alt="Lexus ES 300H 4 seater luxury sedan"
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-8">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className="text-2xl font-bold text-slate-900">
              Lexus ES 300H
            </h3>

            <span className="rounded-full bg-[#777ed8]/10 px-4 py-2 text-sm font-semibold text-[#555dc4]">
              4 Seater
            </span>
          </div>

          <p className="mb-7 leading-7 text-slate-600">
            Executive hybrid sedan for VIP and business travel.
          </p>

          <a
            href="https://wa.me/971523147661?text=Hello%20Nexus%20Point,%20I%20would%20like%20to%20book%20the%20Lexus%20ES%20300H."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-[#777ed8] px-6 py-3 font-semibold text-white transition hover:bg-[#555dc4]"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Toyota Highlander */}
      <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="relative h-72 overflow-hidden">
          <Image
            src="/Highlander Black.png"
            alt="Toyota Highlander 7 seater passenger vehicle"
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-8">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className="text-2xl font-bold text-slate-900">
              Toyota Highlander
            </h3>

            <span className="rounded-full bg-[#777ed8]/10 px-4 py-2 text-sm font-semibold text-[#555dc4]">
              7 Seater
            </span>
          </div>

          <p className="mb-7 leading-7 text-slate-600">
            Premium SUV offering luxury, comfort and a smooth ride.
          </p>

          <a
            href="https://wa.me/971523147661?text=Hello%20Nexus%20Point,%20I%20would%20like%20to%20book%20the%20Toyota%20Highlander."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-[#777ed8] px-6 py-3 font-semibold text-white transition hover:bg-[#555dc4]"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>

    {/* Centered Toyota Hiace */}
    <div className="mx-auto mt-8 max-w-3xl">
      <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="relative h-80 overflow-hidden md:h-96">
          <Image
            src="/Hiace White.jpg"
            alt="Toyota Hiace 14 seater passenger vehicle"
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-8 md:p-10">
          <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-3xl font-bold text-slate-900">
              Toyota Hiace
            </h3>

            <span className="w-fit rounded-full bg-[#777ed8]/10 px-4 py-2 text-sm font-semibold text-[#555dc4]">
              14 Seater
            </span>
          </div>

          <p className="mb-7 text-lg leading-8 text-slate-600">
            Ideal for group travel, tours, corporate transportation and large
            family airport transfers.
          </p>

          <a
            href="https://wa.me/971523147661?text=Hello%20Nexus%20Point,%20I%20would%20like%20to%20book%20the%20Toyota%20Hiace."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-[#777ed8] px-7 py-3 font-semibold text-white transition hover:bg-[#555dc4]"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>

  </div>
</section>
</FadeUp>
{/* Contact Section */}
<FadeUp>
<section id="contact" className="bg-white px-6 py-24">
  <div className="mx-auto max-w-7xl">

    {/* Heading */}
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <span className="font-semibold uppercase tracking-widest text-[#777ed8]">
        Contact & Booking
      </span>

      <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
        We’re Here to Help You
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Have a question or ready to book your ride? Choose your preferred way
        to contact Nexus Point.
      </p>
    </div>

    {/* Contact Cards */}
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

      {/* Call Card */}
      <a
        href="tel:+971523147661"
        className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-[#777ed8] hover:shadow-2xl"
      >
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-[#777ed8] text-5xl text-white shadow-xl transition duration-300 group-hover:scale-110">
          📞
        </div>

        <h3 className="mt-8 text-2xl font-bold text-slate-900">
          Call Us
        </h3>

        <p className="mt-3 text-slate-600">
          Speak directly with our team
        </p>

        <div className="mt-8 rounded-full bg-[#777ed8] px-6 py-4 font-semibold text-white transition group-hover:bg-[#555dc4]">
          +971 52 314 7661
        </div>
      </a>

      {/* WhatsApp Card */}
      <a
        href="https://wa.me/971523147661?text=Hello%20Nexus%20Point,%20I%20would%20like%20to%20book%20a%20ride."
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl"
      >
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-green-500 text-5xl text-white shadow-xl transition duration-300 group-hover:scale-110">
          💬
        </div>

        <h3 className="mt-8 text-2xl font-bold text-slate-900">
          WhatsApp
        </h3>

        <p className="mt-3 text-slate-600">
          Chat with us instantly
        </p>

        <div className="mt-8 rounded-full bg-green-500 px-6 py-4 font-semibold text-white transition group-hover:bg-green-600">
          +971 52 314 7661
        </div>
      </a>

      {/* Email Card */}
      <a
        href="mailto:nexuspointtransport@gmail.com"
        className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:border-[#777ed8] hover:shadow-2xl"
      >
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-[#777ed8] text-5xl text-white shadow-xl transition duration-300 group-hover:scale-110">
          ✉️
        </div>

        <h3 className="mt-8 text-2xl font-bold text-slate-900">
          Email Us
        </h3>

        <p className="mt-3 text-slate-600">
          Send us an email anytime
        </p>

        <div className="mt-8 break-all rounded-full bg-[#777ed8] px-5 py-4 text-sm font-semibold text-white transition group-hover:bg-[#555dc4]">
          nexuspointtransport@gmail.com
        </div>
      </a>

    </div>

    {/* Bottom Information */}
    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">

      <div className="flex items-center gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-md">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#777ed8]/10 text-3xl">
          🕒
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-900">
            Available 24/7
          </h3>

          <p className="mt-2 text-slate-600">
            Our team is available anytime for bookings and travel assistance.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-md">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#777ed8]/10 text-3xl">
          🛡️
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-900">
            Safe, Reliable, On Time
          </h3>

          <p className="mt-2 text-slate-600">
            Your safety, comfort and punctuality are our priority on every trip.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>
</FadeUp>
    </main>
  );
}