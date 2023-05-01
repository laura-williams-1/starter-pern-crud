import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/bookmarks/${id}/reviews`)
      .then((res) => {
        console.log(res);
        setReviews(res.data);
      })
      .catch((e) => console.log(e));
  }, [id, API]);
  return <section className="Reviews"></section>;
}
export default Reviews;
