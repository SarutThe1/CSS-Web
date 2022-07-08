<template>
  <div class="justify-center align-center">
    <h1>Number of page end</h1>
    <div class="container">
      <v-row class="justify-center align-center" >
        <v-card height="800" width="800" >
          <v-col >
            <line-chart
              v-if="pageend_loaded"
              :linechartdata="pageend_apidata"
              :linechartoptions="chartoptions"
            />
          </v-col>
        </v-card>
      </v-row>
    </div>
    <h1>Number of each document type</h1>
    <div class="container">
      <v-row class="justify-center align-center">
        <v-card  height="700" width="700">
          <v-col >
            <doughnut-chart
              v-if="sumdoc_loaded"
              :doughnutchartdata="sumdoc_apidata"
              :doughnutchartoptions="chartoptions"
            />
          </v-col>
        </v-card>
      </v-row>
    </div>
  </div>
</template>
<script>
const sumdoc_url = "http://localhost:5000/api/sumdocument";
const pageend_url = "http://localhost:5000/api/sumpageend";
export default {
  data: () => ({
    loaded: false,
    apidata: {
      labels: [],
      datasets: [],
    },
    sumdoc_loaded: false,
    sumdoc_apidata: {
      labels: [],
      datasets: [],
    },
    pageend_loaded: false,
    pageend_apidata: {
      labels: [],
      datasets: [],
    },
  }),
  methods: {
    async getSalary() {
      this.loaded = false;
      try {
        const res = await this.$axios.get(url);
        //console.log(res.data.response);
        var results = res.data.response;
        var templabels = [],
          tempdata = [];
        results.forEach(function (x) {
          templabels.push(x.emp_id);
          tempdata.push(x.salary);
        });
        //console.log(templabels);
        var tempAPIdata = {
          labels: templabels,
          datasets: [
            {
              label: "Salary by Employee ID",
              backgroundColor: "lavender",
              borderColor: "MediumPurple",
              data: tempdata,
            },
          ],
        };
        this.apidata = tempAPIdata;
        this.loaded = true;
      } catch (e) {
        console.error(e);
      }
    },
    async getpageend() {
      this.pageend_loaded = false;
      try {
        const res = await this.$axios.get(pageend_url);
        //console.log(res.data.response);
        var results = res.data.response;
        var templabels = [],
          tempdata = [];
        results.forEach(function (x) {
          templabels.push(x.publication_id);
          tempdata.push(x.sumpage_end);
        });
        //console.log(templabels);
        var tempAPIdata = {
          labels: templabels,
          datasets: [
            {
              label: "Page End",
              borderColor: "salmon",
              data: tempdata,
            },
          ],
        };
        this.pageend_apidata = tempAPIdata;
        this.pageend_loaded = true;
      } catch (e) {
        console.error(e);
      }
    },
    async getSumdocument() {
      this.sumdoc_loaded = false;
      try {
        const res = await this.$axios.get(sumdoc_url);
        //console.log(res.data.response);
        var results = res.data.response;
        var templabels = [],
          tempdata = [];
        results.forEach(function (x) {
          templabels.push(x.document_type);
          tempdata.push(x.sum_document);
        });
        //console.log(templabels);
        var tempAPIdata = {
          labels: templabels,
          datasets: [
            {
              label: "Document type",
              backgroundColor: [
                "Pink",
                "MediumPurple",
                "darkred",
                "darkBlue",
                "Green",
                "#F6E262",
              ],
              data: tempdata,
            },
          ],
        };
        this.sumdoc_apidata = tempAPIdata;
        this.sumdoc_loaded = true;
      } catch (e) {
        console.error(e);
      }
    },
  },
  mounted() {
    this.getSalary();
    this.getSumdocument();
    this.getpageend();
  },
};
</script>