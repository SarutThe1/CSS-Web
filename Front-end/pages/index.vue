<template>
  <v-container>
    <p></p>
    <p></p>
    <v-carousel :show-arrows="false" height="600" onclick=" window.open('https://www.mfu.ac.th/home.html')">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <p></p>
    <div class="text-center">
      <v-row>
        <v-col col="4" >
          <v-img
            src="/images/read.png"
            height="150"
            width="150"
            class="ml-auto"
            onclick=" window.open('https://c.tenor.com/oO-Zeqd99WcAAAAC/ricardo-milos-dance.gif')"
          ></v-img>
        </v-col>
        <v-col col="4">
          <v-btn color="black" dark x-large class="mt-16" to="/search">
            <v-icon class="mr-2" color="red">mdi-fire </v-icon>
            Let's get start!!!
            <v-icon class="ml-2" color="red">mdi-fire</v-icon>
          </v-btn>
        </v-col>
        <v-col col="4" >
          <v-img
            src="/images/lectura-png-4.png"
            class="mr-auto"
            height="150"
            width="150"
            
            onclick=" window.open('https://c.tenor.com/kX8EGaYnIKcAAAAd/wtf-is-going-on-confused.gif')"
          ></v-img>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "/images/banner1.png",
        },
        {
          src: "/images/banner2.png",
        },
        {
          src: "/images/banner3.png",
        },
        {
          src: "/images/banner4.png",
        },
        {
          src: "/images/banner5.png",
        },
      ],
    };
  },
};
</script>