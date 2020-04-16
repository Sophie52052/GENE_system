 <template>
  <div>
    <!-- <v-list-item-subtitle>父母、兄弟、姊妹、兒女</v-list-item-subtitle> -->
    <!-- <v-list-item>
      <v-list-item-content>
        <v-list-item-title>{{parent_name}}有無大腸息肉：</v-list-item-title>
       

        <v-radio-group v-model="adenoma_get" row>
          <v-radio
            :name="'level'+degree+'_adenoma['+parent+']'"
            label="無"
            color="primary"
            value="0"
          ></v-radio>
          <v-radio
            :name="'level'+degree+'_adenoma['+parent+']'"
            label="有"
            color="primary"
            value="1"
          ></v-radio>
        </v-radio-group>
      </v-list-item-content>
    </v-list-item> 
    <v-divider></v-divider>-->
    <!-- v-show="adenoma_get==1" -->
    <div>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>{{parent_name}}大腸息肉資訊：</v-list-item-title>
          <v-list-item>
            <v-list-item-content>
              <v-text-field
                solo
                :name="'level'+degree+'_adenoma['+parent+'_adenoma][adenoma_age]'"
                label="請輸入罹患大腸息肉年齡(大約)"
                v-if="valid==1"
                :rules="[v => !!v || '必填']"
              ></v-text-field>
              <v-list-item-title>個數：</v-list-item-title>
              <v-radio-group v-if="valid==1" :rules="[v => !!v || '必填']" row>
                <v-radio
                  :name="'level'+degree+'_adenoma['+parent+'_adenoma][adenoma_num]'"
                  label="1-2"
                  color="primary"
                  value="1"
                ></v-radio>
                <v-radio
                  :name="'level'+degree+'_adenoma['+parent+'_adenoma][adenoma_num]'"
                  label="3-10"
                  color="primary"
                  value="3"
                ></v-radio>
                <v-radio
                  :name="'level'+degree+'_adenoma['+parent+'_adenoma][adenoma_num]'"
                  label="10-99"
                  color="primary"
                  value="10"
                ></v-radio>
                <v-radio
                  :name="'level'+degree+'_adenoma['+parent+'_adenoma][adenoma_num]'"
                  label=">100"
                  color="primary"
                  value="100"
                ></v-radio>
                <v-radio
                  :name="'level'+degree+'_adenoma['+parent+'_adenoma][adenoma_num]'"
                  label="不清楚"
                  color="primary"
                  value="0"
                ></v-radio>
              </v-radio-group>

              <v-list-item-title>最大公分數：</v-list-item-title>
              <v-radio-group v-if="valid==1" :rules="[v => !!v || '必填']" row>
                <v-radio
                  :name="'level'+degree+'_adenoma['+parent+'_adenoma][adenoma_cm]'"
                  label="<1 cm"
                  color="primary"
                  value="1"
                ></v-radio>
                <v-radio
                  :name="'level'+degree+'_adenoma['+parent+'_adenoma][adenoma_cm]'"
                  label=">1 cm"
                  color="primary"
                  value="2"
                ></v-radio>
                <v-radio
                  :name="'level'+degree+'_adenoma['+parent+'_adenoma][adenoma_cm]'"
                  label="不清楚"
                  color="primary"
                  value="0"
                ></v-radio>
              </v-radio-group>

              <v-list-item-title>是否有分化異常：</v-list-item-title>
              <v-radio-group v-model="dysplasia" v-if="valid==1" :rules="[v => !!v || '必填']" row>
                <v-radio
                  :name="'level'+degree+'_adenoma['+parent+'_adenoma][dysplasia]'"
                  label="否"
                  color="primary"
                  value="0"
                ></v-radio>
                <v-radio
                  :name="'level'+degree+'_adenoma['+parent+'_adenoma][dysplasia]'"
                  label="是"
                  color="primary"
                  value="1"
                ></v-radio>
                <v-radio
                  :name="'level'+degree+'_adenoma['+parent+'_adenoma][dysplasia]'"
                  label="不清楚"
                  color="primary"
                  value="3"
                ></v-radio>
              </v-radio-group>
              <v-list-item-title v-if="dysplasia==1">分化：</v-list-item-title>
              <v-radio-group v-if="dysplasia==1" :rules="[v => !!v || '必填']" row>
                <v-radio
                  :name="'level'+degree+'_adenoma['+parent+'_adenoma][dysplasia_level]'"
                  label="Low grade dyplasia"
                  color="primary"
                  value="0"
                ></v-radio>
                <v-radio
                  :name="'level'+degree+'_adenoma['+parent+'_adenoma][dysplasia_level]'"
                  label="Villous or High grade dyplasia"
                  color="primary"
                  value="1"
                ></v-radio>
                <v-radio
                  :name="'level'+degree+'_adenoma['+parent+'_adenoma][dysplasia_level]'"
                  label="不清楚"
                  color="primary"
                  value="3"
                ></v-radio>
              </v-radio-group>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-content>
      </v-list-item>
    </div>

    <v-divider></v-divider>
  </div>
</template>
<script>
export default {
  data() {
    return {
      adenoma_get: null,
      dysplasia: null
    };
  },
  props: {
    parent_name: String,

    parent: String,
    degree: String,
    valid: String
  }
};
</script>