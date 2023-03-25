import React from "react";

export default function StoryTray({ stories }) {
  stories.push({
    id: stories.id,
    label: 'Create Story'
  });

  return (
    <ul>
      {stories.map(story => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
    </ul>
  );
}
