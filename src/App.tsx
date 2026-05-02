import { useState, type ComponentType } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Hammer,
  HardHat,
  Mail,
  MapPin,
  Menu,
  Phone,
  Ruler,
  ShieldCheck,
  Trees,
  Upload,
  X,
} from 'lucide-react'

type Icon = ComponentType<{ className?: string; strokeWidth?: number }>

const navItems = [
  ['Home', 'home'],
  ['Services', 'services'],
  ['Experience', 'experience'],
  ['Clients', 'clients'],
  ['Projects', 'projects'],
  ['About', 'about'],
  ['Contact', 'contact'],
]

const stats = [
  ['35+ Years', 'Serving Central Texas'],
  ['800+ Projects', 'Completed across commercial sectors'],
  ['$10M Bondable', 'Ready for serious commercial work'],
  ['$25K-$4M', 'Typical project range'],
]

const services: Array<{ title: string; body: string; icon: Icon }> = [
  {
    title: 'Conventional Framing',
    body: 'Commercial wood-framing for a wide range of building types and structural requirements.',
    icon: Hammer,
  },
  {
    title: 'Wood Truss Systems',
    body: 'Installation and coordination of wood truss systems for commercial construction projects.',
    icon: Ruler,
  },
  {
    title: 'Timber Framing',
    body: 'Experienced timber framing solutions for structural and architectural applications.',
    icon: Trees,
  },
  {
    title: 'Glu-lam Beam Systems',
    body: 'Installation of engineered wood beam systems for commercial structures.',
    icon: Building2,
  },
  {
    title: 'Exterior Siding & Trim',
    body: 'Exterior siding, trim, and finish carpentry solutions for commercial projects.',
    icon: HardHat,
  },
  {
    title: 'T&G Soffits / Decking',
    body: 'Tongue-and-groove soffits, decking, and custom wood applications.',
    icon: ClipboardCheck,
  },
  {
    title: 'Custom Wood Decks',
    body: 'Commercial custom wood decks using materials such as Ipe or Trex.',
    icon: BadgeCheck,
  },
  {
    title: 'Wood-to-Steel Connections',
    body: 'Support for projects requiring complex wood-to-steel connections and coordination with CMU and concrete.',
    icon: ShieldCheck,
  },
]

const projectTypes = [
  'Pet Hospitals',
  'Churches',
  'Fire Stations',
  'Amenity Centers',
  'Health Facilities',
  'Assisted Living Facilities',
  'Retail Buildings',
  'Banks',
]

const clients = [
  'American Constructors Inc.',
  'ATX',
  'Austin Canyon',
  'Braun & Butler Construction, Inc.',
  'Cadre Construction',
  'Century Construction',
  'CGI Construction',
  'Chasco Contractors',
  'CORE Construction',
  'DCA Construction',
  'Flynn Construction',
  'Forney Construction',
  'Fromberg Construction',
  'FT Woods Construction',
  'Gilger Contractors',
  'Gold Medal Construction',
  'Greco Construction',
  'Hal Wahler Construction',
  'Harvey-Cleary Builders',
  'HB Construction',
  'KDK Group',
  'Lott Brothers Construction',
  'Navcon Group LLC',
  'Novak Commercial',
  'Paradigm Commercial',
  'Pfluger Builders',
  'Raymond Construction',
  'Ratliff Hardscape',
  'RG Tate',
  'Ridgemont Commercial Construction',
  'River Rock Construction',
  "Rogers-O'Brien Construction",
  'Sabre Commercial',
  'SpawGlass Contractors',
  'STR Constructors',
  'S. Watts Group, Inc.',
  'Trimbuilt',
  'Veritas Construction',
  'White Construction',
  'Wurzel Builders, Ltd.',
  'Zapalac Reed Construction Co.',
]

