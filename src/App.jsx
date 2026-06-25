import { useState, useEffect } from "react";
import { Zap, Brain, Bot, Users, BarChart, Cpu, Mail, FileText, TrendingUp, ShoppingCart, Calendar, Search, CheckCircle, ArrowRight, Shield, Lock, Code2, Server } from "lucide-react";

const CELL = 80;
const COLS = 26;
const ROWS = 17;

const hackerLines = [
  "AI_SOLUTIONS","import neural","def automate():","API.connect()",
  "model.predict()","pipeline.run()","data.extract()","workflow.exec()",
  "agent.start()","llm.generate()","class CAS:","await fetch()",
  "process.env.AI","async function()","return results","if(ai.ready)",
  "deploy.prod()","AI_TOOLS","openai.chat()","claude.complete()",
  "train_model()","vectorstore.add","embeddings.get","rag.query()",
  "scrape_web()","parse_pdf()","send_email()","update_crm()",
  "GPT4.call()","CLAUDE.run()","neural.init()","AI_ENGINE",
];

const iconMap = { Zap, Brain, Bot, Users, BarChart, Cpu, Mail, FileText, TrendingUp, ShoppingCart, Calendar, Search, Shield, Lock, Code2, Server };
function Icon({ name, size = 22, color = "#666" }) {
  const C = iconMap[name] || Zap;
  return <C width={size} height={size} style={{ color }} />;
}

