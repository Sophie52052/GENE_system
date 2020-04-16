<template>
 <v-container  fluid>
     <!-- fill-height fluid -->
     <!-- <v-container
        class="fill-height"
        fluid
      > -->
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="20"
            
            xs="12"
            sm="8"
            md="4"
          >
      <!-- <v-flex  md4> -->
         <!-- md4 sm8 xs12 justify-center align-center  -->
        <!-- 基因史 -->
        <div>
          <v-form
            method="POST"
            action="http://140.116.247.167:8084/create/gene"
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-card class="elevation-12">
              <v-toolbar color="pink lighten-1" dark>
                <v-toolbar-title>基因史</v-toolbar-title>
              </v-toolbar>

              <PART3 :pass_line_id="line_id"></PART3>
              <v-btn
                color="pink lighten-1"
                :disabled="!valid"
                @click="validate"
                type="submit"
              >Submit</v-btn>
              <div style="display:inline;color: red;font-size: 15px;" v-show="!valid">您有欄位尚未填取</div>
            </v-card>
          </v-form>
        </div>
      
          </v-col>
        </v-row>
  </v-container>
</template>


<script>
import PART3 from "@/components/PART3.vue";
export default {
  components: {
    PART3
  },
  data() {
    return {
      line_id: "",
      valid: true
    };
  },
  created: function() {
    this.line_id = this.$route.query.line_id;
    //console.log(this.$route.query.line_id);
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
