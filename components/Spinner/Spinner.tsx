import { Loader } from "lucide-react";
import { FC } from "react";

type PropsT = {
  width: number;
  height: number;
};

export const Spinner: FC<PropsT> = ({ width, height }) => {
  return <Loader width={width} height={height} />;
};

export default Spinner;
