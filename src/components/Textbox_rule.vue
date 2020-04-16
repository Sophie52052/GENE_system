<template>
  <div>
     <v-divider></v-divider>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>{{textbox_title}}</v-list-item-title>
        <v-list-item-subtitle>{{note}}</v-list-item-subtitle>
        <div v-if="textbox_name=='medical_no' || textbox_name=='doctor_name' || textbox_name=='no_mr'">
        <v-text-field required :name="textbox_name" solo :label="textbox_label"  clearable ></v-text-field>
        </div>
        <div v-else>
        <v-text-field required :name="textbox_name" solo :label="textbox_label"  clearable :rules="[v => !!v || '必填']"></v-text-field>
        </div>
      </v-list-item-content>
    </v-list-item>
   
  </div>
</template>


<script>
export default {
  data() {
    return {
    };
  },

  props: {
    textbox_title: String,
    textbox_name: String,
    textbox_label: String,
    note: String,
    rule: String,
  }
};
</script>