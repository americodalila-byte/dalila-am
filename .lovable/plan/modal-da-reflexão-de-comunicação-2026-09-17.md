# Modal da reflexão de Comunicação

## Implementação
- Alterar somente o título do primeiro card para “No amor, você joga tênis ou frescobol?”.
- Tornar somente o CTA do primeiro card interativo, abrindo um modal sobre a página sem alterar a URL.
- Criar o modal na identidade visual existente, com o texto fornecido em parágrafos e ênfase discreta nas duas frases centrais.
- Permitir fechamento por X, clique no fundo e tecla ESC, manter foco acessível e bloquear a rolagem da página enquanto aberto.
- Garantir leitura confortável e rolagem interna no desktop e no celular.
- Registrar apenas `{ event: "open_reflexao_comunicacao" }` no `dataLayer` quando o consentimento estiver ativo.

## Validação
- Confirmar que os outros dois cards e o restante do site não mudaram.
- Testar abertura, fechamento, foco, rolagem, URL inalterada e comportamento mobile.
- Verificar que o evento ocorre uma vez por abertura somente após consentimento.
