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
    setSelectedTopic(null);
    navigate(`/${tech.toLowerCase().replace(" ", "")}`);
  };

  return (
    <div className="flex font-sans min-h-screen">
      {/* Html, CSS, Javascript, React */}
      <Sidebar
        data={data}
        selectedTech={selectedTech}
        handleTechClick={handleTechClick}
      />

      {/* Sub Sidebar */}
      <SubSidebar
        data={data}
        selectedTech={selectedTech}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
      />

      {/* Content Area */}
      <Routes>
        <Route
          path="/:tech"
          element={
            <Content
              selectedTech={selectedTech}
              selectedTopic={selectedTopic}
              data={data}
            />
          }
        />
        <Route path="*" element={<div className="p-6">Choose a topic</div>} />
      </Routes>
    </div>
  );
};

export default App;
