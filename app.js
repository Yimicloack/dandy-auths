async function cargarGorra() {

    try {

        const params = new URLSearchParams(window.location.search);

        const id = params.get("id");

        if (!id) return;

        const response = await fetch("caps.json");

        const caps = await response.json();

        const gorra = caps[id];

        if (!gorra) return;

        const video = document.getElementById("backgroundVideo");

        video.src = gorra.video;

        video.load();

        video.play();

        document.getElementById("scanCount").textContent =
            gorra.escaneos;

    } catch (error) {

        console.error(error);

    }

}

cargarGorra();
