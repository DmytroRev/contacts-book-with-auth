import { Puff } from "react-loader-spinner";

export const Loader = () => {
  return (
    <Puff
      visible={true}
      height="80"
      width="80"
      color="silver"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};
