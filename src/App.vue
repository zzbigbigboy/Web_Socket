<template>
  <div id="nav">
    <router-view />
    <div id="loading">
      <svg
        width="48"
        height="48"
        viewBox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#fff"
      >
        <g fill="none" fill-rule="evenodd">
          <g transform="translate(1 1)" stroke-width="2">
            <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
      </svg>
      <div class="text">连接断开，重连中..</div>
    </div>
  </div>
</template>

<style lang="less">
html,
body {
  padding: 0;
  margin: 0;
}
* {
  font-family: "SimSun";
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#loading {
  position: absolute;
  left: calc(50% - 80px);
  top: calc(50% - 80px);
  width: 160px;
  height: 170px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  display: none;
  .text {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    font-size: 14px;
    color: #fff;
    padding: 15px 0;
    white-space:nowrap;
    overflow: hidden;
  }
}
</style>
