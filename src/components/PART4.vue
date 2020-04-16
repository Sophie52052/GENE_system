<template>
  <div>
    <v-list subheader three-line>
      <!-- <v-subheader>User Controls</v-subheader> -->
      <input type="hidden" name="line_id" v-model="pass_line_id" />
      <!-- ID: <input type="text" name="line_id"> -->

      <Select select_title="家屬罹患乳癌人數 ：" select_label="請選擇家屬罹患乳癌人數" selectpass_name="bcancer_number"></Select>
      <Select
        select_title="家屬罹患大腸癌人數 ："
        select_label="請選擇家屬罹患乳癌人數"
        selectpass_name="ccancer_number"
      ></Select>

      <Genetest
        genetic_test_title="一等親是否做過基因檢查 ："
        genetic_test_name="genecheck"
        level_name="父母、兄弟、姊妹、兒女"
        parent="genecheck"
        A_gene="BRCA1/BRCA2"
        B_gene="MLH1/MSH2/MSH6/PMS2"
        C_gene="P16"
        D_gene="ATM"
        E_gene="PABL"
        F_gene="CHEK2"
        G_gene="FAP"
      ></Genetest>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>一等親有無大腸息肉：</v-list-item-title>
          <v-list-item-subtitle>父母、兄弟、姊妹、兒女</v-list-item-subtitle>

          <v-radio-group v-model="adenoma1_get" :rules="[v => !!v || '必填']" row>
            <v-radio name="level1_ad" label="無" color="primary" value="0"></v-radio>
            <v-radio name="level1_ad" label="有" color="primary" value="1"></v-radio>
          </v-radio-group>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <div v-show="adenoma1_get==1">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>請選擇罹患大腸息肉一等親 ：</v-list-item-title>
