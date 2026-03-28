/* ============================================================
   AURA ARCH — Service Details
   ============================================================ */

'use strict';

const ServiceDetailsPage = (() => {
  const fallbackSlug = 'architectural-design';
  const pageLinks = {
    home: '../index.html',
    services: 'services.html',
    contact: 'contact.html',
    pricing: 'pricing.html',
    cases: 'case-studies.html'
  };

  const serviceData = {
    'architectural-design': {
      title: 'Architectural Design',
      eyebrow: 'Service Details',
      lead: 'Architecture at Aura Arch begins with circulation, proportion, daylight, and threshold moments so the project feels emotionally coherent before material layers are resolved.',
      metaDescription: 'Architectural design by Aura Arch covering concept strategy, planning packages, construction coordination, and design-led site review.',
      quote: 'We use architecture to set the project’s emotional discipline before any decorative choice is made.',
      heroImage: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1800&q=85&auto=format&fit=crop',
      heroAlt: 'Minimal architectural residence with sculpted concrete and glass volumes.',
      spotlightImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&q=85&auto=format&fit=crop',
      spotlightAlt: 'Architectural model and finish boards on a studio table.',
      spotlightLabel: 'Studio Focus',
      spotlightText: 'The architectural package establishes spatial hierarchy, envelope logic, daylight behavior, and the overall calm of the finished project.',
      badges: ['Planning Packages', 'Construction Sets', 'Site Guidance'],
      summary: [
        { label: 'Typical Timeline', value: '10 to 18 weeks from brief to coordinated package.' },
        { label: 'Best For', value: 'New-build homes, structural renovations, and boutique hospitality shells.' },
        { label: 'Outcome', value: 'A clear architectural direction supported by build-ready documentation.' }
      ],
      sidecards: [
        {
          label: 'Ideal For',
          title: 'Projects where the envelope and circulation must lead.',
          text: 'This is the right scope when the architecture itself carries the identity of the project and every later layer needs to follow that logic.'
        },
        {
          label: 'Typical Outputs',
          title: 'What the studio delivers',
          items: ['Concept diagrams and massing studies', 'Planning and submission packages', 'Detailed drawing coordination', 'Site review checkpoints during execution']
        }
      ],
      overviewTitle: 'The architectural scope covers both idea-making and technical discipline.',
      overviewBody: 'We shape the narrative early, then carry it into drawing packages that protect the quality of the finished build.',
      overviewItems: [
        'Site and context analysis that informs orientation, privacy, and approach sequences.',
        'Plan and elevation studies that calibrate scale, openness, and structural logic.',
        'Documentation packages coordinated with consultants and construction realities.',
        'Design-intent reviews that keep the built outcome aligned with the approved concept.'
      ],
      deliverables: [
        { label: 'Phase 01', title: 'Brief + Strategy', text: 'A focused study of lifestyle, functional requirements, local constraints, and the emotional ambition of the home or venue.' },
        { label: 'Phase 02', title: 'Concept Design', text: 'Test-fit plans, massing options, section thinking, and mood references that establish the architectural thesis.' },
        { label: 'Phase 03', title: 'Technical Resolution', text: 'Detailed drawings and consultant coordination that make the concept executable without losing its clarity.' },
        { label: 'Phase 04', title: 'Construction Oversight', text: 'Milestone reviews and design clarifications that help the built result stay faithful to the original intent.' }
      ],
      stepsTitle: 'A four-stage path from brief to built form.',
      steps: [
        { title: 'Research', text: 'We map site constraints, user needs, and precedent references before drawing the first formal move.' },
        { title: 'Compose', text: 'Plans, sections, and exterior expression are developed together so the architecture feels authored, not assembled.' },
        { title: 'Coordinate', text: 'Technical decisions are resolved with the relevant specialists to reduce surprises during documentation and pricing.' },
        { title: 'Refine', text: 'We review the build against the drawings at key milestones and adjust details where needed to protect the concept.' }
      ],
      galleryTitle: 'The service is built around light, proportion, and threshold quality.',
      gallery: [
        { src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1400&q=85&auto=format&fit=crop', alt: 'Architectural courtyard with sculpted walls and natural light.' },
        { src: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&q=85&auto=format&fit=crop', alt: 'Refined modern residence exterior with strong geometry.' },
        { src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=85&auto=format&fit=crop', alt: 'Architectural stair and lightwell detail inside a residence.' }
      ],
      related: ['interior-design', 'visualization', 'project-delivery'],
      ctaTitle: 'Planning a new build or a structural renovation?',
      ctaText: 'We can define the scope, approval pathway, and deliverables that match the size and ambition of the project.'
    },
    'interior-design': {
      title: 'Interior Design',
      eyebrow: 'Service Details',
      lead: 'Our interior design work is about lived atmosphere, material intelligence, and spatial choreography, not surface styling layered on at the end.',
      metaDescription: 'Interior design by Aura Arch covering planning, bespoke joinery, finish palettes, furniture direction, procurement, and final styling.',
      quote: 'Interiors should feel inevitable inside the architecture, not loosely attached to it.',
      heroImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1800&q=85&auto=format&fit=crop',
      heroAlt: 'Warm interior lounge with sculptural seating and natural materials.',
      spotlightImage: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1000&q=85&auto=format&fit=crop',
      spotlightAlt: 'Interior materials, textiles, and samples arranged on a desk.',
      spotlightLabel: 'Studio Focus',
      spotlightText: 'We edit rooms as complete compositions, aligning planning, joinery, finishes, and furniture into one visual rhythm.',
      badges: ['Space Planning', 'Material Editing', 'Furniture Direction'],
      summary: [
        { label: 'Typical Timeline', value: '8 to 16 weeks depending on procurement complexity.' },
        { label: 'Best For', value: 'Residences, hospitality suites, lounges, and executive interiors.' },
        { label: 'Outcome', value: 'A fully authored interior with coherent function, tone, and detailing.' }
      ],
      sidecards: [
        {
          label: 'Ideal For',
          title: 'Projects where atmosphere matters as much as efficiency.',
          text: 'This scope suits clients who want the interior to feel intentional in every room, from circulation and storage to final object placement.'
        },
        {
          label: 'Typical Outputs',
          title: 'What the studio delivers',
          items: ['Space-planning layouts', 'Joinery and furniture direction', 'Finish palettes and schedules', 'Styling and installation guidance']
        }
      ],
      overviewTitle: 'Interior design is treated as a total composition, not a finishing layer.',
      overviewBody: 'The work balances how rooms perform with how they read emotionally, so every practical decision also supports the visual language.',
      overviewItems: [
        'Room-by-room planning that supports circulation, privacy, storage, and social use.',
        'Material palettes edited for tonal consistency, durability, and tactile contrast.',
        'Custom joinery direction that makes architecture and interior detailing feel continuous.',
        'Furniture, lighting, art, and styling decisions that complete the atmosphere at handover.'
      ],
      deliverables: [
        { label: 'Phase 01', title: 'Spatial Planning', text: 'We test layouts, furniture logic, and joinery opportunities so each room feels effortless in use.' },
        { label: 'Phase 02', title: 'Palette Development', text: 'Material, textile, fixture, and hardware edits create tonal discipline before procurement begins.' },
        { label: 'Phase 03', title: 'Detailed Packages', text: 'Joinery information, schedules, and selection sets give contractors and suppliers clear direction.' },
        { label: 'Phase 04', title: 'Installation + Styling', text: 'We support procurement, final placement, and styling so the delivered interior feels composed from day one.' }
      ],
      stepsTitle: 'A rhythm built around comfort, detail, and atmosphere.',
      steps: [
        { title: 'Plan', text: 'We shape how rooms function and connect before finalizing any decorative layer.' },
        { title: 'Edit', text: 'Finishes, fittings, and joinery are reduced to a disciplined set of moves rather than an overfilled palette.' },
        { title: 'Specify', text: 'Selections are documented with enough clarity to avoid drift during procurement and fabrication.' },
        { title: 'Compose', text: 'Styling, art, and furnishings are calibrated on site to give the project its final emotional balance.' }
      ],
      galleryTitle: 'The service is strongest when every room feels quiet, tactile, and fully considered.',
      gallery: [
        { src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1400&q=85&auto=format&fit=crop', alt: 'High-end interior living room with sculptural furniture.' },
        { src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=85&auto=format&fit=crop', alt: 'Minimal dining room with refined materials and soft light.' },
        { src: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200&q=85&auto=format&fit=crop', alt: 'Premium bedroom interior with layered textures and calm lighting.' }
      ],
      related: ['architectural-design', 'procurement', 'styling'],
      ctaTitle: 'Need interiors that feel resolved before procurement starts?',
      ctaText: 'We can scope a room-by-room package or align the interior direction to an active architecture project.'
    },
    visualization: {
      title: '3D Visualization',
      eyebrow: 'Service Details',
      lead: 'Visualization at Aura Arch is used to test atmosphere and material hierarchy early, so approvals and procurement decisions happen with more certainty.',
      metaDescription: '3D visualization by Aura Arch with still renders, review packs, and atmosphere-led imagery for architecture and interior projects.',
      quote: 'A rendering should clarify the emotional truth of a design, not just represent it.',
      heroImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1800&q=85&auto=format&fit=crop',
      heroAlt: 'Design studio workspace with large screen showing architectural rendering.',
      spotlightImage: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1000&q=85&auto=format&fit=crop',
      spotlightAlt: 'Interior rendering boards pinned during a design review.',
      spotlightLabel: 'Studio Focus',
      spotlightText: 'We use renders as decision tools, not just presentation assets, verifying material balance and focal points before costly commitments are made.',
      badges: ['Still Renders', 'Review Packs', 'Material Testing'],
      summary: [
        { label: 'Typical Timeline', value: '2 to 6 weeks depending on number of scenes and revisions.' },
        { label: 'Best For', value: 'Client approvals, investor presentations, and complex finish decisions.' },
        { label: 'Outcome', value: 'Clear visual direction before fabrication, pricing, or marketing begins.' }
      ],
      sidecards: [
        {
          label: 'Ideal For',
          title: 'Projects where visual certainty reduces delay.',
          text: 'Visualization is especially useful when multiple stakeholders need to align on atmosphere, finish combinations, or premium custom details.'
        },
        {
          label: 'Typical Outputs',
          title: 'What the studio delivers',
          items: ['Hero still images', 'Comparative material views', 'Annotated review decks', 'Presentation-ready export sets']
        }
      ],
      overviewTitle: 'Visualization sits between concept and commitment.',
      overviewBody: 'The work translates drawings and references into believable scenes so design choices can be judged in context rather than in isolation.',
      overviewItems: [
        'Still renderings for key arrival zones, living spaces, façades, or hospitality moments.',
        'Material and lighting comparison views to accelerate approvals on premium finish packages.',
        'Client-ready presentation layouts that support structured feedback and cleaner sign-off.',
        'Visual storytelling assets that can also inform marketing, leasing, or investor updates.'
      ],
      deliverables: [
        { label: 'Phase 01', title: 'Scene Planning', text: 'We define the camera hierarchy, emotional moments, and review goals before building image sets.' },
        { label: 'Phase 02', title: 'Model + Material Setup', text: 'Geometry, textures, and light behavior are calibrated to align with the intended architectural tone.' },
        { label: 'Phase 03', title: 'Review Iteration', text: 'We refine finish pairings, object density, and focal balance using targeted feedback rounds.' },
        { label: 'Phase 04', title: 'Presentation Delivery', text: 'Final imagery is packaged for client reviews, investor decks, or internal procurement coordination.' }
      ],
      stepsTitle: 'A lean process focused on clarity, not visual excess.',
      steps: [
        { title: 'Frame', text: 'We choose the scenes that best communicate the character and decision points of the project.' },
        { title: 'Build', text: 'Model detail, lighting, and material setup are tuned to reflect the intended mood accurately.' },
        { title: 'Review', text: 'Feedback is structured around the decisions the imagery is meant to support, not cosmetic revisions alone.' },
        { title: 'Present', text: 'Final outputs are prepared in a format that is ready for approvals, sales, or procurement use.' }
      ],
      galleryTitle: 'The output is strongest when imagery feels atmospheric, precise, and useful in real decision-making.',
      gallery: [
        { src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400&q=85&auto=format&fit=crop', alt: 'Design workstation displaying detailed architectural renderings.' },
        { src: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1200&q=85&auto=format&fit=crop', alt: 'Interior rendering process with dual monitor setup in a studio.' },
        { src: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=85&auto=format&fit=crop', alt: 'Rendered building façade with cinematic lighting.' }
      ],
      related: ['architectural-design', 'interior-design', 'lighting-design'],
      ctaTitle: 'Need approval-ready visuals before major selections are locked?',
      ctaText: 'We can create a render package focused on the rooms, façades, or mood shifts that matter most.'
    },
    'lighting-design': {
      title: 'Lighting Design',
      eyebrow: 'Service Details',
      lead: 'Our lighting work is about shaping how a space transitions through the day, how materials read at night, and how calm or drama is introduced scene by scene.',
      metaDescription: 'Lighting design by Aura Arch covering fixture plans, mood layering, dimming logic, and integrated scene direction for architecture and interiors.',
      quote: 'Light is often the final layer that decides whether a room feels composed or unfinished.',
      heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1800&q=85&auto=format&fit=crop',
      heroAlt: 'Moody architectural interior with layered lighting and textured surfaces.',
      spotlightImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1000&q=85&auto=format&fit=crop',
      spotlightAlt: 'Warm lit living space showing ambient, task, and accent lighting.',
      spotlightLabel: 'Studio Focus',
      spotlightText: 'We design light in layers so task needs, architecture, and evening atmosphere all remain balanced rather than competing.',
      badges: ['Fixture Planning', 'Scene Setting', 'Dimming Logic'],
      summary: [
        { label: 'Typical Timeline', value: '3 to 8 weeks depending on project scale and consultant coordination.' },
        { label: 'Best For', value: 'High-end residences, hospitality spaces, and layered evening environments.' },
        { label: 'Outcome', value: 'A fixture and control strategy that supports mood, use, and detail visibility.' }
      ],
      sidecards: [
        {
          label: 'Ideal For',
          title: 'Spaces that need to feel different across day and night.',
          text: 'Lighting design becomes critical when mood, hospitality, or premium material expression are central to the experience of the project.'
        },
        {
          label: 'Typical Outputs',
          title: 'What the studio delivers',
          items: ['Layered fixture plans', 'Fixture schedules and selection edits', 'Scene and dimming logic', 'On-site aiming and mood review notes']
        }
      ],
      overviewTitle: 'Lighting direction is developed as part of the architecture and interior story.',
      overviewBody: 'We coordinate functional illumination with the quieter emotional role of light so rooms perform well without losing atmosphere.',
      overviewItems: [
        'Ambient, accent, and task lighting layers structured around how each room is used.',
        'Fixture recommendations edited for glare control, finish compatibility, and maintenance practicality.',
        'Dimming and scene-setting logic for morning, daytime, evening, and entertaining modes.',
        'On-site review notes to refine beam aiming, warmth, and intensity once fittings are installed.'
      ],
      deliverables: [
        { label: 'Phase 01', title: 'Atmosphere Brief', text: 'We define where the project needs calm, drama, intimacy, or clarity before any fixtures are selected.' },
        { label: 'Phase 02', title: 'Layer Strategy', text: 'Ambient, accent, decorative, and task sources are assigned by zone and time-of-day behavior.' },
        { label: 'Phase 03', title: 'Controls + Scheduling', text: 'Fittings, switch logic, and dimming scenes are documented so the concept survives implementation.' },
        { label: 'Phase 04', title: 'On-Site Calibration', text: 'We review output, aiming, and scene balance once the fixtures are live inside the real material palette.' }
      ],
      stepsTitle: 'The process balances technical coordination with emotional control.',
      steps: [
        { title: 'Assess', text: 'We study daylight conditions, surface reflectance, and the intended atmosphere of each zone.' },
        { title: 'Layer', text: 'Lighting types are mapped so practical illumination and mood building are both covered.' },
        { title: 'Specify', text: 'Fixtures and controls are refined to the budget, finish palette, and ceiling conditions.' },
        { title: 'Tune', text: 'Final aiming and dimming edits are made on site to ensure the space feels complete after sunset.' }
      ],
      galleryTitle: 'The result should make the space feel more architectural, more tactile, and more alive after dark.',
      gallery: [
        { src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1400&q=85&auto=format&fit=crop', alt: 'Evening interior with layered architectural lighting.' },
        { src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=85&auto=format&fit=crop', alt: 'Dining room lit with warm pendant and wall-wash lighting.' },
        { src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=85&auto=format&fit=crop', alt: 'Residential lounge with soft accent lighting and texture.' }
      ],
      related: ['interior-design', 'visualization', 'project-delivery'],
      ctaTitle: 'Want the final space to feel as strong at night as it does in daylight?',
      ctaText: 'We can build a lighting package that covers fixture strategy, controls, and the final emotional calibration.'
    },
    'project-delivery': {
      title: 'Project Delivery',
      eyebrow: 'Service Details',
      lead: 'Project delivery keeps the built outcome aligned with the drawings, the procurement schedule, and the level of finish quality the concept requires.',
      metaDescription: 'Project delivery by Aura Arch covering procurement support, contractor coordination, site review, installation checks, and final handover.',
      quote: 'Design quality is protected by what happens after drawings are issued, not before.',
      heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=85&auto=format&fit=crop',
      heroAlt: 'Architecture team reviewing a project site during construction.',
      spotlightImage: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1000&q=85&auto=format&fit=crop',
      spotlightAlt: 'Construction drawings, sample boards, and schedules laid out for coordination.',
      spotlightLabel: 'Studio Focus',
      spotlightText: 'This scope translates intent into execution by staying close to suppliers, contractors, and installation milestones where quality can drift.',
      badges: ['Procurement Support', 'Site Reviews', 'Handover Styling'],
      summary: [
        { label: 'Typical Timeline', value: 'Runs alongside procurement and construction milestones.' },
        { label: 'Best For', value: 'Complex build-outs, custom joinery packages, and premium residential delivery.' },
        { label: 'Outcome', value: 'A cleaner handover with fewer quality gaps between concept and reality.' }
      ],
      sidecards: [
        {
          label: 'Ideal For',
          title: 'Projects where execution quality needs active design oversight.',
          text: 'This is most valuable when the build involves custom detailing, layered suppliers, or a contractor team that benefits from design-side clarifications.'
        },
        {
          label: 'Typical Outputs',
          title: 'What the studio delivers',
          items: ['Procurement coordination notes', 'Supplier and sample approvals', 'Site review observations', 'Final installation and styling oversight']
        }
      ],
      overviewTitle: 'Delivery closes the gap between good drawings and a convincing built result.',
      overviewBody: 'We stay involved where approval delays, substitutions, or installation drift are most likely to weaken the work.',
      overviewItems: [
        'Procurement coordination for furniture, finishes, fixtures, and bespoke fabrication packages.',
        'Regular design-intent clarifications for contractors and specialist vendors.',
        'Site observations focused on junctions, material transitions, and critical custom details.',
        'Final installation review and room composition support before photography or client handover.'
      ],
      deliverables: [
        { label: 'Phase 01', title: 'Delivery Mapping', text: 'We identify the packages, procurement milestones, and risk points that need design-side attention.' },
        { label: 'Phase 02', title: 'Supplier Alignment', text: 'Selections and approvals are tracked with enough structure to reduce confusion across vendors and timelines.' },
        { label: 'Phase 03', title: 'Site Review', text: 'We review construction progress at agreed milestones and issue focused notes where details begin to drift.' },
        { label: 'Phase 04', title: 'Final Composition', text: 'Installation, styling, and punch-list support help the last 10 percent of the project feel fully resolved.' }
      ],
      stepsTitle: 'The delivery layer is built to protect design quality under real project pressure.',
      steps: [
        { title: 'Plan', text: 'We align the delivery schedule with the parts of the design most vulnerable to substitutions or delay.' },
        { title: 'Coordinate', text: 'Selections, vendors, and fabrication checkpoints are tracked in a way the team can act on.' },
        { title: 'Inspect', text: 'We review key moments on site where geometry, material joins, or fixture execution need close attention.' },
        { title: 'Finish', text: 'The project is brought across the line through final edits, dressing, and handover-focused detail review.' }
      ],
      galleryTitle: 'The goal is a built result that still feels intentional at the last meter.',
      gallery: [
        { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=85&auto=format&fit=crop', alt: 'Architects reviewing build progress on an active project site.' },
        { src: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&q=85&auto=format&fit=crop', alt: 'Procurement samples and schedules prepared for delivery coordination.' },
        { src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&q=85&auto=format&fit=crop', alt: 'Completed architectural project with refined material execution.' }
      ],
      related: ['architectural-design', 'lighting-design', 'procurement'],
      ctaTitle: 'Need the build phase to stay aligned with the approved design?',
      ctaText: 'We can scope site oversight and procurement coordination around the moments that matter most to quality.'
    },
    procurement: {
      title: 'Procurement',
      eyebrow: 'Service Details',
      lead: 'Procurement support keeps premium selections moving with clarity, so the project is not slowed down by fragmented supplier communication or approval gaps.',
      metaDescription: 'Procurement support by Aura Arch covering supplier alignment, approvals, tracking, and installation readiness across furniture, finishes, and accessories.',
      quote: 'Procurement works best when it feels almost invisible to the client.',
      heroImage: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1800&q=85&auto=format&fit=crop',
      heroAlt: 'Curated architectural materials and furniture samples arranged on a desk.',
      spotlightImage: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1000&q=85&auto=format&fit=crop',
      spotlightAlt: 'Procurement schedules and finish samples prepared for review.',
      spotlightLabel: 'Studio Focus',
      spotlightText: 'We simplify approvals, track movement across vendors, and keep the material and furniture package consistent with the design intent.',
      badges: ['Supplier Alignment', 'Approval Tracking', 'Installation Readiness'],
      summary: [
        { label: 'Typical Timeline', value: 'Runs parallel to the selection and build phases.' },
        { label: 'Best For', value: 'Interior packages with multiple vendors, custom pieces, and imported items.' },
        { label: 'Outcome', value: 'Less friction across approvals, ordering, delivery, and installation sequencing.' }
      ],
      sidecards: [
        {
          label: 'Ideal For',
          title: 'Projects with layered selections and many moving vendors.',
          text: 'Procurement adds value when premium interiors need tighter follow-through than a contractor or client team can comfortably manage alone.'
        },
        {
          label: 'Typical Outputs',
          title: 'What the studio delivers',
          items: ['Supplier communication structure', 'Selection approval logs', 'Order and lead-time tracking', 'Installation-readiness coordination']
        }
      ],
      overviewTitle: 'The service keeps the selection package organized and on schedule.',
      overviewBody: 'It reduces friction between design, vendors, and site timing so the procurement layer supports the project rather than slowing it down.',
      overviewItems: [
        'Supplier outreach and comparative review for furniture, finishes, fixtures, and accessories.',
        'Approval tracking that keeps the client and project team aligned on current decisions.',
        'Lead-time and status visibility for custom pieces and long-lead imported items.',
        'Delivery sequencing support tied to installation milestones and site readiness.'
      ],
      deliverables: [
        { label: 'Phase 01', title: 'Package Setup', text: 'We structure the selection list into a manageable set of supplier and approval workflows.' },
        { label: 'Phase 02', title: 'Vendor Review', text: 'Pricing, availability, finish consistency, and alternates are evaluated without weakening the concept.' },
        { label: 'Phase 03', title: 'Tracking', text: 'Approvals, lead times, and delivery status are kept visible so surprises are reduced.' },
        { label: 'Phase 04', title: 'Install Readiness', text: 'We help coordinate sequencing and final receipt so the package lands cleanly on site.' }
      ],
      stepsTitle: 'The process is designed to make premium sourcing feel controlled rather than chaotic.',
      steps: [
        { title: 'Organize', text: 'Selections are grouped by vendor type, timeline, and installation dependency.' },
        { title: 'Approve', text: 'Samples and options are reviewed quickly so decisions do not bottleneck the schedule.' },
        { title: 'Track', text: 'Orders and lead times are monitored so the team always knows the real status of the package.' },
        { title: 'Coordinate', text: 'Deliveries are aligned with site readiness to avoid damage, storage issues, or unnecessary delays.' }
      ],
      galleryTitle: 'Procurement succeeds when the selection package stays premium and predictable at the same time.',
      gallery: [
        { src: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1400&q=85&auto=format&fit=crop', alt: 'Furniture and material selections curated for a premium interior project.' },
        { src: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&q=85&auto=format&fit=crop', alt: 'Sample boards and procurement schedules on a design table.' },
        { src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=85&auto=format&fit=crop', alt: 'Interior finishes and fixtures arranged for procurement review.' }
      ],
      related: ['interior-design', 'project-delivery', 'styling'],
      ctaTitle: 'Need help keeping selections and suppliers under control?',
      ctaText: 'We can support the procurement layer without expanding the scope into a full delivery appointment.'
    },
    styling: {
      title: 'Styling',
      eyebrow: 'Service Details',
      lead: 'Styling is the final editing layer that gives a space softness, personality, and visual restraint once the major architecture and interior moves are already complete.',
      metaDescription: 'Styling by Aura Arch covering art placement, object curation, soft furnishings, and final room composition before handover or photography.',
      quote: 'The final layer should feel quiet and precise, never over-explained.',
      heroImage: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1800&q=85&auto=format&fit=crop',
      heroAlt: 'Refined styled interior with art, textiles, and sculptural accessories.',
      spotlightImage: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1000&q=85&auto=format&fit=crop',
      spotlightAlt: 'Styled shelf vignette with books, ceramics, and soft material layers.',
      spotlightLabel: 'Studio Focus',
      spotlightText: 'We style to reinforce the architecture and interior palette, not to distract from it with unnecessary density or trend-driven objects.',
      badges: ['Art Placement', 'Soft Furnishings', 'Final Composition'],
      summary: [
        { label: 'Typical Timeline', value: '1 to 3 weeks near handover or photography.' },
        { label: 'Best For', value: 'Completed homes, hospitality suites, sales staging, and editorial shoots.' },
        { label: 'Outcome', value: 'Rooms that feel inhabited, balanced, and visually finished.' }
      ],
      sidecards: [
        {
          label: 'Ideal For',
          title: 'Projects that need a refined final edit rather than more design noise.',
          text: 'Styling is most effective when the architecture and interiors are already strong and just need the last layer of warmth and character.'
        },
        {
          label: 'Typical Outputs',
          title: 'What the studio delivers',
          items: ['Art and object curation', 'Soft furnishing edits', 'Shelf and surface composition', 'Photography-day room styling']
        }
      ],
      overviewTitle: 'The styling package gives the project its final level of polish.',
      overviewBody: 'We tune softness, density, color balance, and object placement so the space reads as calm and complete in person and in photographs.',
      overviewItems: [
        'Art and accessory selection that supports the material palette rather than overpowering it.',
        'Soft furnishing layers that bring warmth, tactility, and lived-in ease to the rooms.',
        'Object and shelf composition edited for scale, visual rhythm, and restraint.',
        'Final styling passes before client handover, viewings, or professional photography.'
      ],
      deliverables: [
        { label: 'Phase 01', title: 'Edit Direction', text: 'We review the completed interior and identify where softness, contrast, or warmth still need support.' },
        { label: 'Phase 02', title: 'Selection Layer', text: 'Artwork, textiles, objects, and decorative pieces are curated to suit the project rather than generic trends.' },
        { label: 'Phase 03', title: 'Placement', text: 'Items are arranged and adjusted room by room with attention to scale, emptiness, and focal balance.' },
        { label: 'Phase 04', title: 'Shoot Readiness', text: 'We prepare the rooms for handover or photography so the final impression is controlled and premium.' }
      ],
      stepsTitle: 'Styling is treated as a careful edit, not an afterthought.',
      steps: [
        { title: 'Review', text: 'We assess the finished interior and locate where the atmosphere still needs depth or softness.' },
        { title: 'Curate', text: 'Pieces are selected for tone, proportion, and material resonance with the architecture.' },
        { title: 'Compose', text: 'Objects, art, and textiles are placed until the rooms feel balanced rather than crowded.' },
        { title: 'Polish', text: 'Final adjustments are made for handover, photography, or sales staging with close attention to detail.' }
      ],
      galleryTitle: 'The aim is a room that feels finished without looking over-styled.',
      gallery: [
        { src: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1400&q=85&auto=format&fit=crop', alt: 'Styled premium bedroom with art, textiles, and sculptural furniture.' },
        { src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=85&auto=format&fit=crop', alt: 'Curated living room shelf styling with ceramics and books.' },
        { src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=85&auto=format&fit=crop', alt: 'Premium hospitality interior prepared for final photography.' }
      ],
      related: ['interior-design', 'procurement', 'project-delivery'],
      ctaTitle: 'Need the last layer to feel as resolved as the architecture itself?',
      ctaText: 'We can shape the final styling pass around handover, editorial photography, or a quiet luxury sales setup.'
    }
  };

  function escapeHTML(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  function getServiceSlug() {
    const params = new URLSearchParams(window.location.search);
    return params.get('service') || fallbackSlug;
  }

  function renderSidecard(card) {
    const items = Array.isArray(card.items) && card.items.length
      ? `<ul class="service-detail-list">${card.items.map(item => `<li><span>${escapeHTML(item)}</span></li>`).join('')}</ul>`
      : '';

    return `
      <article class="service-detail-sidecard reveal" data-reveal="left">
        <strong>${escapeHTML(card.label)}</strong>
        <h2>${escapeHTML(card.title)}</h2>
        ${card.text ? `<p>${escapeHTML(card.text)}</p>` : ''}
        ${items}
      </article>
    `;
  }

  function renderDeliverable(card, index) {
    return `
      <article class="service-detail-card reveal reveal-delay-${Math.min(index, 4)}" data-reveal="scale">
        <strong>${escapeHTML(card.label)}</strong>
        <h3>${escapeHTML(card.title)}</h3>
        <p>${escapeHTML(card.text)}</p>
      </article>
    `;
  }

  function renderStep(step, index) {
    return `
      <article class="service-detail-step reveal reveal-delay-${Math.min(index, 4)}" data-reveal="scale">
        <div class="service-detail-step__index">${String(index + 1).padStart(2, '0')}</div>
        <h3>${escapeHTML(step.title)}</h3>
        <p>${escapeHTML(step.text)}</p>
      </article>
    `;
  }

  function renderRelatedCard(slug, index) {
    const service = serviceData[slug];
    if (!service) return '';
    const headline = service.badges.slice(0, 2).join(' / ');

    return `
      <a href="service-details.html?service=${encodeURIComponent(slug)}" class="insight-card reveal reveal-delay-${Math.min(index, 4)}" data-reveal="scale">
        <strong>${escapeHTML(service.title)}</strong>
        <h3>${escapeHTML(headline)}</h3>
        <p>${escapeHTML(service.metaDescription)}</p>
      </a>
    `;
  }

  function updateSEO(service, slug) {
    document.title = `${service.title} — Aura Arch`;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute('content', service.metaDescription);
    }

    const schema = document.querySelector('#service-schema');
    if (!schema) return;

    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${service.title} | Aura Arch`,
      serviceType: service.title,
      description: service.metaDescription,
      url: `https://auraarch.com/pages/service-details.html?service=${encodeURIComponent(slug)}`,
      provider: {
        '@type': 'ProfessionalService',
        name: 'Aura Arch',
        url: 'https://auraarch.com/'
      }
    });
  }

  function refreshMotion(root) {
    if (typeof ScrollReveal !== 'undefined' && ScrollReveal && typeof ScrollReveal.init === 'function') {
      ScrollReveal.init(root);
    } else {
      root.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    }

    if (typeof ParallaxMedia !== 'undefined' && ParallaxMedia && typeof ParallaxMedia.init === 'function') {
      ParallaxMedia.init(root);
    }

    if (typeof MouseTilt !== 'undefined' && MouseTilt && typeof MouseTilt.init === 'function') {
      MouseTilt.init(root);
    }
  }

  function renderEmpty(root) {
    root.innerHTML = `
      <section class="page-section">
        <div class="container">
          <div class="service-detail-empty">
            <h1>Service not found.</h1>
            <p>The requested service detail page is unavailable. Browse the full service list to pick the right studio package.</p>
            <a href="${pageLinks.services}" class="btn btn--primary">View Services</a>
          </div>
        </div>
      </section>
    `;

    root.setAttribute('aria-busy', 'false');
  }

  function renderService(root, service, slug) {
    const relatedMarkup = service.related.map(renderRelatedCard).join('');
    const sidecards = service.sidecards.map(renderSidecard).join('');
    const deliverables = service.deliverables.map(renderDeliverable).join('');
    const steps = service.steps.map(renderStep).join('');

    root.innerHTML = `
      <section class="service-detail-hero">
        <div class="service-detail-hero__media">
          <img src="${service.heroImage}" alt="${escapeHTML(service.heroAlt)}" data-parallax="0.12" loading="eager" />
        </div>
        <div class="service-detail-hero__overlay"></div>
        <div class="service-detail-hero__frame">
          <div class="container">
            <div class="breadcrumb reveal">
              <a href="${pageLinks.home}">Home</a>
              <span>/</span>
              <a href="${pageLinks.services}">Services</a>
              <span>/</span>
              <span>${escapeHTML(service.title)}</span>
            </div>
            <div class="service-detail-hero__grid">
              <div class="service-detail-hero__copy reveal" data-reveal="left">
                <div class="service-detail-hero__eyebrow">${escapeHTML(service.eyebrow)}</div>
                <h1 class="service-detail-hero__title">${escapeHTML(service.title)}</h1>
                <p class="service-detail-hero__lead">${escapeHTML(service.lead)}</p>
                <div class="service-detail-hero__badge-row">
                  ${service.badges.map(badge => `<span class="service-detail-hero__badge">${escapeHTML(badge)}</span>`).join('')}
                </div>
              </div>
              <aside class="service-detail-hero__spotlight reveal" data-reveal="right" data-tilt data-tilt-strength="8">
                <div class="service-detail-hero__spotlight-visual">
                  <img src="${service.spotlightImage}" alt="${escapeHTML(service.spotlightAlt)}" data-parallax="0.08" loading="lazy" />
                </div>
                <div class="service-detail-hero__spotlight-copy">
                  <strong>${escapeHTML(service.spotlightLabel)}</strong>
                  <p>${escapeHTML(service.spotlightText)}</p>
                </div>
              </aside>
            </div>
            <div class="service-detail-hero__summary reveal">
              ${service.summary.map(item => `
                <div class="service-detail-hero__summary-item">
                  <strong>${escapeHTML(item.label)}</strong>
                  <span>${escapeHTML(item.value)}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <section class="quote-band">
        <div class="container">
          <div class="quote-band__inner reveal">
            <div class="quote-band__label">Aura Arch Method</div>
            <p class="quote-band__text">${escapeHTML(service.quote)}</p>
          </div>
        </div>
      </section>

      <section class="page-section">
        <div class="container service-detail-grid">
          <aside class="service-detail-sticky">
            ${sidecards}
          </aside>

          <div class="page-cluster">
            <article class="service-detail-card reveal">
              <strong>What This Covers</strong>
              <h2>${escapeHTML(service.overviewTitle)}</h2>
              <p>${escapeHTML(service.overviewBody)}</p>
              <ul class="service-detail-list">
                ${service.overviewItems.map(item => `<li><span>${escapeHTML(item)}</span></li>`).join('')}
              </ul>
            </article>

            <section class="page-cluster">
              <div class="section-label reveal"><span>Deliverables</span></div>
              <div class="service-detail-card-grid">
                ${deliverables}
              </div>
            </section>

            <section class="page-cluster">
              <div class="section-label reveal"><span>Process</span></div>
              <h2 class="reveal">${escapeHTML(service.stepsTitle)}</h2>
              <div class="service-detail-steps">
                ${steps}
              </div>
            </section>

            <section class="page-cluster">
              <div class="section-label reveal"><span>Project Lens</span></div>
              <h2 class="reveal">${escapeHTML(service.galleryTitle)}</h2>
              <div class="service-detail-gallery">
                <figure class="service-detail-gallery__feature reveal" data-reveal="left" data-tilt data-tilt-strength="6">
                  <img src="${service.gallery[0].src}" alt="${escapeHTML(service.gallery[0].alt)}" data-parallax="0.12" loading="lazy" />
                </figure>
                <div class="service-detail-gallery__stack">
                  <figure class="reveal reveal-delay-1" data-reveal="scale" data-tilt data-tilt-strength="5">
                    <img src="${service.gallery[1].src}" alt="${escapeHTML(service.gallery[1].alt)}" loading="lazy" />
                  </figure>
                  <figure class="reveal reveal-delay-2" data-reveal="scale" data-tilt data-tilt-strength="5">
                    <img src="${service.gallery[2].src}" alt="${escapeHTML(service.gallery[2].alt)}" loading="lazy" />
                  </figure>
                </div>
              </div>
            </section>

            <section class="page-cluster">
              <div class="section-label reveal"><span>Related Services</span></div>
              <h2 class="reveal">Services often paired with ${escapeHTML(service.title.toLowerCase())}.</h2>
              <div class="service-detail-related">
                ${relatedMarkup}
              </div>
            </section>

            <div class="cta-panel reveal">
              <div class="section-label" style="justify-content:center;"><span>Start a Conversation</span></div>
              <h2>${escapeHTML(service.ctaTitle)}</h2>
              <p>${escapeHTML(service.ctaText)}</p>
              <div class="cta-panel__actions">
                <a href="${pageLinks.contact}" class="btn btn--primary">Book a Consultation</a>
                <a href="${pageLinks.pricing}" class="btn btn--ghost-light">View Pricing</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    root.setAttribute('aria-busy', 'false');
    updateSEO(service, slug);
    refreshMotion(root);
  }

  function init() {
    const root = document.querySelector('#service-detail-root');
    if (!root) return;

    const slug = getServiceSlug();
    const service = serviceData[slug];

    window.setTimeout(() => {
      if (!service) {
        renderEmpty(root);
        return;
      }

      renderService(root, service, slug);
    }, 220);
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', () => {
  ServiceDetailsPage.init();
});
