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
      "Overwatch 2 é uma emocionante sequência do icônico jogo de tiro em equipe, onde a cooperação é a chave para a vitória! Neste jogo, você se junta a uma equipe de heróis únicos, cada um com habilidades especiais e estilos de combate distintos. Prepare-se para explorar mapas vibrantes enquanto participa de intensas batalhas online. Com novos modos de jogo e uma narrativa envolvente, Overwatch 2 não é apenas sobre disparos, mas sobre estratégia e trabalho em equipe. Aprenda a dominar seus heróis favoritos e a coordenar com seus amigos para derrotar o time adversário e salvar o mundo!",
    courses: ow_courses,
    terminology: ow_terminologies,
  },
  {
    id: 2,
    name: "League of Legends",
    image: leaguelegendsimage,
    description:
      "League of Legends é um dos jogos de estratégia em tempo real mais populares do mundo, onde cada partida é uma nova aventura em um campo de batalha de 5 contra 5. Escolha entre uma vasta gama de campeões, cada um com habilidades únicas e funções específicas, para formar uma equipe imbatível. Seu objetivo? Destruir o Nexus inimigo! Mas não se deixe enganar; a vitória não vem apenas da habilidade individual, mas da sinergia e comunicação com seu time. Aprenda a artimanha de cada campeão e desenvolva táticas que farão você e sua equipe se destacarem nas Lanes e na selva!",
    courses: lol_courses,
    terminology: lol_terminologies,
  },
  {
    id: 3,
    name: "Valorant",
    image: valorantimage,
    description:
      "Valorant é um jogo de tiro tático que combina a precisão de um FPS com as habilidades especiais de personagens, conhecidos como 'Agentes'. Aqui, cada partida é uma disputa estratégica onde a comunicação e o trabalho em equipe são essenciais. Prepare-se para usar sua mira afiada e habilidades únicas para desarmar a bomba ou eliminar a equipe adversária. Valorant oferece uma experiência de jogo que requer tanto raciocínio tático quanto habilidade de atirador. Pratique suas estratégias e descubra como cada agente pode influenciar o jogo, tornando cada partida uma experiência única e emocionante!",
    courses: valorant_courses,
    terminology: valorant_terminologies,
  },
  {
    id: 4,
    name: "Counter Strike 2",
    image: cs2image,
    description:
      "Counter Strike 2 é a mais nova versão do clássico jogo de tiro em primeira pessoa que redefiniu o gênero. Aqui, você entra em combate com equipes de terroristas e contra-terroristas em mapas desafiadores. A comunicação e a estratégia são fundamentais para garantir a vitória em intensos combates multiplayer. Use uma variedade de armas e táticas para completar objetivos e dominar seus oponentes. Com gráficos aprimorados e novas mecânicas de jogo, Counter Strike 2 mantém a essência que conquistou milhões de fãs ao redor do mundo. Prepare-se para afinar sua mira e mostrar suas habilidades em cada partida!",
    courses: cs_courses,
    terminology: cs2_terminologies,
  },
];
