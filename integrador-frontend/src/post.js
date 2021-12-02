function cadastraUsuario() {
  event.preventDefault()
  let url = "https://localhost:44308/usuario"
  let cpf = document.getElementById("cpf").value
  let email = document.getElementById("email").value
  let nome = document.getElementById("nome").value
  
  console.log(cpf)
  console.log(email)
  console.log(nome)
  console.log(senha)
}