import React from "react";
import { getImageUrl } from './utils.js';

export function Avatar({person}) {
    return (
      <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={50}
        height={50}
      />
    );
  }