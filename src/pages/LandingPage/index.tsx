import { useState } from "react";
// import { useTranslation } from "react-i18next";
// import PrinterXsImg from "@/assets/img/printer_xs.jpg";
// import PrinterXsVideo from "@/assets/video/printer_xs.mp4";
// import FacebookLogoPng from "@/assets/img/facebook.png";
import ExternalLink from "@/components/custom/ExternalLink";
import Navbar from "@/components/layout/Navbar";
// import InvoiceAppPreviewImg from "@/assets/img/app-preview.jpg";
import SwitchMenuButton from "@/components/custom/SwitchMenuButton";
import ContactForm from "@/components/layout/ContactForm";
import { FACEBOOK_PAGE_NAME, FACEBOOK_PAGE_URL } from "@/utils/constants";
import PricingCardSecondary from "@/components/custom/PricingCardSecondary";

import { Waypoint } from 'react-waypoint';
import ProductCard from "@/features/product/ui/ProductCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import ComputerCaseImg from '@/assets/img/products/computer_case.jpg';
import KeyCapsImg from '@/assets/img/products/keycaps_secondary.jpg';
import RAMImg from '@/assets/img/products/ram.jpg';

const LandingPage = () => {
  // const [highlightedCard, setHighlightedCard] = useState<number>(0);
  const [activateNavbarDarkMode, setActivateNavbaDarkMode] = useState<boolean>(false);
  const [selectedBoostType, setSelectedBoostType] = useState<string>("day");


  const switchMenuButtonActions = [
    {
      label: "Journée",
      value: "day",
      price: "6 000",
    },
    {
      label: "Semaine",
      value: "week",
      price: "40 000",
    },

  ];


  const products = [
    {
      name: "Boitier aquarium Huntkey GX760M",
      description: `Etat 8.5/10
        Compatible Carte mère Micro-ATX, Mini-ATX, 
        Mahzaka hatramin'ny ventiled 10
        Watercooling 360mm, 240mm sy 120mm.
        A voir et récuperer Anosizato Antanimenakely, akaikin'ny La Gastronomie Pizza.
        Livraison possible.
        N° 038 77 051 95`,
      image: ComputerCaseImg,
      link: "https://web.facebook.com/share/p/1EccdALX2z/",
    },
    {
      name: "RAM Bureau 8GB DDR3",
      description: `RAM Bureau 8GB DDR3 1600Mhz (2)
        RAM Bureau 8GB DDR3 Slim 1600Mhz(1)
        Ireo ihany no stock misy.
        Prix: 50.000ar ny iray 💥
        Toerana: Anosizato Antanimenakely akaikin'ny La Gastronomie Pizza. 
        Manao full test
        N° 0387705195 (na whatsapp)
      `,
      image: RAMImg,
      link: "https://web.facebook.com/share/p/18dGjZKQCs/",
    },
    {
      name: "Keycaps (87 keys)",
      description: `Keycaps complet ho an'ny clavier mecanique TKL (87 keys)
        Mp prix
        Tel/Whatsaapp : 038 77 051 95
        Antanimenakely, akaikin'ny La Gastronomie pizza
        Livraison possible.
      `,
      image: KeyCapsImg,
      link: "https://web.facebook.com/share/p/1E4zq7LECZ/",
    },
  ];
  // const handleCardClick = (index: number) => {
  //   setHighlightedCard(index);
  // };
  return (
    <div className="max-w-6x mx-auto md:px-0 bg-gray-200">
      <Navbar activateDarkMode={activateNavbarDarkMode} />

      <Waypoint
        onEnter={() => setActivateNavbaDarkMode(true)}
        onLeave={() => setActivateNavbaDarkMode(false)}
      >
        <div className="leading-relaxed px-4 lg:h-screen max-h-[1400px] bg--setup text-white">

          <div className="lg:flex lg:items-end lg:gap-4 max-w-6xl mx-auto h-full pt-20">

            <div className="my-8">
              <div className="text-xs font-medium">Retrouver nous aussi sur</div>
              <div className="my-4 mb-8">
                <ExternalLink to={FACEBOOK_PAGE_URL} label={FACEBOOK_PAGE_NAME} linkLabel="Facebook" />
              </div>
              <p className="text-center lg:text-start text-base lg:text-lg font-medium mb-4">
                Trouver les produits qu'il vous faut pour votre setup
              </p>

              <p className="text-center lg:text-start my-4 text-sm lg:text-base">Nous sommes basés à Madagascar 🇲🇬 qui vendent différentes
                articles sur Facebook et en parallèle aide les
                vendeurs à valoriser plus leur services et à gagner en visibilité sur Facebook,
                via notre application de générateur de facture expresso, et notre service de boost page facebook.
                ou encore la création de site internet, d'ailleurs notre site ici est
                fait à la main par nous-mêmes.
              </p>
            </div>

            <div className="lg:w-1/2 lg:flex-none p-8 lg:-skew-x-1 flex justify-center">
              <ProductCard {...products[0]} />
            </div>
          </div>

        </div>
      </Waypoint>

      <div id="offer_and_services" className="h-0 lg:h-10" />




      <div id='products' className="max-w-6xl mx-auto my-10 lg:my-10 px-4">
        <h1 className="text-lg lg:text-xl font-medium m-4 lg:m-8 text-center underline">
          Nos Produits
        </h1>


        <div className="lg:-skew-x-1">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 750: 2, 900: 3 }}
            gutterBreakPoints={{ 350: 12, 750: 16, 900: 24 }}
          >
            <Masonry>
              {
                products.map((product) => (
                  <ProductCard key={product.name} {...product} />
                ))
              }
            </Masonry>
          </ResponsiveMasonry>
        </div>

      </div>



      {/* <div className="h-[90vh]">
        <div className="bg-zinc-800 text-white/90 flex flex-col h-full">
          {/* <div className="w-10 h-1 bg-white rounded-md mx-auto m-2" /> *\/}

          <div className="flex-auto flex flex-col text-black lg:flex-row">
            <div className="flex-auto flex justify-center items-center gap-2">

              <div className="flex items-center justify-center gap-2">
                <AppLogo bgDark />
                <div>
                  <Smartphone color="white" />

                </div>
                <div>
                  <Printer color="white" />

                </div>
                {/* <img src={InvoiceAppPreviewImg} alt="Invoice App Preview" className=" h-full object-cover rounded-xl" /> *\/}
              </div>
            </div>
            <div className="blob--circle">
              <div />
            </div>
            <div className="pt-8 p-2 px-8 bg-white lg:flex flex-col lg:justify-center flex-nonem max-w-xl">
              <div className="text-center my-4">
                <h1 className="text-2xl font-medium">Mini imprimante thermique</h1>
              </div>

              <p className="my-4 text-slate-500 text-center">
                Idéale pour les entreprises, une mini-imprimante portable et facile à utiliser
                pour imprimer des factures, des bons de commande, des bons de livraison, etc.
                <br />
                Expresso
              </p>

              <div className="flex items-center justify-center gap-2">
                {/* <div className="flex items-center justify-center gap-2">
                  <div className="link__btn">
                    <Printer color="white" />
                  </div>
                  <div className="text-sm">Avec une <span className="text-nowrap">mini-imprimante</span></div>
                </div> *\/}
                <div className="flex items-center justify-center gap-2">

                  <div className="link__btn">
                    <PackageCheck color="white" />
                  </div>
                  <div className="text-sm">Livraison partout à Madagascar</div>
                </div>

              </div>



              <a
                href={MESSENGER_URL} target="_blank" rel="noopener noreferrer"
                className="flex-none p-2 mt-4 mb-2 bg-zinc-800 rounded-full text-white flex items-center justify-between hover:shadow-2xl hover:translate-y-[-4px] hover:transition-all duration-300">
                <div className="ml-4">
                  <div>
                    Discuter
                  </div>
                  <div className="text-sm text-slate-400">sur Messenger</div>
                </div>
                <div className="flex-none flex items-center gap-2">
                  <div>80 000 <span className="text-sm text-slate-400">Ariary</span></div>
                  <div className="link__btn">
                    <Facebook color="white" />
                  </div>
                </div>

              </a>
            </div>
            <div className="pt-8 p-2 px-8 bg-white lg:flex flex-col lg:justify-center flex-none max-w-xl shadow-xl  skew-x-2 hover:scale-85 transition-all duration-300 scale-90">
              <div className="text-center my-4">
                <h1 className="text-2xl font-medium">Application générateur de facture</h1>
              </div>

              <p className="mt-2 text-slate-500 text-center">
                Genérer une facture en un clique via des formulaires très simples.
              </p>
              <p className="mb-2 text-slate-500 text-center">
                Avec divers modèles de factures prêtes à être utilisées.
              </p>





              <Link
                to={"#"}
                // target="_blank" rel="noopener noreferrer"
                className="flex-none p-2 mt-4 mb-2 bg-zinc-800 rounded-full text-white flex items-center justify-between hover:shadow-2xl hover:translate-y-[-4px] hover:transition-all duration-300">
                <div className="ml-4">
                  <div>
                    Coming Soon
                  </div>
                  <div className="text-sm text-slate-400">sur Téléphone mobile</div>
                </div>
                <div className="flex-none flex items-center gap-2">
                  {/* <div>80000 <span className="text-sm text-slate-400">Ariary</span></div> *\/}
                  <div className="link__btn">
                    <Smartphone color="white" />
                  </div>
                </div>

              </Link>
            </div>

          </div>
        </div>
      </div> */}


      <div className="relative flex items-end justify-center lg:overflow-hidden max-w-6xl mx-auto">
        {/* <div className="imgs !absolute top-0 translate-y-20 opacity-80 lg:!hidden">
          {/* <img src={AdsFbCampaignBillImg} alt="Ads Facebook Campaign Bill"
                style={{
                  "campaing-index": 2
                } as React.CSSProperties} 
                className="-rotate-z-20"
                /> *\/}

          <img
            src={AdsFbCampaignSecImg}
            alt="Ads Facebook Campaign Sec"
            className="-rotate-12"
            style={
              {
                "campaing-index": 1,
              } as React.CSSProperties
            }
          />
          <img
            src={AdsFbCampaignImg}
            alt="Ads Facebook Campaign"
            style={
              {
                "campaing-index": 0,
              } as React.CSSProperties
            }
          />
        </div> */}
        <div className="bg-white m-2 rounded-xl shadow w-full z-20 p-4 lg:h-full lg:flex lg:flex-col lg:justify-center">

          <h1 className="text-lg lg:text-xl font-medium mb-2 lg:text-center">Boost page Facebook</h1>
          <p className="text-xs lg:text-sm text-slate-500 mb-8 lg:text-center">Confier-nous le boost de votre article, ou produit sur facebook et gagner en visibilité et notoriété</p>

          <div className="lg:hidden">
            <SwitchMenuButton actions={switchMenuButtonActions} handleChange={setSelectedBoostType} selectedValue={selectedBoostType} />
            <PricingCardSecondary price={switchMenuButtonActions.find(action => action.value === selectedBoostType)?.price || ""} dayDuration={selectedBoostType === "day" ? "j" : "7j"} />
          </div>


          <div className="hidden lg:flex gap-4 justify-center">
            {
              switchMenuButtonActions.map((action) => (
                <div className={`shadow-md p-4 rounded-xl border border-slate-100 ${action.value === "week" ? "bg-blue-500 text-white" : ""}`}>
                  <PricingCardSecondary key={action.value} price={action.price} dayDuration={action.value === "day" ? "j" : "7j"} variant={action.value === "week" ? "secondary" : "primary"} />
                </div>

              ))
            }
          </div>

        </div>
        {/* <div className="imgs translate-y-20 opacity-80 !hidden lg:!flex">
          {/* <img src={AdsFbCampaignBillImg} alt="Ads Facebook Campaign Bill"
                style={{
                  "campaing-index": 2
                } as React.CSSProperties} 
                className="-rotate-z-20"
                /> *\/}

          <img
            src={AdsFbCampaignSecImg}
            alt="Ads Facebook Campaign Sec"
            className="-rotate-12"
            style={
              {
                "campaing-index": 1,
              } as React.CSSProperties
            }
          />
          <img
            src={AdsFbCampaignImg}
            alt="Ads Facebook Campaign"
            style={
              {
                "campaing-index": 0,
              } as React.CSSProperties
            }
          />
        </div> */}
      </div>

      <div className="h-10" />

      <div id="contact_us" />
      <div className="">
        <ContactForm />
      </div>



      {/* <div className="flex flex-col">

        <div className="flex-auto lg:flex items-center gap-20 p-4 min-h-screen">
          <ul className="relative min-h-1/2 flex-auto">
            <li
              className={`card card--horizontal py-8 ${highlightedCard === 0 ? "card--highlighted" : ""
                }`}
              onClick={() => handleCardClick(0)}
            >
              <div className="shadow-xl p-4 rounded-xl border border-slate-100">
                <div className="p-4 bg-slate-100 rounded-md">
                  <h1 className="font-medium text-2xl mb-2 text-blue-400">
                    Boost page facebook
                  </h1>
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-5xl font-medium">6000 Ariary</h3>
                    <span className="text-sm text-slate-500">/ jour</span>
                  </div>

                  <div className="text-slate-500 mb-8">
                    Boost page facebook, booster votre vente ou votre profil
                    pour gagner en visibilité
                  </div>
                  <div>
                    <button className="bg-blue-500 text-white rounded-xl p-2 w-full">
                      Discuter
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <div className="imgs">
                  {/* <img src={AdsFbCampaignBillImg} alt="Ads Facebook Campaign Bill"
                style={{
                  "campaing-index": 2
                } as React.CSSProperties} 
                className="-rotate-z-20"
                /> *\/}

                  <img
                    src={AdsFbCampaignSecImg}
                    alt="Ads Facebook Campaign Sec"
                    className="-rotate-12"
                    style={
                      {
                        "campaing-index": 1,
                      } as React.CSSProperties
                    }
                  />
                  <img
                    src={AdsFbCampaignImg}
                    alt="Ads Facebook Campaign"
                    style={
                      {
                        "campaing-index": 0,
                      } as React.CSSProperties
                    }
                  />
                </div>
              </div>
            </li>
            <li
              className={`card card--horizontal py-8 ${highlightedCard === 1 ? "card--highlighted" : ""
                }`}
              onClick={() => handleCardClick(1)}
            >
              <div className="shadow-xl p-4 rounded-xl border border-slate-100">
                <div className="p-4 bg-slate-100 rounded-md">
                  <h1 className="font-medium text-2xl mb-2">
                    Facturer expresso
                  </h1>
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-5xl font-medium">80000 Ariary</h3>
                  </div>

                  <div className="text-slate-500 mb-8">
                    Facturer plus simplement: une application de generateur
                    de mini-facture muni d'un mini-imprimante qui te donne
                    ton facture expresso
                  </div>
                  <div>
                    <button className="bg-blue-500 text-white rounded-xl p-2 w-full">
                      Discuter
                    </button>
                  </div>
                </div>
              </div>
              {/* <video
                className="w-3xs object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={PrinterXsVideo} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video> *\/}
            </li>
            <li className="w-full">
              La création de site internet, d'ailleurs notre site ici est
              fait à la main par nous-mêmes
            </li>
          </ul>

        </div>

      </div> */}
    </div>
  );
};

export default LandingPage;
