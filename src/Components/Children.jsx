import React from 'react';

function Children({ name, age = 11 }) {
  return (
    <div className="container ">
      <h1>Children</h1>
      <p>
        name: {name.firstName} {name.lastName}
      </p>
      <p>age: {age}</p>
    </div>
  );
}

export default Children;
