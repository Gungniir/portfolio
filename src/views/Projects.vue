<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card outlined>
          <v-card-title>Мои проекты</v-card-title>
          <v-card-text>
            <p>Всем привет! Здесь представлены некоторые из моих проектов :)</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" v-for="(project, index) of projects" :key="project.id">
        <ProjectsProjectCard :project="project" :reversed="index % 2 === 0"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProjectsProjectCard from "@/components/ProjectsProjectCard";
export default {
  name: 'Projects',
  components: {ProjectsProjectCard},
  data: () => ({
    i: 0,
  }),
  computed: {
    projects: function () {
      return this.$store.state.projects.map(item => ({
        id: item.id,
        name: item.name,
        tags: item.tags,
        ...item.catalog
      }))
    }
  }
}
</script>
