 import "./App.css";
import React from 'react'
function Liste(props) {
  return(
    <ul>
      {props.yazilar.map(function(yazi){
        return(
        <Yazi key={yazi.id} {...yazi}/>
        );
      })}
      </ul>
  )
}
function Yazi({id,url,baslik,yazar,yorum_sayisi,puan}){
  return(
    <li key={id}>
              <span>
                <a href={url}>{baslik}</a>,
              </span>
              <span><b>Yazar:</b>{yazar}, </span>
              <span><b>Yorum Sayısı:</b> {yorum_sayisi}, </span>
             <span><b>Puan:</b> {puan}</span>
    </li>
  )
}
function Arama({aramaMetni,onSearch}){
  return(
    <div>
      <label htmlFor="arama">Ara: </label>
      <input id="arama" type="text" onChange={onSearch} value={aramaMetni} />   
    </div>
)}
function App() {
  const [aramaMetni,setAramaMetni]=React.useState(localStorage.getItem('aranan') || "React");
  const yaziListesi = [
    {
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Sinan Yüksel",
      yorum_sayisi: 3,
      puan: 4,
      id: 0,
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Asım Yüksel",
      yorum_sayisi: 2,
      puan: 5,
      id: 1,
    },
    {
      baslik: "Html, CSS, JS",
      url: "www.w3schools.com",
      yazar: "Alemdar Polat",
      yorum_sayisi: 2,
      puan: 1,
      id: 2,
    },
    {
      baslik: "Veri Yapıları",
      url: "www.yandex.com.tr",
      yazar: "Baş Memati",
      yorum_sayisi: 3,
      puan: 4,
      id: 3,
    }
  ];

  const arananYazilar =yaziListesi.filter(
    function (yazi){
      return yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) || yazi.yazar.toLowerCase().includes(aramaMetni.toLowerCase()) 
    }
  );
  // 1.Aşama Callback 
  function handleSearch(event){
    setAramaMetni(event.target.value);
    //localStorage.setItem('aranan',event.target.value);
  }
  React.useEffect(()=>{
    localStorage.setItem('aranan',aramaMetni);
  },[aramaMetni]);
  return (
    <>
      <h1>Yazılar</h1>
      <Arama aramaMetni={aramaMetni} onSearch={handleSearch}/>
      <hr/>
      <Liste yazilar={arananYazilar}/>
    </>
  );
}
export default App;
