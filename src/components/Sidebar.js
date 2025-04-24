import '../components/Sidebar.css'

const Sidebar = ({ data, selectedTech, selectedTopic, setSelectedTopic }) => {
  if (!selectedTech || !data[selectedTech]) return null;

  const topics = data[selectedTech].topics;

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Topics</h2>
      {topics.map((topic) => (
        <div
          key={topic}
          onClick={() => setSelectedTopic(topic)}
          className={`sidebar-item ${selectedTopic === topic ? 'active' : ''
            }`}
        >
          {topic}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
