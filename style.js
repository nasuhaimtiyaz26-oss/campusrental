/*
 * CampusRent
 * JavaScript-based styling system
 *
 * This file creates the application's CSS dynamically.
 */

const appTheme = 

    colors: {

        primary: "#4F8F78",

        primaryDark: "#39705D",

        secondary: "#DDEFE7",

        background: "#F6F8F7",

        card: "#FFFFFF",

        text: "#17221E",

        muted: "#6B7772",

        border: "#DDE5E1",

        success: "#4F8F78",

        warning: "#D69E2E",

        danger: "#D95C5C",

        white: "#FFFFFF",

        dark: "#10231D"

    },

    radius: {

        small: "10px",

        medium: "16px",

        large: "24px",

        round: "999px"

    },

    spacing: {

        xs: "6px",

        sm: "10px",

        md: "16px",

        lg: "24px",

        xl: "40px",

        xxl: "72px"

    },

    shadow: {

        small: "0 4px 14px rgba(20, 50, 40, 0.06)",

        medium: "0 10px 30px rgba(20, 50, 40, 0.10)",

        large: "0 20px 60px rgba(20, 50, 40, 0.15)"

    }

};


/*
 * Convert theme values into CSS variables.
 */

const root = document.documentElement;

root.style.setProperty(
    "--primary",
    appTheme.colors.primary
);

root.style.setProperty(
    "--primary-dark",
    appTheme.colors.primaryDark
);

root.style.setProperty(
    "--secondary",
    appTheme.colors.secondary
);

root.style.setProperty(
    "--background",
    appTheme.colors.background
);

root.style.setProperty(
    "--card",
    appTheme.colors.card
);

root.style.setProperty(
    "--text",
    appTheme.colors.text
);

root.style.setProperty(
    "--muted",
    appTheme.colors.muted
);

root.style.setProperty(
    "--border",
    appTheme.colors.border
);

root.style.setProperty(
    "--success",
    appTheme.colors.success
);

root.style.setProperty(
    "--warning",
    appTheme.colors.warning
);

root.style.setProperty(
    "--danger",
    appTheme.colors.danger
);

root.style.setProperty(
    "--white",
    appTheme.colors.white
);

root.style.setProperty(
    "--dark",
    appTheme.colors.dark
);

root.style.setProperty(
    "--radius-small",
    appTheme.radius.small
);

root.style.setProperty(
    "--radius-medium",
    appTheme.radius.medium
);

root.style.setProperty(
    "--radius-large",
    appTheme.radius.large
);

root.style.setProperty(
    "--radius-round",
    appTheme.radius.round
);

root.style.setProperty(
    "--space-xs",
    appTheme.spacing.xs
);

root.style.setProperty(
    "--space-sm",
    appTheme.spacing.sm
);

root.style.setProperty(
    "--space-md",
    appTheme.spacing.md
);

root.style.setProperty(
    "--space-lg",
    appTheme.spacing.lg
);

root.style.setProperty(
    "--space-xl",
    appTheme.spacing.xl
);

root.style.setProperty(
    "--space-xxl",
    appTheme.spacing.xxl
);

root.style.setProperty(
    "--shadow-small",
    appTheme.shadow.small
);

root.style.setProperty(
    "--shadow-medium",
    appTheme.shadow.medium
);

root.style.setProperty(
    "--shadow-large",
    appTheme.shadow.large
);


/*
 * Application CSS
 */

const styleElement = document.createElement("style");

styleElement.textContent = 

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Inter", sans-serif;
    background: var(--background);
    color: var(--text);
    line-height: 1.6;
    min-height: 100vh;
}

button,
input,
select {
    font-family: inherit;
}

button {
    cursor: pointer;
}

a {
    color: inherit;
    text-decoration: none;
}


/* ================= HEADER ================= */

.top-header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(246, 248, 247, 0.94);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border);
}

.header-container {
    width: min(1180px, calc(100% - 40px));
    margin: auto;
    height: 74px;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    font-size: 22px;
    font-weight: 800;
    letter-spacing: -0.7px;
}

.logo span {
    color: var(--primary);
}

.desktop-nav {
    display: flex;
    align-items: center;
    gap: 28px;
}

