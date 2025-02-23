export const PreviewSection = ({ title, children }) => {
  return (
    <section className="section">
      <h2 className="section-heading">{title}</h2>

      <div className="experience-group">{children}</div>
    </section>
  );
};
