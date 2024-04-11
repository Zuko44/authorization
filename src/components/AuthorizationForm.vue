<script setup lang="ts">
import { ref } from 'vue';

const phoneNumber = ref<number>();
const password = ref<number>();
const remember = ref<boolean>(false);

// чисто чтобы не забыть самому
const succesNumber = ref<number>(79999999999);
const succesPassword = ref<number>(1234567890);

const comeIn = async () => {
  console.log(phoneNumber.value.toString());
  console.log(password.value.toString());
  const formData = new FormData();
  formData.set('phone', phoneNumber.value.toString());
  formData.set('password', password.value.toString());
  console.log(Array.from(formData));

  const response = await fetch(
    'https://backend-front-test.dev.echo-company.ru/api/auth/login',
    {
      method: 'POST',
      body: formData,
    },
  );

  const result = await response.json();
  console.log(result);
};
</script>

<template>
  <div class="wrapper">
    <form action="" method="POST">
      <div>
        <div>
          <label for="phoneNumber">Телефон</label>
        </div>
        <input
          v-model="phoneNumber"
          name="phoneNumber"
          type="number"
          class="phoneNumber"
          placeholder="phoneNumber"
        />
      </div>
      <div>
        <div>
          <label for="password">Пароль</label>
        </div>
        <input
          v-model="password"
          name="phoneNumber"
          type="password"
          class="password"
          placeholder="password"
        />
      </div>
      <div>
        <label for="remember">Запомнить меня</label>
        <input
          type="checkbox"
          class="remember"
          v-model="remember"
          :checked="remember"
        />
      </div>
      <div>
        <div>
          <a href="#">Забыли пароль?</a>
        </div>
        <div>
          <a href="#">Регистрация</a>
        </div>
      </div>
      <button type="button" @click.prevent="comeIn">Отправить</button>
    </form>
  </div>
</template>

<style scoped>
.wrapper {
  text-align: center;
}
</style>
