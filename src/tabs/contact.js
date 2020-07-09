export default function addContactElements(parent) {
    
    const pageTitle = document.createElement("h1");
    pageTitle.setAttribute("class", "page-title");
    pageTitle.textContent = "Contact us";
    
    const contact = document.createElement("div");
    contact.setAttribute("id", "contact");

    const contactP = document.createElement("p");
    contactP.textContent = "Contact us at: +99 0987654321"
    contact.appendChild(contactP);

    parent.innerHTML = "";
    parent.appendChild(pageTitle);
    parent.appendChild(contact);
}