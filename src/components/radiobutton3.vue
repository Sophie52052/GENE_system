<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>{{radiobutton3_title}}</v-list-item-title>
        <v-radio-group :v-model="radiobutton3_model" :rules="[v => !!v || '必填']" row>
          <v-radio
            :name="radiobutton3_name"
            :label="radiobutton3_labelA"
            color="primary"
            :value="radiobutton3_valueA"
          ></v-radio>
          <v-radio
            :name="radiobutton3_name"
            :label="radiobutton3_labelB"
            color="primary"
            :value="radiobutton3_valueB"
          ></v-radio>
          <v-radio
            :name="radiobutton3_name"
            :label="radiobutton3_labelC"
            color="primary"
            :value="radiobutton3_valueC"
          ></v-radio>
        </v-radio-group>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  props: {
    radiobutton3_model: String,
    radiobutton3_title: String,
    radiobutton3_name: String,
    radiobutton3_labelA: String,
    radiobutton3_labelB: String,
    radiobutton3_labelC: String,
    radiobutton3_valueA: String,
    radiobutton3_valueB: String,
    radiobutton3_valueC: String
  }
};
</script>