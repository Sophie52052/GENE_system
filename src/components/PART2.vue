<template>
  <div>
    <v-list subheader three-line>
      <!-- <v-subheader>User Controls</v-subheader> -->
      <input type="hidden" name="line_id" v-model="pass_line_id" />
      <!-- ID: <input type="text" name="line_id"> -->

      <Cancer></Cancer>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>是否做過乳房切片 ：</v-list-item-title>
          <v-radio-group row v-model="section" :rules="[v => !!v || '必填']">
            <v-radio name="other_check[section][get]" label="否" color="primary" value="0"></v-radio>
            <v-radio name="other_check[section][get]" label="是" color="primary" value="1"></v-radio>
          </v-radio-group>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <div v-show="section==1">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>其他相關乳房切片資訊 ：</v-list-item-title>
            <v-list-item>
              <v-list-item-content>
                <v-text-field
                  name="other_check[section][age]"
                  v-if="section==1"
                  :rules="[v => !!v || '必填']"
                  solo
                  label="請輸入乳房切片年齡(大約)"
                  clearable
                ></v-text-field>
                <v-divider></v-divider>
                <v-list-item-title>乳房組織資訊 ：</v-list-item-title>
                <v-radio-group row v-if="section==1" :rules="[v => !!v || '必填']">
                  <v-radio
                    name="other_check[section][type]"
                    label="非典型增生Atypical hyperplasia"
                    color="primary"
                    value="atypical"
                  ></v-radio>
                  <v-radio
                    name="other_check[section][type]"
                    label="增生Hyperplasia"
                    color="primary"
                    value="normal"
                  ></v-radio>
                  <v-radio
                    name="other_check[section][type]"
                    label="不清楚"
                    color="primary"
                    value="unknow"
                  ></v-radio>
                </v-radio-group>
                <v-divider></v-divider>
                <v-list-item-title>切片次數 ：</v-list-item-title>
                <v-select
                  v-model="section_model"
                  item-text="breast_id"
                  item-value="breast_value"
                  :items="breast_times"
                  label="請選擇切片次數(大約)"
                  v-if="section==1"
                  :rules="[v => !!v || '必填']"
                  solo
                ></v-select>
                <input type="hidden" name="other_check[section][times]" :value="section_model" />
                <div>
                  <v-textarea solo name="other_check[section][reason]" label="乳房切片原因"></v-textarea>
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
      </div>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>是否做過乳房攝影 ：</v-list-item-title>
          <v-radio-group row v-model="mammography" :rules="[v => !!v || '必填']">
            <v-radio name="other_check[mammography][get]" label="否" color="primary" value="0"></v-radio>
            <v-radio name="other_check[mammography][get]" label="是" color="primary" value="1"></v-radio>
          </v-radio-group>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <div v-show="mammography==1">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>乳房攝影資訊 ：</v-list-item-title>
            <v-list-item>
              <v-list-item-content>
                <v-select
                  v-model="mammography_model"
                  item-text="breast_id"
                  item-value="breast_value"
                  :items="breast_times"
                  label="請選擇乳房攝影次數(大約)"
                  v-if="mammography==1"
                  :rules="[v => !!v || '必填']"
                  solo
                ></v-select>
                <input
                  type="hidden"
                  name="other_check[mammography][times]"
                  :value="mammography_model"
                />
                <v-list-item-title>乳房攝影年齡 ：</v-list-item-title>
                <v-text-field
                  name="other_check[mammography][age]"
                  v-if="mammography==1"
                  :rules="[v => !!v || '必填']"
                  solo
                  label="請輸入乳房攝影年齡(大約)"
                  clearable
                ></v-text-field>

                <v-list-item-title>乳房攝影密度為多少 ：</v-list-item-title>
                <v-radio-group row v-if="mammography==1" :rules="[v => !!v || '必填']">
                  <v-radio
                    name="other_check[mammography][density]"
                    label="0"
                    color="primary"
                    value="0"
                  ></v-radio>
                  <v-radio
                    name="other_check[mammography][density]"
                    label="1-24"
                    color="primary"
                    value="1"
                  ></v-radio>
                  <v-radio
                    name="other_check[mammography][density]"
                    label="25-49"
                    color="primary"
                    value="25"
                  ></v-radio>
                  <v-radio
                    name="other_check[mammography][density]"
                    label="50-74"
                    color="primary"
                    value="50"
                  ></v-radio>
                  <v-radio
                    name="other_check[mammography][density]"
                    label=">=75"
                    color="primary"
                    value="75"
                  ></v-radio>
                  <v-radio
                    name="other_check[mammography][density]"
                    label="不確定"
                    color="primary"
                    value="unknow"
                  ></v-radio>
                </v-radio-group>
                <div>
                  <v-textarea solo name="other_check[mammography][reason]" label="乳房攝影原因"></v-textarea>
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </div>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>是否做過胸部放射治療 ：</v-list-item-title>
          <v-radio-group row v-model="electrotherapy" :rules="[v => !!v || '必填']">
            <v-radio name="other_check[electrotherapy][get]" label="否" color="primary" value="0"></v-radio>
            <v-radio name="other_check[electrotherapy][get]" label="是" color="primary" value="1"></v-radio>
          </v-radio-group>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <div v-show="electrotherapy==1">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>胸部放射治療資訊 ：</v-list-item-title>
            <v-list-item>
              <v-list-item-content>
                <v-text-field
                  name="other_check[electrotherapy][age]"
                  v-if="electrotherapy==1"
                  :rules="[v => !!v || '必填']"
                  solo
                  label="請輸入胸部放射治療年齡(大約)"
                  clearable
                ></v-text-field>
                <v-list-item-title>放射治療次數 ：</v-list-item-title>
                <v-select
                  v-model="electrotherapy_model"
                  item-text="electrotherapy_id"
                  item-value="electrotherapy_value"
                  :items="electrotherapy_times"
                  label="請選擇胸部放射治療次數(大約)"
                  v-if="electrotherapy==1"
                  :rules="[v => !!v || '必填']"
                  solo
                ></v-select>
                <input
                  type="hidden"
                  name="other_check[electrotherapy][times]"
                  :value="electrotherapy_model"
                />
                <div>
                  <v-textarea solo name="other_check[electrotherapy][reason]" label="胸部放射治療原因"></v-textarea>
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </div>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>是否有血栓病史 ：</v-list-item-title>
          <v-radio-group row v-model="thrombosis" :rules="[v => !!v || '必填']">
            <v-radio name="other_check[thrombosis][get]" label="否" color="primary" value="0"></v-radio>
            <v-radio name="other_check[thrombosis][get]" label="是" color="primary" value="1"></v-radio>
          </v-radio-group>
          <div v-show="thrombosis==1">
            <v-text-field
              name="other_check[thrombosis][age]"
              v-if="thrombosis==1"
              :rules="[v => !!v || '必填']"
              solo
              label="請輸入罹患血栓年齡(大約)"
              clearable
            ></v-text-field>
          </div>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>有無大腸息肉：</v-list-item-title>

          <v-radio-group v-model="adenoma_get" :rules="[v => !!v || '必填']" row>
            <v-radio name="adenoma[get]" label="無" color="primary" value="0"></v-radio>
            <v-radio name="adenoma[get]" label="有" color="primary" value="1"></v-radio>
          </v-radio-group>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <div v-if="adenoma_get==1" v-show="adenoma_get==1">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>大腸息肉資訊：</v-list-item-title>
            <v-list-item>
              <v-list-item-content>
                <v-text-field 
                  :rules="[v => !!v || '必填']" solo name="adenoma[age]" label="請輸入罹患大腸息肉年齡(大約)"></v-text-field>
                <v-divider></v-divider>
                <v-list-item-title>個數：</v-list-item-title>
                <v-radio-group :rules="[v => !!v || '必填']" row>
                  <v-radio name="adenoma[num]" label="1-2" color="primary" value="1"></v-radio>
                  <v-radio name="adenoma[num]" label="3-10" color="primary" value="3"></v-radio>
                  <v-radio name="adenoma[num]" label="10-99" color="primary" value="10"></v-radio>
                  <v-radio name="adenoma[num]" label=">100" color="primary" value="100"></v-radio>
                </v-radio-group>
                <v-divider></v-divider>

                <v-list-item-title>最大公分數：</v-list-item-title>
                <v-radio-group row :rules="[v => !!v || '必填']">
                  <v-radio name="adenoma[cm]" label="<1 cm" color="primary" value="0"></v-radio>
                  <v-radio name="adenoma[cm]" label=">1 cm" color="primary" value="1"></v-radio>
                </v-radio-group>
                <v-divider></v-divider>
                <v-list-item-title>是否有分化異常：</v-list-item-title>
                <v-radio-group v-model="dysplasia" row :rules="[v => !!v || '必填']">
                  <v-radio name="adenoma[dysplasia]" label="否" color="primary" value="0"></v-radio>
                  <v-radio name="adenoma[dysplasia]" label="是" color="primary" value="1"></v-radio>
                </v-radio-group>
               
                
                <div v-show="dysplasia==1">
                   <v-divider></v-divider>
                  <v-list-item-title>分化：</v-list-item-title>
                  <v-radio-group v-if="dysplasia==1" :rules="[v => !!v || '必填']" row>
                    <v-radio
                      name="adenoma[dysplasia_level]"
                      label="Low grade dyplasia"
                      color="primary"
                      value="0"
                    ></v-radio>
                    <v-radio
                      name="adenoma[dysplasia_level]"
                      label="Villous or High grade dyplasia"
                      color="primary"
                      value="1"
                    ></v-radio>
                  </v-radio-group>
                  
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
  </div>
</template>
<script>
import Cancer from "@/components/Cancer.vue";

export default {
  data() {
    return {
      section: null,
      mammography: null,
      electrotherapy: null,
      thrombosis: null,

      electrotherapy_times: [],
      electrotherapy_per: ["", "10", "15","20", "25", "30", "35"],

      breast_times: [],
      breast_per: ["", "1", "2", "3", "4", "5",">5"],

      section_model: 0,
      mammography_model: 0,
      electrotherapy_model: 0,

      adenoma_get: null,
      dysplasia: null
    };
  },
  props: ["pass_line_id"],
  components: {
    Cancer
  },
  methods: {
    electrotherapy_function() {//胸
      var itms = [];
      var i;
      for (i = 1; i < this.electrotherapy_per.length; i++) {
        itms.push({ electrotherapy_id: this.electrotherapy_per[i], electrotherapy_value: i });
      }
      this.electrotherapy_times = itms;
    },
    breast_function() { //乳
      var itms = [];
      var i;
      for (i = 1; i < this.breast_per.length; i++) {
        itms.push({ breast_id: this.breast_per[i],breast_value: i });
      }
      this.breast_times = itms;
    }
  },

  mounted() {
    this.electrotherapy_function();
    this.breast_function();
  }
};
</script>