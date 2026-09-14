import { finalCta, founder, site } from "../../content/site";
import { assetUrl } from "../../utils/asset";
import { ArrowRight } from "./primitives";

function PinterestIcon({ className = "size-[15px]" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.357-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
    </svg>
  );
}

function BehanceIcon({ className = "size-[15px]" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.171 3-4.144 0-6.555-3.045-6.555-6.507 0-3.834 2.709-6.493 6.455-6.493 3.904 0 6.002 2.825 5.762 6.643h-9.288c.078 2.052 1.545 3.491 3.738 3.491 1.761 0 2.955-.866 3.435-1.92l1.624.786zm-8.293-5.289h6.398c-.131-1.748-1.425-2.617-3.059-2.617-1.803 0-3.093.896-3.339 2.617zm-10.433 8.289h-5v-14h5.688c3.279 0 5.04 1.341 5.04 3.864 0 1.523-.74 2.645-2.029 3.197 1.637.525 2.501 1.83 2.501 3.639 0 2.684-1.929 4.3-6.2 4.3zm-2.072-8.309h2.392c1.782 0 2.812-.663 2.812-1.854 0-1.229-1.071-1.837-2.812-1.837h-2.392v3.691zm0 6.309h2.571c1.947 0 3.256-.707 3.256-2.146 0-1.477-1.282-2.163-3.256-2.163h-2.571v4.309z" />
    </svg>
  );
}

function LinkedInIcon({ className = "size-[14px]" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63Z" />
    </svg>
  );
}

