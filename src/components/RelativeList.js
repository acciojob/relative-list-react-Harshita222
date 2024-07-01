import React from 'react';

const relatives = ['Amit', 'Rohit', 'Suman', 'Priya', 'Ankit'];

const RelativeList = () => {
  return (
    <div>
      <h2>Relatives to Visit This Diwali</h2>
      <ol key="relativeList">
        {relatives.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
    </div>
  );
};

export default RelativeList;
