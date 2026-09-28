/*
 * CampusRent
 * Main application JavaScript
 */


/* =========================================================
   SAMPLE RENTAL DATA
   ========================================================= */

const rentalItems = [

    {
        id: 1,

        name: "Canon Camera",

        category: "Camera",

        price: 30,

        unit: "day",

        location: "KK1 Campus",

        rating: 4.8,

        owner: "Aiman",

        available: true,

        icon: "📷",

        description:
            "A compact camera suitable for assignments, events and campus projects."
    },


    {
        id: 2,

        name: "Scientific Calculator",

        category: "Study",

        price: 5,

        unit: "day",

        location: "Library Area",

        rating: 4.9,

        owner: "Sarah",

        available: true,

        icon: "🧮",

        description:
            "Scientific calculator suitable for mathematics, physics and engineering students."
    },


    {
        id: 3,

        name: "Camping Tent",

        category: "Camping",

        price: 15,

        unit: "day",

        location: "Student Residence",

        rating: 4.7,

        owner: "Hakim",

        available: true,

        icon: "⛺",

        description:
            "Lightweight camping tent suitable for outdoor activities and student trips."
    },


    {
        id: 4,

        name: "Power Drill",

        category: "Tools",

        price: 20,

        unit: "day",

        location: "Engineering Block",

        rating: 4.6,

        owner: "Daniel",

        available: true,

        icon: "🔧",

        description:
            "Portable power drill for basic repair and project work."
    },


    {
        id: 5,

        name: "Projector",

        category: "Electronics",

        price: 25,

        unit: "day",

        location: "Main Campus",

        rating: 4.8,

        owner: "Farah",

        available: true,

        icon: "📽️",

        description:
            "Projector suitable for presentations, group assignments and campus events."
    },


    {
        id: 6,

        name: "Football",

        category: "Sports",

        price: 8,

        unit: "day",

        location: "Sports Complex",

        rating: 4.5,

        owner: "Amir",

        available: true,

        icon: "⚽",

        description:
            "Football available for casual games and campus sports activities."
    },


    {
        id: 7,

        name: "Bluetooth Speaker",

        category: "Electronics",

        price: 12,

        unit: "day",

        location: "Residential College",

        rating: 4.7,

        owner: "Nadia",

        available: true,

        icon: "🔊",

        description:
            "Portable Bluetooth speaker for small gatherings and campus activities."
    },


    {
        id: 8,

        name: "Tripod Stand",

        category: "Camera",

        price: 10,

        unit: "day",

        location: "Media Centre",

        rating: 4.8,

        owner: "Irfan",

        available: true,

        icon: "📐",

        description:
            "Adjustable tripod stand for cameras, phones and content creation."
    }

];


/* =========================================================
   APPLICATION STATE
   ========================================================= */

const appState = {

    searchTerm: "",

    category: "All",

    selectedItem: null

};


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const itemsGrid =
    document.getElementById("itemsGrid");

const searchInput =
    document.getElementById("searchInput");

const categoryButtons =
    document.querySelectorAll(".category-button");

const itemCount =
    document.getElementById("itemCount");

const emptyState =
    document.getElementById("emptyState");

const browseButton =
    document.getElementById("browseButton");

const listItemButton =
    document.getElementById("listItemButton");

const profileButton =
    document.getElementById("profileButton");

const itemModal =
    document.getElementById("itemModal");

const closeModal =
    document.getElementById("closeModal");

const rentalButton =
    document.getElementById("rentalButton");


/* =========================================================
   RENDER ITEMS
   ========================================================= */

function renderItems() {

    const filteredItems =
        getFilteredItems();


    itemsGrid.innerHTML = "";


    itemCount.textContent =
        `${filteredItems.length} ${
            filteredItems.length === 1
                ? "item"
                : "items"
        }`;


    if (filteredItems.length === 0) {

        emptyState.hidden = false;

        return;

    }


    emptyState.hidden = true;


    filteredItems.forEach(
        item => {

            const card =
                createItemCard(item);

            itemsGrid.appendChild(card);

        }
    );

}


/* =========================================================
   FILTER ITEMS
   ========================================================= */

function getFilteredItems() {

    return rentalItems.filter(item => {

        const matchesSearch =
            item.name
                .toLowerCase()
                .includes(
                    appState.searchTerm.toLowerCase()
                )
            ||
            item.category
                .toLowerCase()
                .includes(
                    appState.searchTerm.toLowerCase()
                )
            ||
            item.location
                .toLowerCase()
                .includes(
                    appState.searchTerm.toLowerCase()
                );


        const matchesCategory =
            appState.category === "All"
            ||
            item.category === appState.category;


        return (
            matchesSearch &&
            matchesCategory
        );

    });

}


/* =========================================================
   CREATE ITEM CARD
   ========================================================= */

