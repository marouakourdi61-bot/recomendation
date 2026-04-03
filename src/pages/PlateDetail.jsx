import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";

function PlateDetail() {

  const { id } = useParams();

  const [plate, setPlate] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchPlate = async () => {
      try {
        const res = await api.get(`/plates/${id}`);

        console.log(res.data);

        setPlate(res.data); 

      } catch (err) {
        setError("Erreur du chargement");
      } finally {
        setLoading(false);
      }
    };

    fetchPlate();

  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>{plate.name}</h1>
      <p>{plate.price} MAD</p>
      <p>{plate.description}</p>
    </div>
  );
}

export default PlateDetail;