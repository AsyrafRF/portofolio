const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,innerWidth/innerHeight,0.1,1000);
const renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize(innerWidth,innerHeight);
document.body.appendChild(renderer.domElement);

const grid = new THREE.GridHelper(200,50,0x00ff9c,0x003322);
scene.add(grid);

camera.position.y = 40;
camera.position.z = 60;
camera.rotation.x = -0.7;

function animate(){
  requestAnimationFrame(animate);
  grid.position.z += 0.05;
  if(grid.position.z > 10) grid.position.z = 0;
  renderer.render(scene,camera);
}
animate();
