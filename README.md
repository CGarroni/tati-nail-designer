# Tati Silva Nail Designer

Landing page premium desenvolvida para apresentação comercial de uma nail designer local, com foco em autoridade, presença digital e conversão inicial via WhatsApp.

## Visão geral

Este projeto foi criado como um MVP comercial para prospecção, priorizando:

- apresentação profissional da marca;
- clareza visual e percepção de valor;
- navegação simples e responsiva;
- contato rápido via WhatsApp;
- base preparada para futuras evoluções.

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## Estrutura do projeto

```bash
app/
  favicon.ico
  globals.css
  layout.tsx
  page.tsx

components/
  Footer.tsx
  Galeria.tsx
  Header.tsx
  Hero.tsx
  Highlights.tsx
  Localizacao.tsx
  Servicos.tsx
  Sobre.tsx
  WhatsappButton.tsx

public/
  hero-capa.png
  galeria/
```

## Funcionalidades do MVP

- Header sticky com navegação por âncoras
- Hero com CTA principal
- Seção de diferenciais
- Seção sobre
- Seção de serviços
- Galeria visual
- Localização e horário
- Footer com links úteis
- Botão flutuante de WhatsApp
- Metadata para SEO local e compartilhamento social

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse:

```bash
http://localhost:3000
```

## Build de produção

```bash
npm run build
npm run start
```

## Personalização

Os principais pontos que podem ser ajustados para novos projetos são:

- textos e copy das seções;
- links de WhatsApp;
- endereço e horário;
- imagens da galeria;
- imagem preview em `public/hero-capa.png`;
- metadata em `app/layout.tsx`.

## Deploy

O projeto está preparado para deploy na Vercel.

Fluxo recomendado:

1. Revisar funcionamento local
2. Validar build de produção
3. Subir para GitHub
4. Importar na Vercel
5. Ajustar a URL final em `metadataBase`

## Evoluções futuras

- refinamento visual premium;
- automação de atendimento;
- agendamento online;
- integração com backend;
- painel operacional mais completo.

## Desenvolvimento

Projeto desenvolvido por **Francisco Garroni**.

Desenvolvedor Full Stack com foco em landing pages premium, interfaces modernas e soluções digitais para negócios locais.