import svgPaths from "./svg-offc5ky6ha";

function After() {
  return <div className="absolute bg-[#27abc9] h-[40px] left-0 right-0 rounded-[20px] top-0" data-name="::after" />;
}

function TiAngleUp() {
  return (
    <div className="absolute h-[10px] left-[calc(50%-0.09px)] top-[13.33px] translate-x-[-50%] w-[8.993px]" data-name="ti-angle-up">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[9px] left-[4.5px] not-italic text-[9px] text-center text-white top-0 translate-x-[-50%] w-[8.993px]"></p>
    </div>
  );
}

function LinkBackToTop() {
  return (
    <div className="absolute bg-[#197084] h-[40px] left-[3.33%] right-[93.74%] rounded-[20px] top-[118px]" data-name="Link back-to-top">
      <After />
      <TiAngleUp />
    </div>
  );
}

export default function Frame2121453209() {
  return (
    <div className="bg-[#fdfdfd] relative size-full">
      <p className="absolute font-['TacticSans-UltIt:Italic',_sans-serif] h-[115px] italic leading-[normal] left-[calc(50%-605px)] text-[#2d2d2d] text-[96px] top-[80px] w-[956px]">Upcoming Events</p>
      <LinkBackToTop />
      <p className="absolute font-['TacticSans-RegIt:Italic',_sans-serif] h-[348px] italic leading-[normal] left-[calc(50%-605px)] text-[#2d2d2d] text-[48px] top-[243px] w-[802px]">Stay connected with our upcoming programs designed to uplift your spirit, deepen your knowledge of God’s Word, and prepare you for His coming.</p>
      <div className="absolute h-[100px] left-[215px] top-[639px] w-[295px]">
        <div className="absolute inset-[-20%_-10.75%_-60%_-13.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 367 180">
            <g filter="url(#filter0_d_160_229)" id="Rectangle 8">
              <path d={svgPaths.pae299c0} fill="#4CAFE8" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="180" id="filter0_d_160_229" width="366.722" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="20" />
                <feGaussianBlur stdDeviation="20" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_160_229" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_160_229" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}