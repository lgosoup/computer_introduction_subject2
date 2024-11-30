import pictureList from './galleryPictureList.js'

const pictureListEl = document.querySelector('.swiper-wrapper')
const modalEl = document.querySelector('.modal')

const createPictureEl = (imgPath, title, subTitle, index) => {
  const pictureEl = document.createElement('div')
  pictureEl.classList.add('picture')
  pictureEl.classList.add('swiper-slide')

  const imageEl = new Image()
  imageEl.src = imgPath

  const descriptionEl = document.createElement('div')
  descriptionEl.classList.add('description')
  descriptionEl.dataset.index = index

  const emptyDiv = document.createElement('div')

  const titleEl = document.createElement('div')
  titleEl.classList.add('title')
  titleEl.innerHTML = title

  const subTitleEl = document.createElement('div')
  subTitleEl.classList.add('subtitle')

  descriptionEl.appendChild(emptyDiv)
  descriptionEl.appendChild(titleEl)
  descriptionEl.appendChild(subTitleEl)

  pictureEl.appendChild(imageEl)
  pictureEl.appendChild(descriptionEl)

  return pictureEl
}

const onPictureListClick = (event) => {
  const dataIndex = event.target.dataset.index

  if (!dataIndex) return

  const pictureData = pictureList[dataIndex]

  modalEl.classList.remove('hidden')
  modalEl.querySelector('.modal_picture img').src = pictureData.path
  modalEl.querySelector('.modal_title').innerHTML = pictureData.title
  modalEl.querySelector('.modal_subtitle').innerHTML = pictureData.subTitle
}

const onLoad = () => {
  pictureList.forEach((el, index) => {
    const pictureEl = createPictureEl(el.path, el.title, el.subTitle, index)
    pictureListEl.appendChild(pictureEl)
  })

  pictureListEl.addEventListener('click', onPictureListClick)

  const modalBtnEl = modalEl.querySelector('.btn')

  modalBtnEl.addEventListener('click', () => {
    modalEl.classList.add('hidden')
  })
}

window.addEventListener('load', onLoad)

new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  navigation: {
    prevEl: '.swiper-button-prev'
  },
});