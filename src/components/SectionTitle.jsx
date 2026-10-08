export default function SectionTitle({ subtitle, title }) {
  return (
    <div className="section-title">
      <p>{subtitle}</p>
      <h2>{title}</h2>
    </div>
  );
}