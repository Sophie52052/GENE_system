<template>
  <div>
    <v-divider></v-divider>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>第{{i}}位{{parent_name}}資訊 ：</v-list-item-title>
     
        <!-- <v-list-item-title>{{parent_name}}存歿：</v-list-item-title>
        <v-radio-group v-if="type>=i" :rules="[v => !!v || '必填']">
          <v-radio :name="'level'+degree+'_adenoma['+parent+']['+i+'][alive]'" label="歿" color="primary" value="0"></v-radio>
          <v-radio :name="'level'+degree+'_adenoma['+parent+']['+i+'][alive]'" label="存" color="primary" value="1"></v-radio>
        </v-radio-group> -->

        <!-- <v-list-item-title>{{parent_name}}曾經罹患的大腸息肉：</v-list-item-title> -->
        <input type="hidden" :name="'level'+degree+'_adenoma['+parent+']['+i+'][who]'" :value="parent_who" >
        <input type="hidden" :name="'level'+degree+'_adenoma['+parent+']['+i+'][degree]'" :value="degree" >

       
<!--       
      <v-list-item>
        <v-list-item-content> -->
          <!-- <v-list-item-title>{{parent_name}}大腸息肉資訊：</v-list-item-title> -->
          <v-list-item>
            <v-list-item-content>
              <v-text-field
                solo
                :name="'level'+degree+'_adenoma['+parent+']['+i+'][adenoma_age]'"
                label="請輸入罹患大腸息肉年齡(大約)"
                v-if="valid==1"
                :rules="[v => !!v || '必填']"
              ></v-text-field>
              <v-list-item-title>個數：</v-list-item-title>
              <v-radio-group v-if="valid==1" :rules="[v => !!v || '必填']" row>
                <v-radio
                  :name="'level'+degree+'_adenoma['+parent+']['+i+'][adenoma_num]'"
                  label="1-2"
                  color="primary"
                  value="1"
                ></v-radio>
                <v-radio
                  :name="'level'+degree+'_adenoma['+parent+']['+i+'][adenoma_num]'"
                  label="3-10"
                  color="primary"
                  value="3"
                ></v-radio>
                <v-radio
                  :name="'level'+degree+'_adenoma['+parent+']['+i+'][adenoma_num]'"
                  label="10-99"
                  color="primary"
                  value="10"
                ></v-radio>
                <v-radio
                  :name="'level'+degree+'_adenoma['+parent+']['+i+'][adenoma_num]'"
                  label=">100"
                  color="primary"
                  value="100"
                ></v-radio>
                <v-radio
                  :name="'level'+degree+'_adenoma['+parent+']['+i+'][adenoma_num]'"
                  label="不清楚"
                  color="primary"
                  value="0"
                ></v-radio>
              </v-radio-group>

              <v-list-item-title>最大公分數：</v-list-item-title>
              <v-radio-group v-if="valid==1" :rules="[v => !!v || '必填']" row>
                <v-radio
                  :name="'level'+degree+'_adenoma['+parent+']['+i+'][adenoma_cm]'"
                  label="<1 cm"
                  color="primary"
                  value="1"
                ></v-radio>
                <v-radio
                  :name="'level'+degree+'_adenoma['+parent+']['+i+'][adenoma_cm]'"
                  label=">1 cm"
                  color="primary"
                  value="2"
                ></v-radio>
                <v-radio
                  :name="'level'+degree+'_adenoma['+parent+']['+i+'][adenoma_cm]'"
                  label="不清楚"
                  color="primary"
                  value="0"
                ></v-radio>
              </v-radio-group>

              <v-list-item-title>是否有分化異常：</v-list-item-title>
              <v-radio-group v-model="dysplasia" v-if="valid==1" :rules="[v => !!v || '必填']" row>
                <v-radio
                  :name="'level'+degree+'_adenoma['+parent+']['+i+'][dysplasia]'"
                  label="否"
                  color="primary"
                  value="0"
                ></v-radio>
                <v-radio
                  :name="'level'+degree+'_adenoma['+parent+']['+i+'][dysplasia]'"
                  label="是"
                  color="primary"
                  value="1"
                ></v-radio>
                <v-radio
                  :name="'level'+degree+'_adenoma['+parent+']['+i+'][dysplasia]'"
                  label="不清楚"
                  color="primary"
                  value="3"
                ></v-radio>
              </v-radio-group>
              <v-list-item-title v-if="dysplasia==1">分化：</v-list-item-title>
              <v-radio-group v-if="dysplasia==1" :rules="[v => !!v || '必填']" row>
                <v-radio
                  :name="'level'+degree+'_adenoma['+parent+']['+i+'][dysplasia_level]'"
                  label="Low grade dyplasia"
                  color="primary"
                  value="0"
                ></v-radio>
                <v-radio
                  :name="'level'+degree+'_adenoma['+parent+']['+i+'][dysplasia_level]'"
                  label="Villous or High grade dyplasia"
                  color="primary"
                  value="1"
                ></v-radio>
                <v-radio
                  :name="'level'+degree+'_adenoma['+parent+']['+i+'][dysplasia_level]'"
                  label="不清楚"
                  color="primary"
                  value="3"
                ></v-radio>
              </v-radio-group>
            </v-list-item-content>
          </v-list-item>
        <!-- </v-list-item-content>
      </v-list-item> -->
    

       

      </v-list-item-content>
    </v-list-item>

  
    
  </div>
</template>
<script>


export default {
  components: {
    
  },
  data() {
    return {
      adenoma_get: null,
      dysplasia: null,
     
      
      
      
    };
  },
  computed: {
   
    
  },
  props: {
    i: String,
    degree: String,
    parent: String,
    parent_name: String,
    parent_who: String,
    type:String,
    valid: String,
  }
};
</script>