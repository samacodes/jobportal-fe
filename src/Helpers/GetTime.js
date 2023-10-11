import moment from "moment";

// write the function using moment.js
export const getTime = (timestamp) => {
  return moment(timestamp).fromNow();
};
