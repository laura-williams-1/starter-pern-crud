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
      .then((res) => setReviews(res.data));
  });
  return (
    <div>
      <h1>Reviews</h1>
    </div>
  );
}
export default Reviews;
