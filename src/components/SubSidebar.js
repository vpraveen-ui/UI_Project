const SubSidebar = ({ data, selectedTech, selectedTopic, setSelectedTopic }) => {
    if (!selectedTech || !data[selectedTech]) return null;
  
    const topics = data[selectedTech].topics;
  
    return (
      <div className="w-1/5 bg-gray-100 p-4 border-r hidden md:block">
        <h2 className="text-lg font-semibold mb-2">Topics</h2>
        {topics.map((topic) => (
          <div
            key={topic}
            onClick={() => setSelectedTopic(topic)}
            className={`cursor-pointer px-2 py-1 rounded hover:bg-gray-200 ${
              selectedTopic === topic ? "bg-blue-100 font-semibold" : ""
            }`}
          >
            {topic}
          </div>
        ))}
      </div>
    );
  };
  
  export default SubSidebar;
  