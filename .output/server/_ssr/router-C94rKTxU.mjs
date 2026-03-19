import { c as createRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, O as Outlet, H as HeadContent, S as Scripts } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_chunks/_libs/react.mjs";
import { K as Ko } from "../_chunks/_libs/@hugeicons/core-free-icons.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { c as createInstance } from "../_libs/i18next.mjs";
import { B as Browser } from "../_libs/_jlZyyM7A.mjs";
import { B as Backend } from "../_libs/i18next-http-backend.mjs";
import { H as HugeiconsIcon } from "../_chunks/_libs/@hugeicons/react.mjs";
import { i as initReactI18next } from "../_libs/react-i18next.mjs";
import "../_chunks/_libs/@tanstack/router-core.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_chunks/_libs/@tanstack/history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/tiny-warning.mjs";
import "../_chunks/_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/use-sync-external-store.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Card({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        "group/card flex flex-col gap-6 overflow-hidden rounded-xl bg-card py-6 text-card-foreground text-sm shadow-xs ring-1 ring-foreground/10 has-[>img:first-child]:pt-0 data-[size=sm]:gap-4 data-[size=sm]:py-4 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
        className
      ),
      "data-size": size,
      "data-slot": "card",
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn("px-6 group-data-[size=sm]/card:px-4", className),
      "data-slot": "card-content",
      ...props
    }
  );
}
function NotFound() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen w-full items-center justify-center bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mx-4 w-full max-w-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HugeiconsIcon,
      {
        className: "h-8 w-8 text-red-500",
        icon: Ko
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-bold text-2xl text-gray-900", children: "404 Page Not Found" })
  ] }) }) }) });
}
const welcome$1 = "Welcome to our app";
const description$1 = "Your go-to multilingual React application.";
const hero$1 = { "badge": "Sierra Leone's Premier Mining Partner", "heading": { "part1": "Mining Logistics", "part2": "Leaders in the Region" }, "description": "From Ore Haulage to Heavy Equipment Rentals. We deliver capacity, safety, and efficiency to your operations.", "button": { "quote": "Request a Quote", "fleet": "View Rental Fleet" }, "image": { "alt": "Topographical Map Pattern" } };
const services$1 = { "heading": "Core Services", "description": "Comprehensive mining support solutions tailored to the challenging terrain of Sierra Leone.", "items": { "oreHaulage": { "title": "Ore Loading & Haulage", "description": "High-capacity tipper trucks designed for efficient ore movement across rugged terrain. We ensure your yield reaches its destination safely." }, "drilling": { "title": "Mine Drilling", "description": "Precision drilling services with experienced crews and state-of-the-art equipment for exploration and production." }, "logistics": { "title": "Logistics", "description": "Safe flatbed and container movement across the region. We handle the complex logistics so you can focus on mining." } } };
const rental$1 = { "heading": "Fleet Available for Rent", "description": "Modern, well-maintained heavy machinery ready for deployment.", "button": { "fleet": "View Full Fleet" }, "items": { "excavators": { "title": "Excavators", "description": "Heavy duty excavators for large scale earth moving." }, "bulldozers": { "title": "Bulldozers", "description": "Powerful bulldozers for site clearing and preparation." }, "loaders": { "title": "Front Loaders", "description": "Versatile loaders for material handling and loading." }, "dumpTrucks": { "title": "Heavy Dump Trucks", "description": "6x6 and 8x8 configurations for all terrains." } }, "card": { "viewSpecs": "View Specs" } };
const keyAttributes$1 = { "heading": "Why Choose Us", "description": "Our commitment to excellence drives everything we do.", "items": { "capacity": { "title": "Capacity", "description": "Our trucks offer **superior capacity** for heavy-duty transportation needs.", "boldText": "superior capacity" }, "reliability": { "title": "Reliability", "description": "Engineered for **maximum reliability**, ensuring consistent performance on-site.", "boldText": "maximum reliability" }, "efficiency": { "title": "Efficiency", "description": "Designed to enhance **operational efficiency** and reduce transit times.", "boldText": "operational efficiency" }, "versatility": { "title": "Versatility", "description": "Our trucks are **versatile** for various hauling applications.", "boldText": "versatile" } } };
const cta$1 = { "heading": "Ready to Optimize Your Operations?", "description": "Contact us today to discuss your mining logistics and equipment needs.", "button": "Get in Touch" };
const nav$1 = { "links": { "home": "Home", "fleetRentals": "Fleet Rentals", "services": "Services", "contact": "Contact", "aboutUs": "About Us" }, "button": { "quote": "Request Quote" }, "mobile": { "language": "Language" } };
const footer$1 = { "description": "Delivering capacity, safety, and efficiency to Sierra Leone's mining sector.", "sections": { "contact": "Contact", "quickLinks": "Quick Links" }, "location": "Sierra Leone", "links": { "home": "Home", "services": "Services", "contact": "Contact", "equipmentRental": "Equipment Rental" }, "copyright": "Continental Mining Services. All rights reserved.", "privacyPolicy": "Privacy Policy" };
const about$1 = { "pageMeta": { "title": "About Continental Mining Services - Mining Partner in Sierra Leone | Continental Mining Services", "slug": "/about", "description": "Learn about Continental Mining Services, our mission in Sierra Leone, and our commitment to safety and operational excellence." }, "pageHeader": { "title": "Building Africa's Mining Future", "subtitle": "A dedicated partner for heavy logistics and mining support in West Africa.", "breadcrumbs": ["Home", "About Us"] }, "companyProfile": { "headline": "Who We Are", "bodyParagraphs": ["Continental Mining Services (CMS) is a premier provider of mining logistics and support services based in Freetown, Sierra Leone. We specialize in the critical 'last mile' of mining operations—from ore haulage and precision drilling to the movement of heavy machinery.", "Founded with a vision to modernize local mining infrastructure, CMS combines international safety standards with deep local knowledge of the West African terrain. Our fleet is maintained to rigorous standards, ensuring that your operations never face downtime due to equipment failure."], "imageAlt": "Industrial meeting room with engineers looking at mining blueprints, professional lighting", "statBadges": ["100% Local Expertise", "24/7 Operational Support"] }, "missionVisionValues": { "mission": { "title": "Our Mission", "text": "To provide reliable, safe, and efficient mining support services that empower our clients to maximize their extraction potential while minimizing operational risks." }, "vision": { "title": "Our Vision", "text": "To become the leading mining logistics partner in West Africa, known for our integrity, modern fleet, and unwavering commitment to safety." }, "coreValues": { "title": "Core Values", "list": ["Safety First", "Operational Integrity", "Community Respect", "Technical Excellence"] } }, "safetyCommitment": { "headline": "Uncompromising Safety Standards", "text": "In the mining industry, safety is not just a policy—it is our culture. All CMS operators undergo rigorous training, and our machinery is equipped with modern telemetry and safety features to protect both personnel and the environment.", "ctaButton": { "text": "View Our Safety Policy", "link": "#" } }, "regionFocus": { "headline": "Operating in Sierra Leone", "text": "Headquartered in Freetown, we understand the unique logistical challenges of the region. From the iron ore rich northern districts to the diamond fields of the east, CMS has the capability to deploy equipment and personnel where you need them most.", "mapHighlight": "Sierra Leone" }, "companyAttributes": { "heading": "Our Core Strengths", "description": "Built on a foundation of excellence and innovation.", "items": { "capacity": { "title": "Capacity", "description": "Our cranes offer lifting capacities of 70mt to 130mt.", "boldText": "70mt to 130mt" }, "versatility": { "title": "Versatility", "description": "Designed for a variety of lifting applications in mining.", "boldText": "variety of lifting applications" }, "safety": { "title": "Safety", "description": "Equipped with advanced safety features for **secure** operations.", "boldText": "secure" }, "technology": { "title": "Technology", "description": "Integrates modern technology for enhanced lifting efficiency.", "boldText": "modern technology" } } }, "cta": { "headline": "Ready to Optimize Your Operation?", "subheadline": "Contact our team to discuss your project requirements.", "buttonText": "Contact Us" } };
const servicesPage$1 = { "pageMeta": { "title": "Mining Services - Ore Haulage, Drilling & Equipment Rental | Continental Mining Services", "slug": "/services", "description": "Comprehensive mining solutions including ore haulage, precision drilling, and heavy logistics in Sierra Leone." }, "pageHeader": { "title": "Operational Excellence", "subtitle": "Delivering efficient, safe, and scalable solutions for the mining lifecycle.", "breadcrumbs": ["Home", "Services"] }, "introText": { "headline": "End-to-End Mining Support", "text": "Continental Mining Services streamlines your operations by bridging the gap between extraction and export. Our integrated approach ensures that from the moment ore is drilled to the moment it reaches the port, your materials are moving efficiently." }, "detailedList": { "oreHaulage": { "title": "Ore Loading & Haulage", "subtitle": "High-Volume Material Movement", "description": "Our core competency lies in the efficient loading and transportation of mined materials. We utilize a fleet of high-capacity tipper trucks and front loaders designed to handle the rough terrain of Sierra Leone's mining districts.", "featureCards": [{ "title": "Efficient Operations", "description": "Our team excels in loading and transporting ore safely." }, { "title": "Safe Transport", "description": "We ensure secure delivery of ore to clients." }], "ctaText": "Request Haulage Quote" }, "mineDrilling": { "title": "Mine Drilling Services", "subtitle": "Precision Extraction & Exploration", "description": "We offer specialized drilling services for both exploration and blast hole drilling. Our experienced crews use modern rigs to ensure depth accuracy and sample integrity, critical for geological assessment and efficient blasting.", "featureCards": [{ "title": "Precision Drilling", "description": "Advanced techniques for accurate mineral extraction." }, { "title": "Experienced Crew", "description": "Skilled professionals ensuring efficient operations." }], "ctaText": "Discuss Drilling Needs" }, "flatbedCargo": { "title": "Flatbed Cargo Movement", "subtitle": "Heavy Machinery Transportation", "description": "We provide reliable flatbed cargo movement services for transporting heavy machinery and equipment across all terrains. Our fleet is equipped to handle large-scale logistics needs with precision and care.", "featureCards": [{ "title": "Efficient Transport", "description": "Reliable logistics for transporting heavy materials." }, { "title": "Seamless Operations", "description": "Streamlined processes for quick loading and unloading." }, { "title": "Versatile Solutions", "description": "Adaptable services for diverse cargo needs." }], "ctaText": "Get Flatbed Rates" }, "containerMovement": { "title": "Container Movement", "subtitle": "Port-to-Site Connectivity", "description": "We facilitate seamless container movement from ports to your site. Our services ensure secure and timely transportation of shipping containers, supporting your supply chain operations.", "featureCards": [{ "title": "Efficient Loading", "description": "We facilitate seamless loading and unloading operations." }, { "title": "Timely Delivery", "description": "Ensuring on-time transportation to specified destinations." }], "ctaText": "Request Container Services" }, "tipperTruckRentals": { "title": "Tipper Truck Rentals", "subtitle": "High-Capacity Vehicle Solutions", "description": "Our tipper truck rental fleet offers high-capacity vehicles for various hauling needs. Whether for mining operations or construction projects, we provide well-maintained trucks ready for deployment.", "featureCards": [{ "title": "High-Capacity Fleet", "description": "Trucks available for various hauling needs." }, { "title": "Reliable Equipment", "description": "Well-maintained vehicles ensuring consistent performance." }], "ctaText": "View Truck Fleet" }, "earthMovingRental": { "title": "Earth Moving Equipment Rental", "subtitle": "Advanced Machinery Solutions", "description": "We offer advanced machinery rental for earthworks and construction. Our fleet includes excavators, bulldozers, and compactors, all maintained to the highest standards for your project needs.", "featureCards": [{ "title": "Modern Equipment", "description": "Advanced machinery for earthworks and construction." }, { "title": "Flexible Rental Terms", "description": "Adaptable rental solutions to match your project timeline." }], "ctaText": "Browse Equipment" } }, "rentalTeaser": { "headline": "Need Machinery?", "text": "We also offer direct rentals of our heavy equipment fleet, including excavators, bulldozers, and compactors.", "buttonText": "View Rental Catalog", "buttonLink": "/" }, "ctaBanner": { "headline": "Streamline Your Operations Today", "subheadline": "Contact our Freetown team for a customized service proposal.", "buttonText": "Contact Us" } };
const contactPage$1 = { "pageMeta": { "title": "Contact Us - Mining Services in Freetown, Sierra Leone | Continental Mining Services", "slug": "/contact-us", "description": "Get in touch with Continental Mining Services in Freetown for quotes on ore haulage, drilling, and equipment rentals." }, "pageHeader": { "breadcrumbs": ["Home", "Contact"], "title": "Start Your Project", "subtitle": "Reach out to our team for inquiries, fleet availability, and project quotes." }, "contactInfo": { "title": "Contact Information", "description": "Our team is available to discuss your mining logistics needs.", "headquarters": { "label": "Headquarters", "location": "Freetown, Sierra Leone" }, "email": { "label": "Email Us" }, "phone": { "label": "Call Us" } }, "form": { "title": "Send a Message", "fields": { "fullName": { "label": "Full Name", "placeholder": "John Doe" }, "email": { "label": "Email Address", "placeholder": "john@company.com" }, "phone": { "label": "Phone Number", "placeholder": "+232..." }, "interest": { "label": "I am interested in...", "placeholder": "Select an option" }, "message": { "label": "Project Details", "placeholder": "Tell us about your location, timeline, and requirements..." } }, "interestOptions": ["General Inquiry", "Ore Haulage Quote", "Drilling Services", "Equipment Rental", "Logistics/Cargo"], "submitButton": "Send Message" }, "map": { "location": "Freetown, Sierra Leone" } };
const enTranslation = {
  welcome: welcome$1,
  description: description$1,
  hero: hero$1,
  services: services$1,
  rental: rental$1,
  keyAttributes: keyAttributes$1,
  cta: cta$1,
  nav: nav$1,
  footer: footer$1,
  about: about$1,
  servicesPage: servicesPage$1,
  contactPage: contactPage$1
};
const welcome = "Welcome to our app - fr";
const description = "Your go-to multilingual React application. - fr";
const hero = { "badge": "Partenaire Minier de Premier Plan en Sierra Leone", "heading": { "part1": "Logistique Minière", "part2": "Leaders dans la Région" }, "description": "Du Transport de Minerai à la Location d'Équipements Lourds. Nous offrons capacité, sécurité et efficacité à vos opérations.", "button": { "quote": "Demander un Devis", "fleet": "Voir la Flotte de Location" }, "image": { "alt": "Motif de Carte Topographique" } };
const services = { "heading": "Services Principaux", "description": "Solutions complètes de soutien minier adaptées au terrain difficile de la Sierra Leone.", "items": { "oreHaulage": { "title": "Chargement et Transport de Minerai", "description": "Camions-bennes à haute capacité conçus pour le transport efficace de minerai sur terrain accidenté. Nous garantissons que votre production atteint sa destination en toute sécurité." }, "drilling": { "title": "Forage Minier", "description": "Services de forage de précision avec des équipes expérimentées et des équipements de pointe pour l'exploration et la production." }, "logistics": { "title": "Logistique", "description": "Transport sécurisé de remorques plates et de conteneurs dans toute la région. Nous gérons la logistique complexe pour que vous puissiez vous concentrer sur l'exploitation minière." } } };
const rental = { "heading": "Flotte Disponible à la Location", "description": "Machinerie lourde moderne et bien entretenue prête à être déployée.", "button": { "fleet": "Voir la Flotte Complète" }, "items": { "excavators": { "title": "Pelles Mécaniques", "description": "Pelles mécaniques robustes pour les travaux de terrassement à grande échelle." }, "bulldozers": { "title": "Bulldozers", "description": "Bulldozers puissants pour le déblaiement et la préparation des sites." }, "loaders": { "title": "Chargeuses Frontales", "description": "Chargeuses polyvalentes pour la manutention et le chargement de matériaux." }, "dumpTrucks": { "title": "Camions à Benne Basculante Lourds", "description": "Configurations 6x6 et 8x8 pour tous les terrains." } }, "card": { "viewSpecs": "Voir les Spécifications" } };
const keyAttributes = { "heading": "Pourquoi Nous Choisir", "description": "Notre engagement envers l'excellence guide tout ce que nous faisons.", "items": { "capacity": { "title": "Capacité", "description": "Nos camions offrent une **capacité supérieure** pour les besoins de transport lourd.", "boldText": "capacité supérieure" }, "reliability": { "title": "Fiabilité", "description": "Conçus pour une **fiabilité maximale**, garantissant des performances constantes sur site.", "boldText": "fiabilité maximale" }, "efficiency": { "title": "Efficacité", "description": "Conçus pour améliorer **l'efficacité opérationnelle** et réduire les temps de transit.", "boldText": "l'efficacité opérationnelle" }, "versatility": { "title": "Polyvalence", "description": "Nos camions sont **polyvalents** pour diverses applications de transport.", "boldText": "polyvalents" } } };
const cta = { "heading": "Prêt à Optimiser Vos Opérations ?", "description": "Contactez-nous dès aujourd'hui pour discuter de vos besoins en logistique minière et en équipements.", "button": "Nous Contacter" };
const nav = { "links": { "home": "Accueil", "fleetRentals": "Location de Flotte", "services": "Services", "contact": "Contact", "aboutUs": "À Propos" }, "button": { "quote": "Demander un Devis" }, "mobile": { "language": "Langue" } };
const footer = { "description": "Offrant capacité, sécurité et efficacité au secteur minier de la Sierra Leone.", "sections": { "contact": "Contact", "quickLinks": "Liens Rapides" }, "location": "Sierra Leone", "links": { "home": "Accueil", "services": "Services", "contact": "Contact", "equipmentRental": "Location d'Équipement" }, "copyright": "Continental Mining Services. Tous droits réservés.", "privacyPolicy": "Politique de Confidentialité" };
const about = { "pageMeta": { "title": "À Propos de Continental Mining Services - Partenaire Minier en Sierra Leone | Continental Mining Services", "slug": "/about", "description": "Découvrez Continental Mining Services, notre mission en Sierra Leone et notre engagement envers la sécurité et l'excellence opérationnelle." }, "pageHeader": { "title": "Construire l'Avenir Minier de l'Afrique", "subtitle": "Un partenaire dédié pour la logistique lourde et le soutien minier en Afrique de l'Ouest.", "breadcrumbs": ["Accueil", "À Propos"] }, "companyProfile": { "headline": "Qui Nous Sommes", "bodyParagraphs": ["Continental Mining Services (CMS) est un fournisseur de premier plan de services de logistique et de soutien minier basé à Freetown, en Sierra Leone. Nous nous spécialisons dans le 'dernier kilomètre' critique des opérations minières—du transport de minerai et du forage de précision au déplacement de machinerie lourde.", "Fondée avec une vision de moderniser l'infrastructure minière locale, CMS combine les normes de sécurité internationales avec une connaissance approfondie du terrain ouest-africain. Notre flotte est maintenue selon des normes rigoureuses, garantissant que vos opérations ne rencontrent jamais d'arrêt en raison d'une défaillance d'équipement."], "imageAlt": "Salle de réunion industrielle avec des ingénieurs regardant des plans miniers, éclairage professionnel", "statBadges": ["100% Expertise Locale", "Support Opérationnel 24/7"] }, "missionVisionValues": { "mission": { "title": "Notre Mission", "text": "Fournir des services de soutien minier fiables, sûrs et efficaces qui permettent à nos clients de maximiser leur potentiel d'extraction tout en minimisant les risques opérationnels." }, "vision": { "title": "Notre Vision", "text": "Devenir le partenaire de logistique minière de premier plan en Afrique de l'Ouest, reconnu pour notre intégrité, notre flotte moderne et notre engagement indéfectible envers la sécurité." }, "coreValues": { "title": "Valeurs Fondamentales", "list": ["Sécurité d'Abord", "Intégrité Opérationnelle", "Respect de la Communauté", "Excellence Technique"] } }, "safetyCommitment": { "headline": "Normes de Sécurité Intransigeantes", "text": "Dans l'industrie minière, la sécurité n'est pas seulement une politique—c'est notre culture. Tous les opérateurs CMS suivent une formation rigoureuse, et notre machinerie est équipée de télémétrie moderne et de fonctionnalités de sécurité pour protéger à la fois le personnel et l'environnement.", "ctaButton": { "text": "Voir Notre Politique de Sécurité", "link": "#" } }, "regionFocus": { "headline": "Opérant en Sierra Leone", "text": "Basés à Freetown, nous comprenons les défis logistiques uniques de la région. Des districts du nord riches en minerai de fer aux champs de diamants de l'est, CMS a la capacité de déployer des équipements et du personnel là où vous en avez le plus besoin.", "mapHighlight": "Sierra Leone" }, "companyAttributes": { "heading": "Nos Forces Principales", "description": "Construit sur une base d'excellence et d'innovation.", "items": { "capacity": { "title": "Capacité", "description": "Nos grues offrent des capacités de levage de 70mt à 130mt.", "boldText": "70mt à 130mt" }, "versatility": { "title": "Polyvalence", "description": "Conçues pour diverses applications de levage dans l'exploitation minière.", "boldText": "diverses applications de levage" }, "safety": { "title": "Sécurité", "description": "Équipées de fonctionnalités de sécurité avancées pour des opérations **sécurisées**.", "boldText": "sécurisées" }, "technology": { "title": "Technologie", "description": "Intègre une technologie moderne pour améliorer l'efficacité du levage.", "boldText": "technologie moderne" } } }, "cta": { "headline": "Prêt à Optimiser Votre Opération ?", "subheadline": "Contactez notre équipe pour discuter de vos besoins de projet.", "buttonText": "Nous Contacter" } };
const servicesPage = { "pageMeta": { "title": "Services Miniers - Transport de Minerai, Forage et Location d'Équipements | Continental Mining Services", "slug": "/services", "description": "Solutions minières complètes incluant le transport de minerai, le forage de précision et la logistique lourde en Sierra Leone." }, "pageHeader": { "title": "Excellence Opérationnelle", "subtitle": "Offrant des solutions efficaces, sûres et évolutives pour le cycle de vie minier.", "breadcrumbs": ["Accueil", "Services"] }, "introText": { "headline": "Soutien Minier de Bout en Bout", "text": "Continental Mining Services rationalise vos opérations en comblant le fossé entre l'extraction et l'exportation. Notre approche intégrée garantit que, du moment où le minerai est foré jusqu'au moment où il atteint le port, vos matériaux se déplacent efficacement." }, "detailedList": { "oreHaulage": { "title": "Chargement et Transport de Minerai", "subtitle": "Mouvement de Matériaux à Grand Volume", "description": "Notre compétence principale réside dans le chargement et le transport efficaces des matériaux minés. Nous utilisons une flotte de camions-bennes à haute capacité et de chargeuses frontales conçues pour gérer le terrain accidenté des districts miniers de la Sierra Leone.", "featureCards": [{ "title": "Opérations Efficaces", "description": "Notre équipe excelle dans le chargement et le transport sécurisé du minerai." }, { "title": "Transport Sécurisé", "description": "Nous garantissons une livraison sécurisée du minerai aux clients." }], "ctaText": "Demander un Devis de Transport" }, "mineDrilling": { "title": "Services de Forage Minier", "subtitle": "Extraction et Exploration de Précision", "description": "Nous offrons des services de forage spécialisés pour l'exploration et le forage de trous de mine. Nos équipes expérimentées utilisent des installations modernes pour garantir la précision de la profondeur et l'intégrité des échantillons, essentielles pour l'évaluation géologique et le dynamitage efficace.", "featureCards": [{ "title": "Forage de Précision", "description": "Techniques avancées pour l'extraction précise des minéraux." }, { "title": "Équipe Expérimentée", "description": "Professionnels qualifiés garantissant des opérations efficaces." }], "ctaText": "Discuter des Besoins de Forage" }, "flatbedCargo": { "title": "Mouvement de Cargaison sur Remorque Plate", "subtitle": "Transport de Machinerie Lourde", "description": "Nous fournissons des services fiables de mouvement de cargaison sur remorque plate pour transporter de la machinerie et des équipements lourds sur tous les terrains. Notre flotte est équipée pour répondre aux besoins logistiques à grande échelle avec précision et soin.", "featureCards": [{ "title": "Transport Efficace", "description": "Logistique fiable pour le transport de matériaux lourds." }, { "title": "Opérations Fluides", "description": "Processus rationalisés pour un chargement et déchargement rapides." }, { "title": "Solutions Polyvalentes", "description": "Services adaptables pour divers besoins de cargaison." }], "ctaText": "Obtenir les Tarifs de Remorque Plate" }, "containerMovement": { "title": "Mouvement de Conteneurs", "subtitle": "Connectivité Port-Site", "description": "Nous facilitons le mouvement fluide des conteneurs des ports à votre site. Nos services garantissent un transport sécurisé et ponctuel des conteneurs d'expédition, soutenant vos opérations de chaîne d'approvisionnement.", "featureCards": [{ "title": "Chargement Efficace", "description": "Nous facilitons des opérations de chargement et déchargement fluides." }, { "title": "Livraison Ponctuelle", "description": "Garantissant un transport à temps vers les destinations spécifiées." }], "ctaText": "Demander des Services de Conteneurs" }, "tipperTruckRentals": { "title": "Location de Camions-Bennes", "subtitle": "Solutions de Véhicules à Haute Capacité", "description": "Notre flotte de location de camions-bennes offre des véhicules à haute capacité pour divers besoins de transport. Que ce soit pour des opérations minières ou des projets de construction, nous fournissons des camions bien entretenus prêts à être déployés.", "featureCards": [{ "title": "Flotte à Haute Capacité", "description": "Camions disponibles pour divers besoins de transport." }, { "title": "Équipement Fiable", "description": "Véhicules bien entretenus garantissant une performance constante." }], "ctaText": "Voir la Flotte de Camions" }, "earthMovingRental": { "title": "Location d'Équipement de Terrassement", "subtitle": "Solutions de Machinerie Avancée", "description": "Nous offrons la location de machinerie avancée pour les travaux de terrassement et de construction. Notre flotte comprend des excavatrices, des bulldozers et des compacteurs, tous entretenus selon les normes les plus élevées pour répondre aux besoins de votre projet.", "featureCards": [{ "title": "Équipement Moderne", "description": "Machinerie avancée pour les travaux de terrassement et de construction." }, { "title": "Conditions de Location Flexibles", "description": "Solutions de location adaptables pour correspondre au calendrier de votre projet." }], "ctaText": "Parcourir l'Équipement" } }, "rentalTeaser": { "headline": "Besoin de Machinerie ?", "text": "Nous offrons également la location directe de notre flotte d'équipements lourds, y compris des excavatrices, des bulldozers et des compacteurs.", "buttonText": "Voir le Catalogue de Location", "buttonLink": "/" }, "ctaBanner": { "headline": "Rationalisez Vos Opérations Aujourd'hui", "subheadline": "Contactez notre équipe de Freetown pour une proposition de service personnalisée.", "buttonText": "Nous Contacter" } };
const contactPage = { "pageMeta": { "title": "Nous Contacter - Services Miniers à Freetown, Sierra Leone | Continental Mining Services", "slug": "/contact-us", "description": "Contactez Continental Mining Services à Freetown pour des devis sur le transport de minerai, le forage et la location d'équipements." }, "pageHeader": { "breadcrumbs": ["Accueil", "Contact"], "title": "Démarrez Votre Projet", "subtitle": "Contactez notre équipe pour des demandes de renseignements, la disponibilité de la flotte et les devis de projet." }, "contactInfo": { "title": "Informations de Contact", "description": "Notre équipe est disponible pour discuter de vos besoins en logistique minière.", "headquarters": { "label": "Siège Social", "location": "Freetown, Sierra Leone" }, "email": { "label": "Envoyez-nous un Email" }, "phone": { "label": "Appelez-nous" } }, "form": { "title": "Envoyer un Message", "fields": { "fullName": { "label": "Nom Complet", "placeholder": "Jean Dupont" }, "email": { "label": "Adresse Email", "placeholder": "jean@entreprise.com" }, "phone": { "label": "Numéro de Téléphone", "placeholder": "+232..." }, "interest": { "label": "Je suis intéressé par...", "placeholder": "Sélectionnez une option" }, "message": { "label": "Détails du Projet", "placeholder": "Parlez-nous de votre emplacement, de votre calendrier et de vos exigences..." } }, "interestOptions": ["Demande Générale", "Devis de Transport de Minerai", "Services de Forage", "Location d'Équipement", "Logistique/Cargaison"], "submitButton": "Envoyer le Message" }, "map": { "location": "Freetown, Sierra Leone" } };
const frTranslation = {
  welcome,
  description,
  hero,
  services,
  rental,
  keyAttributes,
  cta,
  nav,
  footer,
  about,
  servicesPage,
  contactPage
};
const i18n = createInstance();
i18n.use(Backend).use(Browser).use(initReactI18next).init({
  fallbackLng: "fr",
  lng: "en",
  debug: true,
  resources: {
    en: {
      translation: enTranslation
    },
    fr: {
      translation: frTranslation
    }
  },
  interpolation: {
    escapeValue: false
    // not needed for react as it escapes by default
  }
});
const SITE_NAME = "Continental Mining Services";
const BASE_URL$1 = typeof window !== "undefined" ? window.location.origin : "https://continental-mining.vercel.app";
const DEFAULT_OG_IMAGE = `${BASE_URL$1}/og-image.jpg`;
function getSEOData(config) {
  const currentLang = i18n.language || "en";
  const canonicalUrl = `${BASE_URL$1}${config.path}`;
  const ogImage = config.ogImage || DEFAULT_OG_IMAGE;
  const ogLocale = currentLang === "fr" ? "fr_FR" : "en_US";
  return {
    title: config.title,
    meta: [
      {
        name: "description",
        content: config.description
      },
      ...config.keywords ? [
        {
          name: "keywords",
          content: config.keywords
        }
      ] : [],
      {
        property: "og:title",
        content: config.title
      },
      {
        property: "og:description",
        content: config.description
      },
      {
        property: "og:url",
        content: canonicalUrl
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        property: "og:image",
        content: ogImage
      },
      {
        property: "og:locale",
        content: ogLocale
      },
      {
        property: "og:site_name",
        content: SITE_NAME
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        name: "twitter:title",
        content: config.title
      },
      {
        name: "twitter:description",
        content: config.description
      },
      {
        name: "twitter:image",
        content: ogImage
      }
    ],
    links: [
      {
        rel: "canonical",
        href: canonicalUrl
      },
      {
        rel: "alternate",
        hrefLang: "x-default",
        href: canonicalUrl
      }
    ]
  };
}
function getCurrentLanguage() {
  return i18n.language || "en";
}
const BASE_URL = typeof window !== "undefined" ? window.location.origin : "https://continental-mining.vercel.app";
const Route$4 = createRootRoute({
  head: () => {
    const currentLang = getCurrentLanguage();
    const ogLocale = currentLang === "fr" ? "fr_FR" : "en_US";
    return {
      meta: [
        {
          charSet: "utf-8"
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        },
        {
          title: "Mining Logistics Services in Sierra Leone | Continental Mining"
        },
        {
          property: "og:site_name",
          content: "Continental Mining Services"
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:locale",
          content: ogLocale
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        }
      ],
      links: [
        {
          rel: "alternate",
          hrefLang: "x-default",
          href: BASE_URL
        }
      ]
    };
  },
  component: RootComponent
});
function RootComponent() {
  const [lang, setLang] = reactExports.useState(getCurrentLanguage());
  reactExports.useEffect(() => {
    const updateLang = () => {
      setLang(getCurrentLanguage());
    };
    updateLang();
    i18n.on("languageChanged", updateLang);
    return () => {
      i18n.off("languageChanged", updateLang);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RootDocument, { lang, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
function RootDocument({
  children,
  lang
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$3 = () => import("./services-CU-ReztH.mjs");
const Route$3 = createFileRoute("/services")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  head: () => {
    const currentLang = i18n.language || "en";
    const translations = currentLang === "fr" ? frTranslation : enTranslation;
    const pageMeta = translations.servicesPage?.pageMeta;
    const title = pageMeta?.title || "Our Services | Continental Mining Services";
    const description2 = pageMeta?.description || "Comprehensive mining solutions including ore haulage, precision drilling, and heavy logistics in Sierra Leone.";
    return getSEOData({
      title,
      description: description2,
      keywords: "mining services, ore haulage, drilling services, logistics, equipment rental, Sierra Leone, mining solutions",
      path: "/services"
    });
  }
});
const $$splitComponentImporter$2 = () => import("./contact-us-DKAcC4wl.mjs");
const Route$2 = createFileRoute("/contact-us")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  head: () => {
    const currentLang = i18n.language || "en";
    const translations = currentLang === "fr" ? frTranslation : enTranslation;
    const pageMeta = translations.contactPage?.pageMeta;
    const title = pageMeta?.title || "Contact Us | Continental Mining Services";
    const description2 = pageMeta?.description || "Get in touch with Continental Mining Services in Freetown for quotes on ore haulage, drilling, and equipment rentals.";
    return getSEOData({
      title,
      description: description2,
      keywords: "contact, mining services, Sierra Leone, Freetown, ore haulage quote, drilling services, equipment rental",
      path: "/contact-us"
    });
  }
});
const $$splitComponentImporter$1 = () => import("./about-CwlYQrlW.mjs");
const Route$1 = createFileRoute("/about")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  head: () => {
    const currentLang = i18n.language || "en";
    const translations = currentLang === "fr" ? frTranslation : enTranslation;
    const pageMeta = translations.about?.pageMeta;
    const title = pageMeta?.title || "About Us | Continental Mining Services";
    const description2 = pageMeta?.description || "Learn about Continental Mining Services, our mission in Sierra Leone, and our commitment to safety and operational excellence.";
    return getSEOData({
      title,
      description: description2,
      keywords: "about, mining company, Sierra Leone, mining logistics, safety, operational excellence, West Africa",
      path: "/about"
    });
  }
});
const $$splitComponentImporter = () => import("./index-B2zrgXgk.mjs");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  head: () => {
    const currentLang = i18n.language || "en";
    const title = currentLang === "fr" ? "Services de Logistique Minière et Location d'Équipements en Sierra Leone | Continental Mining Services" : "Mining Logistics & Equipment Rental Services in Sierra Leone | Continental Mining Services";
    const description2 = currentLang === "fr" ? "Services miniers de premier plan en Sierra Leone. Transport de minerai, forage et location d'équipements lourds." : "Sierra Leone's premier mining partner. From ore haulage to heavy equipment rentals. We deliver capacity, safety, and efficiency to your operations.";
    return getSEOData({
      title,
      description: description2,
      keywords: "mining, services, mining services, mining company, mining industry, Sierra Leone, ore haulage, drilling, equipment rental",
      path: "/"
    });
  }
});
const ServicesRoute = Route$3.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$4
});
const ContactUsRoute = Route$2.update({
  id: "/contact-us",
  path: "/contact-us",
  getParentRoute: () => Route$4
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$4
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactUsRoute,
  ServicesRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultNotFoundComponent: NotFound,
    defaultPreload: "intent"
  });
  return router2;
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Card as C,
  CardContent as a,
  cn as c,
  router as r
};