const T = {
  fi: {
    lang_btn: "🌐 English",
    nav_contact: "Ota yhteyttä",
    hero_badge: "⚡ Automatisointi. Tekoäly. Koulutus.",
    hero_h: ["Rakennamme", "räätälöityjä", "AI-ratkaisuja"],
    hero_desc: "Custom-rakennetut automaatio- ja tekoälyratkaisut yrityksille. Ei valmistuotteita — kaikki tehty juuri sinun toimintaasi varten.",
    hero_btn1: "Tutustu palveluihin",
    hero_btn2: "AI-agentit",
    disc_badge: "EI TARVITSE TIETÄÄ ETUKÄTEEN",
    disc_h: "Et tiedä vielä mitä tarvitset?",
    disc_sub: "Se on täysin ok — ja juuri siksi olemme täällä.",
    disc_body: "Monet yritykset tietävät, että tekoäly ja automatisointi voisivat auttaa — mutta eivät tarkalleen tiedä missä tai miten. Kartoitamme yhdessä toimintamallisi ja löydämme konkreettiset kohdat, joissa AI tuo eniten arvoa. Saat selkeän kuvan potentiaaleista ilman sitoutumista.",
    disc_cta: "Pyydä ilmainen kartoitus",
    disc_note: "* Kartoitus edellyttää, että kerrot meille liiketoiminnastasi. Mitä paremmin ymmärrämme toimintaasi, sitä tarkempia ehdotuksia voimme tehdä.",
    sec_badge: "VAIHTOEHTOINEN TOTEUTUSTAPA",
    sec_h: "Kun data on liian arkaluonteista pilveen",
    sec_sub: "Täysin paikallinen, avoimen lähdekoodin vaihtoehto",
    sec_body: "Suurin osa ratkaisuistamme hyödyntää pilvipohjaisia tekoälymalleja, kuten GPT-4 tai Claude — se on monelle yritykselle nopein ja kustannustehokkain tapa. Mutta jos käsittelette erityisen luottamuksellista, salattua tai säänneltyä tietoa (esim. terveys-, talous-, oikeus- tai viranomaisdataa), tarjoamme myös vaihtoehdon: rakennamme ratkaisun kokonaan avoimen lähdekoodin malleilla, jotka pyörivät täysin teidän omassa, hallitussa ympäristössänne. Data ei koskaan poistu organisaationne sisältä.",
    sec_points: [
      { icon:"Code2", title:"Avoimen lähdekoodin mallit", desc:"Käytämme avoimia LLM-malleja suljettujen pilvi-API:en sijaan. Täysi näkyvyys ja hallinta koko järjestelmään — ei riippuvuutta ulkopuolisesta toimittajasta." },
      { icon:"Server", title:"100 % paikallinen infrastruktuuri", desc:"Koko järjestelmä — mallit, data ja prosessointi — pyörii teidän omassa konesalissa tai eristetyssä ympäristössänne. Ei ulospäin suuntautuvaa liikennettä." },
      { icon:"Lock", title:"Extreme-tietoturva", desc:"Salaus levossa ja siirrossa, vähimpien oikeuksien periaate, säännölliset auditoinnit. Soveltuu myös tiukasti säänneltyihin toimialoihin." },
      { icon:"Shield", title:"Läpinäkyvä arkkitehtuuri", desc:"Dokumentoimme tarkasti miten järjestelmä toimii ja missä data liikkuu. Ei mustia laatikoita — tiedätte aina tarkalleen mitä datallenne tapahtuu." },
    ],
    sec_cta: "Kysy paikallisesta ratkaisusta",
    srv_badge: "PALVELUT",
    srv_h: "Kaikki mitä tarvitset",
    srv_sub: "AI:sta automatisointiin ja koulutukseen — toteutamme kaiken",
    services: [
      { icon:"Zap", title:"Prosessiautomaatio", sub:"Manuaalinen työ pois",
        desc:"Automatisoimme toistuvat manuaaliset työvaiheet. Tarjouskyselyt, laskutus, raportointi, asiakasviestintä — kaikki pyörii ilman käsityötä.",
        features:["Workflow-automatisointi","Laskutus ja raportointi","Asiakasviestintä","API-integraatiot"],
        process:["Nykytila-analyysi","Automatisointi-suunnitelma","Toteutus ja testaus","Käyttöönotto"] },
      { icon:"Brain", title:"AI-integraatiot", sub:"Tekoäly nykyisiin järjestelmiin",
        desc:"Yhdistämme GPT-4:n, Clauden tai muun LLM:n olemassaoleviin järjestelmiinne. CRM, ERP, sähköposti — tekoäly siellä missä jo työskentelette.",
        features:["GPT-4 & Claude -integraatiot","CRM & ERP-yhdistäminen","Sähköposti-AI","Custom-mallit"],
        process:["Järjestelmäkartoitus","Integraatiosuunnitelma","API-kehitys","Testaus ja deploy"] },
      { icon:"Bot", title:"AI-agentit", sub:"Autonomiset toimijat",
        desc:"Rakennamme autonomisia AI-agentteja jotka suorittavat monivaiheisia tehtäviä itsenäisesti. Datan keruu, analyysi, toimenpiteet — automaattisesti.",
        features:["Scout-agentit (datankeruu)","Writer-agentit (sisältö)","Analyst-agentit (raportointi)","Orchestrator (koordinointi)"],
        process:["Tehtävämäärittely","Agentti-arkkitehtuuri","Kehitys ja testaus","Monitorointi"] },
      { icon:"Users", title:"Tekoälykoulutus", sub:"Live-workshopit tiimillesi",
        desc:"Livekoulutuksia teidän tiimillenne. Käytännönläheistä, ei teoriaa. Henkilöstönne oppii käyttämään AI:ta tehokkaasti omassa työssään.",
        features:["Live-workshopit","Käytännön työkalut","Tiimi-räätälöinti","Seuranta ja tuki"],
        process:["Osaamistarve-analyysi","Custom-koulutusohjelma","Live-sessiot","Seurantakoulutus"] },
      { icon:"BarChart", title:"Data & Raportointi", sub:"Automaattiset dashboardit",
        desc:"Automatisoidut dashboardit ja raportit jotka kokoavat datan useista lähteistä. Ei enää manuaalista Excel-pyörittelyä viikonloppuisin.",
        features:["Multi-source dashboardit","Automaattiset raportit","Reaaliaikainen data","Custom visualisoinnit"],
        process:["Datan kartoitus","Dashboard-suunnittelu","Automaatioputket","Käyttöönotto"] },
      { icon:"Cpu", title:"AI-asiakaspalvelu", sub:"24/7 automaattinen tuki",
        desc:"Custom AI-chatbotit jotka vastaavat asiakkaillenne 24/7 teidän tietokannoistanne. Ei geneerinen — tietää teidän tuotteenne ja prosessinne.",
        features:["RAG-pohjainen chatbot","Tietokantaintegraatio","24/7 asiakaspalvelu","Jatkuva oppiminen"],
        process:["Tietopohjan rakentaminen","Chatbot-kehitys","Integrointi","Optimointi"] },
    ],
    uc_badge: "KÄYTTÖTAPAUKSET",
    uc_h: "Mitä automatisoimme",
    usecases: [
      { icon:"Mail", title:"Sähköpostiautomaatio", desc:"Asiakasviestit kategorisoidaan, priorisoidaan ja vastataan AI:n avulla automaattisesti." },
      { icon:"FileText", title:"Dokumenttiprosessointi", desc:"Sopimukset, laskut ja lomakkeet käsitellään ja arkistoidaan automaattisesti." },
      { icon:"TrendingUp", title:"Lead-kvalifiointi", desc:"Uudet liidit pisteytetään, kvalifioidaan ja ohjataan oikealle myyjälle automaattisesti." },
      { icon:"BarChart", title:"Raporttiautomaatio", desc:"Viikoittaiset ja kuukausittaiset raportit syntyvät automaattisesti ja jaetaan oikeille henkilöille." },
      { icon:"ShoppingCart", title:"Tilausvahvistukset", desc:"Verkkokaupan tilaukset prosessoidaan, vahvistetaan ja seurataan täysin automaattisesti." },
      { icon:"Calendar", title:"Kalenterisynkronointi", desc:"Ajanvaraukset, muistutukset ja seurantaviestit hoituvat ilman manuaalista työtä." },
      { icon:"Search", title:"Kilpailija-analyysi", desc:"AI seuraa kilpailijoiden hintoja, tarjouksia ja uutisia ja raportoi automaattisesti." },
      { icon:"Users", title:"HR-automaatio", desc:"Rekrytoinnin alkuvaiheet, CV-screening ja hakijaviestintä automatisoituna." },
      { icon:"Zap", title:"Ei löydy sopivaa? Rakennamme sen.", desc:"Nämä ovat vain esimerkkejä tyypillisistä tapauksista. Jokainen yritys on erilainen — jos toimintasi vaatii jotain muuta, toteutamme juuri sen. Kerro tarpeestasi.", isCustom:true },
    ],
    ag_h: "Autonomiset agentit jotka tekevät töitä yötä päivää",
    ag_desc: "AI-agentit ovat seuraava askel automaation jälkeen. Ne eivät vain toista yhtä prosessia — ne ajattelevat, päättävät ja toimivat itsenäisesti.",
    ag_bullets: [
      "Keräävät dataa useista lähteistä samanaikaisesti",
      "Analysoivat ja tekevät päätöksiä ennalta määriteltyjen sääntöjen mukaan",
      "Suorittavat toimenpiteitä muissa järjestelmissä",
      "Raportoivat tuloksista ja poikkeamista automaattisesti",
      "Oppivat ja parantuvat käytön myötä",
    ],
    agents: [
      { name:"Scout Agent", role:"Kerää ja analysoi dataa jatkuvasti" },
      { name:"Writer Agent", role:"Tuottaa sisältöä ja dokumentaatiota" },
      { name:"Outreach Agent", role:"Personoitu viestintä automaattisesti" },
      { name:"Analyst Agent", role:"Raportoi ja tekee suosituksia" },
    ],
    orchestrator: "Koordinoi kaikkia agentteja",
    cta_h: "Aloitetaan",
    cta_hl: "keskustelu",
    cta_desc: "Kerro meille yrityksesi tarpeista ja haasteista — rakennamme yhdessä ratkaisun joka vie liiketoimintanne eteenpäin.",
    cta_btn: "Varaa ilmainen konsultaatio",
    cta_email: "info@cas.fi",
    cta_checks: ["Nopea vastausaika","Ilmainen aloituskonsultaatio","Ei sitoutumista"],
    fml_title:"Ota yhteyttä", fml_sub:"Kerromme mielellämme lisää palveluistamme",
    fml_n:"Nimi *", fml_e:"Sähköposti *", fml_c:"Yritys", fml_m:"Viesti *",
    fml_np:"Etu Sukunimi", fml_ep:"etunimi@yritys.fi", fml_cp:"Yrityksen nimi",
    fml_mp:"Kerro lyhyesti tarpeestasi tai kysymyksestäsi...",
    fml_send:"Lähetä viesti", fml_cancel:"Peruuta",
    fml_ok_h:"Kiitos yhteydenotosta!", fml_ok_b:"Palaamme asiaan pian.",
    quote_btn:"Pyydä tarjous", read_more:"Lue lisää", read_less:"Näytä vähemmän",
    copied:"✓ Kopioitu!",
    footer_tag:"Rakennettu tekoälyllä ja intohimolla.",
    contact_badge: "OTA YHTEYTTÄ",
    contact_h: "Varaa ilmainen konsultaatio",
    contact_sub: "Lähetä meille sähköpostia — palaamme asiaan yleensä saman päivän aikana.",
    contact_steps: [
      "Kerro meille lyhyesti yrityksestäsi ja siitä mitä haluaisit automatisoida tai tehostaa",
      "Sovitaan vapaamuotoinen kartoituspuhelu tai -tapaaminen sinulle sopivaan aikaan",
      "Saat konkreettisia, räätälöityjä ehdotuksia juuri sinun toimintaasi — täysin ilman sitoutumista",
    ],
    contact_email_label: "Sähköposti:",
    contact_email: "casolutions.fi@gmail.com",
    copy_btn: "Kopioi osoite",
  },
  en: {
    lang_btn: "🌐 Suomi",
    nav_contact: "Contact us",
    hero_badge: "⚡ Automation. AI. Training.",
    hero_h: ["We build", "custom", "AI solutions"],
    hero_desc: "Custom-built automation and AI solutions for businesses. No off-the-shelf products — everything made for your specific operations.",
    hero_btn1: "Explore services",
    hero_btn2: "AI agents",
    disc_badge: "NO NEED TO KNOW IN ADVANCE",
    disc_h: "Don't know exactly what you need?",
    disc_sub: "That's completely fine — and exactly why we're here.",
    disc_body: "Many businesses know that AI and automation could help — but aren't sure where or how. We map out your operations together and find the concrete points where AI brings the most value. You get a clear picture of the potential with no commitment.",
    disc_cta: "Request a free assessment",
    disc_note: "* The assessment requires you to tell us about your business. The better we understand your operations, the more precise recommendations we can make.",
    sec_badge: "ALTERNATIVE APPROACH",
    sec_h: "When data is too sensitive for the cloud",
    sec_sub: "A fully local, open-source alternative",
    sec_body: "Most of our solutions use cloud-based AI models like GPT-4 or Claude — that's the fastest and most cost-effective approach for most businesses. But if you handle especially confidential, classified, or regulated data (e.g. healthcare, financial, legal, or government data), we also offer an alternative: we build the solution entirely with open-source models that run completely within your own, controlled environment. Data never leaves your organization.",
    sec_points: [
      { icon:"Code2", title:"Open-source models", desc:"We use open LLM models instead of closed cloud APIs. Full visibility and control over the entire system — no dependency on an external vendor." },
      { icon:"Server", title:"100% local infrastructure", desc:"The entire system — models, data, and processing — runs in your own data center or isolated environment. No outbound traffic." },
      { icon:"Lock", title:"Extreme security", desc:"Encryption at rest and in transit, principle of least privilege, regular audits. Also suitable for tightly regulated industries." },
      { icon:"Shield", title:"Transparent architecture", desc:"We document precisely how the system works and where data moves. No black boxes — you always know exactly what happens to your data." },
    ],
    sec_cta: "Ask about the local solution",
    srv_badge: "SERVICES",
    srv_h: "Everything you need",
    srv_sub: "From AI to automation and training — we deliver it all",
    services: [
      { icon:"Zap", title:"Process Automation", sub:"Remove manual work",
        desc:"We automate repetitive manual tasks. Quote requests, invoicing, reporting, customer communication — everything runs without manual effort.",
        features:["Workflow automation","Invoicing & reporting","Customer communication","API integrations"],
        process:["Current state analysis","Automation plan","Implementation & testing","Go-live"] },
      { icon:"Brain", title:"AI Integrations", sub:"AI into your existing systems",
        desc:"We integrate GPT-4, Claude, or other LLMs into your existing systems. CRM, ERP, email — AI where you already work.",
        features:["GPT-4 & Claude integrations","CRM & ERP connection","Email AI","Custom models"],
        process:["System mapping","Integration plan","API development","Testing & deploy"] },
      { icon:"Bot", title:"AI Agents", sub:"Autonomous actors",
        desc:"We build autonomous AI agents that perform multi-step tasks independently. Data collection, analysis, actions — automatically.",
        features:["Scout agents (data collection)","Writer agents (content)","Analyst agents (reporting)","Orchestrator (coordination)"],
        process:["Task definition","Agent architecture","Development & testing","Monitoring"] },
      { icon:"Users", title:"AI Training", sub:"Live workshops for your team",
        desc:"Live training for your team. Practical, not theoretical. Your staff learns to use AI effectively in their own work.",
        features:["Live workshops","Practical tools","Team customization","Follow-up support"],
        process:["Needs analysis","Custom training program","Live sessions","Follow-up training"] },
      { icon:"BarChart", title:"Data & Reporting", sub:"Automated dashboards",
        desc:"Automated dashboards and reports that collect data from multiple sources. No more manual Excel work on weekends.",
        features:["Multi-source dashboards","Automatic reports","Real-time data","Custom visualizations"],
        process:["Data mapping","Dashboard design","Automation pipelines","Go-live"] },
      { icon:"Cpu", title:"AI Customer Service", sub:"24/7 automatic support",
        desc:"Custom AI chatbots that answer your customers 24/7 from your databases. Not generic — knows your products and processes.",
        features:["RAG-based chatbot","Database integration","24/7 service","Continuous learning"],
        process:["Knowledge base build","Chatbot development","Integration","Optimization"] },
    ],
    uc_badge: "USE CASES",
    uc_h: "What we automate",
    usecases: [
      { icon:"Mail", title:"Email Automation", desc:"Customer messages are categorized, prioritized, and answered automatically with AI." },
      { icon:"FileText", title:"Document Processing", desc:"Contracts, invoices, and forms are processed and archived automatically." },
      { icon:"TrendingUp", title:"Lead Qualification", desc:"New leads are scored, qualified, and directed to the right salesperson automatically." },
      { icon:"BarChart", title:"Report Automation", desc:"Weekly and monthly reports are generated automatically and distributed to the right people." },
      { icon:"ShoppingCart", title:"Order Confirmations", desc:"E-commerce orders are processed, confirmed, and tracked fully automatically." },
      { icon:"Calendar", title:"Calendar Sync", desc:"Appointments, reminders, and follow-up messages are handled without manual work." },
      { icon:"Search", title:"Competitor Analysis", desc:"AI monitors competitor prices, offers, and news and reports automatically." },
      { icon:"Users", title:"HR Automation", desc:"Early recruitment stages, CV screening, and applicant communication automated." },
      { icon:"Zap", title:"Don't see your use case? We'll build it.", desc:"These are just typical examples. Every business is different — if your operations need something else, we'll build exactly that. Tell us what you need.", isCustom:true },
    ],
    ag_h: "Autonomous agents working around the clock",
    ag_desc: "AI agents are the next step beyond automation. They don't just repeat one process — they think, decide, and act independently.",
    ag_bullets: [
      "Collect data from multiple sources simultaneously",
      "Analyze and make decisions based on predefined rules",
      "Execute actions in other systems",
      "Report results and anomalies automatically",
      "Learn and improve with use",
    ],
    agents: [
      { name:"Scout Agent", role:"Continuously collects and analyzes data" },
      { name:"Writer Agent", role:"Produces content and documentation" },
      { name:"Outreach Agent", role:"Personalized communication automatically" },
      { name:"Analyst Agent", role:"Reports and makes recommendations" },
    ],
    orchestrator: "Coordinates all agents",
    cta_h: "Let's start",
    cta_hl: "a conversation",
    cta_desc: "Tell us about your business needs and challenges — we'll build a solution that moves your business forward.",
    cta_btn: "Book a free consultation",
    cta_email: "info@cas.fi",
    cta_checks: ["Fast response time","Free initial consultation","No commitment"],
    fml_title:"Contact us", fml_sub:"We're happy to tell you more about our services",
    fml_n:"Name *", fml_e:"Email *", fml_c:"Company", fml_m:"Message *",
    fml_np:"First Last", fml_ep:"firstname@company.com", fml_cp:"Company name",
    fml_mp:"Briefly describe your need or question...",
    fml_send:"Send message", fml_cancel:"Cancel",
    fml_ok_h:"Thanks for reaching out!", fml_ok_b:"We'll get back to you soon.",
    quote_btn:"Request quote", read_more:"Read more", read_less:"Show less",
    copied:"✓ Copied!",
    footer_tag:"Built with AI and passion.",
    contact_badge: "CONTACT US",
    contact_h: "Book a free consultation",
    contact_sub: "Send us an email — we usually get back to you the same day.",
    contact_steps: [
      "Tell us briefly about your business and what you'd like to automate or improve",
      "We'll arrange an informal mapping call or meeting at a time that suits you",
      "You'll receive concrete, tailored suggestions for your specific operations — completely commitment-free",
    ],
    contact_email_label: "Email:",
    contact_email: "casolutions.fi@gmail.com",
    copy_btn: "Copy address",
  }
};

