function tratarErro(){
    try {
        valor1
    }catch(e){
        console.log("Ocorreu um erro: " + e.message);
    }
}