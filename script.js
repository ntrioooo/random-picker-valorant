// const agents = ['sova', 'fade', 'breach', 'cyper', 'raze', 'jett'];
// const randomAgent = agents[Math.floor(Math.random() * agents.length)];
// console.log(`Kamu mendapatkan agent ${randomAgent}`);

const form = document.querySelector('form');
const agentSelect = document.querySelector('.agent-select');
const agentController = document.getElementsByName('agent-controller');
const agentSentinel = document.getElementsByName('agent-sentinel');
const agentInitiator = document.getElementsByName('agent-initiator');
const agentDuelist = document.getElementsByName('agent-duelist');

function selectAllController(source) {
    for(let i = 0; i < agentController.length; i++) {
        agentController[i].checked = source.checked;
    }  
}

function selectAllSentinel(sen) {
    for(let i = 0; i < agentSentinel.length; i++) {
        agentSentinel[i].checked = sen.checked;
    }
}

function selectAllInitiator(ini) {
    for(let i = 0; i < agentInitiator.length; i++) {
        agentInitiator[i].checked = ini.checked;
    }
}

function selectAllDuelist(duel) {
    for(let i = 0; i < agentDuelist.length; i++) {
        agentDuelist[i].checked = duel.checked;
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();

    const values = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
        .map(item => item.value)
    console.log(`Agent yang dipilih ${values}`);

    const randomAgent = values[Math.floor(Math.random() * values.length)];

    agentSelect.innerHTML = randomAgent;
    
    console.log(randomAgent);
});

console.log(agentController);