export const company = {
  name: 'Noor Al Ateed Technical Services',
  shortName: 'Noor Al Ateed',
  arabicName: 'نور العتيد للخدمات الفنية',
  tagline: 'Technical Services',
  email: 'ateedtech@gmail.com',
  phones: [
    { label: 'Mobile', value: '+971 55 659 0904' },
    { label: 'Mobile', value: '+971 50 893 0663' },
  ],
  address: 'Muhaisanah Fourth, Madina Mall, Dubai, U.A.E.',
  mapsQuery: 'Madina Mall, Muhaisanah 4, Dubai, United Arab Emirates',
  mapsUrl:
    'https://www.google.com/maps?q=Madina+Mall,+Muhaisanah+4,+Dubai,+United+Arab+Emirates',
  mapsEmbed:
    'https://www.google.com/maps?q=Madina+Mall,+Muhaisanah+4,+Dubai,+United+Arab+Emirates&output=embed',
  contactName: 'Binu K. Jose',
  contactTitle: 'Technical Engineer',
  workingDays: 'Sunday to Thursday — 08:00am to 06:00pm',
  weekend: 'Friday to Saturday — Closed',
  about:
    'Noor Al Ateed Technical Services delivers electrical, fire, ELV, and security works across Dubai. From installation and commissioning to fault finding and maintenance, we work to a clear standard of quality, safety, and reliability — so systems on site perform as they should.',
}

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
] as const

export const services = [
  {
    number: '01',
    slug: 'electrical-works',
    title: 'Electrical Works',
    subtitle: 'Power & Distribution',
    description:
      'Electrical installation and fit-out for commercial and residential sites, executed with clean workmanship and attention to safety.',
    image:
      'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1400&q=80',
  },
  {
    number: '02',
    slug: 'fire-alarm',
    title: 'Fire Alarm Systems',
    subtitle: 'Detection & Notification',
    description:
      'Fire alarm system installation, device placement, and testing so buildings are ready to detect and alert when it matters.',
    image: '/services/fire-jsb.jpg',
  },
  {
    number: '03',
    slug: 'elv-systems',
    title: 'ELV Systems',
    subtitle: 'Extra-Low Voltage',
    description:
      'Extra-low voltage systems for building services, communications, and safety circuits — installed and tested with precision.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
  },
  {
    number: '04',
    slug: 'cctv',
    title: 'CCTV Installation',
    subtitle: 'Surveillance Coverage',
    description:
      'CCTV camera installation, cabling, and commissioning for practical, maintainable surveillance coverage.',
    image: '/services/cctv.jpg',
  },
  {
    number: '05',
    slug: 'access-control',
    title: 'Access Control Systems',
    subtitle: 'Secure Entry',
    description:
      'Access control installation for doors and controlled areas, from readers and locks through to testing and handover.',
    image: '/services/access.jpg',
  },
  {
    number: '06',
    slug: 'ups-systems',
    title: 'UPS Systems',
    subtitle: 'Uninterruptible Power',
    description:
      'UPS system supply, installation, and testing to keep critical loads running during mains interruption.',
    image: '/services/ups.jpg',
  },
  {
    number: '07',
    slug: 'central-battery',
    title: 'Central Battery Systems',
    subtitle: 'Emergency Power Continuity',
    description:
      'Central battery systems for emergency lighting and essential circuits, installed and verified for reliable backup.',
    image: '/services/central-battery.jpg',
  },
  {
    number: '08',
    slug: 'testing-commissioning',
    title: 'Testing & Commissioning',
    subtitle: 'Ready for Handover',
    description:
      'Structured testing and commissioning so electrical, fire, and ELV systems are proven before they go live.',
    image:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=80',
  },
  {
    number: '09',
    slug: 'fault-finding',
    title: 'Fault Finding & Rectification',
    subtitle: 'Diagnose and Repair',
    description:
      'Fault finding and rectification on live sites — tracing issues, repairing defects, and restoring systems quickly.',
    image:
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1400&q=80',
  },
  {
    number: '10',
    slug: 'cable-pulling',
    title: 'Cable Pulling & Termination',
    subtitle: 'Structured Cabling',
    description:
      'Cable pulling and termination with care for routing, labelling, and finish — from first-fix through to termination.',
    image:
      'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=1400&q=80',
  },
  {
    number: '11',
    slug: 'maintenance',
    title: 'Maintenance Services',
    subtitle: 'Ongoing Care',
    description:
      'Planned and reactive maintenance to keep electrical, fire, and ELV installations safe, functional, and reliable.',
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=80',
  },
] as const

export const values = [
  {
    title: 'Quality',
    text: 'Workmanship and testing that meet the standard the site requires — every circuit, device, and termination.',
  },
  {
    title: 'Safety',
    text: 'Safe methods on site for electrical, fire, and ELV works, protecting people and property throughout the job.',
  },
  {
    title: 'Reliability',
    text: 'Systems installed, commissioned, and maintained so they perform when they are needed.',
  },
] as const

export const heroImage =
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=80'

export const aboutImages = {
  primary:
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80',
  overlay:
    'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80',
}
