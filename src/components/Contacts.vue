<template>
  <div class="contacts">
    <a class="contacts__link contacts__link--tel" href="tel:88005558628">
      <div class="contacts__icon-bg">
        <svg class="contacts__icon" width="18" height="18">
          <use xlink:href="@/assets/img/sprite.svg#contacts-phone"></use>
        </svg>
      </div>
      <span class="contacts__text">8 800 555-86-28</span>
    </a>
    <a class="contacts__link contacts__link--mail" href="mailto:mail@htmlacademy.ru">
      <div class="contacts__icon-bg">
        <svg class="contacts__icon" width="18" height="18">
          <use xlink:href="@/assets/img/sprite.svg#contacts-mail"></use>
        </svg>
      </div>
      <span class="contacts__text">mail@htmlacademy.ru</span>
    </a>
  </div>
</template>

<script>

export default {
  name: 'Contacts'
}
</script>
