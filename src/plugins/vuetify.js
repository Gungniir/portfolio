import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                background: colors.grey.darken4,
                primary: colors.grey.darken3,
                accent: colors.lightBlue.darken3,
            },
            light: {
                background: colors.grey.lighten5,
                primary: colors.lightGreen.lighten2,
                accent: colors.red.lighten2,
            },
        },
    },
});
