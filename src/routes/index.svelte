<!-- <NavBar/>
<section id="landing">
  <p id="big-name">PATRICK R STOEBENAU</p>
  <p id="work-title">Full Stack Web Developer</p>
</section> -->
<section style="height: 100vh;">
  <Backdrop3D/>
</section>
<NavBarSticky/>
<section id="tech">
  <img src="img/logos/frameworks.png" alt="frameworks">
  <img src="img/logos/mysql.svg" alt="mysql">
  <img src="img/logos/nodejs.png" alt="nodejs">
  <img src="img/logos/php.png" alt="php">
</section>
<section id="portfolio">
  <p>PORTFOLIO</p>
  <div class="grid-container">
    {#each websites as website}
      <WebsitePreview website={website}/>
    {/each}
  </div>
</section>
<section id="contact">
  <h1>Let's Get in Touch</h1>
  <div class="container">
    <div id="contact-info">
      <div id="contact-info-details">
        <p>Name: Patrick Stoebenau</p>
        <p>Email: <a href="mailto:pstoebenau@knights.ucf.edu">pstoebenau@knights.ucf.edu</a></p>
        <p>Phone: <a href="tel:+1-407-406-7925">(407)-406-7925</a></p>
        <p>Github: <a href="https://github.com/pstoebenau">github.com/pstoebenau</a></p>
        <p>Gitlab: <a href="https://gitlab.com/pstoebenau">gitlab.com/pstoebenau</a></p>
        <p>Resume: <a href="https://resume.pstoebenau.ml">resume.pstoebenau.ml</a></p>
      </div>
    </div>
    <form id="contact-form">
      <label for="fname" required>First Name *</label>
      <input type="text" required name="entry.146756468" placeholder="John">
      <label for="lname">Last Name *</label>
      <input type="text" required name="entry.1565109759" placeholder="Watson">
      <label for="email">Email *</label>
      <input type="email" required name="entry.1112572281" placeholder="jwatson@example.com">
      <label for="phone">Phone Number</label>
      <input type="text" name="entry.587981600" placeholder="555-555-5555">
      <label for="feedback">Contact Reason *</label>
      <textarea required name="entry.1138540646"></textarea>
      <input type="submit" id="submit-button" name="submit" value="Submit">
    </form>
  </div>
</section>

<script lang="ts">
   import NavBar from '../components/NavBar.svelte';
   import NavBarSticky from '../components/NavBarSticky.svelte';
   import WebsitePreview from '../components/WebsitePreview.svelte';
   import Backdrop3D from '../components/Backdrop3D.svelte';

   const websites = [
    {
      url: "https://chillchili.netlify.app",
      img: "img/websites/chillchili.jpg"
    },
    {
      url: "http://evader.pstoebenau.ml/",
      img: "img/websites/evader.png"
    },
    {
      url: "https://bicbacboe.pstoebenau.ml/",
      img: "img/websites/bicbacboe.jpg"
    },
    {
      url: "https://leech.pstoebenau.ml/",
      img: "img/websites/leech.png"
    },
    {
      url: "https://crownheritagelaw.com",
      img: "img/websites/crownheritagelaw.jpg"
    },
    {
      url: "https://techknights.pstoebenau.ml/",
      img: "img/websites/technightswebsite.jpg"
    },
    {
      url: "https://polynn.pstoebenau.ml",
      img: "img/websites/polyregnn.jpg"
    },
    {
      url: "https://4dprojection.pstoebenau.ml/",
      img: "img/websites/4dproj.jpg"
    },
    {
      url: "https://nnmnist.pstoebenau.ml",
      img: "img/websites/nnmnist.jpg"
    },
    {
      url: "http://trader.ml/",
      img: "img/websites/trader.jpg"
    },
    {
      url: "http://writing.pstoebenau.ml/",
      img: "img/websites/writing.jpg"
    },
    {
      url: "http://resume.pstoebenau.ml/",
      img: "img/websites/resume.jpg"
    },
    {
      url: "http://epic.pstoebenau.ml/",
      img: "img/websites/old.jpg"
    },
  ];
</script>

<style lang="scss">
$navbarHeight: 100px;
$techbarHeight: 100px;

#landing {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - #{$techbarHeight});
  background-color: black;

  .background {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    filter: brightness(80%);
  }

  p {
    z-index: 1;
    margin: 10px 20px;
    text-align: center;
    color: #f4f3ee;
  }

  #big-name {
    font-size: 5rem;
  }

  #work-title {
    font-size: 3rem;
  }
}

#tech {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 100%;
  align-items: center;
  width: 100%;
  height: $techbarHeight;
  background-color: #111;
  z-index: 2;
  box-shadow: 0 -10px 10px 0 rgba(0, 0, 0, 0.3),
      0 10px 10px 0 rgba(0, 0, 0, 0.3);

  img {
    object-fit: contain;
    width: 90%;
    max-height: 80%;
    z-index: inherit;
  }
}

#portfolio {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  p {
    color: #111;
    font-size: 3rem;
    margin: 50px 0;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 450px 450px 450px;
    grid-template-rows: 1fr 1fr;
    justify-items: stretch;
    gap: 50px;
    margin-bottom: 50px;
  }
}

#contact {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: calc(100vh - #{$navbarHeight});

  h1 {
    font-weight: 600;
    font-size: 2.5rem;
    margin: 50px;
    text-align: center;
  }

  .container {
    display: flex;
    justify-content: center;
    margin: 0 10px;
  }

  #contact-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 50px;

    #contact-info-details {
      display: flex;
      flex-direction: column;
      justify-content: center;

      p {
        margin: 0 0 25px 0;
        font-size: 1.2rem;
      }
  
      a {
        text-decoration: underline;
      }
    }
  }

  #contact-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 300px;
    margin-left: 50px;

    input, textarea {
      box-sizing: border-box;
      width: 100%;
      border-radius: 5px;
    }

    #submit-button {
      margin: 15px 0;
      background-color: #86d4a7;
    }
  }
}

@media screen and (max-width: 1000px) {
  #big-name {
    font-size: 3rem !important;
  }

  #work-title {
    font-size: 1.5rem !important;
  }

  #portfolio p {
    font-size: 2rem;
  }

  .grid-container {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    width: 90%;
  }

  #contact {
    .container {
      flex-direction: column;
    }

    #contact-info {
      margin: 0 10px;
    }

    #contact-form {
      margin: 0 10px;
    }
  }
}

@media screen and (max-width: 1500px) {
  .grid-container {
    grid-template-columns: 450px 450px !important;
  }
}
</style>