async function cargarGorra() {

    const params = new URLSearchParams(window.location.search);

    const id = params.get("id");

    if (!id) return;

    const response = await fetch("caps.json");

    const data = await response.json();

    const gorra = data[id];

    if (!gorra) return;

    const video = document.getElementById("backgroundVideo");

    video.src = gorra.video;

    document.querySelector("h1").textContent =
        "Dandy Authentic Product: " + gorra.nombre;

    document.getElementById("scanCount").textContent =
        gorra.escaneos;
}

cargarGorra();
