<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>{{genetic_test_title}}</v-list-item-title>
        <v-list-item-subtitle>{{level_name}}</v-list-item-subtitle>
        <v-radio-group v-model="gene" :rules="[v => !!v || '必填']" row>
          <v-radio :name="genetic_test_name" label="否" color="primary" value="0"></v-radio>
          <v-radio :name="genetic_test_name" label="是" color="primary" value="1"></v-radio>
        </v-radio-group>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <div v-show="gene==1">
      <v-list-item>
        <v-list-item-content>
          
          
          <v-list-item-title>曾接受過基因檢查的項目 ：</v-list-item-title>

          <v-checkbox
            v-show="A_gene!=null"
            v-model="select[0]"
            :name="parent+'_detail['+A_gene+'][done]'"
            :label="A_gene"
            value="1"
              v-if="gene==1"
              :rules="rules"
              hide-details
          ></v-checkbox>
          <v-checkbox
            v-show="B_gene!=null"
            v-model="select[1]"
            :name="parent+'_detail['+B_gene+'][done]'"
            :label="B_gene"
            value="1"
              v-if="gene==1"
              :rules="rules"
              hide-details
          ></v-checkbox>

          <v-checkbox
            v-show="C_gene!=null"
            v-model="select[2]"
            :name="parent+'_detail['+C_gene+'][done]'"
            :label="C_gene"
            value="1"
              v-if="gene==1"
              :rules="rules"
              hide-details
          ></v-checkbox>

          <v-checkbox
            v-show="D_gene!=null"
            v-model="select[3]"
            :name="parent+'_detail['+D_gene+'][done]'"
            :label="D_gene"
            value="1"
              v-if="gene==1"
              :rules="rules"
              hide-details
          ></v-checkbox>

          <v-checkbox
            v-show="E_gene!=null"
            v-model="select[4]"
            :name="parent+'_detail['+E_gene+'][done]'"
            :label="E_gene"
            value="1"
              v-if="gene==1"
              :rules="rules"
              hide-details
          ></v-checkbox>

           <v-checkbox
            v-show="F_gene!=null"
            v-model="select[5]"
            :name="parent+'_detail['+F_gene+'][done]'"
            :label="F_gene"
            value="1"
              v-if="gene==1"
              :rules="rules"
              hide-details
          ></v-checkbox>

           <v-checkbox
            v-show="G_gene!=null"
            v-model="select[6]"
            :name="parent+'_detail['+G_gene+'][done]'"
            :label="G_gene"
            value="1"
              v-if="gene==1"
              :rules="rules"
              hide-details
          ></v-checkbox>
           <v-checkbox
            v-show="H_gene!=null"
            v-model="select[7]"
            :name="parent+'_detail['+H_gene+'][done]'"
            :label="H_gene"
            value="1"
              v-if="gene==1"
              :rules="rules"
              hide-details
          ></v-checkbox>

           <v-checkbox
            v-show="I_gene!=null"
            v-model="select[8]"
            :name="parent+'_detail['+I_gene+'][done]'"
            :label="I_gene"
            value="1"
              v-if="gene==1"
              :rules="rules"
              hide-details
          ></v-checkbox>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
    </div>
    
