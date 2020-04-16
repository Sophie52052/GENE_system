<template>
  <div>
    <v-divider></v-divider>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>{{textbox_title}}</v-list-item-title>
        <v-list-item-subtitle>{{note}}</v-list-item-subtitle>
        <div
          v-if="(type=='breast_cancer')||(type=='ovarian_cancer')
          ||(type=='endometrial_cancer')||(type=='gastric_cancer')||(type=='pancreatic_cancer')
          ||(type=='cholangiocarcinoma')||(type=='colorectal_cancer')||(type=='small_bowel_cancer')
          ||(type=='kidney_cancer')||(type=='bladder_cancer')||(type=='urinary_tract_cancer')
          ||(type=='prostate_cancer')||(type=='skin_cancer')||(type=='thyroid_cancer')
          ||(type=='adrenal_cancer')||(type=='lymphoma')||(type=='brain_cancer')
          ||(type=='blood_cancer')||(type=='sarcoma')||(type=='codwen')||(type=='other_cancer')"
        >
          <v-text-field
            required
            :name="textbox_name"
            solo
            :label="textbox_label"
            clearable
            :rules="[v => !!v || '必填']"
          ></v-text-field>
        </div>
        <v-text-field required :name="textbox_name" 
          v-else
          solo 
          :label="textbox_label"  
          clearable
          
          >
        </v-text-field>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>


<script>
export default {
  data() {
    return {
      necessary: null
    };
  },

  props: {
    textbox_title: String,
    textbox_name: String,
    textbox_label: String,
    note: String,
    rule: String,
    valid: String,
    type: String
  },

  computed: {
    check() {
      if (this.valid == "1") {
        //this.necessary = value => !!value || '必填';
      }
      return 0;
    }
  }
};
</script>