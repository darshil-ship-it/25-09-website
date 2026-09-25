import type { LegalDocument } from "@/content/legal";

function SectionLinks({ document }: { document: LegalDocument }) {
  return <ol>{document.sections.map((section) => <li key={section.id}><a href={`#${section.id}`}><span>{String(section.number).padStart(2, "0")}</span>{section.title}</a></li>)}</ol>;
}

export function LegalPage({ document }: { document: LegalDocument }) {
  return <div className="container legal-page">
    <header className="legal-page__header">
      <p className="eyebrow">NEXACT GLOBAL / LEGAL</p>
      <h1>{document.title}</h1>
      <p className="intro">{document.description}</p>
      <div className="legal-page__dates"><span>Effective: {document.effectiveDate}</span><span>Last updated: {document.lastUpdated}</span></div>
    </header>
    <div className="legal-page__layout">
      <aside className="legal-page__index" aria-label={`${document.title} section index`}>
        <nav className="legal-page__desktop-index" aria-label={`${document.title} sections`}><p className="eyebrow">On this page</p><SectionLinks document={document} /></nav>
        <details className="legal-page__mobile-index"><summary>On this page</summary><nav aria-label={`${document.title} sections`}><SectionLinks document={document} /></nav></details>
      </aside>
      <article className="legal-page__article">
        {document.sections.map((section) => <section className="legal-page__section" id={section.id} aria-labelledby={`${section.id}-title`} key={section.id}>
          <p className="eyebrow">{String(section.number).padStart(2, "0")}</p>
          <h2 id={`${section.id}-title`}>{section.title}</h2>
          {section.blocks.map((block, index) => block.kind === "list"
            ? <ul key={index}>{block.items.map((item, itemIndex) => <li key={`${item}-${itemIndex}`}>{item}</li>)}</ul>
            : block.kind === "subheading"
              ? <h3 key={index}>{block.text}</h3>
              : <p key={index}>{block.text}</p>)}
        </section>)}
      </article>
    </div>
  </div>;
}