<input type="hidden" name="level1_adenoma[father]" value="0" >
            <v-checkbox
              v-model="adenoma1[0]"
              name="level1_adenoma[father]"
              label="爸爸"
              value="1"
              v-if="adenoma1_get==1"
              :rules="ad_rules1"
              hide-details
            ></v-checkbox>
            <input type="hidden" name="level1_adenoma[mother]" value="0" >
            <v-checkbox
              v-model="adenoma1[1]"
              name="level1_adenoma[mother]"
              label="媽媽"
              value="1"
              v-if="adenoma1_get==1"
              :rules="ad_rules1"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="adenoma1[2]"
              name="level1_adenoma[brother]"
              label="兄弟"
              value="1"
              v-if="adenoma1_get==1"
              :rules="ad_rules1"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="adenoma1[3]"
              name="level1_adenoma[sister]"
              label="姊妹"
              value="1"
              v-if="adenoma1_get==1"
              :rules="ad_rules1"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="adenoma1[4]"
              name="level1_adenoma[son]"
              label="兒子"
              value="1"
              v-if="adenoma1_get==1"
              :rules="ad_rules1"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="adenoma1[5]"
              name="level1_adenoma[daughter]"
              label="女兒"
              value="1"
              v-if="adenoma1_get==1"
              :rules="ad_rules1"
              hide-details
            ></v-checkbox>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </div>
      <div v-show="adenoma1_get==1">
        
        <Adenoma
          v-show="adenoma1[0]"
          :valid="adenoma1_get==1 && adenoma1[0]==1"
          parent_name="爸爸"
          degree="1"
          parent="father"
        ></Adenoma>
        
        <Adenoma
          v-show="adenoma1[1]"
          :valid="adenoma1[1]"
          parent_name="媽媽"
          degree="1"
          parent="mother"
        ></Adenoma>
        
        <!-- <Adenoma
          v-show="adenoma1[2]"
          :valid="adenoma1[2]"
          parent_name="兄弟"
          degree="1"
          parent="brother"
        ></Adenoma> -->
        
        <Adenomas
          v-show="adenoma1[2]"
          :valid="adenoma1[2]"
          parent="brother_adenoma"
          degree="1"
          parent_name="兄弟"
          parent_who="brothers"
        ></Adenomas>
        <!-- <Adenoma
          v-show="adenoma1[3]"
          :valid="adenoma1[3]"
          parent_name="姊妹"
          degree="1"
          parent="sister"
        ></Adenoma> -->
        
         <Adenomas
          v-show="adenoma1[3]"
          :valid="adenoma1[3]"
          parent="sister_adenoma"
          degree="1"
          parent_name="姊妹"
          parent_who="sisters"
        ></Adenomas>
        
        <Adenomas
          v-show="adenoma1[4]"
          :valid="adenoma1[4]"
          parent="son_adenoma"
          degree="1"
          parent_name="兒子"
          parent_who="sons"
        ></Adenomas>
       
        <!-- <Adenoma v-show="adenoma1[4]" :valid="adenoma1[4]" parent_name="兒子" degree="1" parent="son"></Adenoma> -->
         <Adenomas
          v-show="adenoma1[5]"
          :valid="adenoma1[5]"
          parent="daughter_adenoma"
          degree="1"
          parent_name="女兒"
          parent_who="daughters"
        ></Adenomas>
        <!-- <Adenoma
          v-show="adenoma1[5]"
          :valid="adenoma1[5]"
          parent_name="女兒"
          degree="1"
          parent="daughter"
        ></Adenoma> -->
      </div>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>二等親有無大腸息肉：</v-list-item-title>
          <v-list-item-subtitle>爺爺奶奶、外公外婆、叔伯、舅舅、姑姑、阿姨、姪子姪女</v-list-item-subtitle>

          <v-radio-group v-model="adenoma2_get" :rules="[v => !!v || '必填']" row>
            <v-radio name="level2_ade" label="無" color="primary" value="0"></v-radio>
            <v-radio name="level2_ad" label="有" color="primary" value="1"></v-radio>
          </v-radio-group>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <div v-show="adenoma2_get==1">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>請選擇罹患大腸息肉二等親 ：</v-list-item-title>
            <input type="hidden" name="level2_adenoma[grandf]" value="0" >
            <v-checkbox
              v-model="adenoma2[0]"
              name="level2_adenoma[grandf]"
              label="祖父"
              value="1"
              v-if="adenoma2_get==1"
              :rules="ad_rules2"
              hide-details
            ></v-checkbox>
            <input type="hidden" name="level2_adenoma[grandm]" value="0" >
            <v-checkbox
              v-model="adenoma2[1]"
              name="level2_adenoma[grandm]"
              label="祖母"
              value="1"
              v-if="adenoma2_get==1"
              :rules="ad_rules2"
              hide-details
            ></v-checkbox>
            <input type="hidden" name="level2_adenoma[grandf_out]" value="0" >
            <v-checkbox
              v-model="adenoma2[2]"
              name="level2_adenoma[grandf_out]"
              label="外祖父"
              value="1"
              v-if="adenoma2_get==1"
              :rules="ad_rules2"
              hide-details
            ></v-checkbox>
 <input type="hidden" name="level2_adenoma[grandm_out]" value="0" >
            <v-checkbox
              v-model="adenoma2[3]"
              name="level2_adenoma[grandm_out]"
              label="外祖母"
              value="1"
              v-if="adenoma2_get==1"
              :rules="ad_rules2"
              hide-details
            ></v-checkbox>
            <input type="hidden" name="level2_adenoma[auntsf]" value="0" >
            <v-checkbox
              v-model="adenoma2[4]"
              name="level2_adenoma[auntsf]"
              label="姑姑"
              value="1"
              v-if="adenoma2_get==1"
              :rules="ad_rules2"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="adenoma2[5]"
              name="level2_adenoma[unclesf]"
              label="叔伯"
              value="1"
              v-if="adenoma2_get==1"
              :rules="ad_rules2"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="adenoma2[6]"
              name="level2_adenoma[unclesm]"
              label="舅舅"
              value="1"
              v-if="adenoma2_get==1"
              :rules="ad_rules2"
              hide-details
            ></v-checkbox>

            <v-checkbox
              v-model="adenoma2[7]"
              name="level2_adenoma[auntsm]"
              label="阿姨"
              value="1"
              v-if="adenoma2_get==1"
              :rules="ad_rules2"
              hide-details
            ></v-checkbox>

            <v-checkbox
              v-model="adenoma2[8]"
              name="level2_adenoma[scorpion]"
              label="姪子"
              value="1"
              v-if="adenoma2_get==1"
              :rules="ad_rules2"
              hide-details
            ></v-checkbox>

            <v-checkbox
              v-model="adenoma2[9]"
              name="level2_adenoma[niece]"
              label="姪女"
              value="1"
              v-if="adenoma2_get==1"
              :rules="ad_rules2"
              hide-details
            ></v-checkbox>
          </v-list-item-content>
        </v-list-item>
      </div>
      <div v-show="adenoma2_get==1">
        
        <Adenoma
          v-show="adenoma2[0]"
          :valid="adenoma2[0]"
          parent_name="祖父"
          degree="2"
          parent="grandf"
        ></Adenoma>
        
        <Adenoma
          v-show="adenoma2[1]"
          :valid="adenoma2[1]"
          parent_name="祖母"
          degree="2"
          parent="grandm"
        ></Adenoma>
        
        <Adenoma
          v-show="adenoma2[2]"
          :valid="adenoma2[2]"
          parent_name="外祖父"
          degree="2"
          parent="grandf_out"
        ></Adenoma>
       
        <Adenoma
          v-show="adenoma2[3]"
          :valid="adenoma2[3]"
          parent_name="外祖母"
          degree="2"
          parent="grandm_out"
        ></Adenoma>
        
        <Adenomas
          v-show="adenoma2[4]"
          :valid="adenoma2[4]"
          parent="auntsf_adenoma"
          degree="2"
          parent_name="姑姑"
          parent_who="auntsf"
        ></Adenomas>
        <!-- <Adenoma
          v-show="adenoma2[4]"
          :valid="adenoma2[4]"
          parent_name="姑姑"
          degree="2"
          parent="auntsf"
        ></Adenoma> -->
        
        <Adenomas
          v-show="adenoma2[5]"
          :valid="adenoma2[5]"
          parent="unclesf_adenoma"
          degree="2"
          parent_name="叔伯"
          parent_who="unclesf"
        ></Adenomas>
        <!-- <Adenoma
          v-show="adenoma2[5]"
          :valid="adenoma2[5]"
          parent_name="叔伯"
          degree="2"
          parent="unclesf"
        ></Adenoma> -->
       
        <Adenomas
          v-show="adenoma2[6]"
          :valid="adenoma2[6]"
          parent="unclesm_adenoma"
          degree="2"
          parent_name="舅舅"
          parent_who="unclesm"
        ></Adenomas>
        <!-- <Adenoma
          v-show="adenoma2[6]"
          :valid="adenoma2[6]"
          parent_name="舅舅"
          degree="2"
          parent="unclesm"
        ></Adenoma> -->
        <Adenomas
          v-show="adenoma2[7]"
          :valid="adenoma2[7]"
          parent="auntsm_adenoma"
          degree="2"
          parent_name="阿姨"
          parent_who="auntsm"
        ></Adenomas>
        <!-- <Adenoma
          v-show="adenoma2[7]"
          :valid="adenoma2[7]"
          parent_name="阿姨"
          degree="2"
          parent="auntsm"
        ></Adenoma> -->
        <Adenomas
          v-show="adenoma2[8]"
          :valid="adenoma2[8]"
          parent="scorpion_adenoma"
          degree="2"
          parent_name="姪子"
          parent_who="scorpion"
        ></Adenomas>
        <!-- <Adenoma
          v-show="adenoma2[8]"
          :valid="adenoma2[8]"
          parent_name="姪子"
          degree="2"
          parent="scorpion"
        ></Adenoma> -->
        <Adenomas
          v-show="adenoma2[9]"
          :valid="adenoma2[9]"
          parent="niece_adenoma"
          degree="2"
          parent_name="姪女"
          parent_who="niece"
        ></Adenomas>
        <!-- <Adenoma
          v-show="adenoma2[9]"
          :valid="adenoma2[9]"
          parent_name="姪女"
          degree="2"
          parent="niece"
        ></Adenoma> -->
      </div>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>一等親是否罹癌 ：</v-list-item-title>
          <v-list-item-subtitle>父母、兄弟、姊妹、兒女</v-list-item-subtitle>
          <v-radio-group v-model="first" :rules="[v => !!v || '必填']" row>
            <v-radio name="level1" label="否" color="primary" value="0"></v-radio>
            <v-radio name="level1" label="是" color="primary" value="1"></v-radio>
          </v-radio-group>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <div v-show="first==1">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>請選擇罹癌一等親 ：</v-list-item-title>

            <v-checkbox
              v-model="select1[0]"
              name="level1_detail[father]"
              label="爸爸"
              value="1"
              v-if="first==1"
              :rules="rules1"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="select1[1]"
              name="level1_detail[mother]"
              label="媽媽"
              value="1"
              v-if="first==1"
              :rules="rules1"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="select1[2]"
              name="level1_detail[sons]"
              label="兒子"
              value="1"
              v-if="first==1"
              :rules="rules1"
              hide-details
            ></v-checkbox>

            <v-checkbox
              v-model="select1[3]"
              name="level1_detail[daughters]"
              label="女兒"
              value="1"
              v-if="first==1"
              :rules="rules1"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="select1[4]"
              name="level1_detail[sisters]"
              label="姊妹"
              value="1"
              v-if="first==1"
              :rules="rules1"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="select1[5]"
              name="level1_detail[brothers]"
              label="兄弟"
              value="1"
              v-if="first==1"
              :rules="rules1"
              hide-details
            ></v-checkbox>
          </v-list-item-content>
        </v-list-item>
      </div>

      <div v-show="first==1">
        <input type="hidden" name="level1_detail[father]" :value="select1[0]" >
        <Cancerparent
          v-show="select1[0]==1"
          :valid="select1[0]==1"
          parent="father_cancer"
          degree="1"
          parent_name="爸爸"
          parent_who="father"
          :cancer="cancer"
        ></Cancerparent>
        <input type="hidden" name="level1_detail[mother]" :value="select1[1]" >
        <Cancerparent
          v-show="select1[1]==1"
          :valid="select1[1]==1"
          parent="mother_cancer"
          degree="1"
          parent_name="媽媽"
          parent_who="mother"
        ></Cancerparent>

        <Cancerparents
          v-show="select1[2]==1"
          :valid="select1[2]==1"
          parent="sons_cancer"
          degree="1"
          parent_name="兒子"
          parent_who="sons"
        ></Cancerparents>
        <Cancerparents
          v-show="select1[3]==1"
          :valid="select1[3]==1"
          parent="daughters_cancer"
          degree="1"
          parent_name="女兒"
          parent_who="daughters"
        ></Cancerparents>
        <Cancerparents
          v-show="select1[4]==1"
          :valid="select1[4]==1"
          parent="sisters_cancer"
          degree="1"
          parent_name="姊妹"
          parent_who="sisters"
        ></Cancerparents>
        <Cancerparents
          v-show="select1[5]==1"
          :valid="select1[5]==1"
          parent="brothers_cancer"
          degree="1"
          parent_name="兄弟"
          parent_who="brothers"
        ></Cancerparents>
      </div>
      <v-divider></v-divider>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>二等親是否罹癌 ：</v-list-item-title>
          <v-list-item-subtitle>爺爺奶奶、外公外婆、叔伯、舅舅、姑姑、阿姨、姪子姪女</v-list-item-subtitle>
          <v-radio-group v-model="second" :rules="[v => !!v || '必填']" row>
            <v-radio name="level2" label="否" color="primary" value="0"></v-radio>
            <v-radio name="level2" label="是" color="primary" value="1"></v-radio>
          </v-radio-group>
        </v-list-item-content>
      </v-list-item>
      <div v-if="second==1">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>請選擇罹癌二等親 ：</v-list-item-title>
            <v-checkbox
              v-model="select2[0]"
              name="level2_detail[grandf]"
              label="祖父"
              value="1"
              v-if="second==1"
              :rules="rules2"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="select2[1]"
              name="level2_detail[grandm]"
              label="祖母"
              value="1"
              v-if="second==1"
              :rules="rules2"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="select2[2]"
              name="level2_detail[grandf_out]"
              label="外祖父"
              value="1"
              v-if="second==1"
              :rules="rules2"
              hide-details
            ></v-checkbox>

            <v-checkbox
              v-model="select2[3]"
              name="level2_detail[grandm_out]"
              label="外祖母"
              value="1"
              v-if="second==1"
              :rules="rules2"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="select2[4]"
              name="level2_detail[auntsf]"
              label="姑姑"
              value="1"
              v-if="second==1"
              :rules="rules2"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="select2[5]"
              name="level2_detail[unclesf]"
              label="叔伯"
              value="1"
              v-if="second==1"
              :rules="rules2"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="select2[6]"
              name="level2_detail[unclesm]"
              label="舅舅"
              value="1"
              v-if="second==1"
              :rules="rules2"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="select2[7]"
              name="level2_detail[auntsm]"
              label="阿姨"
              value="1"
              v-if="second==1"
              :rules="rules2"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="select2[8]"
              name="level2_detail[scorpion]"
              label="姪子"
              value="1"
              v-if="second==1"
              :rules="rules2"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="select2[9]"
              name="level2_detail[niece]"
              label="姪女"
              value="1"
              v-if="second==1"
              :rules="rules2"
              hide-details
            ></v-checkbox>
          </v-list-item-content>
        </v-list-item>
      </div>

      <div v-show="second==1">
        <input type="hidden" name="level2_detail[grandf]" :value="select2[0]" >
        <Cancerparent
          v-show="select2[0]==1"
          :valid="select2[0]==1"
          parent="grandf_cancer"
          degree="2"
          parent_name="祖父"
          parent_who="grandf"
        ></Cancerparent>

        <input type="hidden" name="level2_detail[grandm]" :value="select2[1]" >

        <Cancerparent
          v-show="select2[1]==1"
          :valid="select2[1]==1"
          parent="grandm_cancer"
          degree="2"
          parent_name="祖母"
          parent_who="grandm"
        ></Cancerparent>

        <input type="hidden" name="level2_detail[grandf_out]" :value="select2[2]" >
        <Cancerparent
          v-show="select2[2]==1"
          :valid="select2[2]==1"
          parent="grandf_out_cancer"
          degree="2"
          parent_name="外祖父"
          parent_who="grandf_out"
        ></Cancerparent>

        <input type="hidden" name="level2_detail[grandm_out]" :value="select2[3]" >
        <Cancerparent
          v-show="select2[3]==1"
          :valid="select2[3]==1"
          parent="grandm_out_cancer"
          degree="2"
          parent_name="外祖母"
          parent_who="grandm_out"
        ></Cancerparent>

        <Cancerparents
          v-show="select2[4]==1"
          :valid="select2[4]==1"
          parent="auntsf_cancer"
          degree="2"
          parent_name="姑姑"
          parent_who="auntsf"
        ></Cancerparents>
        <Cancerparents
          v-show="select2[5]==1"
          :valid="select2[5]==1"
          parent="unclesf_cancer"
          degree="2"
          parent_name="叔伯"
          parent_who="unclesf"
        ></Cancerparents>
        <Cancerparents
          v-show="select2[6]==1"
          :valid="select2[6]==1"
          parent="unclesm_cancer"
          degree="2"
          parent_name="舅舅"
          parent_who="unclesm"
        ></Cancerparents>
        <Cancerparents
          v-show="select2[7]==1"
          :valid="select2[7]==1"
          parent="auntsm_cancer"
          degree="2"
          parent_name="阿姨"
          parent_who="auntsm"
        ></Cancerparents>
        <Cancerparents
          v-show="select2[8]==1"
          :valid="select2[8]==1"
          parent="scorpion_cancer"
          degree="2"
          parent_name="侄子"
          parent_who="scorpion"
        ></Cancerparents>
        <Cancerparents
          v-show="select2[9]==1"
          :valid="select2[9]==1"
          parent="niece_cancer"
          degree="2"
          parent_name="侄女"
          parent_who="niece"
        ></Cancerparents>
      </div>

      <v-divider></v-divider>
      <div>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>三等親是否罹癌 ：</v-list-item-title>
            <v-radio-group v-model="model" :rules="[v => !!v || '必填']" row>
              <v-radio name="level3" label="否" color="primary" value="0"></v-radio>
              <v-radio name="level3" label="是" color="primary" value="1"></v-radio>
            </v-radio-group>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
      </div>
    </v-list>
  </div>
