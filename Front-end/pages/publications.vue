<template>
  <v-data-table
    :headers="headers"
    :items="publist"
    :search="search"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Manage Publications</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialogShow" width="1000px">

          <v-card>
            <v-card-title class="text-h5 black " style="color:white;">
              Show details
            </v-card-title>
            <v-divider></v-divider>
           <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="editedItem.authors"
                      label="Authors"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="editedItem.title"
                      label="Title"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="2">
                    <v-text-field
                      v-model="editedItem.year"
                      label="Year"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="10">
                    <v-text-field
                      v-model="editedItem.source"
                      label="Source"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="2">
                    <v-text-field
                      v-model="editedItem.volume"
                      label="Volume"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="2">
                    <v-text-field
                      v-model="editedItem.issue"
                      label="Issue"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="2">
                    <v-text-field
                      v-model="editedItem.art_no"
                      label="Art no"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="1">
                    <v-text-field
                      v-model="editedItem.page_start"
                      label="Page start"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="1">
                    <v-text-field
                      v-model="editedItem.page_end"
                      label="Page end"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="2">
                    <v-text-field
                      v-model="editedItem.page_count"
                      label="Page count"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="2">
                    <v-text-field
                      v-model="editedItem.cited_by"
                      label="Cited by"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="5">
                    <v-text-field
                      v-model="editedItem.doi"
                      label="Doi"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="7">
                    <v-text-field
                      v-model="editedItem.link"
                      label="Link"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" >
                    <v-text-field
                      v-model="editedItem.affiliations"
                      label="Affiliations"
                    ></v-text-field>
                  </v-col>
                   <v-col cols="12" >
                    <v-text-field
                      v-model="editedItem.authors_with_affiliations"
                      label="Authors with affiliations"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" >
                    <v-text-field
                      v-model="editedItem.index_keywords"
                      label="Index keywords"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="editedItem.publisher"
                      label="Publisher"
                    ></v-text-field>
                  </v-col>
                   <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="editedItem.document_type"
                      label="Document type"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="dialogShow = false">
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialog" max-width="1000px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="black" dark class="mb-2" v-bind="attrs" v-on="on">
              New Publications
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="text-h5 black " style="color:white;">
              <span class="text-h5 " >{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
              <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="editedItem.authors"
                      label="Authors"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="editedItem.title"
                      label="Title"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="2">
                    <v-text-field
                      v-model="editedItem.year"
                      label="Year"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="10">
                    <v-text-field
                      v-model="editedItem.source"
                      label="Source"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="2">
                    <v-text-field
                      v-model="editedItem.volume"
                      label="Volume"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="2">
                    <v-text-field
                      v-model="editedItem.issue"
                      label="Issue"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="2">
                    <v-text-field
                      v-model="editedItem.art_no"
                      label="Art no"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="1">
                    <v-text-field
                      v-model="editedItem.page_start"
                      label="Page start"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="1">
                    <v-text-field
                      v-model="editedItem.page_end"
                      label="Page end"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="2">
                    <v-text-field
                      v-model="editedItem.page_count"
                      label="Page count"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="2">
                    <v-text-field
                      v-model="editedItem.cited_by"
                      label="Cited by"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="5">
                    <v-text-field
                      v-model="editedItem.doi"
                      label="Doi"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="7">
                    <v-text-field
                      v-model="editedItem.link"
                      label="Link"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" >
                    <v-text-field
                      v-model="editedItem.affiliations"
                      label="Affiliations"
                    ></v-text-field>
                  </v-col>
                   <v-col cols="12" >
                    <v-text-field
                      v-model="editedItem.authors_with_affiliations"
                      label="Authors with affiliations"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" >
                    <v-text-field
                      v-model="editedItem.index_keywords"
                      label="Index keywords"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="editedItem.publisher"
                      label="Publisher"
                    ></v-text-field>
                  </v-col>
                   <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="editedItem.document_type"
                      label="Document type"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5 black " style="color:white;"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small class="mr-2" @click="showItem(item)"> mdi-eye </v-icon>
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-spacer></v-spacer>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>
<script>
const url = "http://localhost:5000/api/publications";
export default {
  data: () => ({
    dialogShow: false,
    dialog: false,
    dialogDelete: false,
    search: "",
    headers: [
      { text: "Publications id", value: "publication_id" },
      { text: "Authors", value: "authors" },
      { text: "Title", value: "title" },
      { text: "Year", value: "year" },
      // { text: "Source", value: "source" },
      // { text: "Volume", value: "volume" },
      // { text: "Issue", value: "issue" },
      // { text: "Art no", value: "art_no" },
      // { text: "Page start", value: "page_start" },
      // { text: "Page end", value: "page_end" },
      // { text: "Page count", value: "page_count" },
      // { text: "Cited by", value: "cited_by" },
      // { text: "Doi", value: "doi" },
      // { text: "Link", value: "link" },
      // { text: "Affiliations", value: "affiliations" },
      // { text: "Authors with affiliations", value: "authors_with_affiliations" },
      //{ text: "Index keywords", value: "index_keywords" },
      { text: "Publisher", value: "publisher" },
      { text: "Document type", value: "document_type" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    mydata: null,
    publist: [],
    editedIndex: -1,
    editedItem: {
      authors: "",
      title: "",
      year: null,
      source: "",
      volume: null,
      issue: null,
      art_no: null,
      page_start: null,
      page_end: null,
      page_count: null,
      cited_by: null,
      doi: "",
      link: "",
      affiliationsrce: "",
      authors_with_affiliations: "",
      index_keywords: "",
      publisher: "",
      document_type: "",
    },
    defaultItem: {
      authors: "",
      title: "",
      year: null,
      source: "",
      volume: null,
      issue: null,
      art_no: null,
      page_start: null,
      page_end: null,
      page_count: null,
      cited_by: null,
      doi: "",
      link: "",
      affiliationsrce: "",
      authors_with_affiliations: "",
      index_keywords: "",
      publisher: "",
      document_type: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item ";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    async initialize() {
      const res = await this.$axios.get(url);
      this.publist = res.data.response;
    },
    showItem(item) {
      this.editedIndex = this.publist.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogShow = true;
    },

    editItem(item) {
      this.editedIndex = this.publist.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.publist.indexOf(item);
      this.editedItem = Object.assign({}, item);
      //console.log(this.editedItem);
      this.dialogDelete = true;
    },

    async deleteItemConfirm() {
      const delurl = url + "/" + this.editedItem.publication_id;
      try {
        const res = this.$axios.delete(delurl);
        this.publist.splice(this.editedIndex, 1);
      } catch (e) {
        console.log(e);
      }
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async save() {
      if (this.editedIndex > -1) {
        const puturl = url + "/" + this.editedItem.publication_id;
        Object.assign(this.publist[this.editedIndex], this.editedItem);
        try {
          const res = await this.$axios.put(puturl, this.editedItem);
        } catch (e) {
          console.log(e);
        }
        // PUT API here
      } else {
        this.publist.push(this.editedItem);
        try {
          const res = await this.$axios.post(url, this.editedItem);
          this.initialize();
        } catch (e) {
          console.log(e);
        }

        // POST API
      }
      this.close();
    },
  },
};
</script>