type InspirationQuoteProps = {
  content: string;
  source?: string;
};

const InspirationalQuote = ({ content, source }: InspirationQuoteProps) => {
  return (
    //&& is a null check, if content is not null or undefined then render the p tag
    <article className="quote">
      {content && <p className="quote-content">{content}</p>}
      {source && <p className="quote-source">{source}</p>}
    </article>
  );
};

export default InspirationalQuote;
