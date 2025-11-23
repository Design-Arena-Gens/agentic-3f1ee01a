const sections = [
  {
    title: 'Why Community Podcasts Matter',
    paragraphs: [
      'Grassroots community podcasts are an approachable medium for everyday people to share stories, explain civic issues, and highlight local changemakers. Because they reduce the production costs and gatekeeping associated with traditional newsroom or broadcast outlets, neighborhood voices can circulate ideas that rarely surface in mainstream channels. The intimacy of audio also fosters parasocial trust, giving listeners the sense that they are part of an ongoing conversation about their city.',
      'In media and communication theory, this dynamic connects to the concept of the public sphere. While Habermas focused on coffee houses and newspapers, today’s localized podcasts create micro-public spheres that extend deliberation to marginalized audiences. The medium’s portability — consumed while commuting, cooking, or walking — ensures that civic dialogue slips into routines rather than demanding formal attention.'
    ]
  },
  {
    title: 'Impact on Civic Participation',
    paragraphs: [
      'Community podcasts often activate listeners by translating abstract policies into lived experiences. Hosts invite residents, small business owners, and organizers to unpack how zoning changes, school board elections, or transportation plans influence daily life. By contextualizing policy within relatable narratives, they bridge the knowledge gap that frequently suppresses voter turnout or public meeting participation.',
      'Agenda-setting theory helps explain this effect: when a podcast repeatedly frames transit equity as urgent, it signals to listeners that this topic deserves action. Listeners internalize these priorities and are more likely to share them, call into city hall, or support grassroots campaigns. Because episodes can be replayed and shared asynchronously, they build lasting informational capital rather than the fleeting impressions of a single news broadcast.'
    ]
  },
  {
    title: 'Challenges and Ethical Considerations',
    paragraphs: [
      'The low barrier to entry also introduces risks. Without editorial oversight, misinformation can spread, and the credibility of hosts is tied to personal reputation instead of institutional checks. Critical media literacy becomes essential: audiences must evaluate sources, triangulate claims, and remain cautious of echo chambers reinforced by algorithmic recommendations on podcast platforms.',
      'Communication scholars can study how self-regulation practices — such as publishing transcripts, citing data sources, or inviting opposing viewpoints — influence audience trust. Applying uses and gratifications theory, researchers might examine whether listeners seek these podcasts for surveillance (information seeking), social integration, or personal identity, and how those motives affect their scrutiny of content credibility.'
    ]
  },
  {
    title: 'Opportunities for Further Study',
    paragraphs: [
      'Future research could map how community podcasts intersect with local journalism ecosystems. Mixed-method studies might compare cities with active podcast networks against those without, measuring differences in meeting attendance, petition signatures, or crowdfunding success for civic projects. Scholars could also analyze listener feedback loops — voicemail hotlines, community Discord servers, or live tapings — to understand how dialogic communication sustains engagement.',
      'Because the format is relatively easy to replicate, universities or non-profits can partner with community centers to train residents in audio storytelling. Evaluating the outcomes of these interventions would provide concrete data on whether the medium genuinely empowers publics or merely preaches to the already engaged.'
    ]
  }
];

const references = [
  'Habermas, J. (1989). The Structural Transformation of the Public Sphere.',
  'McCombs, M., & Shaw, D. (1972). The Agenda-Setting Function of Mass Media.',
  'Katz, E., Blumler, J., & Gurevitch, M. (1973). Uses and Gratifications Research.'
];

export default function Page() {
  return (
    <main>
      <header>
        <p className="emphasis">Media and Communication Theory — Micro-Essay</p>
        <h1>The Civic Impact of Community Podcasts</h1>
        <p>
          This essay argues that grassroots podcasts provide an accessible, high-impact entry point for
          expanding the local public sphere, translating policy into relatable narratives, and fostering
          civic participation while raising important questions about media literacy and ethical production.
        </p>
      </header>

      {sections.map((section) => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          {section.paragraphs.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
        </section>
      ))}

      <div className="callout">
        <p>
          <span className="emphasis">Takeaway:</span> Community podcasts demonstrate how low-cost media tools can
          strengthen democratic deliberation when paired with ethical storytelling, media literacy, and intentional
          audience participation strategies.
        </p>
      </div>

      <footer>
        <div>
          <span className="emphasis">Course Context:</span> Media and Communication Theory
        </div>
        <div>
          <span className="emphasis">Suggested References:</span> {references.join(' · ')}
        </div>
      </footer>
    </main>
  );
}
