const profilePopup = document.querySelector('.popup_profile-edit');
const cardPopup = document.querySelector('.popup_new-place')
const cardPlus = document.querySelector('.profile__plus');
const profileEdit = document.querySelector('.profile__edit');
const popupCloseProfile = profilePopup.querySelector('.popup__close');
const popupCloseCard = cardPopup.querySelector('.popup__close')



//// открытие попапа
function openPopup(popup){
    popup.classList.add('popup_opened')
};

//// закрытие попапа
function closePopup(popup){
    popup.classList.remove('popup_opened')
};
//// слушатель на открытие попапа профиля
profileEdit.addEventListener('click', function(){
    openPopup(profilePopup)
});

//// слушатель на закрытие попапа профиля
popupCloseProfile.addEventListener('click', function() {
    closePopup(profilePopup)
});

//// слушатель на открытие попапа карточек 
cardPlus.addEventListener('click', function(){
    openPopup(cardPopup)
});

//// слушатель на закрытие попапа карточек
popupCloseCard.addEventListener('click', function() {
    closePopup(cardPopup)
});
