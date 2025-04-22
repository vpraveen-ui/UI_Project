const Content = ({ selectedTech, selectedTopic, data }) => {
    if (!selectedTech || !selectedTopic) {
      return <div className="flex-1 p-6">Select a topic to see content.</div>;
    }
  
    const content = data[selectedTech]?.content[selectedTopic];
  
    return (
      <div className="flex-1 p-6">
        <h2 className="text-xl font-bold mb-2">{selectedTopic}</h2>
        <p>{content}</p>
      </div>
    );
  };
  
  export default Content;
  