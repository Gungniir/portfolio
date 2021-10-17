<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
    <v-app-bar
        app
        color="primary"
        dark
    >
      <div class="d-flex align-center">
        <v-img
            alt="Vuetify Logo"
            class="shrink mr-2 rounded-circle"
            contain
            src="~@/assets/ava.jpg"
            transition="scale-transition"
            width="40"
        />
      </div>

      <div class="d-flex align-center">
        Владимир Курусь
      </div>

      <v-spacer></v-spacer>

      <div class="d-flex align-center">
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-btn icon class="mr-2" href="https://github.com/gungniir" target="_blank" v-bind="attrs" v-on="on">
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </template>
          <span>GitHub</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-btn icon class="mr-2" href="https://t.me/mrloruse" target="_blank" v-bind="attrs" v-on="on">
              <v-icon>fab fa-telegram-plane</v-icon>
            </v-btn>
          </template>
          <span>Telegram</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-btn icon href="mailto:vladimir.kurus@yandex.ru" target="_blank" v-bind="attrs" v-on="on">
              <v-icon>mdi-email</v-icon>
            </v-btn>
          </template>
          <span>Email</span>
        </v-tooltip>
      </div>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  computed: {
    theme() {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  }
};
</script>