.nav-link {
    color: var(--muted);
    font-size: 14px;
    font-weight: 600;
    transition: 0.2s;
}

.nav-link:hover,
.nav-link.active {
    color: var(--primary);
}

.header-profile {
    width: 42px;
    height: 42px;

    border: 0;
    border-radius: 50%;

    background: var(--secondary);

    font-size: 18px;
}


/* ================= HERO ================= */

.hero {
    background:
        radial-gradient(
            circle at top right,
            rgba(79, 143, 120, 0.20),
            transparent 35%
        ),
        linear-gradient(
            135deg,
            #edf7f2,
            #f6f8f7
        );

    padding: 100px 20px 90px;
}

.hero-content {
    width: min(900px, 100%);
    margin: auto;
    text-align: center;
}

.hero-badge {
    display: inline-block;

    padding: 8px 14px;

    background: var(--secondary);
    color: var(--primary-dark);

    border-radius: var(--radius-round);

    font-size: 13px;
    font-weight: 700;

    margin-bottom: 24px;
}

.hero h1 {
    font-size: clamp(42px, 7vw, 76px);
    line-height: 1.05;
    letter-spacing: -3px;
    margin-bottom: 24px;
}

.hero p {
    max-width: 620px;
    margin: auto;

    color: var(--muted);

    font-size: 18px;
}

.hero-buttons {
    margin-top: 34px;

    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
}


/* ================= BUTTONS ================= */

.primary-button,
.secondary-button {
    border: 0;

    padding: 14px 22px;

    border-radius: var(--radius-medium);

    font-size: 14px;
    font-weight: 700;

    transition: 0.2s;
}

.primary-button {
    background: var(--primary);
    color: var(--white);

    box-shadow: var(--shadow-small);
}

.primary-button:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
}

.secondary-button {
    background: var(--white);
    color: var(--text);

    border: 1px solid var(--border);
}

.secondary-button:hover {
    border-color: var(--primary);
    color: var(--primary);
}

.full-width {
    width: 100%;
}


/* ================= SEARCH ================= */

.search-section {
    padding: 30px 0 10px;
}

.section-container {
    width: min(1180px, calc(100% - 40px));
    margin: auto;
}

.search-box {
    background: var(--card);

    border: 1px solid var(--border);

    border-radius: var(--radius-medium);

    padding: 0 18px;

    display: flex;
    align-items: center;

    box-shadow: var(--shadow-small);
}

.search-icon {
    margin-right: 10px;
}

.search-box input {
    width: 100%;

    padding: 17px 0;

    border: 0;
    outline: 0;

    background: transparent;

    color: var(--text);

    font-size: 15px;
}

.category-container {
    display: flex;

    gap: 8px;

    overflow-x: auto;

    padding: 18px 0;

    scrollbar-width: none;
}

.category-container::-webkit-scrollbar {
    display: none;
}

.category-button {
    white-space: nowrap;

    border: 1px solid var(--border);

    background: var(--card);

    color: var(--muted);

    padding: 9px 15px;

    border-radius: var(--radius-round);

    font-size: 13px;
    font-weight: 600;
}

.category-button.active {
    background: var(--primary);
    border-color: var(--primary);
    color: var(--white);
}


/* ================= ITEMS ================= */

.items-section {
    padding: 35px 0 80px;
}

.section-heading {
    display: flex;
    justify-content: space-between;
    align-items: end;

    margin-bottom: 25px;
}

.section-heading.centered {
    display: block;
    text-align: center;
}

.section-label {
    display: block;

    color: var(--primary);

    font-size: 11px;

    font-weight: 800;

    letter-spacing: 1.5px;

    margin-bottom: 7px;
}

.section-heading h2 {
    font-size: 30px;
    letter-spacing: -1px;
}

.item-count {
    color: var(--muted);
    font-size: 13px;
}

.items-grid {
    display: grid;

    grid-template-columns:
        repeat(4, minmax(0, 1fr));

    gap: 18px;
}

.item-card {
    background: var(--card);

    border: 1px solid var(--border);

    border-radius: var(--radius-large);

    overflow: hidden;

    transition: 0.25s;

    box-shadow: var(--shadow-small);
}

.item-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-medium);
}

