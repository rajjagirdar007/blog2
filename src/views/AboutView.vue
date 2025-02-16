// AboutPage.vue
<template>
  <div class="about-container">
    <!-- Hero Section with animated background -->
    <section class="hero">
      <div class="hero-background">
        <div class="animated-shape shape-1"></div>
        <div class="animated-shape shape-2"></div>
        <div class="animated-shape shape-3"></div>
      </div>
      <div class="hero-content">
        <h1>About PeakMind</h1>
        <p class="hero-subtitle">Transforming Mental Health Support Through Innovation</p>
      </div>
    </section>

    <div class="main-content">
      <!-- Left side content -->
      <div class="content-side">
        <!-- Inspiration Section with enhanced visuals -->
        <section class="content-section inspiration">
          <div class="section-content">
            <div class="text-content">
              <div class="section-header">
                <div class="accent-line"></div>
                <h2>The Inspiration</h2>
              </div>
              <p class="enhanced-text">
                At PeakMind, we've observed the gaps in the mental health system. Current solutions 
                are often unengaging, costly, and leave people feeling unsatisfied. We grew tired 
                of seeing people struggle without innovative methods to support their healing. 
              </p>
              <div class="highlight-box">
                <p class="highlight-text">
                  We believe everyone deserves mental health support without any barriers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Purpose Section with enhanced layout -->
        <section class="content-section purpose">
          <div class="section-content">
            <div class="text-content">
              <div class="section-header">
                <div class="accent-line"></div>
                <h2>We're Here For You</h2>
              </div>
              <p class="enhanced-text">
                No matter who you are, you deserve an affordable and engaging mental health solution. 
                Through our gamified education experience and personalization, we connect you to a 
                system specifically designed to support and empower you on your unique mental health journey.
              </p>
            </div>
          </div>
        </section>
      </div>

      <!-- Right side values -->
      <div class="values-side">
        <section class="content-section values">
          <div class="section-header">
            <div class="accent-line"></div>
            <h2>Our Values</h2>
          </div>
          <div class="values-grid">
            <div class="value-card" v-for="(value, index) in values" :key="index">
              <div class="card-content">
                <div class="icon-container">
                  <span class="icon">{{ value.icon }}</span>
                </div>
                <h3>{{ value.title }}</h3>
                <p>{{ value.description }}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- Call to Action with enhanced design -->
    <section class="content-section cta">
      <div class="section-content">
        <div class="cta-card">
          <h2>Join Us on This Journey</h2>
          <p>Together, we can create a world where mental health support is accessible to everyone.</p>
          <button class="cta-button" @click="navigateToArticles">
            <span>Explore Our Blog</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'AboutPage',
  
  setup() {
    const router = useRouter()
    
    const values = ref([
      {
        icon: '🎯',
        title: 'Accessibility',
        description: 'Making mental health support available to everyone, everywhere.'
      },
      {
        icon: '💡',
        title: 'Innovation',
        description: 'Continuously improving and adapting our approach to better serve you.'
      },
      {
        icon: '🤝',
        title: 'Empowerment',
        description: 'Providing tools and knowledge for sustainable mental wellness.'
      },
    ])

    const navigateToArticles = () => {
      router.push('/articles')
    }

    return {
      values,
      navigateToArticles
    }
  }
}
</script>

<style scoped>
.about-container {
  width: 100%;
  overflow-x: hidden;
}

/* Enhanced Hero Section */
.hero {
  position: relative;
  height: 70vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #4A90E2 0%, #50C878 100%);
}

.animated-shape {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: float 20s infinite;
}

.shape-1 {
  width: 300px;
  height: 300px;
  top: -50px;
  left: -50px;
  animation-delay: 0s;
}

.shape-2 {
  width: 200px;
  height: 200px;
  bottom: 50px;
  right: 100px;
  animation-delay: -5s;
}

.shape-3 {
  width: 150px;
  height: 150px;
  top: 50%;
  left: 50%;
  animation-delay: -10s;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(50px, 50px) rotate(90deg); }
  50% { transform: translate(0, 100px) rotate(180deg); }
  75% { transform: translate(-50px, 50px) rotate(270deg); }
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 0 2rem;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  font-family: 'Montserrat', sans-serif;
  opacity: 0;
  animation: fadeUp 1s ease forwards;
}

.hero-subtitle {
  font-size: 1.75rem;
  font-weight: 400;
  opacity: 0;
  animation: fadeUp 1s ease 0.3s forwards;
}

/* Enhanced Section Styles */
.content-section {
  padding: 2rem 2rem;
}

.section-content {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.section-header.centered {
  justify-content: center;
  text-align: center;
}

.accent-line {
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #4A90E2, #50C878);
  border-radius: 2px;
}

/* Enhanced Mission Card */
.mission-card {
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transform: translateY(-100px);
  margin-bottom: -100px;
}

.mission-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

/* Enhanced Content Grid */
.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
}

/* Enhanced Text Content */
.enhanced-text {
  font-size: 1.25rem;
  line-height: 1.8;
  color: #4A5568;
  margin-bottom: 2rem;
}

.highlight-box {
  background: linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(80, 200, 120, 0.1) 100%);
  padding: 2rem;
  border-radius: 12px;
  border-left: 4px solid #4A90E2;
}

/* Enhanced Values Grid */
.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.value-card {
  position: relative;
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.value-card:hover {
  transform: translateY(-8px);
}

.icon-container {
  position: relative;
  width: 80px;
  height: 80px;
  margin-bottom: 1.5rem;
}

.icon {
  position: relative;
  z-index: 1;
  font-size: 2.5rem;
}

.icon-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(74, 144, 226, 0.2) 0%, rgba(80, 200, 120, 0.2) 100%);
  border-radius: 50%;
  transform: scale(0.8);
  transition: transform 0.3s ease;
}

.value-card:hover .icon-background {
  transform: scale(1.1);
}

/* Enhanced CTA Section */
.cta-card {
  background: white;
  padding: 4rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #4A90E2 0%, #50C878 100%);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 2rem;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
}

/* Animations */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .content-section {
    padding: 4rem 1rem;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
  }

  .content-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .mission-card {
    transform: translateY(-50px);
    margin-bottom: -50px;
    padding: 2rem;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }

  .cta-card {
    padding: 2rem;
  }
}

.main-content {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.content-side {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.values-side {
  position: sticky;
  top: 2rem;
  height: fit-content;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.values-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.value-card {
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(80, 200, 120, 0.1) 100%);
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.value-card:hover {
  transform: translateX(8px);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .main-content {
    grid-template-columns: 1fr;
  }

  .values-side {
    position: static;
  }
}
</style>