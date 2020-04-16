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
          @change="cancer_range_function()"
            v-model="parent_num"
            item-text="item_id"
            item-value="item_value"
            :items="parent_range"
            :label="'請選擇有幾個'+parent_name"
            v-if="valid==1"
            :rules="rule"
            solo
          ></v-select>
          <input type="hidden" :name="'level'+degree+'_detail['+parent_who+'_n]'" :value="parent_num" />
        </v-list-item-content>
      </v-list-item>

    
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>共有幾個{{parent_name}}罹癌：</v-list-item-title>
          <v-select
            v-model="cancer_num"
            item-text="itemcancer_id"
            item-value="itemcancer_value"
            :items="cancer_range"
            :label="'請選擇有幾個'+parent_name+'罹癌'"
            v-if="valid==1"
            :rules="rules"
            solo
          ></v-select>
          <input type="hidden" :name="'level'+degree+'_detail['+parent_who+']'" :value="cancer_num" />
        </v-list-item-content>
      </v-list-item>

    <!-- </div> -->

    <div v-for="i in cancer_num" :key="i">
      
      <ParentDetail
        :i="i"
        :degree="degree"
        :parent="parent"
        :parent_name="parent_name"
        :parent_who="parent_who"
        :type="cancer_num"
      ></ParentDetail>
    </div>
  </div>
</template>
<script>
import ParentDetail from "@/components/ParentDetail.vue";

export default {
  components: {
    ParentDetail
  },
  props: {
    degree: String,
    parent: String,
    parent_name: String,
    parent_who: String,
    valid:String,
  },

  data() {
    return {
      parent_range: [],
      cancer_range: [],
      model:0,
      parent_num: null,
      cancer_num: null
    };
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
        
          this.cancer_num != null ||
          "必填"
      ];
    }
  },
  methods: {
    parent_range_function() {
      var itms = [];
      var i;
      for (i = 1; i < 11; i++) {
        itms.push({ item_id: i, item_value: i });
      }
      this.parent_range = itms;
    },
    cancer_range_function() {
      //parent_num
      var itms = [];
      var i;
      for (i = 0; i <= this.parent_num; i++) {
        //alert(this.parent_num);
        itms.push({ itemcancer_id: i, itemcancer_value: i });
      }
      this.cancer_range = itms;
    }
  },

  mounted() {
    this.parent_range_function();
    this.cancer_range_function();
  }
};
</script>