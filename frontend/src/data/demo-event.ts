import oud from "../assets/event-demos/oud.png";
import projection from "../assets/event-demos/projection.png";
import andaloussiyat from "../assets/event-demos/andaloussiyat.png";
import mosaicDance from "../assets/event-demos/mosaic-dance.png";
import auditorium from "../assets/event-demos/auditorium.png";
import audience from "../assets/event-demos/audience.png";

const demoCards = [
  { title: "Initiation au oud", image: oud, featured: true, summary: "Écoute quelques mélodies au oud et découvre comment cet instrument à cordes produit son timbre." },
  { title: "Atelier de mosaïque" },
  { title: "Projection et discussion", image: projection, summary: "Regarder un film ensemble et échanger sur ce qu’il nous évoque." },
  { title: "Découverte des contes du Maghreb", image: auditorium, summary: "Écouter des contes du Maghreb et découvrir leurs personnages." },
  { title: "Atelier de cuisine levantine" },
  { title: "Rencontre autour de la poésie arabe", image: andaloussiyat, startsAt: "2026-11-12", summary: "Lire quelques poèmes arabes et partager ses impressions.", past: true },
  { title: "Découverte du dabké", image: mosaicDance, startsAt: "2026-10-29", summary: "Découvrir les premiers pas du dabké, une danse collective du Levant.", past: true },
  { title: "Atelier de broderie palestinienne" },
  { title: "Rencontre autour des bandes dessinées مُعاوَنة", image: audience, startsAt: "2026-10-22", summary: "Feuilleter des bandes dessinées et échanger autour de leurs histoires.", past: true },
  { title: "Pique-nique culturel" },
];

export const demoUpcomingEvents = import.meta.env.DEV
  ? demoCards.map((card, index) => ({
      ...card,
      startsAt: card.startsAt ?? `2027-02-${String(index + 1).padStart(2, "0")}`,
    }))
  : [];


const featuredEvent = demoUpcomingEvents.find((event) => event.featured);

export const demoEvent = featuredEvent?.image && featuredEvent.summary ? {
  title: featuredEvent.title,
  image: featuredEvent.image.src,
  startsAt: `${featuredEvent.startsAt}T18:00:00+01:00`,
  schedule: `${new Intl.DateTimeFormat("fr-FR", { dateStyle: "full", timeZone: "UTC" }).format(new Date(featuredEvent.startsAt))} à 18 h`,
  venue: "Campus de Saint-Martin-d’Hères · lieu fictif",
  summary: featuredEvent.summary,
  participationUrl: "#participation-demo",
  demo: true,
} : undefined;
