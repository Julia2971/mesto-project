const profilePopup = document.querySelector(".popup_profile-edit");
const cardPopup = document.querySelector(".popup_new-place");
const cardPlus = document.querySelector(".profile__plus");
const profileEdit = document.querySelector(".profile__edit");
const popupCloseProfile = profilePopup.querySelector(".popup__close");
const popupCloseCard = cardPopup.querySelector(".popup__close");
const cardsContainer = document.querySelector(".elements");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const formElementProfile = document.querySelector('.popup__form_profile');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = document.querySelector('.popup__input_type_name')// Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector(".popup__input_type_job")// Воспользуйтесь инструментом .querySelector()


const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

//// открытие попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

//// закрытие попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
//// слушатель на открытие попапа профиля
profileEdit.addEventListener("click", function () {
  openPopup(profilePopup);
});

//// слушатель на закрытие попапа профиля
popupCloseProfile.addEventListener("click", function () {
  closePopup(profilePopup);
});

//// слушатель на открытие попапа карточек
cardPlus.addEventListener("click", function () {
  openPopup(cardPopup);
});

//// слушатель на закрытие попапа карточек
popupCloseCard.addEventListener("click", function () {
  closePopup(cardPopup);
});


function addCard(item){
    const cardTemplate = document.querySelector("#card-template").content;
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    const cardImage = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__title");
    console.log(cardTitle);

}

// Находим форму в DOM


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmitProfile(evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(profilePopup)
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElementProfile.addEventListener('submit', handleFormSubmitProfile);


function clickLikeCard(){
    evt.target.classList.toggle('card__like_active')
}
