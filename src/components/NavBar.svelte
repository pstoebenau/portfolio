<div class="navbar">
  <a href="#landing">Home</a>
  <a href="#portfolio">Portfolio</a>
  <a href="#contact">Contact</a>
  <a href="https://resume.patrickstoebenau.com">Resume</a>
</div>

<style>
.navbar {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  left: 50%;
  transform: translateX(-50%);
  height: 100px;
  width: 50%;
  top: 0;
  font-size: 2rem;
  z-index: 2;
}
.navbar a {
  color: #eee;
}

@media screen and (max-width: 1000px) {
  .navbar {
    width: 90%;
    font-size: 1.5rem;
  }
}
</style>