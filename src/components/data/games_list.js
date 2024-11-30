import overwatchimage from "../../images/overwatch.png";
import leaguelegendsimage from "../../images/LOL.png";
import valorantimage from "../../images/valorant.jpg";
import cs2image from "../../images/cs2.jpeg";

import {
  ow_terminologies,
  cs2_terminologies,
  lol_terminologies,
  valorant_terminologies,
} from "./terminologies_lists";

import {
  ow_courses,
  cs_courses,
  lol_courses,
  valorant_courses,
} from "./courses_list";

export const games_list = [
  {
    id: 1,
    name: "Overwatch 2",
    image: overwatchimage,
    description:
      "Overwatch 2 é uma mescla entre MOBA e FPS, onde a cooperação é a chave para a vitória! Aprenda a dominar conceitos fundamentais para dominar suuas futuras partidas!",
    courses: ow_courses,
    terminology: ow_terminologies,
  },
  {
    id: 2,
    name: "League of Legends",
    image: leaguelegendsimage,
    description:
      "League of Legends é um dos jogos de estratégia em tempo real mais populares do mundo, onde cada partida é é baseada em um campo de batalha de 5 contra 5.",
    courses: lol_courses,
    terminology: lol_terminologies,
  },
  {
    id: 3,
    name: "Valorant",
    image: valorantimage,
    description:
      "Valorant é um jogo de tiro tático que combina a precisão de um FPS com as habilidades especiais de personagens, conhecidos como 'Agentes'.",
    courses: valorant_courses,
    terminology: valorant_terminologies,
  },
  {
    id: 4,
    name: "Counter Strike 2",
    image: cs2image,
    description:
      "Counter Strike 2 é a mais nova versão do clássico jogo de tiro em primeira pessoa que redefiniu o gênero. Aqui, você entra em combate com equipes de terroristas e contra-terroristas.",
    courses: cs_courses,
    terminology: cs2_terminologies,
  },
];
