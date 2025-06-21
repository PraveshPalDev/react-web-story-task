import React, { useState } from "react";
import StoryGroup from "./components/StoryGroup";
import StoryModal from "./components/StoryModal";
import "./styles/App.css";
import storyData from "./constants/storyData.json";

function App() {
  const [activeSlides, setActiveSlides] = useState(null);

  const handleOpenStory = (slides) => {
    setActiveSlides(slides);
  };

  const handleCloseStory = () => {
    setActiveSlides(null);
  };

  return (
    <div className="app-container">
      <img
        src="https://cdn-icons-png.flaticon.com/512/6348/6348450.png"
        alt="Logo"
        className="logo"
      />
      <h1>Welcome to Story Teller</h1>
      <div className="story-list">
        {storyData.details.map((group) => (
          <StoryGroup key={group.id} group={group} onClick={handleOpenStory} />
        ))}
      </div>

      {activeSlides && (
        <StoryModal slides={activeSlides} onClose={handleCloseStory} />
      )}
    </div>
  );
}

export default App;
