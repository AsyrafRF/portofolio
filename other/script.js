/* ===== GSAP ANIMATION ===== */
gsap.from(".glitch", {
    opacity: 0,
    y: -50,
    duration: 1.5,
    ease: "power4.out"
});

gsap.from(".subtitle", {
    opacity: 0,
    y: 30,
    delay: 0.5
});

gsap.from(".neon-btn", {
    opacity: 1,
    scale: 0.8,
    delay: 1
});

/* ===== THREE.JS BACKGROUND ===== */
const canvas = document.getElementById("bg");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.BufferGeometry();
const count = 1500;
const positions = [];

for (let i = 0; i < count; i++) {
    positions.push(
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200
    );
}

geometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(positions, 3)
);

const material = new THREE.PointsMaterial({
    color: 0x00ff9c,
    size: 0.7
});

const particles = new THREE.Points(geometry, material);
scene.add(particles);

camera.position.z = 100;

function animate() {
    requestAnimationFrame(animate);
    particles.rotation.y += 0.0008;
    particles.rotation.x += 0.0004;
    renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

