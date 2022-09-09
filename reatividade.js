const projeto = {
    id: 1,
    descricao: 'Alura Tracker 3.0'
}

const proxy = new Proxy(projeto, {
    get(objetoOriginal, chave){
        console.log(`Alguém pediu a chave ${chave} do projeto`)
        return objetoOriginal[chave]
    },
    set(objetoOriginal, chave, valor){
        console.log(`Alguém alterou a chave ${chave} do projeto para o valor ${valor}`)
        return objetoOriginal[chave]=valor
    }
})
console.log(proxy.descricao)

proxy.descricao = 'Reatividade é mega bacana'


console.log(projeto.descricao)