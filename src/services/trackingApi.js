import axios from "axios";
axios.defaults.baseURL = "https://s5.vvtrack.com/YMS/confirm";

const fetchTrackingInfo = (params) => {
  return axios.get(`/${params}`).then((response) => response);
};

const fetchChoice = ({ params, choice }) => {
  const data = {
    isChoice: choice,
  };

  return axios.post(`/${params}`, data).then((response) => response);
};

export default { fetchTrackingInfo, fetchChoice };