<div v-show="(select[0]==1 & gene==1)||(select[1]==1 & gene==1)||(select[2]==1 & gene==1)||(select[3]==1 & gene==1)||(select[4]==1 & gene==1)||(select[5]==1 & gene==1)||(select[6]==1 & gene==1)||(select[7]==1 & gene==1)||(select[8]==1 & gene==1)">
    
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>基因資訊 ：</v-list-item-title>
           <v-list-item>
        <v-list-item-content>
          <v-list-item-title v-if="select[0]==1 & gene==1">是否為{{A_gene}}基因變異 ：</v-list-item-title>
          <v-radio-group v-if="select[0]==1 & gene==1" :rules="[v => !!v || '必填']" row>
            <v-radio
              :name="parent+'_detail['+A_gene+'][get]'"
              label="否"
              color="primary"
              value="0"
            ></v-radio>
            <v-radio
              :name="parent+'_detail['+A_gene+'][get]'"
              label="是"
              color="primary"
              value="1"
            ></v-radio>
            <v-radio
              :name="parent+'_detail['+A_gene+'][get]'"
              label="不確定"
              color="primary"
              value="2"
            ></v-radio>
          </v-radio-group>
           <v-list-item-title v-if="select[1]==1 & gene==1">是否為{{B_gene}}基因變異 ：</v-list-item-title>
          <v-radio-group v-if="select[1]==1 & gene==1" :rules="[v => !!v || '必填']" row>
            <v-radio
              :name="parent+'_detail['+B_gene+'][get]'"
              label="否"
              color="primary"
              value="0"
            ></v-radio>
            <v-radio
              :name="parent+'_detail['+B_gene+'][get]'"
              label="是"
              color="primary"
              value="1"
            ></v-radio>
            <v-radio
              :name="parent+'_detail['+B_gene+'][get]'"
              label="不確定"
              color="primary"
              value="2"
            ></v-radio>
          </v-radio-group>
           <v-list-item-title v-if="select[2]==1 & gene==1">是否為{{C_gene}}基因變異 ：</v-list-item-title>
          <v-radio-group v-if="select[2]==1 & gene==1" :rules="[v => !!v || '必填']" row>
            <v-radio
              :name="parent+'_detail['+C_gene+'][get]'"
              label="否"
              color="primary"
              value="0"
            ></v-radio>
            <v-radio
              :name="parent+'_detail['+C_gene+'][get]'"
              label="是"
              color="primary"
              value="1"
            ></v-radio>
            <v-radio
              :name="parent+'_detail['+C_gene+'][get]'"
              label="不確定"
              color="primary"
              value="2"
            ></v-radio>
          </v-radio-group>
          <v-list-item-title v-if="select[3]==1 & gene==1">是否為{{D_gene}}基因變異 ：</v-list-item-title>
          <v-radio-group v-if="select[3]==1 & gene==1" :rules="[v => !!v || '必填']" row>
            <v-radio
              :name="parent+'_detail['+D_gene+'][get]'"
              label="否"
              color="primary"
              value="0"
            ></v-radio>
            <v-radio
              :name="parent+'_detail['+D_gene+'][get]'"
              label="是"
              color="primary"
              value="1"
            ></v-radio>
            <v-radio
              :name="parent+'_detail['+D_gene+'][get]'"
              label="不確定"
              color="primary"
              value="2"
            ></v-radio>
          </v-radio-group>
          <v-list-item-title  v-if="select[4]==1 & gene==1">是否為{{E_gene}}基因變異 ：</v-list-item-title>
          <v-radio-group v-if="select[4]==1 & gene==1" :rules="[v => !!v || '必填']" row>
            <v-radio
              :name="parent+'_detail['+E_gene+'][get]'"
              label="否"
              color="primary"
              value="0"
            ></v-radio>
            <v-radio
              :name="parent+'_detail['+E_gene+'][get]'"
              label="是"
              color="primary"
              value="1"
            ></v-radio>
            <v-radio
              :name="parent+'_detail['+E_gene+'][get]'"
              label="不確定"
              color="primary"
              value="2"
            ></v-radio>
          </v-radio-group>
           <v-list-item-title v-if="select[5]==1 & gene==1">是否為{{F_gene}}基因變異 ：</v-list-item-title>
          <v-radio-group  v-if="select[5]==1 & gene==1" :rules="[v => !!v || '必填']" row>
            <v-radio
              :name="parent+'_detail['+F_gene+'][get]'"
              label="否"
              color="primary"
              value="0"
            ></v-radio>
            <v-radio
              :name="parent+'_detail['+F_gene+'][get]'"
              label="是"
              color="primary"
              value="1"
            ></v-radio>
            <v-radio
              :name="parent+'_detail['+F_gene+'][get]'"
              label="不確定"
              color="primary"
              value="2"
            ></v-radio>
          </v-radio-group>
           <v-list-item-title v-if="select[6]==1 & gene==1">是否為{{G_gene}}基因變異 ：</v-list-item-title>
          <v-radio-group v-if="select[6]==1 & gene==1" :rules="[v => !!v || '必填']" row>
            <v-radio
              :name="parent+'_detail['+G_gene+'][get]'"
              label="否"
              color="primary"
              value="0"
            ></v-radio>
            <v-radio
              :name="parent+'_detail['+G_gene+'][get]'"
              label="是"
              color="primary"
              value="1"
            ></v-radio>
            <v-radio
              :name="parent+'_detail['+G_gene+'][get]'"
              label="不確定"
              color="primary"
              value="2"
            ></v-radio>
          </v-radio-group>
           <v-list-item-title v-if="select[7]==1 & gene==1">是否為{{H_gene}}基因變異 ：</v-list-item-title>
          <v-radio-group v-if="select[7]==1 & gene==1" :rules="[v => !!v || '必填']" row>
            <v-radio
              :name="parent+'_detail['+H_gene+'][get]'"
              label="否"
              color="primary"
              value="0"
            ></v-radio>
            <v-radio
              :name="parent+'_detail['+H_gene+'][get]'"
              label="是"
              color="primary"
              value="1"
            ></v-radio>
            <v-radio
              :name="parent+'_detail['+H_gene+'][get]'"
              label="不確定"
              color="primary"
              value="2"
            ></v-radio>
          </v-radio-group>
           <v-list-item-title v-if="select[8]==1 & gene==1">是否為{{I_gene}}基因變異 ：</v-list-item-title>
          <v-radio-group v-if="select[8]==1 & gene==1" :rules="[v => !!v || '必填']" row>
            <v-radio
              :name="parent+'_detail['+I_gene+'][get]'"
              label="否"
              color="primary"
              value="0"
            ></v-radio>
            <v-radio
              :name="parent+'_detail['+I_gene+'][get]'"
              label="是"
              color="primary"
              value="1"
            ></v-radio>
            <v-radio
              :name="parent+'_detail['+I_gene+'][get]'"
              label="不確定"
              color="primary"
              value="2"
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
      genetic_test: 0,
      gene: 0,
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
      ]
    };
  },
  props: {
    genetic_test_title: String,
    genetic_test_name: String,
    A_gene: String,
    B_gene: String,
    C_gene: String,
    D_gene: String,
    E_gene: String,
    F_gene: String,
    G_gene: String,
    H_gene: String,
    I_gene: String,
    level_name: String,
    parent: String,
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
          "At least one item should be selected"
      ];
    }
  },
};
</script>