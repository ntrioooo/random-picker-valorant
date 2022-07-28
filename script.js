// const agents = ['sova', 'fade', 'breach', 'cyper', 'raze', 'jett'];
// const randomAgent = agents[Math.floor(Math.random() * agents.length)];
// console.log(`Kamu mendapatkan agent ${randomAgent}`);

const form = document.querySelector('form');
const agentSelect = document.querySelector('.agent-select');
const checkboxes = document.getElementsByName('agent');

form.addEventListener('submit', e => {
    e.preventDefault();

    const values = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
        .map(item => item.value)
    console.log(`Agent yang dipilih ${values}`);

    const randomAgent = values[Math.floor(Math.random() * values.length)];

    agentSelect.innerHTML = randomAgent;
    
    console.log(randomAgent);
});

function selectAll(source) {
    for(let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = source.checked;
    }
}