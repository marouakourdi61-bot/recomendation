import { useState } from 'react'
import PlateCard from '../component/PlateCard';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import api from "../api/axios";
import axios from 'axios';


function Plates() {

    // //search
    const [search, setSearch] = useState("");

    //compteur 
    const [selected, setSelected] = useState([]);

    //formulaire simple
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");




    const [plates, setPlates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    




    useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/plats")
      .then((res) => {
        setPlates(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Erreur du chargement");
        setLoading(false);
      });
}, []);




    //   filter

    const filtered = plates.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );


    const toggleSelect = (name) => {
        if (selected.includes(name)) {
            setSelected(selected.filter(item => item !== name));
        } else {
            setSelected([...selected, name]);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>

            <input
                type="text"
                placeholder="Rechercher un plat..."
                value={search}
                
                onChange={e => setSearch(e.target.value)}
            />
            <p>Plats sélectionnés: {selected.length}</p>


            {filtered.length === 0 && <p>Aucun plat trouvé</p>}

            <div className="cards-container">
                {filtered.map((plat, index) => (
                    <div key={index} onClick={() => toggleSelect(plat.name)}>
                        <PlateCard
                            name={plat.name}
                            price={plat.price}
                            is_available={plat.is_available}
                        />

                        <Link to={`/plates/${plat.id}`}>
                            Voir détail
                        </Link>

                    </div>

                ))}
            </div>
        </>
    )
}

export default Plates;