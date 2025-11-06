import {
    FaReact,
    FaPython,
    FaMicrochip,
    FaDatabase,
    FaJava,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiArduino,
    SiNextdotjs,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiSpringboot,
} from "react-icons/si";

import { type Project } from "../types/Project";

export const projects: Project[] = [
    {
        title: "Projects Hub",
        description: "Hub pessoal de projetos, reunindo e organizando meus trabalhos em um só lugar.",
        tech: [FaReact, SiTailwindcss, SiNextdotjs],
        github: "https://github.com/DaviMunhoz1005/projects-hub",
        image: "/projects/projects-hub.png",
    },
    {
        title: "ESP32 Smart Environment",
        description: "Monitoramento ambiental inteligente com ESP32 e sensores IoT em tempo real.",
        tech: [FaMicrochip, SiArduino, FaDatabase],
        github: "https://github.com/DaviMunhoz1005/esp32-smart-environment",
        image: "/projects/esp32.png",
    },
    {
        title: "Smart Football Scoreboard",
        description: "Placar digital com ESP32, LCD e controle via MQTT, ideal para jogos locais.",
        tech: [FaMicrochip, SiArduino, SiJavascript],
        github: "https://github.com/DaviMunhoz1005/smart-football-scoreboard",
        image: "/projects/scoreboard.png",
    },
    {
        title: "Gemini Product Embedder",
        description: "Sistema que usa IA para gerar descrições e embeddings de produtos automaticamente.",
        tech: [FaPython, FaDatabase],
        github: "https://github.com/DaviMunhoz1005/gemini-product-embedder",
        image: "/projects/gemini.png",
    },
    {
        title: "Waiter AI Agent",
        description: "Agente de IA para restaurantes: automatiza pedidos e comunicação com cozinha.",
        tech: [FaPython, FaDatabase],
        github: "https://github.com/DaviMunhoz1005/waiter-ai-agent",
        image: "/projects/waiter.png",
    },
    {
        title: "Investment AI Agent Team",
        description: "Equipe de agentes inteligentes que analisam investimentos e fazem recomendações.",
        tech: [FaPython, FaDatabase],
        github: "https://github.com/DaviMunhoz1005/investment-ai-agent-team",
        image: "/projects/investment.png",
    },
    {
        title: "Drawback Docs",
        description: "Sistema para controle e documentação de processos Drawback em empresas.",
        tech: [SiHtml5, SiCss3, SiJavascript],
        github: "https://github.com/DaviMunhoz1005/Drawback.docs",
        image: "/projects/drawback.png",
    },
    {
        title: "GedApi",
        description: "API REST para gerenciamento documental, com autenticação e upload seguro.",
        tech: [FaJava, SiSpringboot, FaDatabase],
        github: "https://github.com/DaviMunhoz1005/GedApi",
        image: "/projects/gedapi.png",
    },
];
