import { useState } from "react";
import StoryGroup from "./StoryGroup";
import StoryModal from "./StoryModal";
import "../styles/Stories.css";

const Stories = ({ data }) => {
  const [slides, setSlides] = useState(null);

  const handleGroupClick = (groupSlides) => {
    if (groupSlides?.length) {
      setSlides([...groupSlides].sort((a, b) => a.order - b.order));
    }
  };

  const closeModal = () => {
    setSlides(null);
  };

  return (
    <div className="stories-container">
      {data.details
        .sort((a, b) => a.order - b.order)
        .map((group) => (
          <StoryGroup key={group.id} group={group} onClick={handleGroupClick} />
        ))}
      {slides && <StoryModal slides={slides} onClose={closeModal} />}
    </div>
  );
};

export default Stories;
