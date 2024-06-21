import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
    <h3 className={styles.sectionHeadText}
    style={{
      marginBottom:"20px",
      fontSize:"45px"
    }}
    >Languages that i know.</h3>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>


    </>
  );
};

export default SectionWrapper(Tech, "");