.item-image {
    height: 190px;

    background:
        linear-gradient(
            135deg,
            var(--secondary),
            #edf3f0
        );

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 58px;
}

.item-content {
    padding: 18px;
}

.item-category {
    display: inline-block;

    background: var(--secondary);

    color: var(--primary-dark);

    padding: 5px 9px;

    border-radius: var(--radius-round);

    font-size: 10px;
    font-weight: 700;

    margin-bottom: 10px;
}

.item-content h3 {
    font-size: 17px;
    margin-bottom: 5px;
}

.item-location {
    color: var(--muted);

    font-size: 12px;

    margin-bottom: 14px;
}

.item-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 15px;
}

.item-price {
    font-size: 16px;
    font-weight: 800;
}

.item-price span {
    color: var(--muted);
    font-size: 11px;
    font-weight: 500;
}

.item-rating {
    font-size: 12px;
}

.item-view {
    width: 100%;

    border: 1px solid var(--border);

    background: var(--white);

    color: var(--primary-dark);

    padding: 10px;

    border-radius: var(--radius-small);

    font-weight: 700;
    font-size: 12px;
}

.item-view:hover {
    background: var(--secondary);
}


/* ================= EMPTY ================= */

.empty-state {
    text-align: center;

    padding: 70px 20px;

    background: var(--card);

    border: 1px dashed var(--border);

    border-radius: var(--radius-large);
}

.empty-icon {
    font-size: 40px;
    margin-bottom: 15px;
}

.empty-state h3 {
    margin-bottom: 5px;
}

.empty-state p {
    color: var(--muted);
}


/* ================= HOW IT WORKS ================= */

.how-section {
    background: var(--white);

    padding: 80px 0;
}

.steps-grid {
    display: grid;

    grid-template-columns:
        repeat(4, minmax(0, 1fr));

    gap: 20px;

    margin-top: 40px;
}

.step-card {
    position: relative;

    padding: 28px;

    background: var(--background);

    border: 1px solid var(--border);

    border-radius: var(--radius-large);
}

.step-number {
    color: var(--primary);

    font-size: 11px;

    font-weight: 800;

    margin-bottom: 25px;
}

.step-icon {
    font-size: 30px;

    margin-bottom: 20px;
}

.step-card h3 {
    margin-bottom: 8px;
}

.step-card p {
    color: var(--muted);

    font-size: 13px;
}


/* ================= TRUST ================= */

.trust-section {
    padding: 80px 0;

    background: var(--dark);

    color: var(--white);
}

.trust-content {
    max-width: 650px;
}

.trust-content .section-label {
    color: #83BFA7;
}

.trust-content h2 {
    font-size: 38px;
    line-height: 1.15;

    margin-bottom: 15px;
}

.trust-content p {
    color: #AEBEB8;
}

.trust-grid {
    display: grid;

    grid-template-columns:
        repeat(4, minmax(0, 1fr));

    gap: 15px;

    margin-top: 40px;
}

.trust-card {
    padding: 25px;

    background: rgba(255, 255, 255, 0.05);

    border: 1px solid rgba(255, 255, 255, 0.08);

    border-radius: var(--radius-medium);
}

.trust-icon {
    font-size: 25px;

    display: block;

    margin-bottom: 15px;
}

.trust-card h3 {
    font-size: 15px;

    margin-bottom: 7px;
}

.trust-card p {
    color: #9FAEA9;

    font-size: 12px;
}


/* ================= PLACEHOLDER ================= */

.placeholder-section {
    padding: 80px 0;

    border-bottom: 1px solid var(--border);
}

.placeholder-section p {
    color: var(--muted);
}


/* ================= MODAL ================= */

.modal-overlay {
    position: fixed;

    inset: 0;

    z-index: 500;

    background: rgba(10, 25, 20, 0.65);

    backdrop-filter: blur(5px);

    display: flex;

    align-items: center;
    justify-content: center;

    padding: 20px;
}

.modal {
    width: min(500px, 100%);

    max-height: 90vh;

    overflow-y: auto;

    position: relative;

    background: var(--card);

    border-radius: var(--radius-large);

    padding: 25px;

    box-shadow: var(--shadow-large);
}

