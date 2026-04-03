
export default function PlateCard({ name, price, is_available }) {
  return (
    
    <div className="card">
      <h2>{name}</h2>
      <p>{price} MAD</p>
      <p>{is_available ? "Disponible" : "Indisponible"}</p>
    </div>
    
  );
}