const processSteps = [
  ['Plan Review & Estimate', 'Send project plans and scope for estimating review.'],
  ['Submittals & Coordination', 'RKB supports the project through submittals, coordination, and planning.'],
  ['Commercial Framing Execution', 'Experienced crews complete framing work with quality and jobsite professionalism.'],
  ['Project Closeout', 'Final work is completed with attention to schedule, quality, and contractor expectations.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showAllClients, setShowAllClients] = useState(false)
  const visibleClients = showAllClients ? clients : clients.slice(0, 16)
  const currentYear = new Date().getFullYear()

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="min-h-screen bg-[#f5f2ec] text-[#23211f]">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} closeMenu={closeMenu} />
      <main>
        <section
          id="home"
          className="relative isolate overflow-hidden bg-[#1f2525] pt-24 text-white md:pt-28"
        >
          <div className="absolute inset-0 -z-10">
            <img
              src="/rkb-commercial-framing.png"
              alt="Commercial wood framing structure under construction"
              className="h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(25,29,29,0.98)_0%,rgba(25,29,29,0.9)_42%,rgba(25,29,29,0.18)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(25,29,29,0.4)_0%,rgba(25,29,29,0.05)_58%,rgba(25,29,29,0.1)_100%)]" />
          </div>

          <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-5 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-24">
            <div className="w-[min(100%,350px)] max-w-3xl sm:w-auto">
              <p className="mb-5 inline-flex items-center gap-2 border-l-4 border-[#c88a2e] bg-white/8 px-4 py-2 text-sm font-semibold text-[#f1d7aa]">
                Commercial wood-framing subcontractor
              </p>
              <h1 className="max-w-4xl text-[2.15rem] font-black leading-[1.08] text-white sm:text-6xl lg:text-7xl">
                Commercial Wood-Framing Services in Central Texas
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#e3ded4] sm:text-xl">
                Turn-key commercial wood-framing solutions for general contractors, builders,
                and commercial construction teams across Central Texas.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="btn-primary" href="#contact">
                  Request a Bid
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a className="btn-secondary-dark" href="#services">
                  View Services
                </a>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {['35+ Years Serving Central Texas', '800+ Completed Projects', 'Bondable up to $10M'].map(
                  (item) => (
                    <div key={item} className="border border-white/14 bg-white/8 px-4 py-4 backdrop-blur">
                      <CheckCircle2 className="mb-3 h-5 w-5 text-[#d2993f]" />
                      <p className="text-sm font-bold leading-5 text-white">{item}</p>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="hidden self-end lg:block">
              <div className="ml-auto max-w-md border border-white/16 bg-[#151918]/80 p-6 shadow-2xl backdrop-blur">
                <p className="text-sm font-semibold uppercase text-[#d2993f]">Bid-ready capability</p>
                <p className="mt-3 text-2xl font-black leading-tight">
                  Framing support from estimate and submittals through construction completion.
                </p>
                <div className="mt-6 grid gap-3 text-sm text-[#d9d2c6]">
                  <span>Public, private, and non-profit sectors</span>
                  <span>Typical work from $25,000 to $4,000,000</span>
                  <span>Complex wood, steel, CMU, and concrete coordination</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <StatsBar />
        <ServicesSection />
        <ExperienceSection />
        <ProjectsSection />
        <ClientsSection
          visibleClients={visibleClients}
          showAllClients={showAllClients}
          setShowAllClients={setShowAllClients}
        />
        <AboutSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer currentYear={currentYear} />
      <a
        href="tel:5129309153"
        className="fixed bottom-4 left-4 z-50 inline-flex w-[min(calc(100vw-2rem),358px)] items-center justify-center gap-2 bg-[#c4781f] px-5 py-4 text-sm font-black text-white shadow-xl md:hidden"
      >
        <Phone className="h-5 w-5" />
        Call RKB
      </a>
    </div>
  )
}

function Header({
  menuOpen,
  setMenuOpen,
  closeMenu,
}: {
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
  closeMenu: () => void
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#171b1b]/94 text-white shadow-lg backdrop-blur">
      <div className="mx-0 flex h-20 w-[min(100%,390px)] items-center justify-between px-5 sm:mx-auto sm:w-auto sm:max-w-7xl sm:px-6 lg:px-8">
        <a href="#home" onClick={closeMenu} className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center bg-[#c4781f] text-lg font-black text-white">
            RKB
          </span>
          <span>
            <span className="block text-base font-black leading-none">RKB Contractors, Inc.</span>
            <span className="mt-1 block text-xs font-semibold text-[#cfc6b8]">Commercial Wood-Framing</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="text-sm font-semibold text-[#e8e2d8] transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:5129309153" className="inline-flex items-center gap-2 text-sm font-bold text-[#f1d7aa]">
            <Phone className="h-4 w-4" />
            512-930-9153
          </a>
          <a className="btn-primary px-5 py-3 text-sm" href="#contact">
            Request a Bid
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex h-11 w-11 items-center justify-center border border-white/20 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#171b1b] px-5 py-5 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1">
            {navItems.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={closeMenu}
                className="border-b border-white/8 py-3 text-base font-bold text-[#eee7dc]"
              >
                {label}
              </a>
            ))}
            <a className="btn-primary mt-4 justify-center" href="#contact" onClick={closeMenu}>
              Request a Bid
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

function StatsBar() {
  return (
    <section className="relative z-10 -mt-10 px-5 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden border border-[#ded6ca] bg-white shadow-xl sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([value, label]) => (
          <div key={value} className="border-b border-[#e7dfd4] p-6 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0">
            <p className="text-3xl font-black text-[#1f2525]">{value}</p>
            <p className="mt-2 text-sm font-semibold leading-6 text-[#6f675e]">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-black uppercase text-[#b36518]">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-black leading-tight text-[#1f2525] sm:text-5xl">{title}</h2>
      {body && <p className="mt-5 text-lg leading-8 text-[#645d55]">{body}</p>}
    </div>
  )
}

function ServicesSection() {
  return (
    <section id="services" className="section bg-[#f5f2ec]">
      <SectionHeader
        eyebrow="Services"
        title="Turn-Key Commercial Wood-Framing Solutions"
        body="RKB Contractors provides complete commercial wood-framing services for projects requiring conventional framing, wood truss systems, timber framing, glu-lam beam systems, and complex wood-to-steel connections."
      />
      <div className="mx-auto mt-12 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ title, body, icon: IconComponent }) => (
          <article key={title} className="group border border-[#ded6ca] bg-white p-6 transition hover:border-[#c4781f] hover:shadow-xl">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center bg-[#f0e1ce] text-[#9f5414]">
              <IconComponent className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-black text-[#24211e]">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-[#696158]">{body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ExperienceSection() {
  const items = [
    ['Service Sectors', 'Public / Private / Non-Profit'],
    ['Typical Project Size', '$25,000 to $4,000,000'],
    ['Bondable', 'Yes, up to $10,000,000'],
    ['Client Type', 'General Contractors and Commercial Builders'],
    ['Region', 'Central Texas'],
  ]

  return (
    <section id="experience" className="section bg-[#1f2525] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase text-[#d2993f]">Project Fit</p>
          <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
            Built for Commercial Construction Demands
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#d8d0c4]">
            RKB is positioned for commercial teams that need capable estimating,
            dependable coordination, and framing execution aligned with jobsite expectations.
          </p>
          <a className="btn-primary mt-8" href="#contact">
            Send Plans for Estimate
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {items.map(([label, value]) => (
            <div key={label} className="border border-white/12 bg-white/7 p-6">
              <p className="text-sm font-semibold text-[#d4b27d]">{label}</p>
              <p className="mt-2 text-xl font-black text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section id="projects" className="section bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase text-[#b36518]">Projects</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#1f2525] sm:text-5xl">
              Commercial Project Experience Across Central Texas
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#645d55]">
            RKB Contractors has served the commercial building industry of Central Texas for more than 35 years and has completed over 800 projects. The team has experience framing a variety of commercial structures including pet hospitals, churches, fire stations, amenity centers, health facilities, assisted living facilities, retail buildings, and banks.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {projectTypes.map((type) => (
            <div key={type} className="border border-[#ded6ca] bg-[#f8f5ef] p-5">
              <Building2 className="mb-5 h-6 w-6 text-[#a96018]" />
              <p className="font-black text-[#24211e]">{type}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className="group relative min-h-64 overflow-hidden bg-[#1f2525]">
              <img
                src="/rkb-commercial-framing.png"
                alt="Commercial framing project placeholder"
                className="h-full min-h-64 w-full object-cover opacity-70 transition duration-500 group-hover:scale-105"
                style={{ objectPosition: `${35 + index * 8}% ${35 + (index % 2) * 20}%` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151817] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs font-black uppercase text-[#d2993f]">Project photo placeholder</p>
                <p className="mt-1 text-lg font-black text-white">Commercial wood-framing work</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ClientsSection({
  visibleClients,
  showAllClients,
  setShowAllClients,
}: {
  visibleClients: string[]
  showAllClients: boolean
  setShowAllClients: (show: boolean) => void
}) {
  return (
    <section id="clients" className="section bg-[#eee7dc]">
      <SectionHeader
        eyebrow="Clients"
        title="Trusted by General Contractors Across Central Texas"
        body="A broad client list reflects long-term work with commercial builders, estimators, and project teams across the region."
      />
      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
        {visibleClients.map((client) => (
          <div key={client} className="flex min-h-24 items-center justify-center border border-[#d7cdbf] bg-white px-4 py-5 text-center text-sm font-black leading-5 text-[#2d2a26]">
            {client}
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={() => setShowAllClients(!showAllClients)}
          className="inline-flex items-center gap-2 border border-[#a96018] px-5 py-3 text-sm font-black text-[#7d3f0d] transition hover:bg-[#a96018] hover:text-white"
        >
          {showAllClients ? 'Show Fewer Clients' : 'Show More Clients'}
          <ChevronDown className={`h-4 w-4 transition ${showAllClients ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="section bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-black uppercase text-[#b36518]">About RKB</p>
          <h2 className="mt-3 text-4xl font-black leading-tight text-[#1f2525] sm:text-5xl">
            Experience, Integrity, and Long-Term Contractor Relationships
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-[#645d55]">
            <p>
              Bob Seaman and Trent Fluitt have over 70 years of combined experience building commercial structures. RKB Contractors takes a relationship-based approach to working with clients and general contractors, many of whom they have worked with for decades.
            </p>
            <p>
              RKB understands the complexity of commercial construction and has the experience to handle projects from estimating and submittals through construction. The company strives to provide professional service, quality workmanship, and integrity on every project.
            </p>
          </div>
        </div>
        <div className="relative min-h-[420px] overflow-hidden bg-[#1f2525]">
          <img
            src="/rkb-commercial-framing.png"
            alt="Commercial framing jobsite detail"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-[#1f2525]/90 p-6 text-white">
            <p className="text-sm font-black uppercase text-[#d2993f]">Established in Central Texas</p>
            <p className="mt-2 text-2xl font-black">More than 35 years serving commercial construction teams.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="section bg-[#f5f2ec]">
      <SectionHeader eyebrow="Process" title="From Estimate to Framing Completion" />
      <div className="mx-auto mt-12 grid max-w-7xl gap-4 md:grid-cols-4">
        {processSteps.map(([title, body], index) => (
          <article key={title} className="relative border border-[#ded6ca] bg-white p-6">
            <span className="mb-8 flex h-11 w-11 items-center justify-center bg-[#1f2525] text-sm font-black text-white">
              {index + 1}
            </span>
            <h3 className="text-xl font-black text-[#24211e]">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-[#696158]">{body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="section bg-[#1f2525] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="text-sm font-black uppercase text-[#d2993f]">Bid Requests</p>
          <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
            Contact RKB Contractors for Commercial Wood-Framing Needs
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#d8d0c4]">
            Send plans, scope notes, and project timing to the estimating team. The form is ready for future backend integration.
          </p>
          <div className="mt-8 grid gap-4">
            <a href="tel:5129309153" className="contact-link">
              <Phone className="h-5 w-5 text-[#d2993f]" />
              512-930-9153
            </a>
            <a href="mailto:estimating@rkbcontractorsinc.com" className="contact-link">
              <Mail className="h-5 w-5 text-[#d2993f]" />
              estimating@rkbcontractorsinc.com
            </a>
            <div className="contact-link">
              <MapPin className="h-5 w-5 text-[#d2993f]" />
              1300 Bootys Rd., Georgetown, TX 78628
            </div>
          </div>
        </div>

        <form className="grid gap-4 border border-white/12 bg-white p-5 text-[#24211e] shadow-2xl sm:grid-cols-2">
          <Field label="First Name" name="firstName" />
          <Field label="Last Name" name="lastName" />
          <Field label="Company Name" name="companyName" className="sm:col-span-2" />
          <Field label="Email" name="email" type="email" />
          <Field label="Phone" name="phone" type="tel" />
          <Field label="Project Location" name="projectLocation" />
          <Field label="Project Type" name="projectType" />
          <Field label="Estimated Project Start Date" name="startDate" type="date" className="sm:col-span-2" />
          <label className="sm:col-span-2">
            <span className="form-label">Message / Scope Details</span>
            <textarea name="message" rows={5} className="form-input resize-y" />
          </label>
          <label className="sm:col-span-2 border border-dashed border-[#c8b9a6] bg-[#f8f5ef] p-5">
            <span className="flex items-center gap-2 text-sm font-black text-[#24211e]">
              <Upload className="h-5 w-5 text-[#a96018]" />
              Upload Plans
            </span>
            <input type="file" name="plans" className="mt-4 w-full text-sm" />
            <span className="mt-3 block text-sm leading-6 text-[#696158]">
              You can also email plans to estimating@rkbcontractorsinc.com.
            </span>
          </label>
          <button type="submit" className="btn-primary justify-center sm:col-span-2">
            Request a Bid
            <ArrowRight className="h-5 w-5" />
          </button>
        </form>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  className = '',
}: {
  label: string
  name: string
  type?: string
  className?: string
}) {
  return (
    <label className={className}>
      <span className="form-label">{label}</span>
      <input name={name} type={type} className="form-input" />
    </label>
  )
}

function Footer({ currentYear }: { currentYear: number }) {
  return (
    <footer className="bg-[#151918] px-5 pb-28 pt-12 text-[#d8d0c4] sm:px-6 md:pb-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-2xl font-black text-white">RKB Contractors, Inc.</p>
          <p className="mt-3 max-w-md leading-7">Commercial Wood-Framing Services in Central Texas</p>
        </div>
        <div className="grid gap-2 text-sm">
          <p className="font-black text-white">Contact</p>
          <a href="tel:5129309153">512-930-9153</a>
          <a href="mailto:estimating@rkbcontractorsinc.com">estimating@rkbcontractorsinc.com</a>
          <span>1300 Bootys Rd., Georgetown, TX 78628</span>
        </div>
        <nav className="grid grid-cols-2 gap-2 text-sm">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm">
        Copyright {currentYear} RKB Contractors, Inc. All rights reserved.
      </div>
    </footer>
  )
}

export default App
