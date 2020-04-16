<template>
  <div>
    <v-divider></v-divider>
    <!-- <v-list-item>
      <v-list-item-content>
        <v-list-item-title>是否有{{parent_name}}：</v-list-item-title>
        <v-radio-group v-model="model" >
          <v-radio :name="'level'+degree+'_detail['+parent_who+'_get]'" label="否" color="primary" value="0"></v-radio>
          <v-radio :name="'level'+degree+'_detail['+parent_who+'_get]'" label="是" color="primary" value="1"></v-radio>
        </v-radio-group>
      </v-list-item-content>
    </v-list-item> -->

    

    <!-- <div v-show="model==1"> -->
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>共有幾個{{parent_name}}：</v-list-item-title>
          <v-select
            @change="adenomas_range_function()"
            v-model="parent_num"
            item-text="item_id"
            item-value="item_value"
            :items="parent_range"
            :label="'請選擇有幾個'+parent_name"
            v-if="valid==1"
            :rules="rule"
            solo
          ></v-select>
          <input type="hidden" :name="'level'+degree+'_adenoma['+parent_who+'_n]'" :value="parent_num" >
        </v-list-item-content>
      </v-list-item>

    
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>共有幾個{{parent_name}}罹患大腸息肉 ：</v-list-item-title>
          <v-select
            v-model="adenomas_num"
            item-text="itemcancer_id"
            item-value="itemcancer_value"
            :items="adenomas_range"
            :label="'請選擇有幾個'+parent_name+'罹患大腸息肉'"
            v-if="valid==1"
            :rules="rules"
            solo
          ></v-select>
          <input type="hidden" :name="'level'+degree+'_adenoma['+parent_who+']'" :value="adenomas_num" >
        </v-list-item-content>
      </v-list-item>

    <!-- </div> -->

    <div v-for="i in adenomas_num" :key="i">
      
      <AdenomasDetail
        :i="i"
        :degree="degree"
        :parent="parent"
        :parent_name="parent_name"
        :parent_who="parent_who"
        :type="adenomas_num"
        :valid="valid"
      ></AdenomasDetail>
    </div>
  </div>
</template>
<script>

import AdenomasDetail from "@/components/adenomas_detail.vue";

export default {
  components: {
    AdenomasDetail
  },
  props: {
    degree: String,
    parent: String,
    parent_name: String,
    parent_who: String,
    valid:String,
    
  },
   computed: {
    rule() {
      return [
        
          this.parent_num != null ||
          "必填"
      ];
    },
    rules() {
      return [
        
          this.adenomas_num != null ||
          "必填"
      ];
    },
  },

  data() {
    return {
      parent_range: [],
      adenomas_range: [],
      model:0,
      parent_num: null,
      adenomas_num: null
    };
  },
  methods: {
    parent_range_function() {
      var itms = [];
      var i;
      for (i = 0; i < 11; i++) {
        itms.push({ item_id: i, item_value: i });
      }
      this.parent_range = itms;
    },
    adenomas_range_function: function() {
      var itms = [];
      var i;
      //var A=this.parent_num;
      for (i = 0; i <= this.parent_num; i++) {
        //alert(this.parent_num);
        itms.push({ itemcancer_id: i, itemcancer_value: i });
      }
      this.adenomas_range = itms;
    },
  },

  mounted() {
    this.parent_range_function();
    this.adenomas_range_function();
  }
};
</script>




