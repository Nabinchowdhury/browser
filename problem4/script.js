const SendNameToLS = () => {
    const name = geInputById('name-field')
    localStorage.setItem("Name", name)

}
const SendEmailToLS = () => {
    const email = geInputById('email-field')
    localStorage.setItem("Email", email)

}
const SendMsgToLS = () => {
    const msg = geInputById('msg-field')
    localStorage.setItem("Message", msg)

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
    document.getElementById("name-field").value = ""
    document.getElementById("email-field").value = ""
    document.getElementById("msg-field").value = ""

}





const geInputById = (id) => {
    const value = document.getElementById(id).value
    return value
}



const getAll = () => {
    let allDetails = localStorage.getItem("Information")
    let details = {};
    if (allDetails) {
        details = JSON.parse(allDetails)
    }
    return details
}

const sendAll = () => {

    const name = geInputById('name-field')
    const email = geInputById('email-field')
    const msg = geInputById('msg-field')

    const details = getAll();
    details.Name = name
    details.Email = email
    details.Message = msg
    console.log(details)
    const stringifiedDetails = JSON.stringify(details)

    localStorage.setItem("Information", stringifiedDetails)

}


const render = () => {
    // const msg = localStorage.getItem("Message")
    // document.getElementById("msg-field").value = msg
    // const Name = localStorage.getItem("Name")
    // document.getElementById("name-field").value = Name
    // const email = localStorage.getItem("Email")
    // document.getElementById("email-field").value = email
    const all = getAll()
    // console.log(all)
    if (all.Name || all.Email || all.Message) {
        document.getElementById("name-field").value = all.Name
        document.getElementById("email-field").value = all.Email
        document.getElementById("msg-field").value = all.Message
    }

}


render()