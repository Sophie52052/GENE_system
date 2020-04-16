<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>是否罹患過癌症 ：</v-list-item-title>
        <v-radio-group row v-model="cancer" :rules="[v => !!v || '必填']">
          <v-radio name="cancer" label="否" color="primary" value="0"></v-radio>
          <v-radio name="cancer" label="是" color="primary" value="1"></v-radio>
        </v-radio-group>
      </v-list-item-content>
    </v-list-item>
    <div>
      <v-divider></v-divider>

      <div v-show="cancer==1">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>曾經罹患的癌症 ：</v-list-item-title>
            <v-checkbox
              v-model="select[0]"
              name="cancer_detail[breast_cancer][get]"
              label="乳癌"
              value="1"
              v-if="cancer==1"
              :rules="rules"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="select[1]"
              name="cancer_detail[ovarian_cancer][get]"
              label="卵巢癌"
              value="1"
              v-if="cancer==1"
              :rules="rules"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="select[2]"
              name="cancer_detail[endometrial_cancer][get]"
              label="子宮內膜癌"
              value="1"
              v-if="cancer==1"
              :rules="rules"
              hide-details
            ></v-checkbox>

            <v-checkbox
              v-model="select[3]"
              name="cancer_detail[stomach_cancer][get]"
              label="胃癌"
              value="1"
              v-if="cancer==1"
              :rules="rules"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="select[4]"
              name="cancer_detail[pancreatic_cancer][get]"
              label="胰臟癌"
              value="1"
              v-if="cancer==1"
              :rules="rules"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="select[5]"
              name="cancer_detail[cholangiocarcinoma][get]"
              label="膽管癌"
              value="1"
              v-if="cancer==1"
              :rules="rules"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="select[6]"
              name="cancer_detail[colorectal_cancer][get]"
              label="大腸癌"
              value="1"
              v-if="cancer==1"
              :rules="rules"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="select[7]"
              name="cancer_detail[small_intestine_cancer][get]"
              label="小腸癌"
              value="1"
              v-if="cancer==1"
              :rules="rules"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="select[8]"
              name="cancer_detail[kidney_cancer][get]"
              label="腎臟癌"
              value="1"
              v-if="cancer==1"
              :rules="rules"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="select[9]"
              name="cancer_detail[bladder_cancer][get]"
              label="膀胱癌"
              value="1"
              v-if="cancer==1"
              :rules="rules"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="select[10]"
              name="cancer_detail[urinary_tract_cancer][get]"
              label="泌尿道癌"
              value="1"
              v-if="cancer==1"
              :rules="rules"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="select[11]"
              name="cancer_detail[prostate_cancer][get]"
              label="攝護腺癌"
              value="1"
              v-if="cancer==1"
              :rules="rules"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="select[12]"
              name="cancer_detail[skin_cancer][get]"
              label="皮膚癌"
              value="1"
              v-if="cancer==1"
              :rules="rules"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="select[13]"
              name="cancer_detail[thyroid_cancer][get]"
              label="甲狀腺癌"
              value="1"
              v-if="cancer==1"
              :rules="rules"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="select[14]"
              name="cancer_detail[adrenal_cancer][get]"
              label="腎上腺癌"
              value="1"
              v-if="cancer==1"
              :rules="rules"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="select[15]"
              name="cancer_detail[lymphoma][get]"
              label="淋巴癌"
              value="1"
              v-if="cancer==1"
              :rules="rules"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="select[16]"
              name="cancer_detail[brain_cancer][get]"
              label="腦癌"
              value="1"
              v-if="cancer==1"
              :rules="rules"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="select[17]"
              name="cancer_detail[leukemia][get]"
              label="血癌"
              value="1"
              v-if="cancer==1"
              :rules="rules"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="select[18]"
              name="cancer_detail[sarcoma][get]"
              label="肉瘤"
              value="1"
              v-if="cancer==1"
              :rules="rules"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="select[19]"
              name="cancer_detail[codwen][get]"
              label="皮膚症狀 (codwen)"
              value="1"
              v-if="cancer==1"
              :rules="rules"
              hide-details
            ></v-checkbox>

            <v-checkbox
              v-model="select[20]"
              name="cancer_detail[other_cancer][get]"
              label="其他(或不清楚)"
              value="1"
              v-if="cancer==1"
              :rules="rules"
              hide-details
            ></v-checkbox>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
      </div>
    </div>
    <div v-show="select[20]  && cancer==1">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>其他癌症 ：</v-list-item-title>

          <v-text-field
            v-show="select[20]"
            name="cancer_detail[other_cancer][detail]"
            solo
            label="請輸入罹患癌症(或不清楚)"
            clearable
            v-if="select[20]"
            :rules="[v => !!v || '必填']"
          ></v-text-field>
          <div>
            <v-text-field
              v-show="select[20]"
              name="cancer_detail[other_cancer][age]"
              solo
              label="請輸入罹患年齡(大約)"
              clearable
              
            ></v-text-field>
          </div>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
    </div>

    <div v-show="select[0]==1 && cancer==1">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>乳癌資訊 ：</v-list-item-title>
           <v-list-item>
        <v-list-item-content>
          
          <div v-if="select[0]==1 && cancer==1">
            <v-text-field
              name="cancer_detail[breast_cancer][age]"
              v-if="select[0]==1 && cancer==1"
              :rules="[v => !!v || '必填']"
              solo
              label="請輸入罹患乳癌年齡(大約)"
              clearable
            ></v-text-field>
          
          </div>
          <v-divider></v-divider>

          <v-list-item-title>腫瘤位置有幾處 ：</v-list-item-title>

          <v-radio-group row v-if="cancer==1 && select[0]==1" :rules="[v => !!v || '必填']">
            <v-radio
              name="cancer_detail[breast_cancer][location]"
              label="一處"
              color="primary"
              value="0"
            ></v-radio>
            <v-radio
              name="cancer_detail[breast_cancer][location]"
              label="兩處(含)以上"
              color="primary"
              value="1"
            ></v-radio>
          </v-radio-group>
          <v-divider></v-divider>

          <v-list-item-title>腫瘤組織是否為三陰性乳癌 ：</v-list-item-title>
          <v-radio-group row v-if="cancer==1 && select[0]==1" :rules="[v => !!v || '必填']">
            <v-radio name="cancer_detail[breast_cancer][tnbc]" label="否" color="primary" value="0"></v-radio>
            <v-radio name="cancer_detail[breast_cancer][tnbc]" label="是" color="primary" value="1"></v-radio>
            <v-radio
              name="cancer_detail[breast_cancer][tnbc]"
              label="不確定"
              color="primary"
              value="2"
            ></v-radio>
          </v-radio-group>
          <v-divider></v-divider>
          <v-list-item-title>腫瘤組織ER是否為陽性 ：</v-list-item-title>
          <v-radio-group row v-if="cancer==1 && select[0]==1" :rules="[v => !!v || '必填']">
            <v-radio name="cancer_detail[breast_cancer][er]" label="否" color="primary" value="0"></v-radio>
            <v-radio name="cancer_detail[breast_cancer][er]" label="是" color="primary" value="1"></v-radio>
            <v-radio name="cancer_detail[breast_cancer][er]" label="不確定" color="primary" value="2"></v-radio>
          </v-radio-group>
          <v-divider></v-divider>
          <v-list-item-title>腫瘤組織PR是否為陽性 ：</v-list-item-title>
          <v-radio-group row v-if="cancer==1 && select[0]==1" :rules="[v => !!v || '必填']">
            <v-radio name="cancer_detail[breast_cancer][pr]" label="否" color="primary" value="0"></v-radio>
            <v-radio name="cancer_detail[breast_cancer][pr]" label="是" color="primary" value="1"></v-radio>
            <v-radio name="cancer_detail[breast_cancer][pr]" label="不確定" color="primary" value="2"></v-radio>
          </v-radio-group>
          <v-divider></v-divider>
          <v-list-item-title>腫瘤組織HER2是否為陽性 ：</v-list-item-title>
          <v-radio-group row v-if="cancer==1 && select[0]==1" :rules="[v => !!v || '必填']">
            <v-radio name="cancer_detail[breast_cancer][her2]" label="否" color="primary" value="0"></v-radio>
            <v-radio name="cancer_detail[breast_cancer][her2]" label="是" color="primary" value="1"></v-radio>
            <v-radio
              name="cancer_detail[breast_cancer][her2]"
              label="不確定"
              color="primary"
              value="2"
            ></v-radio>
          </v-radio-group>
          <v-divider></v-divider>
          <v-list-item-title>腫瘤組織CK14是否為陽性 ：</v-list-item-title>
          <v-radio-group row v-if="cancer==1 && select[0]==1" :rules="[v => !!v || '必填']">
            <v-radio name="cancer_detail[breast_cancer][ck14]" label="否" color="primary" value="0"></v-radio>
            <v-radio name="cancer_detail[breast_cancer][ck14]" label="是" color="primary" value="1"></v-radio>
            <v-radio
              name="cancer_detail[breast_cancer][ck14]"
              label="不確定"
              color="primary"
              value="2"
            ></v-radio>
          </v-radio-group>
          <v-divider></v-divider>
          <v-list-item-title>腫瘤組織CK56是否為陽性 ：</v-list-item-title>
          <v-radio-group row v-if="cancer==1 && select[0]==1" :rules="[v => !!v || '必填']">
            <v-radio name="cancer_detail[breast_cancer][ck56]" label="否" color="primary" value="0"></v-radio>
            <v-radio name="cancer_detail[breast_cancer][ck56]" label="是" color="primary" value="1"></v-radio>
            <v-radio
              name="cancer_detail[breast_cancer][ck56]"
              label="不確定"
              color="primary"
              value="2"
            ></v-radio>
          </v-radio-group>
          <v-divider></v-divider>
          <v-list-item-title>是否為乳管原位癌Ductal carcinoma in situ (DCIS) ：</v-list-item-title>
          <v-radio-group row v-if="cancer==1 && select[0]==1" :rules="[v => !!v || '必填']">
            <v-radio name="cancer_detail[breast_cancer][dcis]" label="否" color="primary" value="0"></v-radio>
            <v-radio name="cancer_detail[breast_cancer][dcis]" label="是" color="primary" value="1"></v-radio>
            <v-radio
              name="cancer_detail[breast_cancer][dcis]"
              label="不確定"
              color="primary"
              value="2"
            ></v-radio>
          </v-radio-group>
          <v-divider></v-divider>
          <v-list-item-title>是否為乳小葉原位癌Lobular carcinoma in situ (LCIS) ：</v-list-item-title>
          <v-radio-group row v-if="cancer==1 && select[0]==1" :rules="[v => !!v || '必填']">
            <v-radio name="cancer_detail[breast_cancer][lcis]" label="否" color="primary" value="0"></v-radio>
            <v-radio name="cancer_detail[breast_cancer][lcis]" label="是" color="primary" value="1"></v-radio>
            <v-radio
              name="cancer_detail[breast_cancer][lcis]"
              label="不確定"
              color="primary"
              value="2"
            ></v-radio>
          </v-radio-group>
          
          </v-list-item-content>
      </v-list-item>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
    </div>
    <div v-show="select[1] && cancer==1">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>卵巢癌資訊：</v-list-item-title>
           <v-list-item>
        <v-list-item-content>
          <div v-if="select[1]==1 && cancer==1">
          <v-text-field
            name="cancer_detail[ovarian_cancer][age]"
            v-if="select[1]==1 && cancer==1"
            :rules="[v => !!v || '必填']"
            solo
            label="請輸入罹患卵巢癌年齡(大約)"
            clearable
          ></v-text-field>
          </div>
          <v-divider></v-divider>
          

          

          <v-list-item-title>是否為non-mucinous epithelial ovarian cancer：</v-list-item-title>
          <v-radio-group row v-if="cancer==1 && select[1]==1" :rules="[v => !!v || '必填']">
            <v-radio
              name="cancer_detail[ovarian_cancer][non_mucinous]"
              label="否"
              color="primary"
              value="0"
            ></v-radio>
            <v-radio
              name="cancer_detail[ovarian_cancer][non_mucinous]"
              label="是"
              color="primary"
              value="1"
            ></v-radio>
            <v-radio
              name="cancer_detail[ovarian_cancer][non_mucinous]"
              label="不確定"
              color="primary"
              value="2"
            ></v-radio>
          </v-radio-group>
          </v-list-item-content>
      </v-list-item>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
    </div>

    <div v-show="select[2] && cancer==1">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>子宮內膜癌資訊：</v-list-item-title>
          <v-list-item>
        <v-list-item-content>
          <v-text-field
            v-show="select[2]"
            v-if="select[2]==1 && cancer==1"
            name="cancer_detail[endometrial_cancer][age]"
            solo
            label="請輸入罹患子宮內膜癌年齡(大約)"
            clearable
            
            :rules="[v => !!v || '必填']"
          ></v-text-field>
          
          
          <div>
            <v-textarea solo name="cancer_detail[endometrial_cancer][detail]" label="子宮內膜癌說明"></v-textarea>
          </div>
          </v-list-item-content>
      </v-list-item>
        </v-list-item-content>
      </v-list-item>
     <!-- <v-divider></v-divider> -->
    </div>

    <div v-if="select[3]==1 && cancer==1" v-show="select[3] && cancer==1">
      <Textbox
        textbox_title="胃癌資訊 ："
        textbox_name="cancer_detail[stomach_cancer][age]"
        textbox_label="請輸入罹患胃癌年齡(大約)"
      ></Textbox>
      <v-divider></v-divider>
    </div>
    <div v-if="select[4]==1 && cancer==1" v-show="select[4] && cancer==1">
      <Textbox
        textbox_title="胰臟癌資訊 ："
        textbox_name="cancer_detail[pancreatic_cancer][age]"
        textbox_label="請輸入罹患胰臟癌年齡(大約)"
      ></Textbox>
    </div>
    <div v-if="select[5]==1 && cancer==1" v-show="select[5] && cancer==1">
      <Textbox
        textbox_title="膽管癌資訊 ："
        textbox_name="cancer_detail[cholangiocarcinoma][age]"
        textbox_label="請輸入罹患膽管癌年齡(大約)"
        
      ></Textbox>
    </div>

    <div v-if="select[6]==1 && cancer==1" v-show="select[6] && cancer==1">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>大腸癌資訊：</v-list-item-title>
         <v-list-item>
        <v-list-item-content>
          <v-text-field
            solo
            name="cancer_detail[colorectal_cancer][age]"
            
            :rules="[v => !!v || '必填']"
            label="請輸入罹患大腸癌年齡(大約)"
          ></v-text-field>
          <v-divider></v-divider>
          
          

          <v-list-item-title>是否為MSI Loss (Lynch syndrome) ：</v-list-item-title>
          <v-radio-group row v-if="cancer==1 && select[6]==1" :rules="[v => !!v || '必填']">
            <v-radio
              name="cancer_detail[colorectal_cancer][msi]"
              label="否"
              color="primary"
              value="0"
            ></v-radio>
            <v-radio
              name="cancer_detail[colorectal_cancer][msi]"
              label="是"
              color="primary"
              value="1"
            ></v-radio>
            <v-radio
              name="cancer_detail[colorectal_cancer][msi]"
              label="不確定"
              color="primary"
              value="2"
            ></v-radio>
          </v-radio-group>
          <v-divider></v-divider>
          <v-list-item-title>腫瘤位置有幾處：</v-list-item-title>

          <v-radio-group row v-if="cancer==1 && select[6]==1" :rules="[v => !!v || '必填']">
            <v-radio
              name="cancer_detail[colorectal_cancer][location]"
              label="一處"
              color="primary"
              value="0"
            ></v-radio>
            <v-radio
              name="cancer_detail[colorectal_cancer][location]"
              label="兩處(含)以上"
              color="primary"
              value="1"
            ></v-radio>
          </v-radio-group>
          </v-list-item-content>
      </v-list-item>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
    </div>
    <div v-if="select[7]==1 && cancer==1" v-show="select[7] && cancer==1">
      <Textbox
        textbox_title="小腸癌資訊 ："
        textbox_name="cancer_detail[small_intestine_cancer][age]"
        textbox_label="請輸入罹患小腸癌年齡(大約)"
      ></Textbox>
    </div>

    <div v-if="select[8]==1 && cancer==1" v-show="select[8] && cancer==1">
      <Textbox
        textbox_title="腎臟癌資訊 ："
        textbox_name="cancer_detail[kidney_cancer][age]"
        textbox_label="請輸入罹患腎臟癌年齡(大約)"
      ></Textbox>
    </div>
    <div v-if="select[9]==1 && cancer==1" v-show="select[9] && cancer==1">
      <Textbox
        textbox_title="膀胱癌資訊 ："
        textbox_name="cancer_detail[bladder_cancer][age]"
        textbox_label="請輸入罹患膀胱癌年齡(大約)"
      ></Textbox>
    </div>
    <div v-if="select[10]==1 && cancer==1" v-show="select[10] && cancer==1">
      <Textbox
        textbox_title="泌尿道癌資訊 ："
        textbox_name="cancer_detail[urinary_tract_cancer][age]"
        textbox_label="請輸入罹患泌尿道癌年齡(大約)"
      ></Textbox>
    </div>
    <div v-if="select[11]==1 && cancer==1" v-show="select[11] && cancer==1">
      <Textbox
        textbox_title="攝護腺癌資訊 ："
        textbox_name="cancer_detail[prostate_cancer][age]"
        textbox_label="請輸入罹患攝護腺癌年齡(大約)"
      ></Textbox>
    </div>
    <div v-if="select[12]==1 && cancer==1" v-show="select[12] && cancer==1">
      <Textbox
        textbox_title="皮膚癌資訊 ："
        textbox_name="cancer_detail[skin_cancer][age]"
        textbox_label="請輸入罹患皮膚癌年齡(大約)"
      ></Textbox>
    </div>
    <div v-if="select[13]==1 && cancer==1" v-show="select[13] && cancer==1">
      <Textbox
        textbox_title="甲狀腺癌資訊 ："
        textbox_name="cancer_detail[thyroid_cancer][age]"
        textbox_label="請輸入罹患甲狀腺癌年齡(大約)"
      ></Textbox>
    </div>
    <div v-if="select[14]==1 && cancer==1" v-show="select[14] && cancer==1">
      <Textbox
        textbox_title="腎上腺癌資訊 ："
        textbox_name="cancer_detail[adrenal_cancer][age]"
        textbox_label="請輸入罹患腎上腺癌年齡(大約)"
      ></Textbox>
    </div>
    <div v-if="select[15]==1 && cancer==1" v-show="select[15] && cancer==1">
      <Textbox
        textbox_title="淋巴癌資訊 ："
        textbox_name="cancer_detail[lymphoma][age]"
        textbox_label="請輸入罹患淋巴癌年齡(大約)"
      ></Textbox>
    </div>
    <div v-if="select[16]==1 && cancer==1" v-show="select[16] && cancer==1">
      <Textbox
        textbox_title="腦癌資訊 ："
        textbox_name="cancer_detail[brain_cancer][age]"
        textbox_label="請輸入罹患腦癌年齡(大約)"
      ></Textbox>
    </div>

    <div v-if="select[17]==1 && cancer==1" v-show="select[17] && cancer==1">
      <Textbox
        textbox_title="血癌資訊 ："
        textbox_name="cancer_detail[leukemia][age]"
        textbox_label="請輸入罹患淋巴癌年齡(大約)"
      ></Textbox>
    </div>
    <div v-if="select[18]==1 && cancer==1" v-show="select[18] && cancer==1">
      <Textbox
        textbox_title="肉瘤資訊 ："
        textbox_name="cancer_detail[sarcoma][age]"
        textbox_label="請輸入罹患肉瘤年齡(大約)"
      ></Textbox>
    </div>
    <div v-if="select[19]==1 && cancer==1" v-show="select[19] && cancer==1">
      <Textbox
        textbox_title="皮膚症狀資訊 ："
        textbox_name="cancer_detail[codwen][age]"
        textbox_label="請輸入罹患皮膚症狀年齡(大約)"
      ></Textbox>
    </div>
  </div>
</template>
<script>
import Textbox from "@/components/Textbox_cancer.vue";
export default {
  components: {
    Textbox
  },
  props: {
    textbox_title: String,
    textbox_name: String,
    textbox_label: String,
    valid: String
  },
  computed: {
    rules() {
      return [
        this.select[0] == 1 ||
          this.select[1] == 1 ||
          this.select[2] == 1 ||
          this.select[3] == 1 ||
          this.select[4] == 1 ||
          this.select[5] == 1 ||
          this.select[6] == 1 ||
          this.select[7] == 1 ||
          this.select[8] == 1 ||
          this.select[9] == 1 ||
          this.select[10] == 1 ||
          this.select[11] == 1 ||
          this.select[12] == 1 ||
          this.select[13] == 1 ||
          this.select[14] == 1 ||
          this.select[15] == 1 ||
          this.select[16] == 1 ||
          this.select[17] == 1 ||
          this.select[18] == 1 ||
          this.select[19] == 1 ||
          this.select[20] == 1 ||
          "At least one item should be selected"
      ];
    }
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
      ]
    };
  }
};
</script>