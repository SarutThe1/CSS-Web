<template>
  <v-container fluid>
    <v-data-iterator
      :items="publist"
      :items-per-page.sync="itemsPerPage"
      :page.sync="page"
      :search="search"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar class="mb-2" color="black" dark flat>
          <v-toolbar-title>Explore</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search"
          ></v-text-field>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">
                {{ item.title }}
              </v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item >
                  <v-list-item-content >
                    <v-row class="justify-center align-center">
                    <div v-if="`${item.document_type}` == 'Article'" >
                      <v-img
                        src="/images/article.png"
                        max-height="150"
                        max-width="150"
                      ></v-img>
                    </div>
                    <div v-else-if="`${item.document_type}` == 'Erratum'" >
                      <v-img
                        src="/images/erratum.png"
                        max-height="150"
                        max-width="150"
                      ></v-img>
                    </div>
                    <div v-if="`${item.document_type}` == 'Conference Paper'" >
                      <v-img
                        src="/images/conpaper.png"
                        max-height="150"
                        max-width="150"
                      ></v-img>
                    </div>
                    <div v-else-if="`${item.document_type}` == 'Note'" >
                      <v-img
                        src="/images/note.png"
                        max-height="150"
                        max-width="150"
                      ></v-img>
                    </div>
                    <div v-if="`${item.document_type}` == 'Review'" >
                      <v-img
                        src="/images/review.png"
                        max-height="150"
                        max-width="150"
                      ></v-img>
                    </div>
                    <div v-else-if="`${item.document_type}` == 'Letter'" >
                      <v-img
                        src="/images/letter.png"
                        max-height="150"
                        max-width="150"
                      ></v-img>
                    </div>
                    </v-row>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Authors:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.authors }}
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>Type:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.document_type }}
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content class="align-end">
                    <v-btn
                      elevation="2"
                      color="grey darken-3"
                      dark
                      :href="`${item.link}`"
                      target="_blank"
                    >
                      <v-icon class="mr-2">mdi-book-open-page-variant</v-icon
                      >Read</v-btn
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-toolbar class="mt-2" color="#aa2929" dark flat>
          <v-row class="mt-2" align="center" justify="center">
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <span class="white--text">Items per page</span>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  dark
                  text
                  color="black"
                  class="ml-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  {{ itemsPerPage }}
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(number, index) in itemsPerPageArray"
                  :key="index"
                  @click="updateItemsPerPage(number)"
                >
                  <v-list-item-title>{{ number }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <span class="mr-4 ml-4 white--text">
              Page {{ page }} of {{ numberOfPages }}
            </span>
            <v-btn dark color="black darken-3" class="mr-1" @click="formerPage">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn dark color="black darken-3" class="ml-1" @click="nextPage">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-row>
        </v-toolbar>
      </template>
    </v-data-iterator>
  </v-container>
</template>


<script>
const url = "http://localhost:5000/api/publications";
export default {
  data: () => ({
    itemsPerPageArray: [4, 8, 12],
    search: "",
    sortDesc: false,
    page: 1,
    itemsPerPage: 4,
    publist: [],
  }),

  created() {
    this.initialize();
  },

  computed: {
    numberOfPages() {
      return Math.ceil(this.publist.length / this.itemsPerPage);
    },
  },

  methods: {
    async initialize() {
      const res = await this.$axios.get(url);
      this.publist = res.data.response;
    },

    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
  },
};
</script>