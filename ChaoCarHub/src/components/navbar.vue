<template>
  <nav
    class="navbar border_t"
    role="navigation"
    aria-label="main navigation"
    style="background: var(--color-gradient)"
  >
    <div class="navbar-brand">
      <a
        class="navbar-item has-text-white is-size-5 has-text-weight-bold"
        href=""
      >
        Cha<img
          src="https://media.discordapp.net/attachments/1072181252964233328/1076461183864934431/9611156.png"
        />
        CarHUB
      </a>
      <a
        role="button"
        class="navbar-burger has-text-centered"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <div class="is-size-7"><a href="index.html">HOME</a></div>
        <div class="is-size-7"><a href="view_car.html">CAR</a></div>
        <div class="is-size-7"><a href="me_checkout.html">ME</a></div>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <router-link to="/">
            <img
              src="https://media.discordapp.net/attachments/1072181252964233328/1073627391571808316/1177455.png"
            />
          </router-link>
        </div>
        <div class="navbar-item">
          <router-link to="/showcar">
            <img
              src="https://media.discordapp.net/attachments/1072181252964233328/1073627928706949120/9610755.png"
            />
          </router-link>
        </div>
        <div class="navbar-item has-dropdown is-hoverable has-text-centered">
          <a class="navbar-link">
            <router-link to="/myrent">
              <img
                src="https://media.discordapp.net/attachments/1072181252964233328/1073622193784754257/1177568.png"
              />
            </router-link>
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item">
              <router-link to="/sign_in">
                <strong>Sign in</strong>
              </router-link>
            </a>
            <a class="navbar-item">
              <router-link to="/sign_up">
                <strong>Sign up</strong>
              </router-link>
            </a>
          </div>
        </div>
        <div class="navbar-item">
          <router-link to="/admin"> admin </router-link>
        </div>
        <div class="navbar-item"></div>
      </div>
    </div>
  </nav>
</template>
