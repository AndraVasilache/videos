import axios from "axios";

const KEY = "AIzaSyDjJzPOuF5WfFG_-HJiZRKkFaR8urMBMuw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  }
});
