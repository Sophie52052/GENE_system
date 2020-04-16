<template>
  <div>
    <v-list subheader three-line>
      <!-- <v-subheader>User Controls</v-subheader> -->
      <input type="hidden" name="line_id" v-model="pass_line_id" />
      <!-- ID: <input type="text" name="line_id"> -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>是否接受過預防性切除手術 ：</v-list-item-title>
          <v-list-item-subtitle>卵巢或乳房</v-list-item-subtitle>
          <v-radio-group v-model="model" :rules="[v => !!v || '必填']">
            <v-radio name="operation" label="否" color="primary" value="0"></v-radio>
            <v-radio name="operation" label="是" color="primary" value="1"></v-radio>
          </v-radio-group>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <div v-show="model==1">
         <v-list-item>
      <v-list-item-content>
        <v-list-item-title>是否接受過預防性卵巢切除手術 ：</v-list-item-title>
        <v-radio-group v-model="oophorectomy" v-if="model==1" :rules="[v => !!v || '必填']">
          <v-radio name="operation_detail[oophorectomy][get]" label="否" color="primary" value="0"></v-radio>
          <v-radio name="operation_detail[oophorectomy][get]" label="是" color="primary" value="1"></v-radio>
        </v-radio-group>
        <div v-show="oophorectomy==1">
          <v-text-field
            name="operation_detail[oophorectomy][age]"
            solo
            label="請輸入切除年齡(大約)"
            v-if="oophorectomy==1"
            :rules="[v => !!v || '必填']"
            clearable
          ></v-text-field>
        </div>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>是否接受預防性乳房巢切除手術 ：</v-list-item-title>
        <v-radio-group v-model="mastectomy" v-if="model==1" :rules="[v => !!v || '必填']">
          <v-radio name="operation_detail[mastectomy][get]" label="否" color="primary" value="0"></v-radio>
          <v-radio name="operation_detail[mastectomy][get]" label="是" color="primary" value="1"></v-radio>
        </v-radio-group>
        <div v-show="mastectomy==1">
          <v-text-field
            name="operation_detail[mastectomy][age]"
            solo
            label="請輸入切除年齡(大約)"
            v-if="mastectomy==1"
            :rules="[v => !!v || '必填']"
            clearable
          ></v-text-field>
        </div>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
        
      </div>

      <!-- <Genetest
        genetic_test_title="是否接受過基因檢查 ："
        genetic_test_name="genecheck"
        brca="brca"
        nlh="nlh"
        p16="p16"
        atm="atm"
        pabl="pabl"
        chek2="chek2"
      ></Genetest> -->
      
      <Genetest
        genetic_test_title="是否接受過基因檢查 ："
        genetic_test_name="genecheck"
        parent="genecheck"
        A_gene="BRCA1/BRCA2"
        B_gene="MLH1/MSH2/MSH6/PMS2"
        C_gene="P16"
        D_gene="ATM"
        E_gene="PABL"
        F_gene="CHEK2"
        G_gene="FAP"
      ></Genetest>
    </v-list>
  </div>
</template>
<script>
//import Radiobutton2textbox from "@/components/radiobutton2textbox.vue";
import Genetest from "@/components/genetest.vue";
export default {
  data() {
    return {
      model: 0,
      oophorectomy:null,
      mastectomy:null,
    };
  },
  components: {
    //Radiobutton2textbox,
    Genetest
  },
  props: ["pass_line_id"]
};
</script>