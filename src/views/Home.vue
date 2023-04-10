<template>

  <div class="row">
    <div class="form-horizontal">
      <div class="form-group">
        <label for="passwdNumber" class="col-sm-2 control-label">生成密码的数目:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="passwdNumber" placeholder="" value="3">
        </div>
      </div>
      <div class="form-group">
        <label for="passwdLength" class="col-sm-2" style="text-align: right">密码长度:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="passwdLength" placeholder="" value="16">
        </div>
      </div>
      <div class="form-group">
        <label for="passwdLength" class="col-sm-2" style="text-align: right">使用的字符列表</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="characterString" placeholder="" onchange="changeString()"
            :value="number+lowercaseLetter+uppercaseLetter+character">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-1"></div>
        <div class="col-sm-11 text-left">
          <div class="checkbox">
            <label>
              <input type="checkbox" :value="number" onclick="changeChars(this)" id="number" checked>数字 {{number}}
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" :value="lowercaseLetter" onclick="changeChars(this)" id="lowercaseLetter"
                checked>小写字母 {{lowercaseLetter}}
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" value="uppercaseLetter" onclick="changeChars(this)" id="uppercaseLetter"
                checked>大写字母 {{uppercaseLetter}}
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" :value="character" onclick="changeChars(this)" id="character" checked>常用符号
              {{character}}
            </label>
          </div>
        </div>
      </div>
      <div class="form-group text-right">
        <button class="btn btn-primary" onclick="generatePwd()">生成</button>
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
              <tr v-for="idx in passwdNumber">
                <td>{{idx}}</td>
                <td>123456</td>
                <td><button class="btn btn-primary">copy</button></td>
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
        character: "~!@#$%^&*()_+"
      }
    },
    methods: {
      changeString() {

      },
      generatePwd() {

      },
      copyPass() {

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