export const PreviewSection = ({ title, children }) => {
  return (
    <section class="section">
      <h2 class="section-heading">{title}</h2>

      <div class="experience-group">{children}</div>
    </section>
  );
};
