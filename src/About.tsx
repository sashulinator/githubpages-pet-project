import React, { FC } from "react";

type AboutProps = {
  className?: string;
};

const About: FC<AboutProps> = ({ className }): JSX.Element => {
  return <div>{process.env.PUBLIC_URL + " = About"}</div>;
};

export default About;
