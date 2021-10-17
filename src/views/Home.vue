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
              to="/projects"
          >
            <v-icon left>mdi-diamond-stone</v-icon>
            Проекты
          </v-btn>
          <v-btn
              color="primary"
              x-large
              @click="showContacts = !showContacts"
          >
            <v-icon left>mdi-account-box-outline</v-icon>
            Контакты
          </v-btn>
        </v-row>
        <v-expand-transition>
          <v-row v-if="showContacts" class="mt-10">
            <v-col cols="12" md="6" offset-md="3">
              <v-card outlined>
                <v-card-title>Контакты</v-card-title>
                <v-card-text>
                  <v-list>
                    <v-list-item
                        v-for="contact of $store.state.contacts"
                        :key="contact.name"
                        :href="contact.link"
                        target="_blank"
                    >
                      <v-list-item-icon>
                        <v-icon>{{ contact.icon }}</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content class="text-start">
                        <v-list-item-title>{{ contact.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ contact.value }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-expand-transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    showContacts: false
  })
}
</script>
