import React from 'react'
export default function StoryTray({ stories }) {

  const storiesTratado = stories.map(item => item)
  const [chave] = React.useState([...storiesTratado])
  
  storiesTratado.push({
    id: chave,
    label: 'Create Story'
  });

  return (
    <ul>
      {storiesTratado.map(story => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
    </ul>
  );
}
