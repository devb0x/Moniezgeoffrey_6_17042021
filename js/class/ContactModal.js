/**
 * Class representing a Contact Form
 */
export class ContactModal {

  constructor(name) {
    this.name = name
    this.render()
    // const closeBtn = document.querySelector('.modal-btn__close')
    // closeBtn.addEventListener('click', () => {
    //   this.close()
    // })
  }

  render() {
    const contactModal = document.createElement('div')
    contactModal.classList.add('modal')

    // contactModal.innerHTML = `
    //    <form action="">
    //       <header class="modal-header">
    //         <h1>Contactez-moi</h1>
    //         <span>${this.name}</span>
    //         <button type="button" class="modal-btn__close">&#10006;</button>
    //       </header>
    //       <label for="firstname" class="modal-label">Prénom</label>
    //       <input type="text" id="firstname" class="modal-input">
    //       <label for="lastname" class="modal-label">Nom</label>
    //       <input type="text" id="lastname" class="modal-input">
    //       <label for="email" class="modal-label">Email</label>
    //       <input type="text" id="email" class="modal-input">
    //       <label for="message" class="modal-label">Votre message</label>
    //       <textarea id="message" rows="10" class="modal-textarea"></textarea>
    //       <button type="button" class="modal-btn">Envoyer</button>
        // </form>
    // `
    const form = document.createElement('form')
    contactModal.appendChild(form)

    const header = document.createElement('header')
    header.classList.add('modal-header')
    const title = document.createElement('h1')
    title.innerText = 'Contactez-moi'
    const span = document.createElement('span')
    span.innerText = `${this.name}`
    const btnClose = document.createElement('button')
    btnClose.classList.add('modal-btn__close')
    btnClose.innerHTML = `&#10006;`
    header.appendChild(title)
    header.appendChild(span)
    header.appendChild(btnClose)
    form.append(header)



    const photographerInfo = document.getElementsByClassName('photographer')
    photographerInfo[0].append(contactModal)
  }

  close() {
    const modal = document.getElementsByClassName('modal')
    modal[0].remove()
  }

}