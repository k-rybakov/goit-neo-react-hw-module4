import axios from "axios";

const ACCESS_KEY = "rso1gvASibYjWMrEmZc5YxxA8FC0cLV-gBaCLlR-XPs";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = "Client-ID " + ACCESS_KEY;

export const DEFAULT_PER_PAGE = 10;

export const searchPhotos = async (query, page) => {
  const params = new URLSearchParams();
  params.append("query", query);
  params.append("page", page);

  const response = await axios.get("search/photos", { params });
  return response.data;
};
