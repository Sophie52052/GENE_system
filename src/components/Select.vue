<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>{{select_title}}</v-list-item-title>
        <v-select
          v-model="test_bind_v"
          item-text="item_id"
          item-value="item_value"
          :items="mena_age"
          :label="select_label"
          :rules="rules"
          solo
        ></v-select>
        <input type="hidden" :name="selectpass_name" :value="test_bind_v" >
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
  </div>
</template>




<script>
export default {
  data() {
    return {
      mena_age: [],
      test_bind_v: null,
    };
  },
  props: {
    select_title: String,
    select_label: String,
    selectpass_name: String,
  },
  computed: {
    rules() {
      return [
        
          this.test_bind_v != null ||
          "必填"
      ];
    }
  },
  methods: {
    age_function() {
      var itms = [];
      var i;
      for (i = 0; i < 25; i++) {
        itms.push({ item_id: i, item_value: i });
      }
      this.mena_age = itms;
    }
  },

  mounted() {
    this.age_function();
  },
};
</script>