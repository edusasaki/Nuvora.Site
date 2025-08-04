particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: { value: "#6b84c2" },
    shape: { type: "circle" },
    opacity: { value: 0.15 },
    size: { value: 3, random: true },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: { enable: true, speed: 6 },
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: false, mode: "push" },
    },
  },
  retina_detect: true,
});
function voltarhome() {
  const homeSection = document.getElementById("home");
  if (homeSection) {
    homeSection.scrollIntoView({ behavior: "smooth" });
  }
}
function irservico() {
  const servicoSection = document.getElementById("servico");
  if (servicoSection) {
    servicoSection.scrollIntoView({ behavior: "smooth" });
  }
}
function typeText(element, text, delay = 20, onComplete) {
  let i = 0;
  const interval = setInterval(() => {
    element.innerHTML += text.charAt(i);
    i++;
    if (i === text.length) {
      clearInterval(interval);
      if (onComplete) onComplete();
    }
  }, delay);
}

const title = document.getElementById("typed-title");
const subtitle = document.getElementById("typed-subtitle");

const textBefore =
  "Você foca no seu <span>negócio.</span> A gente cuida do seu ";
const textColor = "site.";
const fullTitle = textBefore + textColor;

let currentText = "";
let i = 0;

const typeFullTitle = () => {
  const interval = setInterval(() => {
    currentText += fullTitle.charAt(i);
    i++;

    if (i <= textBefore.length) {
      title.innerHTML = currentText;
    } else {
      const before = fullTitle.substring(0, textBefore.length);
      const after = fullTitle.substring(textBefore.length, i);
      title.innerHTML = `${before}<span class="gradient-text">${after}</span>`;
    }

    if (i === fullTitle.length) {
      clearInterval(interval);

      title.classList.add("glow");
      setTimeout(() => {
        title.classList.remove("glow");

    
        typeText(
          subtitle,
          "Sites rápidos, bonitos e preparados para escalar com seu negócio — seja você autônomo, empresa ou startup.",
          20
        );
      }, 500); 
    }
  }, 35); 
};

typeFullTitle();
const elementos = document.querySelectorAll(
  ".titulo-servico, .box, .orcamento, .sobre, .item, .word, .qm, .fluidtext, .fluidtextspan, .textchamativo, .subtitle, .input, .inputext, .options, .enviar, .formsimg, .msgs, .cellimg, .textcompro, .porcen, .footer"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("apareceu");
      } else {
        entry.target.classList.remove("apareceu");
      }
    });
  },
  { threshold: 0.2 }
);
elementos.forEach((el) => {
  observer.observe(el);
});
  emailjs.init("Lq3IKHcaj_MpJ43CA");

  document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_6sf768r", "template_3pnjcmr", this)
      .then(function() {
        alert("Mensagem enviada com sucesso!");
        document.getElementById("formulario").reset();
      }, function(error) {
        alert("Erro ao enviar a mensagem, tente novamente.");
        console.error(error);
      });
  });
  function irformulario() {
  const servicoSection = document.getElementById("contato");
  if (servicoSection) {
    servicoSection.scrollIntoView({ behavior: "smooth" });
  }
}
  const btn = document.getElementById("logo");
  const nav = document.querySelector("header nav");

  btn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });