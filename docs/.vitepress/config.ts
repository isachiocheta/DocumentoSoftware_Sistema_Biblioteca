import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'pt-BR',
  title: 'Library Software',
  description: 'Sistema de gerenciamento de biblioteca.',

  themeConfig: {
    nav: [
      { text: 'Sobre Nós', link: '/8_sobre_nos' },
      { text: 'Contatos', link: '/9_contatos' },
    ],

    sidebar: [
      {
        text: 'Introdução',
        link: '/1_introducao',
        collapsed: true,
        items: [
          { text: 'Objetivo', link: '/1_introducao#objetivo' },
          { text: 'Escopo', link: '/1_introducao#escopo' },
          { text: 'Público-alvo', link: '/1_introducao#publico-alvo' },
        ],
      },
      {
        text: 'Descrição do Projeto',
        link: '/2_descricao_projeto',
        collapsed: true,
        items: [
          { text: 'Visão Geral do Projeto', link: '/2_descricao_projeto#visao-geral-do-projeto' },
          { text: 'Canvas do Projeto', link: '/2_descricao_projeto#canvas-do-projeto' },
          { text: 'Stakeholders', link: '/2_descricao_projeto#stakeholders' },
          { text: 'Objetivos', link: '/2_descricao_projeto#objetivos' },
        ],
      },
      {
        text: 'Principais Recursos e Funcionalidades',
        link: '/3_principais_recursos',
        collapsed: true,
        items: [
          { text: 'Catalogação de livros', link: '/3_principais_recursos#catalogacao-de-livros' },
          { text: 'Consulta', link: '/3_principais_recursos#consulta' },
          { text: 'Reserva', link: '/3_principais_recursos#reserva' },
          { text: 'Devolução', link: '/3_principais_recursos#devolucao' },
          { text: 'Multas', link: '/3_principais_recursos#multas' },
          { text: 'Empréstimo', link: '/3_principais_recursos#emprestimo' },
          { text: 'Gerenciamento de conta', link: '/3_principais_recursos#gerenciamento-de-conta' },
          { text: 'Requisitos Funcionais e Não Funcionais', link: '/3_principais_recursos#requisitos-funcionais-e-nao-funcionais' },
        ],
      },
      {
        text: 'Diagrama de Casos de Uso',
        link: '/4_diagrama_casos_uso',
        collapsed: true,
        items: [
          { text: 'Descrição de Casos de Uso', link: '/4_diagrama_casos_uso#descricao-de-casos-de-uso' },
        ],
      },
      {
        text: 'Diagrama de Classe',
        link: '/5_diagrama_classe',
        collapsed: true,
        items: [
          { text: 'Descrição', link: '/5_diagrama_classe#descricao-de-classe' },
        ],
      },
      {
        text: 'Cronograma e Entrega',
        link: '/6_cronograma_entrega',
        collapsed: true,
        items: [
          { text: 'Cronograma e prazos', link: '/6_cronograma_entrega#cronograma-e-prazos' },
          { text: 'Custos e orçamento', link: '/6_cronograma_entrega#custos-e-orcamento '},
        ],
      },
      {
        text: 'Riscos e Mitigação',
        link: '/7_riscos_mitigacao',
        collapsed: true,
        items: [
          { text: 'Análise de Riscos', link: '/7_riscos_mitigacao#analise-de-riscos' },
        ],
      },
      
      {
        text: 'Sobre Nós',
        link: '/8_sobre_nos',
        collapsed: true,
        items: [
          { text: 'Quem Somos', link: '/8_sobre_nos#quem-somos' },
          { text: 'Nossa Missão', link: '/8_sobre_nos#nossa-missao' },
          { text: 'Nossa Visão', link: '/8_sobre_nos#nossa-visao' },
        ],
      },
      {
        text: 'Contatos',
        link: '/9_contatos',
        collapsed: true,
        items: [
          { text: 'Endereço', link: '/9_contatos#endereco' },
          { text: 'Telefone', link: '/9_contatos#telefone' },
          { text: 'Email', link: '/9_contatos#email' },
        ],
      },
    ],
  },
});