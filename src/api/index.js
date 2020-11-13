import bovespa from 'bovespa';

const dataConstrutor = new Date();
const anoAtual = dataConstrutor.getFullYear();
const mesAtual = dataConstrutor.getMonth();
const diaAtual = dataConstrutor.getDate();
const dataAtualFull = String(`${anoAtual}-${mesAtual}-${diaAtual}`)

console.log(dataAtualFull);

function api() {
    function acao(codneg, date=dataAtualFull){
        try {
            return bovespa(codneg, date).then(console.log);
        } catch {
            return console.log(`erro em buscar cotação da ação: ${codneg}`);
        }
    }
}

export default api;