import React from "react";

const Thead = ({ headerTitle }) => {
  return (
    <thead>
      <tr>
        {headerTitle.map((header) => (
          <th scope="col" key={header.id}>
            {header.name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Thead;
