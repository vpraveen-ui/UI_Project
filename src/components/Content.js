const Content = ({ selectedTech, selectedTopic, data }) => {
  if (!selectedTech || !selectedTopic) {
    return <div className="content-container content-padding">Select a topic to see content.</div>;
  }

  const content = data[selectedTech]?.content[selectedTopic];

  return (
    <div className="content-container content-padding">
      <h2 className="title-large title-bold title-margin">{selectedTopic}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Content;
