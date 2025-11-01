import svgPaths from "./svg-3ffjfp096g";
import imgPastorKumuyi311 from "../assets/e63d112cea8d304bc6fd2f9365bd4f93c00bde7d.png";

function Frame2121453186() {
  return <div className="absolute bg-[#4cafe8] h-[657px] left-[135px] rounded-[50px] top-[268px] w-[519px]" />;
}

function ImageExtract() {
  return (
    <div className="absolute contents left-0 top-0" data-name="image extract">
      <Frame2121453186 />
      <div className="absolute h-[887px] left-0 top-0 w-[789px]" data-name="Pastor-Kumuyi-3-1 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.28%] left-[-39.01%] max-w-none top-[4.73%] w-[197.49%]" src={imgPastorKumuyi311} />
        </div>
      </div>
    </div>
  );
}

function Frame2121453187() {
  return (
    <div className="absolute h-[71px] italic leading-[normal] left-[150px] text-[#2d2d2d] top-[874px] w-[483px]">
      <p className="absolute font-['TacticSans-RegIt:Italic', sans-serif] h-[21px] left-[calc(50%-241.5px)] text-[18px] top-[50px] w-[483px]">General Superintendent, Deeper Life Bible Church</p>
      <p className="absolute font-['TacticSans-MedIt:Italic', sans-serif] h-[42px] left-[calc(50%-236.5px)] text-[36px] top-0 w-[473px]">PASTOR DR W.F KUMUYI</p>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute contents left-[130px] top-[850px]" data-name="content">
      <div className="absolute bg-[#e3eff6] h-[118px] left-[130px] top-[850px] w-[524px]" />
      <Frame2121453187 />
    </div>
  );
}

function ImageContent() {
  return (
    <div className="absolute h-[968px] left-[-53px] top-[439px] w-[789px]" data-name="image content">
      <ImageExtract />
      <Content />
    </div>
  );
}

function After() {
  return <div className="absolute bg-[#27abc9] h-[40px] left-0 right-0 rounded-[20px] top-0" data-name="::after" />;
}

function TiAngleUp() {
  return (
    <div className="absolute h-[10px] left-[calc(50%-0.09px)] top-[13.33px] translate-x-[-50%] w-[8.993px]" data-name="ti-angle-up">
      <p className="absolute font-['Inter:Regular', sans-serif] font-normal leading-[9px] left-[4.5px] not-italic text-[9px] text-center text-white top-0 translate-x-[-50%] w-[8.993px]"></p>
    </div>
  );
}

function LinkBackToTop() {
  return (
    <div className="absolute bg-[#197084] h-[40px] left-[56.6%] right-[40.47%] rounded-[20px] top-[116px]" data-name="Link back-to-top">
      <After />
      <TiAngleUp />
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="bg-[rgba(28,78,128,0.08)] relative size-full">
      <p className="absolute font-['TacticSans-UltIt:Italic', sans-serif] h-[226px] italic leading-[normal] left-[calc(50%+162px)] text-[#2d2d2d] text-[96px] top-[80px] w-[510px]">What We Believe”</p>
      <p className="absolute font-['TacticSans-MedIt:Italic', sans-serif] h-[464px] italic leading-[normal] left-[calc(50%+672px)] text-[#2d2d2d] text-[48px] text-right top-[494px] translate-x-[-100%] w-[802px]">
        “All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness:
        <br aria-hidden="true" />
        {` That the man of God may be perfect, throughly furnished unto all good works.”`}
      </p>
      <p className="absolute font-['TacticSans-MedIt:Italic', sans-serif] h-[42px] italic leading-[normal] left-[calc(50%+672px)] text-[#1c4e80] text-[36px] text-right top-[982px] translate-x-[-100%] w-[466px]">Timothy 3:16–17 (KJV)</p>
      <p className="absolute font-['TacticSans-RegIt:Italic', sans-serif] h-[116px] italic leading-[normal] left-[calc(50%-399px)] text-[#2d2d2d] text-6 text-center top-[330px] translate-x-[-50%] w-[546px]">We take the Bible as the final authority in all matters concerning Christian life and practice. Learn about the core doctrines that guide our teaching and worship.</p>
      <ImageContent />
      <div className="absolute h-[100px] left-[990px] top-[1072px] w-[295px]">
        <div className="absolute inset-[-20%_-10.75%_-60%_-13.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 367 180">
            <g filter="url(#filter0_d_5_181)" id="Rectangle 8">
              <path d={svgPaths.pae299c0} fill="#4CAFE8" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="180" id="filter0_d_5_181" width="366.722" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="20" />
                <feGaussianBlur stdDeviation="20" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_181" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_181" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <LinkBackToTop />
    </div>
  );
}