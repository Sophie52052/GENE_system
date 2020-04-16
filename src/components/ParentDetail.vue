<template>
  <div>
    <v-divider></v-divider>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>第{{i}}位{{parent_name}}資訊 ：</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>{{parent_name}}存歿：</v-list-item-title>
        <v-radio-group v-if="type>=i" :rules="[v => !!v || '必填']">
          <v-radio :name="'level'+degree+'_detail['+parent+']['+i+'][alive]'" label="歿" color="primary" value="0"></v-radio>
          <v-radio :name="'level'+degree+'_detail['+parent+']['+i+'][alive]'" label="存" color="primary" value="1"></v-radio>
        </v-radio-group>

        <v-list-item-title>{{parent_name}}曾經罹患的癌症：</v-list-item-title>
        <input type="hidden" :name="'level'+degree+'_detail['+parent+']['+i+'][who]'" :value="parent_who" />
        <input type="hidden" :name="'level'+degree+'_detail['+parent+']['+i+'][degree]'" :value="degree" />
       

        <v-checkbox
          v-model="select[0]"
          :name="'level'+degree+'_detail['+parent+']['+i+'][type][]'"
          label="乳癌"
          value="breast_cancer"
           v-if="type>=i"
           :rules="rules"
              hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="select[1]"
          :name="'level'+degree+'_detail['+parent+']['+i+'][type][]'"
          label="卵巢癌"
          value="ovarian_cancer"
          v-if="type>=i"
           :rules="rules"
              hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="select[2]"
          :name="'level'+degree+'_detail['+parent+']['+i+'][type][]'"
          label="子宮內膜癌"
          value="endometrial_cancer"
          v-if="type>=i"
           :rules="rules"
              hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="select[3]"
          :name="'level'+degree+'_detail['+parent+']['+i+'][type][]'"
          label="胃癌"
          value="stomach_cancer"
          v-if="type>=i"
           :rules="rules"
              hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="select[4]"
          :name="'level'+degree+'_detail['+parent+']['+i+'][type][]'"
          label="胰臟癌"
          value="pancreatic_cancer"
          v-if="type>=i"
           :rules="rules"
              hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="select[5]"
          :name="'level'+degree+'_detail['+parent+']['+i+'][type][]'"
          label="膽管癌"
          value="cholangiocarcinoma"
          v-if="type>=i"
           :rules="rules"
              hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="select[6]"
          :name="'level'+degree+'_detail['+parent+']['+i+'][type][]'"
          label="大腸癌"
          value="colorectal_cancer"
          v-if="type>=i"
           :rules="rules"
              hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="select[7]"
          :name="'level'+degree+'_detail['+parent+']['+i+'][type][]'"
          label="小腸癌"
          value="small_intestine_cancer"
          v-if="type>=i"
           :rules="rules"
              hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="select[8]"
          :name="'level'+degree+'_detail['+parent+']['+i+'][type][]'"
          label="腎臟癌"
          value="kidney_cancer"
          v-if="type>=i"
           :rules="rules"
              hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="select[9]"
          :name="'level'+degree+'_detail['+parent+']['+i+'][type][]'"
          label="膀胱癌"
          value="bladder_cancer"
          v-if="type>=i"
           :rules="rules"
              hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="select[10]"
          :name="'level'+degree+'_detail['+parent+']['+i+'][type][]'"
          label="泌尿道癌"
          value="urinary_tract_cancer"
          v-if="type>=i"
           :rules="rules"
              hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="select[11]"
          :name="'level'+degree+'_detail['+parent+']['+i+'][type][]'"
          label="攝護腺癌"
          value="prostate_cancer"
          v-if="type>=i"
           :rules="rules"
              hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="select[12]"
          :name="'level'+degree+'_detail['+parent+']['+i+'][type][]'"
          label="皮膚癌"
          value="skin_cancer"
          v-if="type>=i"
           :rules="rules"
              hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="select[13]"
          :name="'level'+degree+'_detail['+parent+']['+i+'][type][]'"
          label="甲狀腺癌"
          value="thyroid_cancer"
          v-if="type>=i"
           :rules="rules"
              hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="select[14]"
          :name="'level'+degree+'_detail['+parent+']['+i+'][type][]'"
          label="腎上腺癌"
          value="adrenal_cancer"
          v-if="type>=i"
           :rules="rules"
              hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="select[15]"
          :name="'level'+degree+'_detail['+parent+']['+i+'][type][]'"
          label="淋巴癌"
          value="lymphoma"
          v-if="type>=i"
           :rules="rules"
              hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="select[16]"
          :name="'level'+degree+'_detail['+parent+']['+i+'][type][]'"
          label="腦癌"
          value="brain_cancer"
          v-if="type>=i"
           :rules="rules"
              hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="select[17]"
          :name="'level'+degree+'_detail['+parent+']['+i+'][type][]'"
          label="血癌"
          value="blood_cancer"
          v-if="type>=i"
           :rules="rules"
              hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="select[18]"
          :name="'level'+degree+'_detail['+parent+']['+i+'][type][]'"
          label="肉瘤"
          value="sarcoma"
          v-if="type>=i"
           :rules="rules"
              hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="select[19]"
          :name="'level'+degree+'_detail['+parent+']['+i+'][type][]'"
          label="皮膚症狀 (codwen)"
          value="codwen"
          v-if="type>=i"
           :rules="rules"
              hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="select[20]"
          :name="'level'+degree+'_detail['+parent+']['+i+'][type][]'"
          label="其他"
          value="other_cancer"
          v-if="type>=i"
           :rules="rules"
              hide-details
        ></v-checkbox>
      </v-list-item-content>
    </v-list-item>

    <div v-show="select[0]">
      
      <Textbox
        textbox_title="乳癌資訊 ："
        :textbox_name="'level'+degree+'_detail['+parent+']['+i+'][age][]'"
        textbox_label="請輸入罹患乳癌年齡(大約)"
        :type="select[0]"
      ></Textbox>
    </div>

    <div v-show="select[1]">
      <Textbox
        textbox_title="卵巢癌資訊 ："
        :textbox_name="'level'+degree+'_detail['+parent+']['+i+'][age][]'"
        textbox_label="請輸入罹患卵巢癌年齡(大約)"
        :type="select[1]"
      ></Textbox>
    </div>

    <div v-show="select[2]">
      <Textbox
        textbox_title="子宮內膜癌資訊 ："
        :textbox_name="'level'+degree+'_detail['+parent+']['+i+'][age][]'"
        textbox_label="請輸入罹患子宮內膜癌年齡(大約)"
        :type="select[2]"
      ></Textbox>
    </div>

    <div v-show="select[3]">
      <Textbox
        textbox_title="胃癌資訊 ："
        :textbox_name="'level'+degree+'_detail['+parent+']['+i+'][age][]'"
        textbox_label="請輸入罹患胃癌年齡(大約)"
        :type="select[3]"
      ></Textbox>
    </div>
    <div v-show="select[4]">
      <Textbox
        textbox_title="胰臟癌資訊 ："
        :textbox_name="'level'+degree+'_detail['+parent+']['+i+'][age][]'"
        textbox_label="請輸入罹患胰臟癌年齡(大約)"
        :type="select[4]"
      ></Textbox>
    </div>
    <div v-show="select[5]">
      <Textbox
        textbox_title="膽管癌資訊 ："
        :textbox_name="'level'+degree+'_detail['+parent+']['+i+'][age][]'"
        textbox_label="請輸入罹患膽管癌年齡(大約)"
        :type="select[5]"
      ></Textbox>
    </div>
    <div v-show="select[6]">
      <Textbox
        textbox_title="大腸癌資訊 ："
        :textbox_name="'level'+degree+'_detail['+parent+']['+i+'][age][]'"
        textbox_label="請輸入罹大腸癌癌年齡(大約)"
        :type="select[6]"
      ></Textbox>
    </div>

    <div v-show="select[7]">
      <Textbox
        textbox_title="小腸癌資訊 ："
        :textbox_name="'level'+degree+'_detail['+parent+']['+i+'][age][]'"
        textbox_label="請輸入罹患小腸癌年齡(大約)"
        :type="select[7]"
      ></Textbox>
    </div>

    <div v-show="select[8]">
      <Textbox
        textbox_title="腎臟癌資訊 ："
        :textbox_name="'level'+degree+'_detail['+parent+']['+i+'][age][]'"
        textbox_label="請輸入罹患腎臟癌年齡(大約)"
        :type="select[8]"
      ></Textbox>
    </div>
    <div v-show="select[9]">
      <Textbox
        textbox_title="膀胱癌資訊 ："
        :textbox_name="'level'+degree+'_detail['+parent+']['+i+'][age][]'"
        textbox_label="請輸入罹患膀胱癌年齡(大約)"
        :type="select[9]"
      ></Textbox>
    </div>
    <div v-show="select[10]">
      <Textbox
        textbox_title="泌尿道癌資訊 ："
        :textbox_name="'level'+degree+'_detail['+parent+']['+i+'][age][]'"
        textbox_label="請輸入罹患泌尿道癌年齡(大約)"
        :type="select[10]"
      ></Textbox>
    </div>
    <div v-show="select[11]">
      <Textbox
        textbox_title="攝護腺癌資訊 ："
        :textbox_name="'level'+degree+'_detail['+parent+']['+i+'][age][]'"
        textbox_label="請輸入罹患攝護腺癌年齡(大約)"
        :type="select[11]"
      ></Textbox>
    </div>
    <div v-show="select[12]">
      <Textbox
        textbox_title="皮膚癌資訊 ："
        :textbox_name="'level'+degree+'_detail['+parent+']['+i+'][age][]'"
        textbox_label="請輸入罹患皮膚癌年齡(大約)"
        :type="select[12]"
      ></Textbox>
    </div>
    <div v-show="select[13]">
      <Textbox
        textbox_title="甲狀腺癌資訊 ："
        :textbox_name="'level'+degree+'_detail['+parent+']['+i+'][age][]'"
        textbox_label="請輸入罹患甲狀腺癌年齡(大約)"
        :type="select[13]"
      ></Textbox>
    </div>
    <div v-show="select[14]">
      <Textbox
        textbox_title="腎上腺癌資訊 ："
        :textbox_name="'level'+degree+'_detail['+parent+']['+i+'][age][]'"
        textbox_label="請輸入罹患腎上腺癌年齡(大約)"
        :type="select[14]"
      ></Textbox>
    </div>
    <div v-show="select[15]">
      <Textbox
        textbox_title="淋巴癌資訊 ："
        :textbox_name="'level'+degree+'_detail['+parent+']['+i+'][age][]'"
        textbox_label="請輸入罹患淋巴癌年齡(大約)"
        :type="select[15]"
      ></Textbox>
    </div>
    <div v-show="select[16]">
      <Textbox
        textbox_title="腦癌資訊 ："
        :textbox_name="'level'+degree+'_detail['+parent+']['+i+'][age][]'"
        textbox_label="請輸入罹患腦癌年齡(大約)"
        :type="select[16]"
      ></Textbox>
    </div>

    <div v-show="select[17]">
      <Textbox
        textbox_title="血癌資訊 ："
        :textbox_name="'level'+degree+'_detail['+parent+']['+i+'][age][]'"
        textbox_label="請輸入罹患淋巴癌年齡(大約)"
        :type="select[17]"
      ></Textbox>
    </div>
    <div v-show="select[18]">
      <Textbox
        textbox_title="肉瘤資訊 ："
        :textbox_name="'level'+degree+'_detail['+parent+']['+i+'][age][]'"
        textbox_label="請輸入罹患肉瘤年齡(大約)"
        :type="select[18]"
      ></Textbox>
    </div>
    <div v-show="select[19]">
      <Textbox
        textbox_title="皮膚症狀資訊 ："
        :textbox_name="'level'+degree+'_detail['+parent+']['+i+'][age][]'"
        textbox_label="請輸入罹患皮膚症狀年齡(大約)"
        :type="select[19]"
      ></Textbox>
    </div>
    <div v-show="select[20]">
      <v-list-item>
        <v-list-item-content>
          <Textbox
        textbox_title="其他資訊 ："
        :textbox_name="'level'+degree+'_detail['+parent+']['+i+'][other][detail]'"
        textbox_label="請輸入罹患癌症"
        :type="select[20]"
      ></Textbox>
