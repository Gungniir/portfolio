<template>
  <v-container>
    <v-row>
      <v-col cols="12" v-for="(project, index) of projects" :key="project.id">
        <v-card outlined>
          <v-row v-if="$vuetify.breakpoint.smAndUp" :class="index % 2 ? `flex-row-reverse` : ``">
            <v-col cols="6" class="d-flex flex-column">
              <v-card-title>{{ project.name }}</v-card-title>
              <v-card-text class="flex-grow-1">{{ project.description }}</v-card-text>
              <v-card-actions class="pa-4">
                <v-btn color="primary" :to="`/project/${project.id}`">Подробнее</v-btn>
              </v-card-actions>
            </v-col>
            <v-col cols="6" class="overflow-hidden">
              <div class="overflow-hidden fill-height">
                <v-img src="/img/code.jpg" class="scale"/>
              </div>
            </v-col>
          </v-row>
          <template v-else>
            <v-img :src="project.imgSrc" height="200"/>
            <v-card-title>{{ project.name }}</v-card-title>
            <v-card-text>{{ project.description }}</v-card-text>
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Projects',
  data: () => ({
    i: 0,
  }),
  computed: {
    projects: function () {
      return this.$store.state.projects.map(item => ({
        id: item.id,
        name: item.name,
        ...item.catalog
      }))
    }
  }
}
</script>

<style lang="scss" scoped>
.reversed:nth-of-type(2n) {
  flex-direction: row-reverse;
}
.scale {
  transition: all 0.2s;
  height: 100%;

  &:hover {
    transform: scale(1.2);
  }
}
</style>
