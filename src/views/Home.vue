<template>
  <v-container >
     <!-- fill-height fluid -->
     <!-- <v-container
        class="fill-height"
        fluid
      > -->
        <v-row
          align=""
          justify="center"
        >
          <v-col
            cols=""
            
            xs="12"
            sm="8"
            md="4"
          >
    <!-- <v-layout> -->
      <!-- <v-flex  md4> -->
         <!-- md4 sm8 xs12 justify-center align-center  -->
        <!-- 個人史 -->
        <div>
          <v-form
            method="POST"
            action="http://140.116.247.167:8084/create/human"
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-card class="elevation-12 justify-center">
              <!--  justify-center -->
              <v-toolbar color="purple lighten-1" dark>
                <v-toolbar-title>個人史</v-toolbar-title>
              </v-toolbar>
              <PART1></PART1>

              <v-btn
                color="purple lighten-1"
                :disabled="!valid"
                @click="validate"
                type="submit"
              >Submit</v-btn>
              <div style="display:inline;color: red;font-size: 15px;" v-show="!valid">  您有欄位尚未填取
              </div>
            </v-card>
          </v-form>
        </div>
      
    <!-- </v-layout> -->
          </v-col>
        </v-row>
  </v-container>
</template>


<script>
import PART1 from "@/components/PART1.vue";
export default {
  components: {
    PART1
  },
  data() {
    return { valid: true };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    }
  }
};
</script>