</template>
<script>
import Select from "@/components/Select.vue";
import Genetest from "@/components/genetest.vue";
import Cancerparent from "@/components/cancerparent.vue";
import Cancerparents from "@/components/cancerparents.vue";
import Adenoma from "@/components/adenoma.vue";
import Adenomas from "@/components/adenomas.vue";

export default {
  components: {
    Select,
    Genetest,
    Cancerparent,
    Cancerparents,
    Adenoma,
    Adenomas
  },
  props: ["pass_line_id"],
  data() {
    return {
      first: null,
      second: null,
      cancer_father: null,
      cancer_mother: null,
      cancer_grandf: null,
      cancer_grandm: null,
      cancer_grandm_out: null,
      cancer_grandf_out: null,
      adenoma1_get: null,
      adenoma2_get: null,
      adenoma1: [null, null, null, null, null, null],
      adenoma2: [null, null, null, null, null, null, null, null, null, null],
      select1: [0, 0, 0, 0, 0, 0],
      select2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
  },
  computed: {
    ad_rules1() {
      return [
        this.adenoma1[0] == 1 ||
          this.adenoma1[1] == 1 ||
          this.adenoma1[2] == 1 ||
          this.adenoma1[3] == 1 ||
          this.adenoma1[4] == 1 ||
          this.adenoma1[5] == 1 ||
          "At least one item should be selected"
      ];
    },
    ad_rules2() {
      return [
        this.adenoma2[0] == 1 ||
          this.adenoma2[1] == 1 ||
          this.adenoma2[2] == 1 ||
          this.adenoma2[3] == 1 ||
          this.adenoma2[4] == 1 ||
          this.adenoma2[5] == 1 ||
          this.adenoma2[6] == 1 ||
          this.adenoma2[7] == 1 ||
          this.adenoma2[8] == 1 ||
          this.adenoma2[9] == 1 ||
          "At least one item should be selected"
      ];
    },
    rules1() {
      return [
        this.select1[0] == 1 ||
          this.select1[1] == 1 ||
          this.select1[2] == 1 ||
          this.select1[3] == 1 ||
          this.select1[4] == 1 ||
          this.select1[5] == 1 ||
          "At least one item should be selected"
      ];
    },
    rules2() {
      return [
        this.select2[0] == 1 ||
          this.select2[1] == 1 ||
          this.select2[2] == 1 ||
          this.select2[3] == 1 ||
          this.select2[4] == 1 ||
          this.select2[5] == 1 ||
          "At least one item should be selected"
      ];
    }
  }
};
</script>