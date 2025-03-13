import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import shutterShockImg from "../public/Images/shuttershock.svg";
import videoDesktop from "../public/Images/video-desktop.png";
import videoMobile from "../public/Images/video-mobile.png";
import image2 from "../public/Images/image2.png";
import image3 from "../public/Images/image3.png";
import key from "../public/Images/key.png";
import ribbon from "../public/Images/ribbon.png";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import FormComponent from "./components/formComponent";
import bigA from "../public/Images/bigA.png";
import backgroundBottom from "../public/Images/background-bottom.png";
import Image2Mobile from "../public/Images/image2Mobile.png";
import Image3Mobile from "../public/Images/image3Mobile.png";

export const metadata: Metadata = {
  title: "Eagle AI Labs - Digital Asset Investment",
  description:
    "Eagle AI Labs is revolutionizing crypto asset management through our ground-breaking partnership with a U.S.-regulated crypto hedge fund.",
};

export default function Home() {
  return (
    // Main wrapper
    <main>
      {/* Navigation component */}
      <Navbar />

      <div className="flex flex-col gap-24">
        {/* Hero Section - Visible on all screens */}
        <section
          style={{
            background: `url(${shutterShockImg.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="pt-24 max-w-[1301px] mx-auto px-5"
          aria-label="Hero section"
        >
          <div className="flex flex-col gap-6 md:gap-4 md:flex-row">
            {/* Hero text content - 2/3 width on desktop */}
            <div className="flex items-center justify-start md:basis-2/3">
              <div className="flex flex-col gap-6">
                <h1
                  style={{
                    backgroundImage:
                      "linear-gradient(132.39deg, #0207F7 0%, #14FFFF 68.66%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="text-5xl text-left lg:text-7xl leading-[100%] font-normal poppins lg:max-w-[80%]"
                >
                  Pioneering the Future of Digital Asset Investment
                </h1>
                <p className="text-white font-normal poppins text-left text-lg lg:max-w-[95%]">
                  Eagle AI Labs is revolutionizing crypto asset management
                  through our ground-breaking partnership with a U.S.-regulated
                  crypto hedge fund. This exclusive collaboration combines our
                  advanced AI-powered BTC prediction technology with
                  institutional-grade investment expertise.
                </p>
                <Link
                  className="rounded-[25px] hero-btn transition-colors w-fit px-7 py-2"
                  href={`/`}
                  aria-label="Register your interest now"
                >
                  Register your interest now
                </Link>
              </div>
            </div>

            {/* Hero image - 1/3 width on desktop, different images for mobile/desktop */}
            <div className="md:basis-1/3 flex items-center justify-center md:justify-start">
              <Image
                className="hidden md:block" // Desktop image
                src={videoDesktop}
                alt="Video presentation of Eagle AI Labs technology"
              />
              <Image
                className="md:hidden" // Mobile image
                src={videoMobile}
                alt="Video presentation of Eagle AI Labs technology"
              />
            </div>
          </div>
        </section>

        {/* Investment Era Section - Visible on all screens */}
        <section
          className="max-w-[1301px] mx-auto px-5"
          aria-label="Investment era section"
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Section image - 1/3 width on desktop, different images for mobile/desktop */}
            <div className="md:basis-1/3 flex justify-center md:justify-end">
              <Image
                src={image2}
                alt="Crypto investment visualization"
                className="hidden md:block" // Desktop image
              />
              <Image
                src={Image2Mobile}
                alt="Crypto investment visualization"
                className="md:hidden" // Mobile image
              />
            </div>

            {/* Section text content - 2/3 width on desktop */}
            <div className="flex items-center justify-start md:basis-2/3">
              <div className="flex flex-col items-start justify-center grow gap-6">
                <h2 className="text-white text-left text-4xl lg:text-5xl leading-[100%] tracking-[0] font-normal poppins">
                  A new era in crypto investment
                </h2>
                <p className="tracking-[0] text-left text-white text-lg poppins font-normal">
                  Our partnership represents a milestone in institutional crypto
                  adoption, featuring:
                </p>
                {/* Feature list */}
                <ul
                  className="poppins text-left text-base ml-6 list-disc md:ml-8 font-normal text-[#8CA0B3]"
                  aria-label="Features of our crypto investment partnership"
                >
                  {[
                    "Exclusive licensing of Eagle AI Labs' proprietary BTC price prediction algorithms",
                    "Significant equity stake in a fully regulated U.S hedge fund",
                    "Management team with proven track record of managing billions in AUM",
                    "Full compliance with U.S. regulatory requirements",
                    "Strategic timing aligned with anticipated favourable U.S. regulatory environment",
                  ].map((item, i) => (
                    <li key={i}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Desktop-only sections (lg+ screens) with background image */}
        <div
          style={{
            background: `url(${bigA.src})`,
            backgroundPosition: "right 100px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
          className="hidden lg:flex flex-col gap-24"
          aria-hidden="true" // Hidden on mobile
        >
          {/* Trade Dividends Section - Desktop version */}
          <section
            className="max-w-[1301px] mx-auto px-5"
            aria-label="Trade dividends section"
          >
            <div className="flex flex-col md:flex-row md:gap-8">
              {/* Section text content - 2/3 width */}
              <div className="flex items-center justify-start md:basis-2/3">
                <div className="flex flex-col items-start justify-center grow gap-6">
                  <h2 className="text-white text-4xl lg:text-5xl leading-[100%] tracking-[0] font-normal poppins">
                    Trade Dividends Rewarding our community
                  </h2>
                  <p className="tracking-[0] text-white text-lg poppins font-normal">
                    This institutional partnership enables the launch of our
                    innovative TradeDividends program:
                  </p>
                  {/* Dividend features list */}
                  <ul
                    className="list-disc open-sans ml-6 font-normal text-[#8CA0B3]"
                    aria-label="Benefits of our TradeDividends program"
                  >
                    {[
                      "Exclusive USDC rewards for $EAI stakers",
                      "Direct benefit from institutional trading success",
                      "Sustainable yield generation backed by hedge fund performance",
                    ].map((item, i) => (
                      <li key={i}>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section image - 1/3 width */}
              <div className="md:basis-1/3 flex justify-center md:justify-end">
                <Image
                  src={image3}
                  className="hidden md:block"
                  alt="Trade dividends visualization"
                />
              </div>
            </div>
          </section>

          {/* Registration Section - Desktop version */}
          <section
            className="max-w-[1301px] mx-auto px-5"
            aria-label="Registration section"
          >
            <h2 className="text-white text-4xl my-[30px] lg:text-5xl leading-[100%] tracking-[0] font-normal poppins text-left">
              Limited Availability - Register now to join wait List
            </h2>

            <div className="box-grid">
              {/* Information boxes container - left side */}
              <div className="box-left flex flex-col gap-5">
                {/* Limited Access Box */}
                <div
                  className="border flex flex-col py-4 gap-8 px-4 md:flex-row items-center justify-center md:items-start bg-transparent rounded-[10px] border-[#FFFFFF33]"
                  role="region"
                  aria-label="Limited access information"
                >
                  <div className="bg-[#364651] max-w-25 max-h-25 min-h-[67px] min-w-[67px]">
                    <Image
                      src={key}
                      className="w-fit bg-transparent rounded-full"
                      alt="Key icon representing limited access"
                    />
                  </div>
                  <div className="grow flex flex-col gap-2">
                    <h3 className="text-white text-lg leading-[100%] tracking-[0] font-normal poppins">
                      Limited Access Available
                    </h3>
                    <p className="open-sans font-normal text-base text-[#8CA0B3] md:max-w-[80%]">
                      Be among the first to access institutional-grade crypto
                      investment opportunities. Our exclusive waitlist is now
                      open for:
                    </p>

                    <ul
                      className="list-disc ml-8 open-sans flex flex-col gap-2 font-normal text-[#8CA0B3] text-base md:max-w-[80%]"
                      aria-label="Eligibility for waitlist"
                    >
                      {[
                        "Early Community Members",
                        "Significant equity stake in a fully regulated U.S hedge fund",
                        "Active $EAI Holders",
                      ].map((item, i) => (
                        <li key={i}>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="open-sans font-normal text-base text-[#8CA0B3]">
                      🔒 Waitlist Closes: January 31, 2025
                    </p>
                  </div>
                </div>

                {/* Benefits Box */}
                <div
                  className="border flex flex-col py-4 gap-8 px-4 md:flex-row items-center justify-center md:items-start bg-transparent rounded-[10px] border-[#FFFFFF33]"
                  role="region"
                  aria-label="Early signup benefits"
                >
                  <div className="bg-[#364651] max-w-25 max-h-25 min-h-[67px] min-w-[67px]">
                    <Image
                      src={ribbon}
                      className="w-fit bg-transparent rounded-full"
                      alt="Ribbon icon representing benefits"
                    />
                  </div>
                  <div className="grow flex flex-col gap-2">
                    <h3 className="text-white text-lg leading-[100%] tracking-[0] font-normal poppins">
                      Benefits of signing up early
                    </h3>
                    <ul
                      className="list-disc flex flex-col gap-2 ml-8 open-sans font-normal text-[#8CA0B3] text-base"
                      aria-label="List of early signup benefits"
                    >
                      {[
                        "Priority access when the fund launches",
                        "Early information about TradeDividends",
                        "Exclusive insights from our institutional trading team",
                        "Special allocation opportunities",
                      ].map((item, i) => (
                        <li key={i}>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Form component - right side */}
              <FormComponent />
            </div>
          </section>

          {/* Coming Soon Section - Desktop version */}
          <section
            style={{
              background: "linear-gradient(132.39deg, #0207F7 0%, #14FFFF 69%)",
            }}
            className="w-full"
            aria-label="Coming soon section"
          >
            <div className="max-w-[1301px] mx-auto py-8 flex flex-col gap-[30px] px-5">
              <h2 className="text-white px-5 text-4xl lg:text-5xl leading-[100%] tracking-[0] font-normal poppins">
                Coming Q1 2025
              </h2>
              <ul
                className="list-disc open-sans ml-6 font-normal text-[#E3E8F3] text-base"
                aria-label="Upcoming announcements"
              >
                {[
                  "Full fund details and officer announcements",
                  "TradeDividends program specifics",
                  "Management team with proven track record of managing billions in AUM",
                  "Institutional partnership roadmap",
                  "Regulatory framework overview",
                ].map((item, i) => (
                  <li key={i}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Mobile-only sections (< lg screens) */}
        <div className="lg:hidden flex flex-col gap-24">
          {/* Trade Dividends Section - Mobile version */}
          <section
            className="max-w-[1301px] mx-auto px-5"
            aria-label="Trade dividends section - mobile"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Section text content */}
              <div className="flex items-center justify-start md:basis-2/3">
                <div className="flex flex-col items-start justify-center grow gap-6">
                  <h2 className="text-white text-4xl lg:text-5xl leading-[100%] tracking-[0] font-normal poppins">
                    Trade Dividends Rewarding our community
                  </h2>
                  <p className="tracking-[0] text-white text-lg poppins font-normal">
                    This institutional partnership enables the launch of our
                    innovative TradeDividends program:
                  </p>
                  {/* Dividend features list */}
                  <ul
                    className="list-disc open-sans ml-6 font-normal text-[#8CA0B3]"
                    aria-label="Benefits of our TradeDividends program - mobile"
                  >
                    {[
                      "Exclusive USDC rewards for $EAI stakers",
                      "Direct benefit from institutional trading success",
                      "Sustainable yield generation backed by hedge fund performance",
                    ].map((item, i) => (
                      <li key={i}>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section image - Different images for mobile/tablet */}
              <div className="md:basis-1/3 flex justify-center md:justify-end">
                <Image
                  src={image3}
                  className="hidden md:block" // Tablet image
                  alt="Trade dividends visualization"
                />
                <Image
                  src={Image3Mobile}
                  className="md:hidden" // Mobile image
                  alt="Trade dividends visualization"
                />
              </div>
            </div>
          </section>

          {/* Registration Section - Mobile version */}
          <section
            className="max-w-[1301px] mx-auto px-5"
            aria-label="Registration section - mobile"
          >
            <h2 className="text-white text-4xl my-[30px] lg:text-5xl leading-[100%] tracking-[0] font-normal poppins text-left">
              Limited Availability - Register now to join wait List
            </h2>

            <div className="box-grid gap-8">
              {/* Information boxes container - stacked vertically on mobile */}
              <div className="box-left gap-8 flex-col">
                {/* Limited Access Box */}
                <div
                  className="border flex flex-col py-4 gap-8 px-4 md:flex-row items-center justify-center md:items-start bg-transparent rounded-[10px] border-[#FFFFFF33]"
                  role="region"
                  aria-label="Limited access information - mobile"
                >
                  <div className="bg-[#364651] max-w-25 max-h-25 min-h-[67px] min-w-[67px]">
                    <Image
                      src={key}
                      className="w-fit bg-transparent rounded-full"
                      alt="Key icon representing limited access"
                    />
                  </div>
                  <div className="grow flex flex-col gap-2">
                    <h3 className="text-white text-lg leading-[100%] tracking-[0] text-center font-normal poppins">
                      Limited Access Available
                    </h3>
                    <p className="open-sans font-normal text-base text-center text-[#8CA0B3] md:max-w-[80%]">
                      Be among the first to access institutional-grade crypto
                      investment opportunities. Our exclusive waitlist is now
                      open for:
                    </p>

                    <ul
                      className="list-disc ml-8 open-sans flex flex-col gap-2 font-normal text-[#8CA0B3] text-base md:max-w-[80%]"
                      aria-label="Eligibility for waitlist - mobile"
                    >
                      {[
                        "Early Community Members",
                        "Significant equity stake in a fully regulated U.S hedge fund",
                        "Active $EAI Holders",
                      ].map((item, i) => (
                        <li key={i}>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="open-sans font-normal text-base text-center text-[#8CA0B3]">
                      🔒 Waitlist Closes: January 31, 2025
                    </p>
                  </div>
                </div>

                {/* Benefits Box */}
                <div
                  className="border flex flex-col py-4 gap-8 px-4 md:flex-row items-center justify-center md:items-start bg-transparent rounded-[10px] border-[#FFFFFF33]"
                  role="region"
                  aria-label="Early signup benefits - mobile"
                >
                  <div className="bg-[#364651] max-w-25 max-h-25 min-h-[67px] min-w-[67px]">
                    <Image
                      src={ribbon}
                      className="w-fit bg-transparent rounded-full"
                      alt="Ribbon icon representing benefits"
                    />
                  </div>
                  <div className="grow flex flex-col gap-2">
                    <h3 className="text-white text-lg leading-[100%] text-center tracking-[0] font-normal poppins">
                      Benefits of signing up early
                    </h3>
                    <ul
                      className="list-disc flex flex-col gap-2 ml-8 open-sans font-normal text-[#8CA0B3] text-base"
                      aria-label="List of early signup benefits - mobile"
                    >
                      {[
                        "Priority access when the fund launches",
                        "Early information about TradeDividends",
                        "Exclusive insights from our institutional trading team",
                        "Special allocation opportunities",
                      ].map((item, i) => (
                        <li key={i}>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Form component - below on mobile */}
              <div className="mt-8" aria-label="Registration form - mobile">
                <FormComponent />
              </div>
            </div>
          </section>
        </div>

        {/* Coming Soon & Footer Section - Mobile version with background */}
        <div
          style={{
            background: `url(${backgroundBottom.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="lg:hidden px-5"
          aria-label="Coming soon and footer section - mobile"
        >
          {/* Coming Soon Section - Mobile version */}
          <section
            style={{
              background: "linear-gradient(132.39deg, #0207F7 0%, #14FFFF 69%)",
            }}
            className="w-full"
            aria-label="Coming soon section - mobile"
          >
            <div className="max-w-[1301px] mx-auto py-8 px-5 flex flex-col gap-[30px]">
              <h2 className="text-white text-4xl lg:text-5xl leading-[100%] tracking-[0] font-normal poppins">
                Coming Q1 2025
              </h2>
              <ul
                className="list-disc open-sans ml-6 font-normal text-[#E3E8F3] text-base"
                aria-label="Upcoming announcements - mobile"
              >
                {[
                  "Full fund details and officer announcements",
                  "TradeDividends program specifics",
                  "Management team with proven track record of managing billions in AUM",
                  "Institutional partnership roadmap",
                  "Regulatory framework overview",
                ].map((item, i) => (
                  <li key={i}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          {/* Footer - Mobile version */}
          <Footer />
        </div>
      </div>

      {/* Footer - Desktop version */}
      <div className="hidden lg:block">
        <Footer />
      </div>
    </main>
  );
}
