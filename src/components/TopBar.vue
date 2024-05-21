<template>
  <div>
    <div class="header clearfix">
      <nav>
        <ul class="nav nav-pills pull-right">
          <li role="presentation" class="active">
            <router-link to="/">Home</router-link>
          </li>
          <li role="presentation">
            <router-link to="/doc">Doc</router-link>
          </li>
        </ul>
      </nav>
    </div>

    <div class="jumbotron">
      <h1>Password Generater</h1>
      <p>the official tool to generate passwd</p>
      <p>
        <router-link to="/doc">View Doc</router-link>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TopBar',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
