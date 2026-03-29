/* ============================================================
   AURA ARCH — Journal Post
   ============================================================ */

'use strict';

const JournalPostPage = (() => {
  const fallbackSlug = 'biophilic-design';
  const links = {
    journal: 'journal.html',
    contact: 'contact.html'
  };

  const articles = {
    'biophilic-design': {
      category: 'Interior Design',
      title: 'The Case for Biophilic Design: Why Nature Belongs in Every Room',
      lead: 'Biophilic design is not a styling trend. It is a way of making interiors feel healthier, calmer, and more aligned with how people actually recover, focus, and live.',
      metaDescription: 'Aura Arch Journal explores how biophilic design uses light, material honesty, and planted moments to make interiors feel healthier and calmer.',
      date: 'March 18, 2026',
      readTime: '8 min read',
      author: 'Isabel Voss',
      role: 'Principal Designer',
      bio: 'Isabel leads interior direction at Aura Arch with a focus on calm spatial sequencing, tactile material palettes, and rooms that support daily life with less visual noise.',
      heroImage: '../assets/images/pages/journal-post/kian-zhang-zg7B433_29s-unsplash.jpg',
      heroAlt: 'Biophilic design living room interior',
      cardImage: '../assets/images/pages/journal/lotus-design-n-print-RwXneIyqxAw-unsplash.jpg',
      tags: ['Biophilic Design', 'Interior Design', 'Materials', 'Sustainability'],
      body: `
        <p>The rooms people return to most often are usually the ones that feel easiest on the body. They hold soft daylight, some visual depth, honest materials, and an atmosphere that slows the pace of the day. That response is not accidental. It is part of what biophilic design tries to formalize.</p>
        <p>At Aura Arch, we use biophilic thinking as a design framework rather than a decorative theme. It helps us make decisions about orientation, materiality, lighting, and even furniture placement so a room feels grounded instead of over-composed.</p>
        <blockquote><p>Nature in interiors works best when it is structural to the room, not added after the fact.</p></blockquote>
        <h2>Start with natural light before you add natural elements.</h2>
        <p>Plants and organic textures are useful, but they cannot compensate for a room that is poorly lit or visually flat. We usually begin with light quality: how daylight enters, what it hits first, and how it changes across the day. Window treatments, reflection from pale surfaces, and the placement of architectural openings all matter more than the number of plants in the room.</p>
        <figure>
          <img src="../assets/images/pages/journal-post/spacejoy-OlFHzNjg9kY-unsplash.jpg" alt="Natural daylight in a calm bedroom interior" loading="lazy" />
          <figcaption>Natural daylight, tonal restraint, and breathable circulation create most of the calm people describe as restorative.</figcaption>
        </figure>
        <h2>Material honesty is more calming than visual excess.</h2>
        <p>Biophilic rooms tend to feel better because they reduce synthetic noise. Timber with visible grain, linen with texture, stone with quiet variation, and plaster that catches light softly all provide complexity without clutter. They do not need to be rustic. They just need to feel believable.</p>
        <p>That is why we often limit the palette while increasing depth inside it. One oak tone can appear across joinery, furniture, and trim, while stone, brushed metal, and woven textiles create a slower, more layered reading of the room.</p>
        <h2>Use planting as one layer, not the whole story.</h2>
        <p>Plants help because they introduce movement, irregularity, and a living edge to otherwise static rooms. But a biophilic interior should still work when the planting is scaled back. If the only natural signal in the room is a row of potted plants, the design is probably still relying on surface effect rather than spatial quality.</p>
        <p>The better approach is to let planting sit inside a wider strategy: warm daylight, natural textures, comfortable sightlines, filtered views, and a lighting plan that stays soft after sunset.</p>
      `
    },
    thresholds: {
      category: 'Architecture',
      title: 'Thresholds That Slow You Down in the Best Way',
      lead: 'The strongest arrival moments are rarely dramatic. More often, they are measured transitions that let the body recalibrate before the main space opens up.',
      metaDescription: 'Aura Arch Journal on how entry sequences, compression, and framed views create calmer architectural arrivals.',
      date: 'March 9, 2026',
      readTime: '6 min read',
      author: 'Marcus Trent',
      role: 'Architectural Director',
      bio: 'Marcus leads architectural planning at Aura Arch, focusing on circulation, threshold design, and spatial sequences that feel controlled without losing warmth.',
      heroImage: '../assets/images/pages/journal-post/annie-spratt-krEX3ehhezs-unsplash.jpg',
      heroAlt: 'Architectural threshold and entry design',
      cardImage: '../assets/images/pages/journal-post/mohamed-marey-C299ajcFPm0-unsplash.jpg',
      tags: ['Architecture', 'Thresholds', 'Residential Design', 'Planning'],
      body: `
        <p>There is a reason some homes feel immediately composed while others reveal everything at once. A good threshold creates a pause. It compresses, redirects, filters, and frames. That sequence makes the main room feel earned rather than simply visible.</p>
        <p>We use entry moments to control emotional tempo. The move can be subtle: a dimmer vestibule, a side-facing view, a turn around joinery, or a ceiling plane that opens only after the first few steps. These are not tricks. They are pacing devices.</p>
        <blockquote><p>The entry is where architecture tells you how fast the rest of the project should be experienced.</p></blockquote>
        <h2>Compression gives scale more impact.</h2>
        <p>When everything is large from the first second, scale flattens out. A narrower passage, a lower beam, or a quieter material moment at the entry makes the eventual release into the larger room feel more deliberate.</p>
        <figure>
          <img src="../assets/images/pages/journal-post/pablo-natolo-l2rlJe5_J2U-unsplash.jpg" alt="Architectural passage leading into a brighter room" loading="lazy" />
          <figcaption>Compression and release work best when the material language stays calm while the proportions shift.</figcaption>
        </figure>
        <h2>Arrival should guide the eye, not overwhelm it.</h2>
        <p>We often frame one view on arrival rather than expose the entire plan. That might be a courtyard glimpse, a stair edge, or a quiet material wall. It gives the eye something to lock onto before the full space is revealed.</p>
        <p>Threshold design is especially important in open-plan homes where privacy, calm, and visual order can disappear quickly. Better sequencing fixes that without making the plan feel closed.</p>
      `
    },
    'stone-restraint': {
      category: 'Materials',
      title: 'Why Mixed Stone Palettes Still Need Restraint',
      lead: 'Stone can make a project feel quiet and enduring, but only if it is edited with discipline. Variety alone does not create richness.',
      metaDescription: 'Aura Arch Journal on editing mixed stone palettes so luxury interiors feel composed instead of crowded.',
      date: 'February 28, 2026',
      readTime: '5 min read',
      author: 'David Kim',
      role: 'Materials Lead',
      bio: 'David develops finish palettes for Aura Arch, balancing tactile depth with tonal restraint across stone, timber, metals, and textiles.',
      heroImage: '../assets/images/pages/journal-post/cat-han-VgyN_CWXQVM-unsplash.jpg',
      heroAlt: 'Refined interior with layered stone materials',
      cardImage: '../assets/images/pages/journal-post/tile-merchant-ireland-W3qdUw-eVsE-unsplash.jpg',
      tags: ['Materials', 'Stone', 'Interior Design', 'Luxury'],
      body: `
        <p>Clients often assume more premium material automatically means a more premium room. In practice, the opposite is common. When every stone has strong movement, contrasting undertones, or a different polish level, the room begins to lose hierarchy.</p>
        <p>We mix stone when there is a clear reason for each move. One surface may hold the architectural weight, another may support durability, and a third might add precision in smaller moments like vanity details or shelving.</p>
        <blockquote><p>Material richness comes from hierarchy, not quantity.</p></blockquote>
        <h2>Start with one dominant stone language.</h2>
        <p>Before combining multiple surfaces, we establish the primary visual temperature of the room. Is the project warm, cool, chalky, veined, matte, or reflective? Once that baseline is clear, supporting stones can be selected without breaking the tone.</p>
        <figure>
          <img src="../assets/images/pages/journal-post/collov-home-design--5HHAP5UWFM-unsplash.jpg" alt="Stone surfaces used in a refined kitchen interior" loading="lazy" />
          <figcaption>Stone reads best when one surface leads and the others reinforce rather than compete.</figcaption>
        </figure>
        <h2>Use contrast sparingly and with intent.</h2>
        <p>Contrast works when it marks a shift in function or weight. A darker stone kitchen island against quieter perimeter surfaces can work because the contrast serves the room. Random contrast rarely does.</p>
        <p>The goal is not sameness. The goal is coherence. When stone is edited with that in mind, the room feels collected rather than decorated.</p>
      `
    },
    'lighting-evening-mood': {
      category: 'Interior Design',
      title: 'Lighting as Architecture: Designing for Evening Mood',
      lead: 'The most memorable interiors do not stop working when daylight fades. They become more intimate, more legible, and often more beautiful.',
      metaDescription: 'Aura Arch Journal on using layered lighting to shape mood, function, and material expression after sunset.',
      date: 'February 12, 2026',
      readTime: '7 min read',
      author: 'Isabel Voss',
      role: 'Principal Designer',
      bio: 'Isabel directs interiors at Aura Arch with a particular focus on evening atmosphere, room composition, and the way materials behave under layered light.',
      heroImage: '../assets/images/pages/journal-post/tim-schmidbauer-3SDBYr0mszs-unsplash.jpg',
      heroAlt: 'Layered lighting interior at dusk',
      cardImage: '../assets/images/pages/journal-post/sean-pollock-PhYq704ffdA-unsplash.jpg',
      tags: ['Lighting', 'Interior Design', 'Atmosphere', 'Hospitality'],
      body: `
        <p>Many interiors are designed for how they photograph during the day, then left to default ceiling light after sunset. That is usually where the room loses depth. Evening requires a different hierarchy.</p>
        <p>We plan lighting in layers: ambient light that gives the room softness, task light that supports use, and accent light that clarifies material depth, art, and architectural edges. Without those layers, the room becomes flat or harsh.</p>
        <blockquote><p>After sunset, light becomes one of the primary materials in the room.</p></blockquote>
        <h2>Warmth and contrast need to be calibrated together.</h2>
        <p>Warm light alone does not create mood. The room also needs contrast between brighter and dimmer zones, between focal surfaces and background planes. That is what gives the eye somewhere to rest and something to discover.</p>
        <figure>
          <img src="../assets/images/pages/journal-post/kam-idris-hYb7kbu4x7E-unsplash.jpg" alt="Warm layered lighting in an architectural lounge" loading="lazy" />
          <figcaption>Good evening lighting reveals texture, depth, and circulation without flooding the entire room evenly.</figcaption>
        </figure>
        <h2>Plan for scenes, not just fixtures.</h2>
        <p>We think in use cases: arrival, dining, reading, entertaining, winding down. Each scene asks for a different balance of light sources, and the controls should make those shifts easy rather than technical.</p>
        <p>When lighting is treated architecturally, the room changes character at night without losing its calm.</p>
      `
    },
    'aura-arch-workflow': {
      category: 'Process',
      title: 'From Brief to Build: Inside the Aura Arch Workflow',
      lead: 'Good projects are not held together by taste alone. They are held together by sequencing, feedback structure, and a process that keeps decisions connected.',
      metaDescription: 'Aura Arch Journal on the studio workflow from discovery and concept design through procurement and final installation.',
      date: 'January 30, 2026',
      readTime: '6 min read',
      author: 'David Kim',
      role: 'Project Lead',
      bio: 'David coordinates design development and delivery at Aura Arch, shaping the workflow that carries projects from concept through procurement and final completion.',
      heroImage: '../assets/images/pages/journal/ryan-ancill-h86ZkM5Qiqg-unsplash.jpg',
      heroAlt: 'Design process workspace with plans and samples',
      cardImage: '../assets/images/pages/journal-post/austin-distel-wawEfYdpkag-unsplash.jpg',
      tags: ['Process', 'Studio Workflow', 'Project Delivery', 'Interior Design'],
      body: `
        <p>Every project arrives with a different level of clarity. Some clients know exactly how they want the space to feel but not how to build it. Others arrive with practical requirements and no design language yet. The workflow has to hold both.</p>
        <p>Our process starts with a brief that is more behavioral than decorative. We look at routines, hosting patterns, privacy needs, daylight habits, and emotional references before we settle on formal moves.</p>
        <blockquote><p>The workflow exists to keep atmosphere, detailing, and execution connected from the first meeting onward.</p></blockquote>
        <h2>Concept comes first, but coordination starts early.</h2>
        <p>We do not separate mood from practicality. As concept direction is forming, we are already testing whether materials, lighting, joinery, and procurement timelines can support it.</p>
        <figure>
          <img src="../assets/images/pages/journal-post/studio-archifiction-VjCJnvJRcQw-unsplash.jpg" alt="Studio desk with layouts and material samples" loading="lazy" />
          <figcaption>Strong process reduces rework because visual decisions and technical decisions are tested together.</figcaption>
        </figure>
        <h2>Review cycles need structure.</h2>
        <p>We package decisions by theme rather than sending fragmented updates: spatial changes together, palette changes together, procurement confirmations together. That makes feedback faster and clearer.</p>
        <p>By the time the project reaches site coordination, the visual language is already stable enough to protect the outcome from drift.</p>
      `
    },
    'kitchen-main-room': {
      category: 'Architecture',
      title: 'When the Kitchen Becomes the Main Room',
      lead: 'Open-plan kitchens now carry more social, visual, and atmospheric weight than almost any other zone in the home. They need to be designed accordingly.',
      metaDescription: 'Aura Arch Journal on designing open-plan kitchens with better sightlines, lighting logic, and material discipline.',
      date: 'January 18, 2026',
      readTime: '6 min read',
      author: 'Marcus Trent',
      role: 'Architectural Director',
      bio: 'Marcus shapes Aura Arch residential planning with an emphasis on sightlines, openness, and architectural clarity in shared living zones.',
      heroImage: '../assets/images/pages/journal-post/sufyan-AmrV7YxAegQ-unsplash.jpg',
      heroAlt: 'Modern kitchen designed as the social center of the home',
      cardImage: '../assets/images/pages/journal-post/dl314-lin-kQGe3339vIY-unsplash.jpg',
      tags: ['Architecture', 'Kitchen Design', 'Open Plan', 'Residential Design'],
      body: `
        <p>The kitchen is no longer just a working zone. In many homes it is the visual anchor, the gathering point, and the room most visible from the moment you enter. That level of exposure changes the design brief completely.</p>
        <p>We treat the kitchen like a public room inside the home. That means stronger control of sightlines, more discipline around storage concealment, and better material editing so the space can handle both utility and display.</p>
        <blockquote><p>If the kitchen is the main room, it has to carry both performance and architectural presence.</p></blockquote>
        <h2>Sightlines decide whether the room feels calm.</h2>
        <p>Open plan does not mean everything should always be visible. We often use islands, tall joinery, or ceiling transitions to shape what is seen first and what recedes. The goal is openness without visual sprawl.</p>
        <figure>
          <img src="../assets/images/pages/journal-post/james-sestric-6sU-hUm6mkY-unsplash.jpg" alt="Open kitchen with controlled sightlines and layered materials" loading="lazy" />
          <figcaption>Material restraint and spatial framing keep the kitchen social without making it noisy.</figcaption>
        </figure>
        <h2>Lighting has to shift with the room’s role.</h2>
        <p>A kitchen that hosts breakfast, work calls, and evening entertaining cannot rely on one lighting condition. We layer task light, concealed glow, and lower evening scenes so the room changes character across the day.</p>
        <p>That is what makes the kitchen feel architectural rather than merely fitted.</p>
      `
    },
    'residential-design-excellence': {
      category: 'Studio News',
      title: 'Aura Arch Recognized for Residential Design Excellence',
      lead: 'Our latest residential commission was recognized for the way it merged architectural clarity, tactile material editing, and a quietly cinematic lighting strategy.',
      metaDescription: 'Aura Arch studio news on a recent residential design award and the thinking behind the winning project.',
      date: 'January 5, 2026',
      readTime: '3 min read',
      author: 'Aura Arch',
      role: 'Studio Update',
      bio: 'Aura Arch shares studio updates, award news, and project milestones through the journal as part of the wider practice record.',
      heroImage: '../assets/images/pages/journal-post/roseanna-kyle-rOyPeRIxryQ-unsplash.jpg',
      heroAlt: 'Residential interior recognized for design excellence',
      cardImage: '../assets/images/pages/journal-post/puscas-adryan-n854nQPOkRI-unsplash.jpg',
      tags: ['Studio News', 'Awards', 'Residential Design', 'Aura Arch'],
      body: `
        <p>This recognition matters to us because it reflects the exact kind of work we want Aura Arch to stand for: spaces that feel resolved in mood, disciplined in detail, and generous in how they are lived.</p>
        <p>The project itself paired a restrained envelope with warmer interior layers, allowing the architecture to stay clear while the daily experience felt soft and tactile. That balance was central to the brief from the start.</p>
        <blockquote><p>Recognition is useful when it confirms the quality of the process behind the work, not just the image of the final room.</p></blockquote>
        <h2>What made the project stand out.</h2>
        <p>The home was designed around controlled daylight, strong threshold moments, and a material palette that stayed consistent from architecture into joinery and furniture. Nothing in the project was intended to feel loud, but every layer was meant to feel deliberate.</p>
        <figure>
          <img src="../assets/images/pages/journal-post/ruthie-schuster-OfSYY6Vs-pM-unsplash.jpg" alt="Award-winning residential interior with calm material palette" loading="lazy" />
          <figcaption>The strongest residential projects tend to feel edited, not overfilled, even when the detailing is complex.</figcaption>
        </figure>
        <h2>Where the studio goes next.</h2>
        <p>We are carrying the same principles into upcoming hospitality and residential commissions: fewer unnecessary gestures, stronger sequencing, and a deeper emphasis on atmosphere after dark.</p>
        <p>That continuity matters more to us than the award itself. It means the studio language is becoming clearer with each project.</p>
      `
    }
  };

  const articleOrder = Object.keys(articles);

  function getSlug() {
    const slug = new URLSearchParams(window.location.search).get('article');
    return articles[slug] ? slug : fallbackSlug;
  }

  function buildTags(article) {
    return article.tags.map(tag => `<span>${tag}</span>`).join('');
  }

  function buildRelated(currentSlug) {
    const startIndex = articleOrder.indexOf(currentSlug);
    const relatedSlugs = articleOrder
      .slice(startIndex + 1)
      .concat(articleOrder.slice(0, startIndex))
      .filter(slug => slug !== currentSlug)
      .slice(0, 3);

    return relatedSlugs.map(slug => {
      const article = articles[slug];
      return `
        <article class="related-card">
          <img src="${article.cardImage}" alt="${article.heroAlt}" loading="lazy" />
          <div class="related-card__text">
            <h4><a href="journal-post.html?article=${slug}" style="color:inherit;text-decoration:none;">${article.title}</a></h4>
            <span>${article.readTime}</span>
          </div>
        </article>
      `;
    }).join('');
  }

  function renderArticle(slug) {
    const article = articles[slug];
    const root = document.getElementById('journal-post-root');
    if (!root) return;

    document.title = `${article.title} — Aura Arch Journal`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', article.metaDescription);

    root.innerHTML = `
      <section class="article-hero">
        <div class="article-hero__image">
          <img src="${article.heroImage}" alt="${article.heroAlt}" data-parallax="0.08" loading="eager" />
        </div>
        <div class="article-hero__overlay"></div>
        <div class="article-hero__content">
          <div class="container">
            <a href="${links.journal}" class="btn btn--ghost-light">Back to Journal</a>
            <div class="section-label" style="margin-top:var(--sp-8);"><span>${article.category}</span></div>
            <h1 style="max-width:920px;color:var(--clr-white);margin-top:var(--sp-4);">${article.title}</h1>
            <p class="article-hero__lead">${article.lead}</p>
            <div class="article-meta">
              <div class="article-meta__author">
                <strong>${article.author}</strong>
                <span>${article.role}</span>
              </div>
              <span>${article.date}</span>
              <span>${article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="page-section page-section--tight">
        <div class="container article-layout">
          <article class="article-body reveal">
            ${article.body}
            <div class="tag-list" aria-label="Article tags">
              ${buildTags(article)}
            </div>

            <div class="panel-shell article-author-card">
              <span class="article-author-card__eyebrow">Written by</span>
              <strong>${article.author}</strong>
              <span class="article-author-card__role">${article.role}</span>
              <p>${article.bio}</p>
            </div>

            <div class="share-group" aria-label="Share article">
              <button type="button" data-share="copy">Copy Link</button>
              <button type="button" data-share="linkedin">LinkedIn</button>
              <button type="button" data-share="email">Email</button>
            </div>
          </article>

          <aside class="article-sidebar sticky-side">
            <div class="article-aside-card reveal reveal-delay-1">
              <h3 style="margin-bottom:var(--sp-5);">Related Articles</h3>
              <div class="page-cluster">
                ${buildRelated(slug)}
              </div>
            </div>

            <div class="article-aside-card article-aside-card--contrast reveal reveal-delay-2">
              <div class="section-label"><span>Begin the Brief</span></div>
              <h3 style="margin-top:var(--sp-4);">Need this level of thought applied to your own space?</h3>
              <p style="margin-top:var(--sp-4);">We design homes and hospitality spaces that feel calm, tactile, and fully resolved from first sketch to final styling.</p>
              <a href="${links.contact}" class="btn btn--primary" style="margin-top:var(--sp-6);width:100%;justify-content:center;">Book a Consultation</a>
            </div>
          </aside>
        </div>
      </section>
    `;

    root.setAttribute('aria-busy', 'false');

    root.querySelectorAll('[data-share]').forEach(button => {
      button.addEventListener('click', () => {
        const href = window.location.href;
        const encodedTitle = encodeURIComponent(article.title);
        const encodedHref = encodeURIComponent(href);

        if (button.dataset.share === 'copy' && navigator.clipboard) {
          navigator.clipboard.writeText(href);
          button.textContent = 'Copied';
          window.setTimeout(() => {
            button.textContent = 'Copy Link';
          }, 1800);
          return;
        }

        if (button.dataset.share === 'linkedin') {
          window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedHref}`, '_blank', 'noopener');
          return;
        }

        if (button.dataset.share === 'email') {
          window.location.href = `mailto:?subject=${encodedTitle}&body=${encodedHref}`;
        }
      });
    });

    if (typeof ScrollReveal !== 'undefined') ScrollReveal.init(root);
    if (typeof ParallaxMedia !== 'undefined') ParallaxMedia.init(root);
    if (typeof MouseTilt !== 'undefined') MouseTilt.init(root);
    if (typeof Lightbox !== 'undefined') Lightbox.init();
  }

  function init() {
    renderArticle(getSlug());
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', () => {
  JournalPostPage.init();
});