function HackerGrid() {
  const NL   = 9;        // lines per copy
  const LH   = 11;       // px per line
  const HALF = NL * LH;  // 99px — translation for one seamless loop

  return (
    <div style={{ position:"fixed", inset:0, overflow:"hidden", pointerEvents:"none", zIndex:0 }}>
      <div style={{
        position:"absolute", top:-CELL, left:-CELL,
        display:"grid",
        gridTemplateColumns:`repeat(${COLS}, ${CELL}px)`,
        animation:"gridMove 28s linear infinite",
      }}>
        {Array.from({ length: ROWS * COLS }, (_, idx) => {
          const row = Math.floor(idx / COLS);
          const col = idx % COLS;
          const isHacker = (row + col) % 2 === 0;
          const dur = 3 + (idx % 5);           // 3–7 s, varies per cell
          const del = -(idx % dur);             // staggered start phase
          // Each cell gets its own slice of hackerLines (doubled for seamless)
          const lines = Array.from({ length: NL * 2 }, (_, li) =>
            hackerLines[(idx * 7 + li) % hackerLines.length]
          );
          return (
            <div key={idx} style={{
              width:CELL, height:CELL,
              border:"1px solid rgba(110,110,110,0.1)",
              background: isHacker ? "rgba(0,0,0,0.5)" : "transparent",
              overflow:"hidden", position:"relative",
            }}>
              {isHacker && (
                <div style={{
                  position:"absolute", top:0, left:3, right:3,
                  animation:`textScrollUp ${dur}s linear ${del}s infinite`,
                }}>
                  {lines.map((line, li) => (
                    <div key={li} style={{
                      height:LH, lineHeight:LH+"px",
                      color:"#39ff14", fontFamily:"monospace",
                      fontSize:8, opacity:0.58,
                      whiteSpace:"nowrap", overflow:"hidden",
                    }}>{line}</div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const inp = {
  width:"100%", padding:"10px 14px", background:"rgba(255,255,255,0.05)",
  border:"1px solid rgba(255,255,255,0.12)", color:"white",
  fontFamily:"monospace", fontSize:13, boxSizing:"border-box", outline:"none",
};

export default function CAS() {
  const [lang, setLang] = useState("fi");
  const [expanded, setExpanded] = useState(null);
  const [copied, setCopied] = useState(false);
  const [mouse, setMouse] = useState({ x:0, y:0 });

  const t = T[lang];

  useEffect(() => {
    const h = (e) => setMouse({ x:e.clientX, y:e.clientY });
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });

  const copyEmail = () => {
    navigator.clipboard.writeText("casolutions.fi@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const border = "1px solid rgba(255,255,255,0.07)";

  return (
    <div style={{ minHeight:"100vh", background:"#1c1c1c", color:"white", fontFamily:"monospace", position:"relative" }}>
      <HackerGrid />

      {/* Cursor glow */}
      <div style={{
        position:"fixed", width:520, height:520, borderRadius:"50%",
        background:"radial-gradient(circle, rgba(0,255,255,0.07) 0%, transparent 70%)",
        left:mouse.x-260, top:mouse.y-260,
        pointerEvents:"none", zIndex:1, transition:"left 0.12s, top 0.12s",
      }} />

      {/* NAV */}
      <nav style={{
        position:"sticky", top:0, zIndex:100,
        borderBottom:border, backdropFilter:"blur(20px)",
        background:"rgba(28,28,28,0.88)",
        padding:"0 32px", display:"flex", alignItems:"center",
        justifyContent:"space-between", height:70,
      }}>
        <div style={{ display:"flex", alignItems:"center", gap:12 }}>
          <div style={{
            width:42, height:42, flexShrink:0,
            background:"linear-gradient(135deg,#00ffff,#ccff00)",
            display:"flex", alignItems:"center", justifyContent:"center",
            fontWeight:"bold", color:"black", fontSize:13, letterSpacing:"0.05em",
          }}>CAS</div>
          <div>
            <div style={{ fontWeight:"bold", fontSize:15, lineHeight:1.2 }}>
              CustomAutomation<span style={{ color:"#00ffff" }}>Solutions</span>
            </div>
            <div style={{ fontSize:9, color:"#39ff14", letterSpacing:"0.18em", marginTop:1 }}>AI & AUTOMATION</div>
          </div>
        </div>

        <div style={{ display:"flex", alignItems:"center", gap:12 }}>
          {/* Language toggle — slides left when EN is active */}
          <button
            onClick={() => setLang(lang === "fi" ? "en" : "fi")}
            style={{
              padding:"8px 18px",
              border:"1px solid rgba(0,255,255,0.35)",
              background:"transparent", color:"#00ffff",
              fontFamily:"monospace", fontSize:13, fontWeight:"bold",
              cursor:"pointer",
              transform: lang === "en" ? "translateX(-20px)" : "translateX(0px)",
              transition:"transform 0.55s cubic-bezier(0.34,1.56,0.64,1), background 0.2s",
            }}
          >{t.lang_btn}</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position:"relative", zIndex:10, padding:"110px 32px 80px", textAlign:"center" }}>
        <div style={{ maxWidth:820, margin:"0 auto" }}>
          <div style={{
            display:"inline-block", padding:"7px 20px", marginBottom:32,
            border:"1px solid rgba(0,255,255,0.28)", background:"rgba(0,255,255,0.05)",
            color:"#00ffff", fontSize:13,
          }}>{t.hero_badge}</div>

          <h1 style={{ fontSize:"clamp(52px,8vw,90px)", fontWeight:"bold", lineHeight:1.0, margin:"0 0 28px", color:"#ffffff" }}>
            {t.hero_h[0]}<br />
            <span style={{ background:"linear-gradient(90deg,#00ffff,#ccff00)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              {t.hero_h[1]}
            </span><br />
            {t.hero_h[2]}
          </h1>

          <p style={{ fontSize:19, color:"rgba(255,255,255,0.52)", lineHeight:1.75, maxWidth:620, margin:"0 auto 44px" }}>
            {t.hero_desc}
          </p>

          <div style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap" }}>
            <button onClick={() => scrollTo("services")} style={{
              padding:"14px 34px", background:"#00ffff", color:"black",
              fontFamily:"monospace", fontWeight:"bold", fontSize:15,
              border:"none", cursor:"pointer",
            }}>{t.hero_btn1} →</button>
            <button onClick={() => scrollTo("agents")} style={{
              padding:"14px 34px", background:"transparent", color:"#00ffff",
              fontFamily:"monospace", fontWeight:"bold", fontSize:15,
              border:"2px solid #00ffff", cursor:"pointer",
            }}>{t.hero_btn2}</button>
          </div>
        </div>
      </section>

      {/* DISCOVERY */}
      <section style={{ position:"relative", zIndex:10, padding:"60px 32px", borderTop:border }}>
        <div style={{ maxWidth:880, margin:"0 auto" }}>
          <div style={{
            border:"1px solid rgba(204,255,0,0.22)", background:"rgba(204,255,0,0.03)", padding:48,
          }}>
            <div style={{
              display:"inline-block", padding:"6px 16px", marginBottom:24,
              border:"1px solid rgba(204,255,0,0.38)", background:"rgba(204,255,0,0.07)",
              color:"#ccff00", fontSize:11, letterSpacing:"0.14em",
            }}>{t.disc_badge}</div>

            <h2 style={{ fontSize:"clamp(26px,4vw,44px)", fontWeight:"bold", margin:"0 0 12px" }}>{t.disc_h}</h2>
            <p style={{ fontSize:18, color:"#ccff00", fontWeight:"bold", margin:"0 0 24px" }}>{t.disc_sub}</p>
            <p style={{ fontSize:15, color:"rgba(255,255,255,0.57)", lineHeight:1.85, maxWidth:680, margin:"0 0 36px" }}>{t.disc_body}</p>

            <div style={{ display:"flex", gap:24, alignItems:"flex-start", flexWrap:"wrap" }}>
              <button onClick={() => scrollTo("contact")} style={{
                padding:"14px 28px", background:"#ccff00", color:"black",
                fontFamily:"monospace", fontWeight:"bold", fontSize:14,
                border:"none", cursor:"pointer", flexShrink:0,
              }}>{t.disc_cta}</button>
              <p style={{ fontSize:12, color:"rgba(255,255,255,0.3)", lineHeight:1.7, maxWidth:400, margin:0, paddingTop:6 }}>{t.disc_note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ position:"relative", zIndex:10, padding:"72px 32px", borderTop:border }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:60 }}>
            <div style={{
              display:"inline-block", padding:"6px 16px", marginBottom:20,
              border:"1px solid rgba(0,255,255,0.28)", background:"rgba(0,255,255,0.05)",
              color:"#00ffff", fontSize:11, letterSpacing:"0.14em",
            }}>{t.srv_badge}</div>
            <h2 style={{ fontSize:"clamp(30px,5vw,54px)", fontWeight:"bold", margin:"0 0 14px" }}>{t.srv_h}</h2>
            <p style={{ fontSize:17, color:"rgba(255,255,255,0.45)" }}>{t.srv_sub}</p>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(340px,1fr))", gap:20 }}>
            {t.services.map((s, i) => (
              <div key={i} style={{
                background: expanded===i ? "rgba(0,255,255,0.04)" : "rgba(0,0,0,0.38)",
                border:`1px solid ${expanded===i ? "#00ffff" : "rgba(255,255,255,0.07)"}`,
                padding:26, transition:"all 0.4s",
              }}>
                <div style={{
                  width:46, height:46, marginBottom:18,
                  background: expanded===i ? "rgba(0,255,255,0.12)" : "rgba(255,255,255,0.05)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  transition:"background 0.3s",
                }}>
                  <Icon name={s.icon} size={22} color={expanded===i ? "#00ffff" : "#555"} />
                </div>
                <h3 style={{ fontSize:21, fontWeight:"bold", margin:"0 0 4px" }}>{s.title}</h3>
                <div style={{ fontSize:12, color:"#00ffff", margin:"0 0 16px" }}>{s.sub}</div>
                <p style={{ fontSize:13, color:"rgba(255,255,255,0.52)", lineHeight:1.75, margin:"0 0 18px" }}>{s.desc}</p>

                <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:20 }}>
                  {s.features.map((f,fi) => (
                    <div key={fi} style={{ display:"flex", alignItems:"center", gap:10 }}>
                      <div style={{ width:5, height:5, flexShrink:0, background: expanded===i ? "#00ffff" : "#3a3a3a" }} />
                      <span style={{ fontSize:13, color:"rgba(255,255,255,0.65)" }}>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Expanded */}
                {expanded === i && (
                  <div style={{ borderTop:"1px solid rgba(255,255,255,0.07)", paddingTop:18, marginBottom:16 }}>
                    <div style={{ background:"rgba(0,0,0,0.45)", padding:16, marginBottom:14 }}>
                      <div style={{ fontSize:10, color:"#ccff00", letterSpacing:"0.12em", marginBottom:12 }}>
                        {lang==="fi" ? "PROSESSI:" : "PROCESS:"}
                      </div>
                      {s.process.map((step,si) => (
                        <div key={si} style={{ display:"flex", gap:10, marginBottom:8 }}>
                          <span style={{ color:"#00ffff", fontSize:12, minWidth:18 }}>{si+1}.</span>
                          <span style={{ fontSize:12, color:"rgba(255,255,255,0.6)" }}>{step}</span>
                        </div>
                      ))}
                    </div>
                    <button onClick={() => scrollTo("contact")} style={{
                      width:"100%", padding:12, background:"#00ffff", color:"black",
                      fontFamily:"monospace", fontWeight:"bold", fontSize:13,
                      border:"none", cursor:"pointer",
                    }}>{t.quote_btn}</button>
                  </div>
                )}

                <button
                  onClick={() => setExpanded(expanded===i ? null : i)}
                  style={{
                    background:"none", border:"none", cursor:"pointer", padding:0,
                    color: expanded===i ? "#00ffff" : "rgba(255,255,255,0.28)",
                    fontFamily:"monospace", fontSize:13, fontWeight:"bold",
                    display:"flex", alignItems:"center", gap:6, transition:"color 0.2s",
                  }}
                >
                  {expanded===i ? t.read_less : t.read_more}
                  <span style={{ display:"inline-block", transform: expanded===i ? "rotate(90deg)" : "none", transition:"transform 0.3s" }}>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section style={{ position:"relative", zIndex:10, padding:"72px 32px", borderTop:border }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <div style={{
              display:"inline-block", padding:"6px 16px", marginBottom:20,
              border:"1px solid rgba(204,255,0,0.28)", background:"rgba(204,255,0,0.04)",
              color:"#ccff00", fontSize:11, letterSpacing:"0.14em",
            }}>{t.uc_badge}</div>
            <h2 style={{ fontSize:"clamp(30px,5vw,54px)", fontWeight:"bold", margin:0 }}>{t.uc_h}</h2>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:14 }}>
            {t.usecases.map((uc, i) => (
              <div key={i}
                style={{
                  background: uc.isCustom ? "rgba(204,255,0,0.04)" : "rgba(0,0,0,0.38)",
                  border: uc.isCustom ? "1px dashed rgba(204,255,0,0.35)" : "1px solid rgba(255,255,255,0.06)",
                  padding:22, cursor: uc.isCustom ? "pointer" : "default", transition:"all 0.3s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = uc.isCustom ? "rgba(204,255,0,0.7)" : "rgba(0,255,255,0.3)";
                  e.currentTarget.style.background   = uc.isCustom ? "rgba(204,255,0,0.09)" : "rgba(0,255,255,0.04)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = uc.isCustom ? "rgba(204,255,0,0.35)" : "rgba(255,255,255,0.06)";
                  e.currentTarget.style.background   = uc.isCustom ? "rgba(204,255,0,0.04)" : "rgba(0,0,0,0.38)";
                }}
                onClick={uc.isCustom ? () => scrollTo("contact") : undefined}
              >
                <div style={{ marginBottom:12 }}>
                  <Icon name={uc.icon} size={20} color={uc.isCustom ? "#ccff00" : "#00ffff"} />
                </div>
                <h3 style={{ fontSize:14, fontWeight:"bold", margin:"0 0 8px", color: uc.isCustom ? "#ccff00" : "white" }}>{uc.title}</h3>
                <p style={{ fontSize:12, color:"rgba(255,255,255,0.47)", lineHeight:1.65, margin:0 }}>{uc.desc}</p>
                {uc.isCustom && (
                  <div style={{ marginTop:14, fontSize:12, color:"#ccff00", display:"flex", alignItems:"center", gap:6 }}>
                    {lang==="fi" ? "Kerro tarpeestasi" : "Tell us your needs"} →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI AGENTS */}
      <section id="agents" style={{ position:"relative", zIndex:10, padding:"72px 32px", borderTop:border }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"start" }}>
          <div>
            <div style={{
              display:"inline-block", padding:"6px 16px", marginBottom:24,
              border:"1px solid rgba(57,255,20,0.3)", background:"rgba(57,255,20,0.05)",
              color:"#39ff14", fontSize:11, letterSpacing:"0.14em",
            }}>{t.ag_badge}</div>
            <h2 style={{ fontSize:"clamp(26px,3.5vw,44px)", fontWeight:"bold", lineHeight:1.18, margin:"0 0 20px" }}>{t.ag_h}</h2>
            <p style={{ fontSize:15, color:"rgba(255,255,255,0.52)", lineHeight:1.85, margin:"0 0 32px" }}>{t.ag_desc}</p>
            <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
              {t.ag_bullets.map((b,i) => (
                <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:12 }}>
                  <div style={{ width:7, height:7, background:"#39ff14", flexShrink:0, marginTop:7 }} />
                  <span style={{ fontSize:14, color:"rgba(255,255,255,0.68)" }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Agent visual */}
          <div>
            {/* 4 agents grid */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:12 }}>
              {t.agents.map((ag, i) => (
                <div key={i} style={{
                  background:"rgba(0,0,0,0.5)", border:"1px solid rgba(57,255,20,0.25)", padding:"18px 16px",
                }}>
                  <div style={{ display:"flex", alignItems:"center", gap:7, marginBottom:8 }}>
                    <div style={{
                      width:7, height:7, background:"#39ff14", borderRadius:"50%",
                      animation:"livePulse 1.6s infinite", animationDelay:`${i*0.35}s`,
                    }} />
                    <span style={{ fontSize:10, color:"#39ff14", letterSpacing:"0.1em" }}>LIVE</span>
                  </div>
                  <div style={{ fontSize:14, fontWeight:"bold", marginBottom:5 }}>{ag.name}</div>
                  <div style={{ fontSize:11, color:"rgba(255,255,255,0.4)", lineHeight:1.5 }}>{ag.role}</div>
                </div>
              ))}
            </div>

            {/* Connector arrows */}
            <div style={{ display:"flex", justifyContent:"center", gap:24, marginBottom:12 }}>
              {[0,1,2,3].map(i => (
                <div key={i} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:2 }}>
                  <div style={{ width:1, height:16, background:"rgba(57,255,20,0.35)" }} />
                  <div style={{ width:0, height:0, borderLeft:"4px solid transparent", borderRight:"4px solid transparent", borderTop:"6px solid rgba(57,255,20,0.45)" }} />
                </div>
              ))}
            </div>

            {/* Orchestrator */}
            <div style={{
              background:"rgba(57,255,20,0.06)", border:"2px solid #39ff14",
              padding:"20px 24px", textAlign:"center",
            }}>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, marginBottom:8 }}>
                <div style={{ width:9, height:9, background:"#39ff14", borderRadius:"50%", animation:"livePulse 1.2s infinite" }} />
                <span style={{ fontSize:10, color:"#39ff14", letterSpacing:"0.15em", fontWeight:"bold" }}>LIVE — ORCHESTRATOR</span>
              </div>
              <div style={{ fontSize:16, fontWeight:"bold", marginBottom:4 }}>Orchestrator</div>
              <div style={{ fontSize:12, color:"rgba(255,255,255,0.45)" }}>{t.orchestrator}</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY & OPEN SOURCE — alternative path for sensitive data */}
      <section style={{ position:"relative", zIndex:10, padding:"72px 32px", borderTop:border }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <div style={{
              display:"inline-block", padding:"6px 16px", marginBottom:20,
              border:"1px solid rgba(57,255,20,0.3)", background:"rgba(57,255,20,0.05)",
              color:"#39ff14", fontSize:11, letterSpacing:"0.14em",
            }}>{t.sec_badge}</div>
            <h2 style={{ fontSize:"clamp(30px,5vw,54px)", fontWeight:"bold", margin:"0 0 14px" }}>{t.sec_h}</h2>
            <p style={{ fontSize:17, color:"#39ff14", fontWeight:"bold", margin:"0 0 18px" }}>{t.sec_sub}</p>
            <p style={{ fontSize:15, color:"rgba(255,255,255,0.5)", lineHeight:1.85, maxWidth:680, margin:"0 auto" }}>{t.sec_body}</p>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:18, marginBottom:40 }}>
            {t.sec_points.map((p, i) => (
              <div key={i} style={{
                background:"rgba(0,0,0,0.4)", border:"1px solid rgba(57,255,20,0.18)",
                padding:26, transition:"all 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(57,255,20,0.55)"; e.currentTarget.style.background="rgba(57,255,20,0.04)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(57,255,20,0.18)"; e.currentTarget.style.background="rgba(0,0,0,0.4)"; }}
              >
                <div style={{
                  width:42, height:42, marginBottom:16,
                  background:"rgba(57,255,20,0.08)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                }}>
                  <Icon name={p.icon} size={20} color="#39ff14" />
                </div>
                <h3 style={{ fontSize:15, fontWeight:"bold", margin:"0 0 10px" }}>{p.title}</h3>
                <p style={{ fontSize:13, color:"rgba(255,255,255,0.5)", lineHeight:1.7, margin:0 }}>{p.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign:"center" }}>
            <button onClick={() => scrollTo("contact")} style={{
              padding:"14px 32px", background:"transparent", color:"#39ff14",
              fontFamily:"monospace", fontWeight:"bold", fontSize:14,
              border:"2px solid #39ff14", cursor:"pointer",
            }}>{t.sec_cta}</button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ position:"relative", zIndex:10, padding:"80px 32px", borderTop:border }}>
        <div style={{ maxWidth:820, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <div style={{
              display:"inline-block", padding:"6px 16px", marginBottom:20,
              border:"1px solid rgba(0,255,255,0.28)", background:"rgba(0,255,255,0.05)",
              color:"#00ffff", fontSize:11, letterSpacing:"0.14em",
            }}>{t.contact_badge}</div>
            <h2 style={{ fontSize:"clamp(34px,6vw,66px)", fontWeight:"bold", lineHeight:1.05, margin:"0 0 16px" }}>
              {t.contact_h}
            </h2>
            <p style={{ fontSize:16, color:"rgba(255,255,255,0.45)", lineHeight:1.75, maxWidth:540, margin:"0 auto" }}>
              {t.contact_sub}
            </p>
          </div>

          {/* Steps */}
          <div style={{
            background:"rgba(0,0,0,0.35)", border:"1px solid rgba(255,255,255,0.07)",
            padding:"36px 40px", marginBottom:36,
          }}>
            {t.contact_steps.map((step, i) => (
              <div key={i} style={{
                display:"flex", gap:20, alignItems:"flex-start",
                paddingBottom: i < t.contact_steps.length-1 ? 24 : 0,
                marginBottom: i < t.contact_steps.length-1 ? 24 : 0,
                borderBottom: i < t.contact_steps.length-1 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}>
                <div style={{
                  width:34, height:34, flexShrink:0,
                  background:"rgba(0,255,255,0.08)", border:"1px solid rgba(0,255,255,0.28)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontWeight:"bold", color:"#00ffff", fontSize:15,
                }}>{i+1}</div>
                <p style={{ fontSize:15, color:"rgba(255,255,255,0.65)", lineHeight:1.8, margin:0 }}>{step}</p>
              </div>
            ))}
          </div>

          {/* Email display */}
          <div style={{
            display:"flex", alignItems:"center", justifyContent:"center",
            gap:16, flexWrap:"wrap", marginBottom:40,
          }}>
            <div style={{
              display:"flex", alignItems:"center", gap:14,
              background:"rgba(0,0,0,0.45)", border:"1px solid rgba(0,255,255,0.22)",
              padding:"18px 28px",
            }}>
              <span style={{ fontSize:12, color:"rgba(255,255,255,0.38)", letterSpacing:"0.08em" }}>
                {t.contact_email_label}
              </span>
              <span style={{ fontSize:18, fontWeight:"bold", color:"#00ffff", letterSpacing:"0.02em" }}>
                {t.contact_email}
              </span>
            </div>
            <button
              onClick={copyEmail}
              style={{
                padding:"18px 24px", background:"transparent",
                color: copied ? "#ccff00" : "#00ffff",
                fontFamily:"monospace", fontWeight:"bold", fontSize:14,
                border:`2px solid ${copied ? "#ccff00" : "#00ffff"}`,
                cursor:"pointer", transition:"all 0.25s",
              }}
            >{copied ? t.copied : t.copy_btn}</button>
          </div>

          <div style={{ display:"flex", gap:28, justifyContent:"center", flexWrap:"wrap" }}>
            {t.cta_checks.map((c,i) => (
              <div key={i} style={{ display:"flex", alignItems:"center", gap:8, color:"rgba(255,255,255,0.32)", fontSize:13 }}>
                <div style={{ width:6, height:6, background:"#00ffff" }} />
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        position:"relative", zIndex:10, borderTop:border,
        padding:"36px 32px", display:"flex",
        justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:16,
      }}>
        <div style={{ display:"flex", alignItems:"center", gap:12 }}>
          <div style={{
            width:36, height:36, background:"linear-gradient(135deg,#00ffff,#ccff00)",
            display:"flex", alignItems:"center", justifyContent:"center",
            fontWeight:"bold", color:"black", fontSize:12,
          }}>CAS</div>
          <div>
            <div style={{ fontWeight:"bold", fontSize:14 }}>CustomAutomationSolutions</div>
            <div style={{ fontSize:10, color:"rgba(255,255,255,0.28)", marginTop:2 }}>{t.footer_tag}</div>
          </div>
        </div>
        <div style={{ fontSize:12, color:"rgba(255,255,255,0.2)" }}>© 2025 CAS</div>
      </footer>


      <style>{`
        :root {
          color-scheme: dark;
        }
        html, body {
          background: #1c1c1c !important;
          color: #ffffff !important;
          margin: 0;
          padding: 0;
        }
        @keyframes gridMove {
          0%   { transform: translate(0, 0); }
          100% { transform: translate(${CELL}px, ${CELL}px); }
        }
        @keyframes textScrollUp {
          from { transform: translateY(0); }
          to   { transform: translateY(-99px); }
        }
        @keyframes livePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.25; transform: scale(0.8); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(-24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