.modal-close {
    position: absolute;

    top: 15px;
    right: 15px;

    width: 36px;
    height: 36px;

    border: 0;

    border-radius: 50%;

    background: rgba(0, 0, 0, 0.06);

    font-size: 22px;
}

.modal-image {
    height: 220px;

    background: var(--secondary);

    border-radius: var(--radius-medium);

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 70px;

    margin-bottom: 20px;
}

.modal-category {
    display: inline-block;

    padding: 6px 10px;

    background: var(--secondary);

    color: var(--primary-dark);

    border-radius: var(--radius-round);

    font-size: 11px;
    font-weight: 700;

    margin-bottom: 10px;
}

.modal h2 {
    margin-bottom: 8px;
}

.modal-description {
    color: var(--muted);

    font-size: 14px;

    margin-bottom: 20px;
}

.modal-details {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 12px;

    margin-bottom: 25px;
}

.modal-details div {
    padding: 14px;

    background: var(--background);

    border-radius: var(--radius-small);
}

.modal-details span {
    display: block;

    color: var(--muted);

    font-size: 10px;

    margin-bottom: 3px;
}

.modal-details strong {
    font-size: 13px;
}


/* ================= FOOTER ================= */

.footer {
    background: #091712;

    color: var(--white);

    padding: 50px 0 25px;
}

.footer-container {
    width: min(1180px, calc(100% - 40px));

    margin: auto;

    display: flex;

    justify-content: space-between;

    gap: 30px;
}

.footer p {
    color: #8B9B95;

    font-size: 12px;

    margin-top: 8px;
}

.footer-links {
    display: flex;

    gap: 20px;

    align-items: center;

    flex-wrap: wrap;
}

.footer-links a {
    color: #AAB8B3;

    font-size: 12px;
}

.footer-links a:hover {
    color: var(--white);
}

.footer-bottom {
    width: min(1180px, calc(100% - 40px));

    margin: 35px auto 0;

    padding-top: 20px;

    border-top: 1px solid rgba(255,255,255,0.08);

    color: #71817B;

    font-size: 11px;
}


/* ================= MOBILE NAV ================= */

.mobile-nav {
    display: none;
}


/* ================= RESPONSIVE ================= */

@media (max-width: 900px) {

    .items-grid {
        grid-template-columns:
            repeat(2, minmax(0, 1fr));
    }

    .steps-grid {
        grid-template-columns:
            repeat(2, minmax(0, 1fr));
    }

    .trust-grid {
        grid-template-columns:
            repeat(2, minmax(0, 1fr));
    }

}


@media (max-width: 650px) {

    body {
        padding-bottom: 72px;
    }

    .header-container {
        width: min(100% - 28px, 1180px);
    }

    .desktop-nav {
        display: none;
    }

    .hero {
        padding: 70px 18px 60px;
    }

    .hero h1 {
        letter-spacing: -2px;
    }

    .hero p {
        font-size: 15px;
    }

    .section-container {
        width: min(100% - 28px, 1180px);
    }

    .items-grid {
        grid-template-columns: 1fr;
    }

    .steps-grid {
        grid-template-columns: 1fr;
    }

    .trust-grid {
        grid-template-columns: 1fr;
    }

    .trust-content h2 {
        font-size: 30px;
    }

    .footer-container {
        flex-direction: column;
    }

    .mobile-nav {
        position: fixed;

        display: flex;

        left: 10px;
        right: 10px;
        bottom: 10px;

        z-index: 300;

        background: rgba(16, 35, 29, 0.96);

        border-radius: 22px;

        padding: 8px;

        justify-content: space-around;

        box-shadow: var(--shadow-large);

        backdrop-filter: blur(15px);
    }

    .mobile-nav-item {
        display: flex;

        flex-direction: column;

        align-items: center;

        justify-content: center;

        gap: 3px;

        min-width: 55px;

        padding: 7px;

        border-radius: 14px;

        color: #91A29C;

        font-size: 16px;
    }

    .mobile-nav-item small {
        font-size: 9px;

        font-weight: 600;
    }

    .mobile-nav-item.active {
        background: var(--primary);

        color: var(--white);
    }

    .modal {
        padding: 18px;
    }

}

;

document.head.appendChild(styleElement);


/*
 * Make theme available globally.
 */

window.CampusRentTheme = appTheme;
