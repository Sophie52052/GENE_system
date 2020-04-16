<template>
  <v-container >
    <v-row
          align=""
          justify="center"
        >
          <v-col
            cols="20"
            
            xs="12"
            sm="8"
            md="4"
          >
    
     
        <!-- 個人史 -->
        <div>
          <!-- <div v-show="part_2 == true"> -->
          <v-form
            method="POST"
            action="http://140.116.247.167:8084/create/medical"
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-card class="elevation-12">
              <v-toolbar color="brown lighten-1" dark>
                <v-toolbar-title>醫療史</v-toolbar-title>
              </v-toolbar>
              <PART2 :pass_line_id="line_id"></PART2>
              <v-btn
                color="brown lighten-1"
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
// console.log($line_id);
import PART2 from "@/components/PART2.vue";
export default {
  components: {
    PART2
  },
  data() {
    return {
      line_id: "",
      valid: true
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    }
  },
  created: function() {
    this.line_id = this.$route.query.line_id;
    //console.log(this.$route.query.line_id);
  }
};
</script>
