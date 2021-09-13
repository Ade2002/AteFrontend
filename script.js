
let joinBtn = document.querySelector('#validateBtn');
let motherInput = document.querySelector('.mbbs')
let waitersForm = document.forms.waitersForm



let sendEmail = (event) => {
    event.preventDefault()
    event.stopPropagation()
    let emails = document.querySelector('[type=email]')
    let invalid = document.querySelector('#notSuccessful')
    let modal = document.querySelector('.modalContainer') 
    let [pos, speed, errMessage] = [-50, 1, "please input a valid email*"]
    let waitersEmail = {
        email: waitersForm.email.value
    }
    emails.addEventListener("change", () => {
        invalid.style.display = 'none'
    })
    if (emails.value == '') {
        invalid.innerHTML = errMessage
        invalid.style.display = 'inline'
    } else {
        /* let URL = `/api/newsletter`
        fetch(URL, {
            method: "POST",
            body: JSON.stringify(waitersEmail),
            headers: {
                "Content-Type": "application/json",
            },
        }) */
        /* let URL = `${window.location.protocol}//${window.location.hostname}/api/newsletter`
        fetch(URL, {
            method: "POST",
            body: JSON.stringify(waitersEmail),
            headers: {
                "Content-Type": "application/json",
            },
        }) */
        invalid.style.display = 'none'
        emails.value = ""
        const moveUp = () => {
            pos++
            modal.style.bottom = `${pos}vh`
            modal.style.display = 'flex'
            if (modal.style.bottom == '40vh') {
                clearInterval(idUp)
                document.querySelector('.modalbtn').addEventListener('click', removeModal)
                function removeModal(){
                    modal.style.display = 'none'
                }
                setTimeout(() => { modal.style.display = 'none'
                    
                }, 3000);
            }
        }
        /*
        idDown = setInterval(moveDown, speed)
         const moveDown = () => {
            pos--
            modal.style.bottom = `${pos}vh`
            if (modal.style.bottom == '-75vh') {
                clearInterval(idDown)
                modal.style.display = 'none'
            }
        }*/
        idUp = setInterval(moveUp, speed); 
    }


    /* 
    let URL = `/api/newsletter`
    fetch(URL, {
        method: "POST",
        body: JSON.stringify(waitersEmail),
        headers: {
            "Content-Type": "application/json",
        },
    }) */
}
document.querySelector('.form-group').addEventListener("submit", sendEmail)