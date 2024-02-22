import React, { useState } from 'react';

function Home() {
  const [vizeNotu, setVizeNotu] = useState(0);
  const [finalNotu, setFinalNotu] = useState(0);
  const [ortalama, setOrtalama] = useState(0);

  const handleVizeChange = (e) => {
    setVizeNotu(parseFloat(e.target.value) || 0);
  };

  const handleFinalChange = (e) => {
    setFinalNotu(parseFloat(e.target.value) || 0);
  };

  const handleHesapla = () => {
    const yeniOrtalama = (vizeNotu + finalNotu) / 2;
    setOrtalama(yeniOrtalama);
  };

  return (
    <div className="page-content">
      <h2>Ana Sayfa</h2>
      <div className="form-group">
        <label>Vize Notu:</label>
        <input type="number" value={vizeNotu} onChange={handleVizeChange} />
      </div>
      <div className="form-group">
        <label>Final Notu:</label>
        <input type="number" value={finalNotu} onChange={handleFinalChange} />
      </div>
      <button onClick={handleHesapla}>Ortalama Hesapla</button>
      {ortalama !== 0 && <p>Not Ortalaması: {ortalama.toFixed(2)}</p>}
    </div>
  );
}

export default Home;