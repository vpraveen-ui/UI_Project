import '../components/Header.css'
const Header = ({ data, selectedTech, handleTechClick }) => {
  return (
    <div className="tech-nav">
      {Object.keys(data).map((tech) => (
        <div
          key={tech}
          onClick={() => handleTechClick(tech)}
          className={`header-item ${tech === selectedTech ? 'active' : ''}`}
        >
          {tech}
        </div>
      ))}
    </div>
  );
};

export default Header;
