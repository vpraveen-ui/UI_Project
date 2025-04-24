import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SubSidebar from "./components/SubSidebar";
import Content from "./components/Content";

const App = () => {
  const [data, setData] = useState({});
  const [selectedTech, setSelectedTech] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/content.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        const firstTech = Object.keys(json)[0];
        setSelectedTech(firstTech);
      });
  }, []);

  const handleTechClick = (tech) => {
    setSelectedTech(tech);
    const firstTopic = data[tech]?.topics?.[0];
    setSelectedTopic(firstTopic || null);
    navigate(`/${tech.toLowerCase().replace(" ", "")}`);
  };


  return (
    <div className="flex flex-1">
      <SubSidebar
        data={data}
        selectedTech={selectedTech}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
      />
      <Content
        selectedTech={selectedTech}
        selectedTopic={selectedTopic}
        data={data}
      />
    </div>
  );
};

export default App;
