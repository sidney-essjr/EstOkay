import EmailSVG from "../../assets/svg/EmailSVG";
import PhoneSVG from "../../assets/svg/PhoneSVG";
import WhatsSVG from "../../assets/svg/WhatsSVG";
import HomeFooterInfo from "./HomeFooterInfo";

export default function HomeFooter() {
  return (
    <footer className="flex min-h-28 w-full border-t border-gray-400 text-gray-500 items-center justify-center">
      <div className="sm:flex-1 text-center sm:text-right pr-3 sm:pr-6">
        <p className="text-xl">Precisa de ajuda?</p>
      </div>
      <div className="flex flex-col sm:flex-row md:pr-32 sm:pr-4">
        <HomeFooterInfo svg={<WhatsSVG />} info="(48) 99999-9999" />
        <HomeFooterInfo svg={<PhoneSVG />} info="(48) 55555-5555" />
        <HomeFooterInfo svg={<EmailSVG />} info="suporte@estokay.com.br" />
      </div>
    </footer>
  );
}
