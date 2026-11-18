document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");

    let htmlContent = `
        <div class="container">
            <div class="profile-section">
                <img src="${configData.profile.ppImage}" alt="${configData.profile.name}" class="profile-pic">
                <h1 class="username">${configData.profile.name}</h1>
                <div class="social-top" id="social-container"></div>
            </div>
            <div class="links-list" id="links-container"></div>
        </div>
        <div class="footer">
            <span>&lt;/&gt;</span> by mekinjir
        </div>
    `;
    app.innerHTML = htmlContent;

    const socialContainer = document.getElementById("social-container");
    let socialHTML = "";
    configData.profile.socials.forEach(social => {
        socialHTML += `<a href="${social.url}" target="_blank" title="${social.platform}"><i class="${social.iconClass}"></i></a>`;
    });
    socialContainer.innerHTML = socialHTML;

    const linksContainer = document.getElementById("links-container");
    let linksHTML = "";
    configData.links.forEach(link => {
        let iconHTML = "";
        if (link.iconImage) {
            iconHTML = `<img src="${link.iconImage}" alt="${link.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"><div style="display:none; background-color: ${link.iconBgColor}; width:100%; height:100%; align-items:center; justify-content:center; border-radius:8px;"><i class="${link.iconFallback}" style="color:white;"></i></div>`;
        } else {
            iconHTML = `<div style="background-color: ${link.iconBgColor}; width:100%; height:100%; display:flex; align-items:center; justify-content:center; border-radius:8px;"><i class="${link.iconFallback}" style="color:white;"></i></div>`;
        }

        linksHTML += `
            <a href="${link.url}" target="_blank" class="link-item">
                <div class="link-icon">${iconHTML}</div>
                <span class="link-text">${link.title}</span>
                <i class="fa-solid fa-chevron-right link-arrow"></i>
            </a>
        `;
    });
    linksContainer.innerHTML = linksHTML;
});
