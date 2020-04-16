<template>
  <v-container fluid fill-height>
   
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
    <v-layout>
        <!-- 家族史 -->
        <div>
          <v-form
            method="POST"
            action="http://140.116.247.167:8084/create/family"
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-card class="elevation-12">
              <v-toolbar color="green lighten-1" dark>
                <v-toolbar-title>家族史</v-toolbar-title>
              </v-toolbar>

              <PART4 :pass_line_id="line_id"></PART4>
              <v-btn
                color="green lighten-1"
                type="submit"
                :disabled="!valid"
                @click="validate"
              >Submit</v-btn>
              <div style="display:inline;color: red;font-size: 15px;" v-show="!valid">  您有欄位尚未填取
              </div>
            </v-card>
          </v-form>
        </div>
      
    </v-layout>
          </v-col>
        </v-row>
  </v-container>
</template>


<script>
import PART4 from "@/components/PART4.vue";
export default {
  components: {
    PART4
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
