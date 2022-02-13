const d = document,
  n = navigator;

export default function browserInformation(idDiv) {
  // console.log(navigator.userAgentData);
  // console.log(navigator.userAgentData.mobile);
  //   console.log("plataforma: ", navigator.userAgentData.platform);
  //   console.log(navigator.userAgentData.brands[0]);
  //   console.log(navigator.userAgentData.brands[1]);
  // console.log(navigator.userAgentData.brands[2].brand);
  // console.log(navigator.userAgentData.brands[2].version);
  //   console.warn(navigator);
  //
  let $idDiv = d.getElementById(idDiv);
  const capturingRegex = /(?<browsers>edg|chrome)/i;

  const isMobile = {
    android: () => n.userAgent.match(/android/i),
    ios: () => n.userAgent.match(/iphone|ipad|ipod/i),
    windows: () => n.userAgent.match(/windows phone/),
    any: function () {
      return this.android() || this.ios() || this.windows();
    },
  };

  const isDesktop = {
    linux: () => n.userAgent.match(/linux/i),
    mac: () => n.userAgent.match(/mac os/i),
    windows: () => n.userAgent.match(/windows nt/i),
    any: function () {
      return this.linux() || this.mac() || this.windows();
    },
  };
  const isBrowser = {
    chrome: () => n.userAgent.match(/chrome/i),
    safari: () => n.userAgent.match(/safari/i),
    firefox: () => n.userAgent.match(/firefox/i),
    opera: () => n.userAgent.match(/opera|opera mini/i),
    ie: () => n.userAgent.match(/msie|iemobile/i),
    edge: () => n.userAgent.match(/edg/i),
    any: function () {
      return this.ie() || this.edge() || this.chrome() || this.safari() || this.firefox() || this.opera();
    },
  };

  // console.log(n.userAgent);

  $idDiv.innerHTML = `
    <ul>
      <li>User Agent: <b>${n.userAgent}</b></li>
      <li>Plataforma: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
      <li>Navegador: <b>${isBrowser.any()}</b></li>
    </ul> 
  
  `;

  // const array = n.userAgent.split(" ");
  // console.error(array);

  // adicional
  try {
    if (!isBrowser.chrome().input.includes("Edg")) {
      $idDiv.innerHTML += `<p>este contenido solo se ve en <mark>Chrome</mark></p>`;
    }

    if (isBrowser.chrome().input.includes("Edg")) {
      $idDiv.innerHTML += `<p>este contenido solo se ve en <mark>Edge</mark></p>`;
    }

    if (isMobile.android()) {
      $idDiv.innerHTML += `<p>este contenido solo se ve en <mark>ANDROID</mark></p>`;
    }

    if (isDesktop.windows()) {
      $idDiv.innerHTML += `<p>descarga nuestro contenido para windows <mark>Download</mark></p>`;
    }
  } catch (error) {
    console.log(error);
  }

  // console.warn(isBrowser.chrome().input.includes("Edg"));
}