<!-- 
          <v-text-field :name="'level'+degree+'_detail['+parent+']['+i+'][other][detail]'" solo label="請輸入罹患癌症" clearable></v-text-field> -->
           <v-list-item>
        <v-list-item-content>
          <v-text-field :name="'level'+degree+'_detail['+parent+']['+i+'][age][]'" solo label="請輸入罹患年齡(大約)" clearable></v-text-field>
          </v-list-item-content>
      </v-list-item>
        </v-list-item-content>
      </v-list-item>
    </div>
  </div>
</template>
<script>
import Textbox from "@/components/Textbox.vue";

export default {
  components: {
    Textbox
  },
  data() {
    return {
      cancer: null,
       select: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ],
      parent_range: [],
      cancer_range: [],
      parent_num: 0,
      cancer_num: 0,
      
    };
  },
  computed: {
    rules() {
      return [
        this.select[0] == 'breast_cancer' ||
          this.select[1] == 'ovarian_cancer' ||
          this.select[2] == 'endometrial_cancer' ||
          this.select[3] == 'stomach_cancer' ||
          this.select[4] == 'pancreatic_cancer' ||
          this.select[5] == 'cholangiocarcinoma' ||
          this.select[6] == 'colorectal_cancer' ||
          this.select[7] == 'small_intestine_cancer' ||
          this.select[8] == 'kidney_cancer' ||
          this.select[9] == 'bladder_cancer' ||
          this.select[10] == 'urinary_tract_cancer' ||
          this.select[11] == 'prostate_cancer' ||
          this.select[12] == 'skin_cancer' ||
          this.select[13] == 'thyroid_cancer' ||
          this.select[14] == 'adrenal_cancer' ||
          this.select[15] == 'lymphoma' ||
          this.select[16] == 'brain_cancer' ||
          this.select[17] == 'blood_cancer' ||
          this.select[18] == 'sarcoma' ||
          this.select[19] == 'codwen' ||
          this.select[20] == 'other_cancer' ||
          "At least one item should be selected"
      ];
    }
  },
  props: {
    i: String,
    degree: String,
    parent: String,
    parent_name: String,
    parent_who: String,
    type:String,
  }
};
</script>