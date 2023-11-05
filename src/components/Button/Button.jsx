import React from 'react';

export default function Button({ text, onClick, customClass }) {
  return (
    <button onClick={onClick} className={customClass}>
      {text}
    </button>
  );
}
