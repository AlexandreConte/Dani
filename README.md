# Anima Odontologia — Assistente Virtual com IA
**Branch**: assistente-ia

**Aplicação**: site institucional da Anima Odontologia
**Tecnologias principais**: Next.js, React, TypeScript e Google Gemini

## Sobre o projeto
Esta branch adiciona ao site da Anima Odontologia um assistente virtual que utiliza inteligência artificial para facilitar o atendimento inicial aos visitantes.

A proposta é permitir que a pessoa converse em linguagem natural, tire dúvidas administrativas sobre a clínica e seus serviços e encontre um caminho simples para entrar em contato com a dentista.

O assistente não substitui uma consulta e não realiza avaliação clínica. Quando o visitante relata sintomas ou busca orientação sobre sua saúde bucal, o chatbot deve esclarecer seus limites e direcioná-lo ao atendimento profissional.

## Por que utilizar IA?
Os visitantes podem expressar suas dúvidas de diferentes maneiras, sem necessariamente conhecer o nome de um procedimento ou saber em qual seção do site encontrar uma informação.

A IA é utilizada para interpretar essas mensagens em linguagem natural, considerar o contexto recente da conversa e formular respostas adequadas às informações cadastradas sobre a clínica. Uma interface baseada somente em menus ou palavras-chave seria menos flexível para lidar com diferentes formas de escrever a mesma pergunta.

A integração com IA foi escolhida para:
- Interpretar perguntas escritas livremente pelo visitante.
- Manter o contexto das mensagens recentes durante a conversa.
- Responder dúvidas administrativas utilizando as informações fornecidas pela clínica.
- Identificar quando o visitante deseja falar com a dentista e facilitar o encaminhamento.

A IA não deve inventar preços, serviços, horários ou disponibilidade. Quando não houver informação suficiente, deve reconhecer a limitação e orientar o visitante a entrar em contato com a clínica.

## Como funciona:
1. O visitante abre o chatbot pelo botão flutuante disponível no site.
2. O componente de interface recebe a mensagem e mantém as mensagens recentes no estado do React.
3. O frontend envia a mensagem atual e parte do histórico para POST /api/assistant.
4. A API valida os dados recebidos, monta o contexto da conversa e obtém as instruções do assistente a partir da configuração da clínica.
5. O backend envia a solicitação ao Google Gemini por meio do SDK @google/genai.
6. A resposta gerada é devolvida ao frontend e exibida na conversa.
7. Quando necessário, o visitante pode seguir para o contato humano pelo link do WhatsApp da clínica.
Fluxo simplificado

## Como configurar as variáveis de ambiente
Crie um arquivo .env.local na raiz do projeto, no mesmo nível do `package.json`:
```
GEMINI_API_KEY=sua_chave_do_google_gemini
GEMINI_MODEL=modelo_gemini_disponivel_na_sua_conta
```
O modelo que melhor se adequou para um tempom de resposta mais rápido foi o `gemini-3.5-flash-lite`

Substitua os valores de exemplo pelos dados correspondentes:
- GEMINI_API_KEY: chave de API do Google Gemini. É utilizada exclusivamente no servidor.
- GEMINI_MODEL: identificador do modelo Gemini habilitado para o projeto.

### Iniciar o ambiente de desenvolvimento
```
npm run dev
```

A aplicação ficará disponível no endereço indicado pelo Next.js, normalmente http://localhost:3000.
