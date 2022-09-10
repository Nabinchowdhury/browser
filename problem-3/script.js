const SendNameToLS = () => {
    const name = document.getElementById('name-field').value
    localStorage.setItem("Name", name)

}
const SendEmailToLS = () => {
    const name = document.getElementById("email-field").value
    localStorage.setItem("Email", name)

}
const SendMsgToLS = () => {
    const name = document.getElementById("msg-field").value
    localStorage.setItem("Message", name)

}

const dltNameFromLS = () => {
    localStorage.removeItem("Name")
    document.getElementById('name-field').value = ""

}
const dltEmailFromLS = () => {
    localStorage.removeItem("Email")
    document.getElementById('email-field').value = ""

}
const dltMsgFromLS = () => {
    localStorage.removeItem("Message")
    document.getElementById('msg-field').value = ""

}

const clearAll = () => {
    localStorage.clear()
}

const renderMsg = () => {
    const msg = localStorage.getItem("Message")
    document.getElementById("msg-field").value = msg
    const Name = localStorage.getItem("Name")
    document.getElementById("name-field").value = Name
    const email = localStorage.getItem("Email")
    document.getElementById("email-field").value = email
}

renderMsg()

