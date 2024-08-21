const circle_element = document.querySelector('.circle');
const navigation_bar = document.querySelector('.navigation_bar');

const mouse = {x: 0, y: 0};
const prev_mouse = {x: 0, y: 0};
const circle = {x: 0, y: 0};

let current_scale = 0;
let current_angle = 0;

window.addEventListener('mousemove', (e) => {

    mouse.x = e.x;
    mouse.y = e.y;
});

const speed = 0.08;

const tick = () => {
    circle.x += (mouse.x - circle.x) * speed;
    circle.y += (mouse.y - circle.y) * speed;

    const translate_transform = `translate(${circle.x}px, ${circle.y}px)`;

    const delta_mouse_x = (mouse.x - prev_mouse.x);
    const delta_mouse_y = (mouse.y - prev_mouse.y);

    prev_mouse.x = mouse.x;
    prev_mouse.y = mouse.y;

    const mouse_velocity = Math.min(Math.sqrt(delta_mouse_x**2 + delta_mouse_y**2), 150);

    const scale_value = (mouse_velocity / 150) * 0.5;

    current_scale += (scale_value - current_scale) * speed;

    const scale_transform = `scale(${1 + 1.25*current_scale + 3.75*current_scale}, ${1 - 1.25*current_scale + 3.75*current_scale})`;

    const angle = Math.atan2(delta_mouse_y, delta_mouse_x) * 1.0000;

    if (mouse_velocity > 3) {
        current_angle = angle;
    }

    const rotate_transform = `rotate(${current_angle}rad)`;

    circle_element.style.transform = `${translate_transform} ${rotate_transform} ${scale_transform}`;

    window.requestAnimationFrame(tick);
}

tick();