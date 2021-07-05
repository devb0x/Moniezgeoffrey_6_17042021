/**
 * Class representing a Contact Form
 */
export class ContactModal {
  /**
   * photographer name
   * @param name
   */
  constructor(name) {
    this.name = name
    this.render()
    this.keyboardNavigation = this.keyboardNavigation.bind(this)
    document.addEventListener('keydown', this.keyboardNavigation)
  }

  keyboardNavigation(e) {
    if (e.key === 'Escape') {
      this.close()
    }
  }

  /**
   * create DOM & display the contact form modal
   */
  render() {
    /**
     * Background with eventListener for close
     * @type {HTMLDivElement}
     */
    const bgModal = document.createElement('div')
    bgModal.classList.add('background-modal')
    bgModal.addEventListener('click', () => {
      this.close()
    })

    /**
     * main div for modal
     * @type {HTMLDivElement}
     */
    const contactModal = document.createElement('div')
    contactModal.classList.add('modal')

    /**
     * form element - children of modal
     * @type {HTMLFormElement}
     */
    const form = document.createElement('form')
    form.id = 'formContact'
    contactModal.appendChild(form)

    /**
     * Header
     * @type {HTMLElement}
     */
    const header = document.createElement('header')
    header.classList.add('modal-header')

    /**
     * Title
     * @type {HTMLHeadingElement}
     */
    const title = document.createElement('h1')
    title.innerText = `Contactez-moi \n ${this.name}`

    /**
     * Close button
     * @type {HTMLButtonElement}
     */
    const btnClose = document.createElement('button')
    btnClose.classList.add('modal-btn__close')
    btnClose.type = 'button'
    btnClose.setAttribute('aria-label','close contact form')
    btnClose.innerHTML = `&#10006;`
    btnClose.addEventListener('click', () => {
      this.close()
    })
    /**
     * set focus to the submit btn if we press shift + tab while we are on the close button
     */
    btnClose.addEventListener('keydown', (e) => {
      if (e.shiftKey && e.key === 'Tab') {
        e.preventDefault()
        submit_btn.focus()
      }
    })
    header.appendChild(title)
    header.appendChild(btnClose)
    form.append(header)

    /**
     * Firstname Label
     * @type {HTMLLabelElement}
     */
    const labelFname = document.createElement('label')
    labelFname.classList.add('modal-label')
    labelFname.setAttribute('for', 'firstname')
    labelFname.innerText = 'Prénom'

    /**
     * Firstname Input
     * @type {HTMLInputElement}
     */
    const inputFname = document.createElement('input')
    inputFname.classList.add('modal-input')
    inputFname.id = 'firstname'
    inputFname.type = 'text'
    inputFname.required = true

    form.append(labelFname)
    form.append(inputFname)

    /**
     * Lastname Label
     * @type {HTMLLabelElement}
     */
    const labelLname = document.createElement('label')
    labelLname.classList.add('modal-label')
    labelLname.setAttribute('for', 'lastname')
    labelLname.innerText = 'Nom'

    /**
     * Lastname Input
     * @type {HTMLInputElement}
     */
    const inputLname = document.createElement('input')
    inputLname.classList.add('modal-input')
    inputLname.id = 'lastname'
    inputLname.type = 'text'
    inputLname.required = true

    form.append(labelLname)
    form.append(inputLname)

    /**
     * Email Label
     * @type {HTMLLabelElement}
     */
    const labelEmail = document.createElement('label')
    labelEmail.classList.add('modal-label')
    labelEmail.setAttribute('for', 'email')
    labelEmail.innerText = 'Email'

    /**
     * Email Input
     * @type {HTMLInputElement}
     */
    const inputEmail = document.createElement('input')
    inputEmail.classList.add('modal-input')
    inputEmail.id = 'email'
    inputEmail.type = 'email'
    inputEmail.required = true

    form.append(labelEmail)
    form.append(inputEmail)

    /**
     * Textarea Label
     * @type {HTMLLabelElement}
     */
    const labelMessage = document.createElement('label')
    labelMessage.classList.add('modal-label')
    labelMessage.setAttribute('for', 'message')
    labelMessage.innerText = 'Votre message'

    /**
     * Textarea for message
     * @type {HTMLTextAreaElement}
     */
    const areaMessage = document.createElement('textarea')
    areaMessage.classList.add('modal-textarea')
    areaMessage.id = 'message'
    areaMessage.rows = 5
    areaMessage.minLength = 10

    form.append(labelMessage)
    form.append(areaMessage)

    /**
     * Button submit form
     * @type {HTMLButtonElement}
     */
    const submit_btn = document.createElement('button')
    submit_btn.classList.add('modal-btn')
    submit_btn.type = 'button'
    submit_btn.innerText = 'Envoyer'
    submit_btn.addEventListener('click', () => {
      this.submitForm()
    })

    submit_btn.addEventListener('keydown', (e) => {
      /**
       * set focus to the close btn if we press tab while we are on the submit button
       */
      if (!e.shiftKey && e.key === 'Tab') {
        e.preventDefault()
        btnClose.focus()
      }
    })
    form.append(submit_btn)

    /**
     * add background and modal to <main>
     * @type {HTMLElement}
     */
    const main = document.querySelector('main')
    main.append(bgModal)
    main.append(contactModal)

    labelFname.focus()
  }

  /**
   * Remove the background and the modal from the DOM
   */
  close() {
    document.removeEventListener('keydown', this.keyboardNavigation)
    const modal = document.getElementsByClassName('modal')
    const bg = document.getElementsByClassName('background-modal')
    modal[0].remove()
    bg[0].remove()
  }

  /**
   * Submit function
   * Form value display in the console
   */
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
