<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>{{rb2s_title}}</v-list-item-title>
        <v-radio-group v-model="model" :rules="[v => !!v || '必填']" row>
          <v-radio :name="rb2radio_name" label="否" color="primary" value="0"></v-radio>
          <v-radio :name="rb2radio_name" label="是" color="primary" value="1"></v-radio>
        </v-radio-group>
        
        <div v-if="model==1 " v-show="model==1">
          <div v-if="rb2radio_name=='exercise'">
            <v-select
              :name="rb2select_name"
              v-model="test_bind_v"
              item-text="exercise_id"
              item-value="exercise_value"
              :items="exercise"
              :label="rb2s_label"
              :rules="[v => !!v || '必填']"
              solo
            ></v-select>
            <input type="hidden" :name="rb2pass_name" :value="test_bind_v" />
          </div>

          <div v-else>
            <v-select
              :name="rb2select_name"
              v-model="test_bind_v"
              item-text="item_id"
              item-value="item_value"
              :items="items"
              :label="rb2s_label"
              :rules="[v => !!v || '必填']"
              solo
            ></v-select>
            <input type="hidden" :name="rb2pass_name" :value="test_bind_v" />
          </div>
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
      model: null,
      test_bind_v: 0,
      items: [],
      item_per: ["", "<1", "1~5", "6~10", "11~15", ">15"],
      exercise: [],
      exercise_per: ["", "<1", "1~2", "3~4", "5~6", ">6"]
    };
  },

  props: {
    rb2s_title: String,
    rb2radio_name: String,
    rb2s_label: String,
    rb2select_name: String,
    rb2pass_name: String
  },
  methods: {
    item_function() {
      var itms = [];
      var i;
      for (i = 1; i < this.item_per.length; i++) {
        itms.push({ item_id: this.item_per[i], item_value: i });
      }
      this.items = itms;
    },
    exercise_function() {
      var itms = [];
      var i;
      for (i = 1; i < this.exercise_per.length; i++) {
        itms.push({ exercise_id: this.exercise_per[i], exercise_value: i });
      }
      this.exercise = itms;
    }
  },
  mounted() {
    this.item_function();
    this.exercise_function();
  }
};
</script>