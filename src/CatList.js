import React, {PropTypes} from 'react';


const CatList = ({cats}) => {
  console.log(cats);
  return (
    <ul>
      {

        cats.map(cat =>

        <li  key={cat.id}>
          {cat.attributes.name}
          {cat.id}
        </li>
      )}
    </ul>
  );
};

CatList.propTypes = {
  cats: PropTypes.array.isRequired
};

export default CatList;
