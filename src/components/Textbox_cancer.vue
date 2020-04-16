<template>
  <div>
     
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>{{textbox_title}}</v-list-item-title>
        <v-list-item-subtitle>{{note}}</v-list-item-subtitle>
        <v-text-field required :name="textbox_name" 
          solo 
          :label="textbox_label"  
          clearable 
          :rules="[v => !!v || '必填']"
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
      necessary: null,
    };
  },

  props: {
    textbox_title: String,
    textbox_name: String,
    textbox_label: String,
    note: String,
    rule: String,
    valid: String,
  },

  computed:{
    check: function(){
      if(this.valid=='1'){
        //this.necessary = value => !!value || '必填';
      }
      return 0
    },
  }
};
</script>