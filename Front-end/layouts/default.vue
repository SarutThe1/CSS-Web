<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app color="#aa2929" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />

      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-list>
      <v-list-item @click.native="right = !right">
        <v-list-item-action>
          <v-icon light> mdi-repeat </v-icon>
        </v-list-item-action>
        <v-list-item-title>Switch drawer (click me)</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-footer dark padless absolute app>
      <v-card class="flex" flat tile>
        <v-card-title style="background-color: #aa2929">
          <strong class="subheading">Get connected with us!!!</strong>

          <v-spacer></v-spacer>
          <v-btn class="mr-10" fab dark small  onclick=" window.open('https://www.facebook.com/MFUconnect','_blank')"><v-icon dark> mdi-facebook </v-icon>
          </v-btn>
          <v-btn class="mr-10" fab dark small  onclick=" window.open('https://reg.mfu.ac.th/registrar/home.asp','_blank')"><v-icon dark> mdi-application-outline </v-icon>
          </v-btn>
          <v-btn class="mr-10" fab dark small  onclick=" window.open('https://www.mfu.ac.th/home.html','_blank')"><v-icon dark> mdi-web </v-icon>
          </v-btn>
          
        </v-card-title>
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Make by Group18</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      icons: ["mdi-facebook", "mdi-application-outline", "mdi-web"],
      items: [
        {
          icon: "mdi-home-circle",
          title: "Home",
          to: "/",
        },

        {
          icon: "mdi-book-search",
          title: "Search",
          to: "/search",
        },
        {
          icon: "mdi-chart-bar",
          title: "Graph",
          to: "/dashboard",
        },
        {
          icon: "mdi-database-cog",
          title: "Manage Data",
          to: "/login",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "MFU Publications",
    };
  },
};
</script>