import React from "react";

const PersonalInfo = (props) => {
  const { thingy } = props;

  console.log(Object.values(thingy))
  return (
      Object.values(thingy).map((thing) => {
        return (<p className='firstNameRender' key={thing}>
            {thing}</p>)
      }))
  ;
};

export default PersonalInfo;
