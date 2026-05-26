const data = {
    kick: [
        { name: "أحمد الشهري (شووغل)", img: "https://i.ibb.co/G48HvXFH/2026-05-26-140938.png", link: "https://kick.com/in77e" },
        { name: "عبدالله بن ناصر", img: "https://i.ibb.co/BH9jnmqM/2026-05-26-140826.png", link: "https://kick.com/ibnasser" },
        { name: "علي المحترم", img: "https://i.ibb.co/Rkq8Rdpz/b500b9738fde9592.png", link: "https://kick.com/iizx0" },
        { name: "AboHassn", img: "https://i.ibb.co/f5JR7ww/0b8a7e41-6e83-495e-a4ae-6204c95a3b68-medium.webp", link: "https://kick.com/abo-hassn0" },
        { name: "QUCS", img: "https://i.ibb.co/jZ870jnt/8-D10-F71-C-9-D29-4-FB6-8-E7-B-14709-B6-D7-EA6.png", link: "https://kick.com/qucs" }
    ],
    youtube: [
        { name: "AboHassn", img: "https://i.ibb.co/f5JR7ww/0b8a7e41-6e83-495e-a4ae-6204c95a3b68-medium.webp", link: "https://www.youtube.com/@Abohassn0" },
        { name: "أحمد الشهري (شووغل)", img: "https://i.ibb.co/G48HvXFH/2026-05-26-140938.png", link: "https://www.youtube.com/@in77ee" }
    ],
    tiktok: [
        { name: "AboHassn", img: "https://i.ibb.co/f5JR7ww/0b8a7e41-6e83-495e-a4ae-6204c95a3b68-medium.webp", link: "https://www.tiktok.com/@ah_14h" },
        { name: "علي المحترم", img: "https://i.ibb.co/Rkq8Rdpz/b500b9738fde9592.png", link: "https://www.tiktok.com/@iizx0r" },
        { name: "عبدالله بن ناصر", img: "https://i.ibb.co/BH9jnmqM/2026-05-26-140826.png", link: "https://www.tiktok.com/@a.nsr97" },
        { name: "QUCS", img: "https://i.ibb.co/jZ870jnt/8-D10-F71-C-9-D29-4-FB6-8-E7-B-14709-B6-D7-EA6.png", link: "https://www.tiktok.com/@i_qucs" },
        { name: "أحمد الشهري (شووغل)", img: "https://i.ibb.co/G48HvXFH/2026-05-26-140938.png", link: "https://www.tiktok.com/@in77e" }
    ],
    discord: [
        { name: "سيرفر StreamVex", img: "https://cdn-icons-png.flaticon.com/512/5968/5968756.png", link: "https://discord.gg/HEc4VxBAdS" }
    ]
};

function load(p) {
    const cont = document.getElementById('content');
    cont.innerHTML = "";
    if (data[p]) {
        data[p].forEach(item => {
            cont.innerHTML += `<div class="card"><img src="${item.img}"><h3>${item.name}</h3><a href="${item.link}" target="_blank" class="btn-link">دخول القناة</a></div>`;
        });
    }
}
window.onload = () => load('kick');