import { SiteNav } from '@/components/site-nav';

const plans = [
  {
    label: 'STARTER PACKAGE', name: 'The Roll', price: 'From £1,250',
    copy: 'Designed for intimate events requiring professional guidance and essential planning support.',
    includes: ['Initial consultation to understand your vision', 'Planning guidance and event structure support', 'Event timeline creation', 'Curated vendor recommendations', 'Décor setup by our Events Decorator (up to £300 value)', 'DJ (up to 4 hours)', 'Photographer (up to 3 hours)', 'Email and chat support during the planning process'],
    addOns: ['Day-of coordination', 'Specialty décor and installations', 'Equipment rental: tables, chairs, chair covers, linens, cutlery and glassware', 'Extended DJ or photography hours'],
    ideal: 'Intimate gatherings, birthdays, and small celebrations (approximately 20–80 guests)',
  },
  {
    label: 'SIGNATURE PACKAGE', name: 'The Double Deuce', price: 'From £2,250',
    copy: 'Our most popular package, offering comprehensive planning and on-the-day coordination.',
    includes: ['Initial consultation', 'Full event planning from concept to execution', 'Décor setup by our Events Decorator (up to £500 value)', 'Vendor booking, coordination, and management', 'DJ (up to 6 hours)', 'Photographer (up to 5 hours)', 'Guest list guidance and RSVP support', 'Rehearsal or pre-event coordination (if required)', 'Travel coordination for local or destination events', 'Day-of coordination (up to 3 hours)', 'Post-event breakdown coordination', 'Ongoing email and scheduled check-ins'],
    addOns: ['Specialty décor and installations', 'Equipment rental: tables, chairs, chair covers, linens, cutlery and glassware', 'Extended DJ or photography hours', 'Additional day-of coordination hours'],
    ideal: 'Milestone celebrations, corporate or social events (approximately 50–150 guests)',
  },
  {
    label: 'LUXURY PACKAGE', name: 'The High Roller', price: 'From £3,750',
    copy: 'A premium, all-inclusive planning experience for luxury, destination, or multi-day events.',
    includes: ['Everything in The Double Deuce, plus:', 'Unlimited planning support', 'Bespoke design concept and personalised décor styling (up to £1,000 value)', 'Premium vendor sourcing and coordination', 'DJ (up to 7 hours)', 'Photographer (up to 7 hours)', 'On-site planning team throughout the event', 'Full travel coordination for destination events', 'Guest accommodation and logistics support', 'Entertainment and production management', 'VIP guest services and concierge support'],
    addOns: ['Custom installations and large-scale décor', 'Videography and content creation', 'Equipment rental: tables, chairs, chair covers, linens, cutlery and glassware', 'Guest experiences'],
    ideal: 'Luxury events and events with 150+ guests',
  },
];
const sharedAddOns = ['Extended DJ, photography, or videography hours', 'Equipment and furniture rental', 'Live entertainment, MCs, and performers', 'Specialty décor: balloons, number designs, backdrops, and themed installations', 'Catering and dessert coordination', 'Additional services available upon request'];

export default function PackagesPage() {
  return <main id="content"><SiteNav>
    <section className="packages-film" aria-label="Deuces Events celebration film">
      <video autoPlay muted loop playsInline preload="metadata" aria-label="Celebration styling with a gold chair"><source src="https://deucesevents.com/wp-content/uploads/2026/01/WhatsApp-Video-2026-01-26-at-4.03.41-PM.mp4" type="video/mp4"/></video>
      <div className="packages-film-shade"/><div className="packages-film-copy"><p className="eyebrow">FLEXIBLE PACKAGES</p><h1>The right plan<br/>for your celebration.</h1><p>Choose your experience. Every package includes professional planning and décor coordination by Deuces Events – The Experience.</p></div>
    </section>
    <section className="package-intro"><p className="eyebrow">PACKAGES &amp; PRICING</p><h2>Exceptional value.<br/><i>Made for your moment.</i></h2><p>Prices are starting points for private celebrations and social events. Weddings, galas, corporate events, and large-scale productions require a bespoke quote. Additional décor, equipment, or services can be added at extra cost and confirmed during consultation.</p></section>
    <section className="package-grid interior-packages" aria-label="Packages and pricing">{plans.map((p,i)=><article className={`package package-${i+1}`} key={p.name}>
      <p className="package-level">{p.label}</p><h3>{p.name}</h3><p className="price">{p.price}</p><p className="package-copy">{p.copy}</p>
      <h4>What's included</h4><ul>{p.includes.map(x=><li key={x}>{x}</li>)}</ul>
      <h4>Optional add-ons</h4><ul>{p.addOns.map(x=><li key={x}>{x}</li>)}</ul>
      <p className="ideal-label">IDEAL FOR</p><p className="package-ideal">{p.ideal}</p><a className="text-link" href="/contact">Get started <span>↗</span></a>
    </article>)}</section>
    <section className="shared-addons"><div><p className="eyebrow">MAKE IT YOURS</p><h2>Optional add-ons<br/><i>across all packages.</i></h2></div><ul>{sharedAddOns.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="package-note"><div><p className="eyebrow">A LITTLE EXTRA HELP</p><h2>Additional event staff</h2><p>Event assistants and on-site support staff are available upon request and quoted separately.</p></div><a className="button button-dark" href="/contact">Book a consultation <span>↗</span></a></section>
    <section className="package-cta"><p className="eyebrow">START YOUR JOURNEY</p><h2>Have questions?</h2><p>We’re here to help you choose the perfect package and answer questions about our services, pricing, or process.</p><a className="button button-light" href="/contact">Book your date <span>↗</span></a></section>
  </SiteNav></main>
}
