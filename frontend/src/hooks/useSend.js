import { sendApi } from "../api/sendApi";

export const useSend = () => {
  const postMessage = async (data) => {
    await sendApi
      .post("", data)
      .then(({ data }) => {
        console.log(data);
      })
      .catch(({ response }) => {
        console.log(response);
      });
  };
  return {
    postMessage,
  };
};
