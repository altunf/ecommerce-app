import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";

function DetailPage() {
  const { id } = useParams();
  const [prodDetail, setProdDetail] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProdDetail(res.data));
  }, []);

  return (
    <div
      className="d-flex justify-content-center"
      style={{ marginTop: "5rem" }}
    >
      <Card
        props={prodDetail}
        title={prodDetail.title}
        category={prodDetail.category}
        description={prodDetail.description}
        price={prodDetail.price}
        image={prodDetail.image}
      />
    </div>
  );
}

export default DetailPage;
