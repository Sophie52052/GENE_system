<template>
  <div>
    <v-list subheader three-line>
      <!-- <v-subheader>User Controls</v-subheader> -->

      <!-- <input type="hidden" name="line_id" value="23" /> -->
      <!-- ID: <input type="text" name="line_id" :rules="[v => !!v || '必填']"> -->

      <Textbox textbox_title="姓名 ：" textbox_name="name" textbox_label="請輸入姓名"></Textbox>
      <Textbox textbox_title="醫師姓名 ：" textbox_name="doctor_name" textbox_label="請輸入醫師姓名"></Textbox>
      <Textbox textbox_title="病歷號碼 ：" textbox_name="no_mr" textbox_label="請輸入病歷號碼"></Textbox>
      <v-divider></v-divider>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>出生日期 ：</v-list-item-title>
          <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
            <template v-slot:activator="{ on }">
              <v-text-field
                name="birthday"
                v-model="date"
                readonly
                v-on="on"
                :rules="[v => !!v || '必填']"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              min="1910-01-01"
              :max=today
              scrollable
              locale="zh-cn"
            >
              <div class="flex-grow-1"></div>
              <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
            </v-date-picker>
          </v-dialog>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <Radiobutton3
        radiobutton3_title="性別 ："
        radiobutton3_name="gender"
        radiobutton3_labelA="男"
        radiobutton3_valueA="1"
        radiobutton3_labelB="女"
        radiobutton3_valueB="0"
        radiobutton3_labelC="其他"
        radiobutton3_valueC="9"
      ></Radiobutton3>

      <Textbox textbox_title="身高(公分) ：" textbox_name="height" textbox_label="請輸入身高"></Textbox>

      <Textbox textbox_title="體重(公斤) ：" textbox_name="weight" textbox_label="請輸入體重"></Textbox>
      <Textbox textbox_title="初經年齡 ：" note="男性請填0" textbox_name="mena_age" textbox_label="請輸入初經年齡(大約)"></Textbox>
      <v-divider></v-divider>
      <Radiobutton2textbox
        radiobutton2_title="是否停經 ："
        radiobutton2_name="menopause"
        radiobutton2textbox_name="meno_age"
        radiobutton2textbox_label="請輸入停經年齡(大約)"
        
      ></Radiobutton2textbox >

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>是否生產過 ：</v-list-item-title>
          <v-radio-group name="pregnancy" v-model="pregnancy" :rules="[v => !!v || '必填']" row>
            <v-radio name="pregnancy" label="否" color="primary" value="0"></v-radio>
            <v-radio name="pregnancy" label="是" color="primary" value="1"></v-radio>
          </v-radio-group>
          <div v-if="pregnancy==1" v-show="pregnancy==1">
            <v-text-field
              name="preg_age"
              solo
              label="請輸入第一次懷孕年齡(大約)"
              clearable
              
              :rules="[v => !!v || '必填']"
            ></v-text-field>
          
          
              <v-list-item-content>
                <v-select
                  v-model="test_bind_v"
                  item-text="item_id"
                  item-value="item_value"
                  :items="time"
                  solo
                  label="請問懷孕胎數"
                  
                  :rules="[v => !!v || '必填']"
                ></v-select>
                <input type="hidden" name="preg_times" :value="test_bind_v" />
              </v-list-item-content>
          </div>
         
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <Radiobutton2select
        rb2s_title="是否使用過避孕藥 ："
        rb2radio_name="bcp"
        rb2s_label="請問避孕藥使用幾年(大約)"
        rb2pass_name="bcp_year"
      ></Radiobutton2select>

      <Radiobutton2select
        rb2s_title="是否使用過賀爾蒙 ："
        rb2radio_name="hormone"
        rb2s_label="請問賀爾蒙使用幾年(大約)"
        rb2pass_name="hormone_year"
      ></Radiobutton2select>

      <Radiobutton2select
        rb2s_title="是否有抽菸 ："
        rb2radio_name="smoke"
        rb2s_label="請問抽菸幾年(大約)"
        rb2pass_name="smoke_year"
      ></Radiobutton2select>

      <Radiobutton2select
        rb2s_title="是否有喝酒 ："
        rb2radio_name="alcohol"
        rb2s_label="請問喝酒幾年(大約)"
        rb2pass_name="alcohol_year"
      ></Radiobutton2select>

      <Radiobutton2select
        rb2s_title="是否每周運動 ："
        rb2radio_name="exercise"
        rb2s_label="請問每周運動幾小時(大約)"
        rb2pass_name="exer_times"
      ></Radiobutton2select>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>人種 ：</v-list-item-title>
          <v-radio-group name="racial" :rules="[v => !!v || '必填']" row>
            <v-radio name="racial" label="華人" color="primary" value="11"></v-radio>
            <v-radio name="racial" label="白人" color="primary" value="1"></v-radio>
          </v-radio-group>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>
  </div>
</template>



<script>
import Textbox from "@/components/Textbox_rule.vue";
import Radiobutton3 from "@/components/radiobutton3.vue";
import Radiobutton2textbox from "@/components/radiobutton2textbox.vue";
import Radiobutton2select from "@/components/radiobutton2select.vue";

export default {
  data() {
    return {
      gender: null,
      menopause: null,
      pregnancy: null,

      date: null,
      today: new Date().toISOString().substr(0, 10),

      modal: false,
      mena_age: [],
      test_bind_v: 0,
      time: []
    };
  },
  components: {
    Textbox,
    Radiobutton3,
    Radiobutton2textbox,
    Radiobutton2select
  },

  props: {},
  methods: {
    mena_age_function() {
      var itms = [];
      var i;
      for (i = 1; i < 25; i++) {
        itms.push({ item_id: i, item_value: i });
      }
      this.mena_age = itms;
    },
    time_function() {
      var itms = [];
      var i;
      for (i = 1; i < 11; i++) {
        itms.push({ item_id: i, item_value: i });
      }
      this.time = itms;
    }
  },

  mounted() {
    this.mena_age_function();
    this.time_function();
  }
};
</script>