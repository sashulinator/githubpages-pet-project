import React, { FC } from "react";

type HomeProps = {
  className?: string;
};

const Home: FC<HomeProps> = ({ className }): JSX.Element => {
  return <div>{process.env.PUBLIC_URL + " = Home"}</div>;
};

export default Home;
