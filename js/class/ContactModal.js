/**
 * Class representing a Contact Form
 */
export class ContactModal {

  constructor(name) {
    this.name = name
    this.render()
    const closeBtn = document.querySelector('.modal-btn__close')
    closeBtn.addEventListener('click', () => {
      this.close()
    })
  }

  render() {
    const contactModal = document.createElement('div')
    contactModal.classList.add('modal')

    const form = document.createElement('form')
    form.id = 'formContact'
    contactModal.appendChild(form)

    /**
     * Header
     * @type {HTMLElement}
     */
    const header = document.createElement('header')
    header.classList.add('modal-header')
    const title = document.createElement('h1')
    title.innerText = `Contactez-moi \n ${this.name}`
    const btnClose = document.createElement('button')
    btnClose.classList.add('modal-btn__close')
    btnClose.type = 'button'
    btnClose.innerHTML = `&#10006;`
    header.appendChild(title)
    header.appendChild(btnClose)
    form.append(header)

    /**
     * Prénom
     * @type {HTMLLabelElement}
     */
    const labelFname = document.createElement('label')
    labelFname.classList.add('modal-label')
    labelFname.setAttribute('for', 'firstname')
    labelFname.innerText = 'Prénom'
    const inputFname = document.createElement('input')
    inputFname.classList.add('modal-input')
    inputFname.id = 'firstname'
    inputFname.type = 'text'
    form.append(labelFname)
    form.append(inputFname)

    /**
     * Nom
     * @type {HTMLLabelElement}
     */
    const labelLname = document.createElement('label')
    labelLname.classList.add('modal-label')
    labelLname.setAttribute('for', 'lastname')
    labelLname.innerText = 'Nom'
    const inputLname = document.createElement('input')
    inputLname.classList.add('modal-input')
    inputLname.id = 'lastname'
    inputLname.type = 'text'
    form.append(labelLname)
    form.append(inputLname)

    /**
     * Email
     * @type {HTMLLabelElement}
     */
    const labelEmail = document.createElement('label')
    labelEmail.classList.add('modal-label')
    labelEmail.setAttribute('for', 'email')
    labelEmail.innerText = 'Email'
    const inputEmail = document.createElement('input')
    inputEmail.classList.add('modal-input')
    inputEmail.id = 'email'
    inputEmail.type = 'email'
    form.append(labelEmail)
    form.append(inputEmail)

    /**
     * Textarea for message
     * @type {HTMLLabelElement}
     */
    const labelMessage = document.createElement('label')
    labelMessage.classList.add('modal-label')
    labelMessage.setAttribute('for', 'message')
    labelMessage.innerText = 'Votre message'
    labelMessage.id = 'message'
    const areaMessage = document.createElement('textarea')
    areaMessage.classList.add('modal-textarea')
    areaMessage.id = 'message'
    areaMessage.rows = 5
    form.append(labelMessage)
    form.append(areaMessage)

    const button = document.createElement('button')
    button.classList.add('modal-btn')
    button.type = 'button'
    button.innerText = 'Envoyer'
    button.addEventListener('click', () => {
      this.submitForm()
    })
    form.append(button)

    const photographerInfo = document.getElementsByClassName('photographer')
    photographerInfo[0].append(contactModal)
  }

  close() {
    const modal = document.getElementsByClassName('modal')
    modal[0].remove()
  }

  submitForm() {
    console.log('form value submit')
    const form = document.getElementById('formContact')
    console.log(form.firstname.value)
    console.log(form.lastname.value)
    console.log(form.email.value)
    console.log(form.message.value)
    this.close()
  }

}
