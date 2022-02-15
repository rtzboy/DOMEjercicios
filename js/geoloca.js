const $section = document.querySelector(".main_section9");

export default function showGeolalization() {
  let opt = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function pos(position) {
    let coord = position.coords;
    console.log(coord.latitude);
    console.log(coord.longitude);
    console.log(coord.accuracy);
    //     -----------
    $section.innerHTML += `
    <p>Tu posicion actual es:</p>
    <ul>
      <li>Latitud: <b>${coord.latitude}</b></li>
      <li>Longitud: <b>${coord.longitude}</b></li>
      <li>Longitud: <b>${coord.accuracy.toFixed(2)} metros</b></li>
    </ul>
    <p><a href="https://www.google.com/maps/@${coord.latitude},${coord.longitude},13z" target="_blank" rel="noopenner">Ver en Google Maps</a></p>
    `;
  }

  function err(err) {
    console.warn(err.code, err.message);
  }
  navigator.geolocation.getCurrentPosition(pos, err, opt);
}
