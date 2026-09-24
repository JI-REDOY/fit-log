import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="container-fitlog py-6 sm:py-8">
      <div className="card-dark overflow-hidden rounded-2xl px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">

          {/* Left Content */}
          <div className="flex flex-col gap-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              WORKOUT LIBRARY
            </p>

            <h1 className="font-heading text-4xl font-bold uppercase leading-[1.05] text-white sm:text-5xl">
              TRAIN WITH INTENT. LOG
              <br />
              EVERY SET.
            </h1>

            <p className="max-w-lg text-sm text-[var(--text-secondary)] sm:text-base">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <div>
              <Link
                href="#library"
                className="inline-flex items-center rounded-md bg-accent px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-opacity hover:opacity-90 sm:text-sm"
              >
                BROWSE WORKOUTS
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/banner.png"
              alt="Athlete working out"
              width={500}
              height={500}
              priority
              className="h-auto w-full max-w-xs object-contain sm:max-w-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;