export default function addHomeElements(parent) {
    const cta = document.createElement("div");
    cta.setAttribute("id", "cta");

    const ctaImg = document.createElement("div");
    ctaImg.setAttribute("id", "cta-img");
    const img = document.createElement("img");
    img.setAttribute("src", "assets/ctaimg.jpg");
    img.setAttribute("alt", "sliced meat on black rectangular tray");
    ctaImg.appendChild(img);

    const ctaDesc = document.createElement("div");
    ctaDesc.setAttribute("id", "cta-desc");
    const h1Desc = document.createElement("h1");
    h1Desc.textContent = "Cheapest paprika cuisine in the country";
    const pDesc = document.createElement("p");
    pDesc.textContent = "High quality lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rerum, illo tempore quis, quo pariatur nam earum provident totam similique harum tenetur laudantium ea corporis cum unde maxime ut eos!";
    ctaDesc.appendChild(h1Desc);
    ctaDesc.appendChild(pDesc);
    
    cta.appendChild(ctaImg);
    cta.appendChild(ctaDesc);

    parent.innerHTML = "";
    parent.appendChild(cta);
}