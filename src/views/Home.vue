<template>

  <div class="row">
    <div class="form-horizontal">
      <div class="form-group">
        <label for="passwdNumber" class="col-sm-2 control-label">生成密码的数目:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="passwdNumber" placeholder="" v-model="passwdNumber">
        </div>
      </div>
      <div class="form-group">
        <label for="passwdLength" class="col-sm-2" style="text-align: right">密码长度:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="passwdLength" placeholder="" value="16" v-model="passwdLength">>
        </div>
      </div>
      <div class="form-group">
        <label for="passwdLength" class="col-sm-2" style="text-align: right">使用的字符列表</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="characterString" placeholder=""
            v-model="characterString">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-1"></div>
        <div class="col-sm-11 text-left">
          <div class="checkbox">
            <label>
              <input type="checkbox" v-model="numberChecked" @change="changeString">数字 {{ number }}
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" v-model="lowercaseChecked" @change="changeString">小写字母 {{ lowercaseLetter }}
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" v-model="uppercaseChecked" @change="changeString">大写字母 {{ uppercaseLetter }}
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" v-model="characterChecked">常用符号 {{ character }}
            </label>
          </div>
        </div>
      </div>
      <div class="form-group text-right">
        <button class="btn btn-primary" @click="generatePwd">生成</button>
      </div>
      <div class="form-group">
        <div class="col-sm-1"></div>
        <div class="col-sm-11 text-center">
          <table class="table table-bordered text-center">
            <caption>密码列表</caption>
            <thead>
              <tr>
                <th style="text-align:center">序号</th>
                <th>密码</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(pass, index) in passwdList">
                <td>{{ index }}</td>
                <td>{{ pass }}</td>
                <td><button class="btn btn-primary" @click="copyPass(pass)">copy</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-sm-1"></div>

      </div>

    </div>
  </div>

</template>


<script>
  // import TopBar from "@/components/TopBar"
  import clipboard from "clipboard";

  export default {
    name: "HomeView",
    components: {
      // TopBar
    },
    data() {
      return {
        passwdNumber: 10,
        passwdLength: 10,

        number: "0123456789",
        lowercaseLetter: "abcdefghijklmnopqrstuvwxyz",
        uppercaseLetter: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        character: "~!@#$%^&*()_+",

        characterString:'',
        passwdList:[],

        numberChecked: true,
        lowercaseChecked: true,
        uppercaseChecked: true,
        characterChecked: true,
      }
    },
    created() {
      this.characterString = this.number + this.lowercaseLetter + this.uppercaseLetter + this.character
      this.generatePwd()
    },
    methods: {
      changeString() {
        let characterString = ""
        if (this.numberChecked){
          characterString += this.number
        }
        if (this.lowercaseChecked){
          characterString += this.lowercaseLetter
        }
        if (this.uppercaseChecked){
          characterString += this.uppercaseLetter
        }
        if (this.characterChecked){
          characterString += this.character
        }
        this.characterString = characterString
      },
      generatePwd() {
        let passwdList  = []
        for (let i = 0; i < this.passwdNumber; i++) {
          let passwd = '';
          for (let j = 0; j < this.passwdLength; j++) {
            var randomNum = Math.floor(Math.random() * this.characterString.length);
            passwd += this.characterString[randomNum]
          }
          passwdList.push(passwd)
        }
        this.passwdList = passwdList
      },
      async copyPass(pass) {
        clipboard.copy(pass)
      }
    }
  }
</script>

<style>
  .table {
    text-align: center;
  }

  .table>th {
    text-align: center !important;
  }
</style>