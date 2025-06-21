import "../styles/StoryGroup.css";

const StoryGroup = ({ group, onClick }) => {
  return (
    <div className="story-group" onClick={() => onClick(group.slides)}>
      <div className="story-thumbnail" style={{ borderColor: group.ringColor }}>
        <img src={group.thumbnail} alt={group.name} />
      </div>
      <span className="story-name" style={{ color: group.nameColor }}>
        {group.name}
      </span>
    </div>
  );
};

export default StoryGroup;
