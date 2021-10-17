<template>
  <v-container>
    <v-row class="text-center mt-16">
      <v-col cols="12">
        <div class="d-flex align-center justify-center">
          <v-img
              src="~@/assets/ava.jpg"
              class="my-3 rounded-circle flex-grow-0"
              contain
              height="200"
              width="200"
          />
        </div>
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Владимир Курусь
        </h1>

        <p class="subheading font-weight-regular">
          Web-разработчик
        </p>
      </v-col>

      <v-col
          class="mb-5"
          cols="12"
      >
        <v-row justify="center">
          <v-btn
              color="accent"
              class="mr-5"
              x-large
          >
            <v-icon left>mdi-diamond-stone</v-icon>
            Проекты
          </v-btn>
          <v-btn
              color="primary"
              x-large
          >
            <v-icon left>mdi-account-box-outline</v-icon>
            Контакты
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
}
</script>
