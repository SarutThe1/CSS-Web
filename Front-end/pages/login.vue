<template>
  <v-card width="500" class="mx-auto mt-9">
    <v-dialog v-model="dialogShow" width="500">
      <v-card>
        <v-card-title class="text-h5 black justify-center" style="color: white">
          Login Succesful!!!
        </v-card-title>
        <v-divider></v-divider>

        <v-container>
          <v-card-actions class="justify-center">
            <v-btn color="#aa2929" dark to="/publications" @click="dialogShow = false">
              Got it!
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogError" width="500">
      <v-card>
        <v-card-title class="text-h5 black justify-center" style="color: white">
          Login Failed!!!
        </v-card-title>
        <v-divider></v-divider>

        <v-container>
          <v-card-actions class="justify-center">
            <v-btn color="#aa2929" dark @click="dialogError = false">
              Try again!
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>

    <v-card-title class="text-h5 black" style="color: white"
      >Please Login First
    </v-card-title>
    <v-card-text>
      <p></p>
      <v-text-field
        v-model="username"
        :rules="userRules"
        :counter="10"
        label="Username"
        required
        prepend-icon="mdi-account-circle"
      />
      <v-text-field
        v-model="password"
        label="Password"
        :rules="passRules"
        required
        :type="showPassword ? 'text' : 'password'"
        prepend-icon="mdi-lock"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
      />
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        color="#aa2929"
        class="ml-auto"
        dark
        @click="checkUP(username, password)"
        >Login</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
   
      dialogShow: false,
      dialogError: false,
      username: "",
      password: "",
      showPassword: false,
      valid: false,
      userRules: [
        (v) => !!v || "Username is required",
        (v) => v.length <= 10 || "Username must be less than 10 characters",
      ],
      passRules: [(v) => !!v || "Password is required"],
  }),

  methods: {
      checkUP(username, password) {
          if (username == "admin" && password == "12345") {
            console.log("login successs");
            this.dialogShow = true;
            this.dialogError = false;
          } else {
            console.log("login fail");
            this.dialogError = true;
            this.dialogShow = false;
          }
      },
  },

      
    
  
};
</script>