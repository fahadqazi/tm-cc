import React from 'react';

const TotalValue = (props) => {
  return (
    <div>
      <h3>{`Total Credit Available: ${props.calculateTotal()}`}</h3>
    </div>
  );
}

export default TotalValue;