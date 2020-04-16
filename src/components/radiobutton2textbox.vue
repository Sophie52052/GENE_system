<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>{{radiobutton2_title}}</v-list-item-title>
        <v-radio-group v-model="model" :rules="[v => !!v || '必填']" row>
          <v-radio :name="radiobutton2_name" label="否" color="primary" value="0"></v-radio>
          <v-radio :name="radiobutton2_name" label="是" color="primary" value="1"></v-radio>
        </v-radio-group>
        <div v-show="model==1">
          <v-text-field
            :name="radiobutton2textbox_name"
            solo
            :label="radiobutton2textbox_label"
            v-if="model==1"
            :rules="[v => !!v || '必填']"
            clearable
          ></v-text-field>
        </div>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: null
    };
  },

  props: {
    radiobutton2_title: String,
    radiobutton2_name: String,
    radiobutton2textbox_name: String,
    radiobutton2textbox_label: String,
  }
};
</script>