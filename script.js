let tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2 } });
let flagPoles = CSSRulePlugin.getRule(".card:before");

tl.to("h1", {
  "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
  opacity: 1,
  y: 0,
  duration: 2.2,
})
  .to(
    ".form",
    {
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      opacity: 1,
      y: 0,
    },
    "-=2"
  )
  .from(".card", { scaleY: 0, stagger: 0.2 }, "-=2")
  .from(
    flagPoles,
    { opacity: 0, stagger: 1, transform: "translateY(100px)" },
    "-=2"
  )

  .to(
    ".title, .desc",
    {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 1.2,
    },
    "-=2"
  )
  .to("footer", { opacity: 1 }, "-=1");