function InstagramIcon({ className = "size-[15px]" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwixtersWatermark({ className = "" }) {
  return (
    <svg
      viewBox="0 0 328.12 107.85"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <g>
        <path d="M58.54,93.12c-.78.02-1.47,1.03-1.41,2.86.11,3.93-3.06,7.5-6.84,7.61-3.99.11-6.38-3.75-6.57-10.44-.61-21.29,21.16-65.26,35.02-79.03.62-.61.76-.81.83-1.01,5.47-.75,10.44-1.22,14.36-1.33,10.89-.31,17.51,1.86,17.65,6.51.04,1.24.48,1.76,1.19,1.74,2.92.05,7.1-8.53,6.98-12.46-.15-5.31-8.21-7.9-20.81-7.54-6.91.2-15.93,1.31-25.63,3.29-1.82-1.39-3.56-2.32-4.84-2.29-1.64.05-3.87,1.82-6.35,4.84C31.89,13.55-.6,28.71,0,49.94c.25,8.65,5.83,14.39,13.66,14.17,2.99-.09,4.46-.98,4.44-1.83-.02-.72-1.11-1.35-3.17-1.29-4.84.14-8.01-3.31-8.17-8.95-.44-15.53,22.89-26.88,46.86-33.47-11.4,19.93-23.81,52.02-23.31,69.58.32,11.27,6.06,20.02,17.95,19.68,8.33-.24,12.48-4.82,12.31-10.58-.08-2.82-1.12-4.16-2.04-4.14Z" />
        <path d="M128.42,30.63c2.25,0,2.38-.53,2.38-1.32,0-4.29,4.29-13.67,6.67-13.67.53,0,.99-.53.99-.99,0-2.05-7.07-6.47-9.58-6.47-3.63,0-9.58,9.51-9.58,15,0,4.29,3.77,7.46,9.12,7.46Z" />
        <path d="M165.21,46.54c-.92,0-1.89,1.21-2.59,3.03-1.24,3.29-15.83,36.75-16.58,36.75-1.35,0-3.67-11.27-5.29-22.45,7.72-11.61,15.29-21.15,17.39-21.15.54,0,1.19.61,1.84.61.49,0,.54-.26.54-.69,0-2.95-2.21-6.5-3.78-6.5-2.38,0-9.51,8.41-17.12,19.24-.37-3.25-.62-6.24-.71-8.63,1.49-2.46,2.43-4.24,2.47-4.82.06-.56-.5-1.07-1.2-1.21.02-.08.03-.16.03-.24,0-1.82-5.19-4.33-8.59-4.33-1.62,0-3.49.56-4.38,2.24-1.15-2.53-6.89-5.86-10.33-6.09-1.03-.74-2.12-1.3-2.97-1.3-5.45,0-22.33,24.07-26.88,36.38,1.32-8,4.79-20.83,6.34-20.83.24,0,.54-.34.54-.68,0-1.76-5.69-4.82-9.22-4.82-2.15,0-13.29,14.98-17.24,25.31,1.74-8.97,5.81-23.33,7.96-23.33.3,0,.54-.28.54-.62,0-1.76-7.12-4.82-10.71-4.82-2.04,0-9.88,23.5-9.88,29.8,0,3.29,8.02,8.29,12.69,8.29,1.14,0,1.2-.28,1.2-.79,0-4.14,4.19-12.54,8.56-19.47-1.5,4.48-2.63,9.19-2.63,11.92,0,3.01,8.86,8.34,13.83,8.34,1.26,0,1.68-.34,1.68-1.36,0-5.69,12.96-26.66,21.43-34.98-4.26,9.59-9.6,25.97-9.6,29.42,0,4.1,7.27,7.93,14.14,7.93,1.09,0,6.37-6.75,11.77-14.31.31,3.09.63,6.14.96,8.88-7.02,11.7-12.53,23.23-12.53,28.77,0,2.51,1.13,3.99,2.65,3.99.97,0,1.51-.61,1.51-2.08,0-3.9,4.11-12.48,9.62-22.01.05.43.11.78.22,1.04,1.73,6.93,8.91,13.35,15.45,13.35,1.94,0,20.04-42.29,20.2-46.11.05-.87-.59-1.65-1.3-1.65ZM116.33,70.59c-.13,0-.2-.4-.2-.73,0-3.22,8.02-29.32,10.59-29.65-.01.17-.03.34-.03.52,0,1.46.45,7.68,1.1,14.86-5.25,7.31-10.95,15.01-11.46,15.01Z" />
        <path d="M328.12,24.79c0-10.14-4.05-17.08-9.91-17.08-2.34,0-3.3,1.09-3.3,2.11s.91,1.64,2.29,1.64c3.46,0,5.91,3.9,5.91,8.97,0,10.53-10.23,24.57-27.23,37.06-1.76-3.9-3.04-7.33-3.04-9.36,0-4.99,8.26-15.68,11.67-15.68,1.07,0,2.24,1.09,2.24,2.42,0,.78.37,1.33.8,1.33.59,0,1.28-.86,1.28-3.2,0-6.79-6.02-12.4-9.64-12.4-5.75,0-16.15,14.2-16.15,22.55,0,1.92.56,4.18,1.43,6.57-3.2,3.14-7.33,6.94-7.86,6.94-.11,0-.17-.17-.17-.62,0-3.24,2.78-9.82,4.77-9.82.62,0,1.19-.68,1.19-1.36,0-2.55-8.06-6.24-9.99-6.24-3.24,0-12.03,11.07-17.99,21,2.89-7.78,6.64-15.55,7.78-15.55.17,0,.4-.28.4-.62,0-2.1-7.49-4.82-10.1-4.82-1.23,0-3.67,4.85-6.07,10.73-5.02,7.43-14.71,20.01-21.17,20.01-2.55,0-4.14-1.99-4.14-5.28,0-7.83,8.85-18.62,15.04-19.3-1.02,6.98-8.29,11.81-11.98,11.81-.74,0-1.14.17-1.14.4,0,.74,3.35,2.38,5.62,2.38,4.43,0,13.11-6.58,13.11-14.42,0-4.6-5.79-8.91-10.84-8.91-5.84,0-12.57,5.75-16.64,12.58-1.85-5.08-5.49-8.22-10.55-8.22-2.68,0-3.89.89-3.89,1.72,0,.64.89,1.34,2.61,1.34,4.46,0,7.27,4.65,7.27,8.86,0,10.46-17.02,29.78-27.99,29.78-2.87,0-4.97-1.28-4.97-5.16,0-5.04,7.59-25.5,13.96-39.28,2.1.19,4.27.25,6.38.25,16.83,0,27.48-5.1,27.48-13.07,0-2.17-.76-3.57-1.98-3.57-1.02,0-1.72,1.08-1.72,2.68,0,5.23-7.78,8.93-19.13,8.93-2.93,0-5.74-.25-8.35-.64,2.3-4.59,4.27-7.59,5.23-7.59.45,0,1.15-.7,1.15-1.34,0-2.23-9.56-6.18-11.09-6.18-1.72,0-4.78,4.78-8.1,11.6-3.89-1.47-7.52-3.12-10.97-4.72-7.14-3.38-13.52-6.31-19.83-6.31-10.9,0-16.83,8.86-16.83,13.07,0,1.28.57,2.1,1.72,2.1,2.81,0-.06-4.97,7.08-4.97,4.08,0,9.88,1.47,16.2,3.25,6.25,1.79,12.56,3.44,19.32,4.72-6.5,14.67-13.01,33.35-13.01,37.75,0,8.86,7.91,13.9,19.45,13.9,14.12,0,25.3-7.51,29.8-18.78,2.52,3.34,6.33,5.45,10.03,5.45,6.25,0,12.97-5.98,18.39-12.41-1.13,3.6-1.88,6.51-1.88,7.66,0,3.86,8.17,7.26,10.27,7.26.62,0,1.02-.28,1.02-1.19,0-3.86,7.49-16.8,14.93-26.22-.62,1.7-.96,3.52-.96,5.16,0,2.38,7.09,6.19,11.58,6.19,1.14,0,5.33-3.67,9-7.44,1.28,2.86,2.81,5.74,4.18,8.29-6.18,3.98-13.48,9.36-13.48,14.28,0,7.1,5.86,12.64,9.38,12.64,4.37,0,14.23-8.82,14.23-16.69,0-2.26-.8-5.15-1.92-8.11,18.28-6.48,29.84-21.53,29.84-38.77ZM281.23,78.15c-1.07,0-1.81-.7-1.81-1.95,0-3.04,5.12-7.1,12.15-10.22.05.39.05.62.05.94,0,4.99-7.3,11.23-10.39,11.23Z" />
      </g>
    </svg>
  );
}

export function FinalCta() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative z-20 w-full px-2.5 pb-6 pt-2 sm:px-4 sm:pb-8 sm:pt-4 md:px-6"
    >
      <div
        className="group relative mx-auto flex min-h-[88vh] sm:min-h-[92vh] lg:min-h-[94vh] w-full max-w-[1720px] flex-col justify-between overflow-hidden rounded-[30px] sm:rounded-[44px] border border-white/[0.08] bg-[#070709] shadow-[0_-25px_80px_rgba(0,0,0,0.5),0_30px_100px_rgba(0,0,0,0.6)] transition-all duration-300 ease-out"
      >
        {/* Photorealistic Hero lighting overlay with controlled low opacity */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] select-none overflow-hidden"
          style={{
            WebkitMaskImage: "radial-gradient(ellipse 115% 100% at 15% 15%, black 40%, rgba(0,0,0,0.4) 75%, transparent 100%)",
            maskImage: "radial-gradient(ellipse 115% 100% at 15% 15%, black 40%, rgba(0,0,0,0.4) 75%, transparent 100%)"
          }}
        >
          <img
            src={assetUrl("/assets/hero-lighting.png")}
            alt=""
            width={1759}
            height={894}
            loading="eager"
            decoding="async"
            className="size-full object-cover object-left-top opacity-[0.08] sm:opacity-[0.10] transition-transform duration-700 ease-out group-hover:scale-[1.01]"
          />
        </div>

        {/* Tactile micro-texture film grain */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[2] select-none opacity-15 mix-blend-overlay"
          style={{
            backgroundImage: `url("${assetUrl("/assets/micro-texture.png")}")`,
            backgroundRepeat: "repeat"
          }}
        />

        {/* Center Main Content */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-24 pb-12 text-center sm:pt-32 sm:pb-16">
          {/* Cursive script wordmark with horizontal wings */}
          <div className="flex items-center justify-center gap-5 sm:gap-7">
            <span
              aria-hidden="true"
              className="h-px w-[68px] sm:w-[120px] bg-gradient-to-r from-transparent to-white/30"
            />
            <TwixtersWatermark className="h-[30px] sm:h-[34px] w-auto text-white select-none" />
            <span
              aria-hidden="true"
              className="h-px w-[68px] sm:w-[120px] bg-gradient-to-l from-transparent to-white/30"
            />
          </div>

          {/* Heading matching video: "Let's" in pure white, "Connect" in muted silver */}
          <h2
            id="contact-heading"
            className="mt-6 sm:mt-7 text-[clamp(3.18rem,8.2vw,6.5rem)] font-normal leading-[1.06] tracking-[-0.035em]"
          >
            <span className="text-white">{finalCta.heading.plain}</span>
            <span className="text-[#8e8e93]">{finalCta.heading.muted}</span>
          </h2>

          {/* Body copy matching reference video */}
          <p className="mx-auto mt-5 sm:mt-6 max-w-[40rem] text-[18px] sm:text-[19.8px] leading-[1.62] text-white/70 font-normal">
            Feel free to contact me if having any questions.
            <br className="hidden sm:block" /> I'm available for new projects or just for chatting.
          </p>

          {/* Double-pill CTA button matching reference video & image */}
          <div className="mt-8 sm:mt-10">
            <a
              href={finalCta.cta.href}
              target="_blank"
              rel="noreferrer"
              className="group/btn inline-flex items-center justify-center rounded-full border border-[#3a3a3c] bg-[#161618] p-1.5 transition-all duration-300 hover:border-white/40"
            >
              <span className="flex items-center gap-2.5 rounded-full bg-black px-6 sm:px-7 py-2.5 sm:py-3 text-[14.5px] sm:text-[15px] font-medium tracking-tight text-white transition-transform duration-300 group-hover/btn:scale-[1.01]">
                {finalCta.cta.label}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </span>
            </a>
          </div>
        </div>

        {/* Footer inside the card matching reference image */}
        <footer className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 w-full px-6 sm:px-12 pb-7 sm:pb-9">
          <p className="border-y border-white/20 py-1.5 sm:py-2 px-1 text-[12px] sm:text-[12.5px] tracking-tight text-white/70">
            {site.copyright}
          </p>

          <ul className="flex items-center gap-2.5 sm:gap-3">
            <li>
              <a
                href={site.socials?.behance || "https://www.behance.net/rajshegaonkar"}
                target="_blank"
                rel="noreferrer"
                aria-label="Behance"
                className="flex size-9 sm:size-10 items-center justify-center rounded-full border border-white/15 bg-[#141416] text-white/70 transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                <BehanceIcon />
              </a>
            </li>
            <li>
              <a
                href={site.socials?.pinterest || "https://pin.it/7mAOBTb8Z"}
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                className="flex size-9 sm:size-10 items-center justify-center rounded-full border border-white/15 bg-[#141416] text-white/70 transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                <PinterestIcon />
              </a>
            </li>
            <li>
              <a
                href={site.socials?.linkedin || "https://www.linkedin.com/company/twixters-co/"}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex size-9 sm:size-10 items-center justify-center rounded-full border border-white/15 bg-[#141416] text-white/70 transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a
                href={site.socials?.instagram || "https://www.instagram.com/twixters.co?stkn=MWk1YTM1d2dmZWcwYg%3D%3D&utm_source=qr"}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex size-9 sm:size-10 items-center justify-center rounded-full border border-white/15 bg-[#141416] text-white/70 transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  );
}
