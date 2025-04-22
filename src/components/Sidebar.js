import '../App.css'
const Sidebar = ({ data, selectedTech, handleTechClick }) => {
    return (
      <div className="sidebar">
        {Object.keys(data).map((tech) => (
          <div
            key={tech}
            onClick={() => handleTechClick(tech)}
            className={`sidebar-item ${tech === selectedTech ? 'active' : ''}`}
          >
            {tech}
          </div>
        ))}
      </div>
    );
  };
  
  export default Sidebar;
  