function createItemCard(item) {

    const card =
        document.createElement("article");

    card.className = "item-card";


    card.innerHTML = `

        <div class="item-image">
            ${item.icon}
        </div>

        <div class="item-content">

            <span class="item-category">
                ${item.category}
            </span>

            <h3>
                ${item.name}
            </h3>

            <div class="item-location">
                📍 ${item.location}
            </div>

            <div class="item-bottom">

                <div class="item-price">
                    RM${item.price}
                    <span>/${item.unit}</span>
                </div>

                <div class="item-rating">
                    ⭐ ${item.rating}
                </div>

            </div>

            <button
                class="item-view"
                type="button"
                data-item-id="${item.id}"
            >
                View Details
            </button>

        </div>
    `;


    const viewButton =
        card.querySelector(".item-view");


    viewButton.addEventListener(
        "click",
        () => {

            openItemModal(item.id);

        }
    );


    return card;

}


/* =========================================================
   SEARCH
   ========================================================= */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        event => {

            appState.searchTerm =
                event.target.value.trim();

            renderItems();

        }
    );

}


/* =========================================================
   CATEGORY FILTER
   ========================================================= */

categoryButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            categoryButtons.forEach(
                categoryButton => {

                    categoryButton.classList.remove(
                        "active"
                    );

                }
            );


            button.classList.add("active");


            appState.category =
                button.dataset.category;


            renderItems();

        }
    );

});


/* =========================================================
   OPEN ITEM MODAL
   ========================================================= */

function openItemModal(itemId) {

    const item =
        rentalItems.find(
            rentalItem =>
                rentalItem.id === itemId
        );


    if (!item) {
        return;
    }


    appState.selectedItem = item;


    document.getElementById(
        "modalItemImage"
    ).textContent = item.icon;


    document.getElementById(
        "modalItemCategory"
    ).textContent = item.category;


    document.getElementById(
        "modalItemName"
    ).textContent = item.name;


    document.getElementById(
        "modalItemDescription"
    ).textContent =
        item.description;


    document.getElementById(
        "modalItemPrice"
    ).textContent =
        `RM${item.price}/${item.unit}`;


    document.getElementById(
        "modalItemRating"
    ).textContent =
        `⭐ ${item.rating}`;


    document.getElementById(
        "modalItemLocation"
    ).textContent =
        item.location;


    document.getElementById(
        "modalItemOwner"
    ).textContent =
        item.owner;


    itemModal.hidden = false;

    document.body.style.overflow = "hidden";

}


/* =========================================================
   CLOSE ITEM MODAL
   ========================================================= */

function closeItemModal() {

    itemModal.hidden = true;

    document.body.style.overflow = "";

    appState.selectedItem = null;

}


if (closeModal) {

    closeModal.addEventListener(
        "click",
        closeItemModal
    );

}


if (itemModal) {

    itemModal.addEventListener(
        "click",
        event => {

            if (
                event.target === itemModal
            ) {

                closeItemModal();

            }

        }
    );

}


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            !itemModal.hidden
        ) {

            closeItemModal();

        }

    }
);


/* =========================================================
   RENTAL BUTTON
   ========================================================= */

if (rentalButton) {

    rentalButton.addEventListener(
        "click",
        () => {

            if (!appState.selectedItem) {
                return;
            }


            alert(
                `Rental request for "${appState.selectedItem.name}" will be connected to the backend later.`
            );

        }
    );

}


/* =========================================================
   BROWSE BUTTON
   ========================================================= */

if (browseButton) {

    browseButton.addEventListener(
        "click",
        () => {

            document
                .getElementById("browse")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );

}


/* =========================================================
   LIST ITEM BUTTON
   ========================================================= */

if (listItemButton) {

    listItemButton.addEventListener(
        "click",
        () => {

            alert(
                "Item listing feature will be available soon."
            );

        }
    );

}


/* =========================================================
   PROFILE BUTTON
   ========================================================= */

if (profileButton) {

    profileButton.addEventListener(
        "click",
        () => {

            document
                .getElementById("profile")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );

}


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const mobileNavItems =
    document.querySelectorAll(
        ".mobile-nav-item"
    );


mobileNavItems.forEach(item => {

    item.addEventListener(
        "click",
        () => {

            mobileNavItems.forEach(
                navItem => {

                    navItem.classList.remove(
                        "active"
                    );

                }
            );


            item.classList.add("active");

        }
    );

});


/* =========================================================
   DESKTOP NAVIGATION
   ========================================================= */

const desktopNavLinks =
    document.querySelectorAll(
        ".nav-link"
    );


desktopNavLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            desktopNavLinks.forEach(
                navLink => {

                    navLink.classList.remove(
                        "active"
                    );

                }
            );


            link.classList.add("active");

        }
    );

});


/* =========================================================
   INITIALIZE APPLICATION
   ========================================================= */

function initializeApp() {

    renderItems();

    console.log(
        "CampusRent frontend initialized successfully."
    );

}


initializeApp();
