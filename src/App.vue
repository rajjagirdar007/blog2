<template>
  <div id="app">
    <nav class="main-nav">
      <div class="nav-content">
        <div class="nav-brand">
          <router-link to="/blog">PeakMind</router-link>
        </div>
        <div class="nav-links">
          <router-link to="/blog">Home</router-link>
          <router-link to="/blog/about">About</router-link>
        </div>
      </div>
    </nav>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2D3748;
  background-color: #F5F7FA;
  min-height: 100vh;
}

/* Navigation styles */
.main-nav {
  background-color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
}

.nav-brand a {
  color: #4A90E2;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: #718096;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #4A90E2;
}

.nav-links a.router-link-active {
  color: #4A90E2;
  font-weight: 600;
}

main {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
}

/* Responsive design */
@media (max-width: 768px) {
  .nav-content {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
}
</style>
