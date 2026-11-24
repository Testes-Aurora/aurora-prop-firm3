# aurora-prop-firm3[README.md](https://github.com/user-attachments/files/35369534/README.md)
# Aurora — protótipo de Prop Firm

Interface inicial em português para uma prop firm. O projeto é estático (HTML, CSS e JavaScript) e pode ser publicado gratuitamente pelo GitHub Pages.

## Como visualizar
Abra `index.html` no navegador.

## Como publicar no GitHub Pages
1. Crie um repositório público chamado `aurora-prop-firm` no GitHub.
2. Envie todos os arquivos desta pasta para a raiz do repositório.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/ (root)`, depois salve.
6. Aguarde a publicação; o GitHub exibirá o endereço do site na própria página de configurações.

## O que este protótipo contém
- Dashboard visual com saldo, equity, P&L e drawdown ilustrativos.
- Progresso de desafio e indicadores de regras.
- Histórico fictício de operações.
- Área de payout demonstrativa.
- Layout adaptável para celular.

## Importante — ainda não é uma plataforma financeira funcional
Todos os números e operações são fictícios. Não há login real, banco de dados, conexão com MetaTrader 5, checkout, cálculo de risco confiável nem transferência de dinheiro. O botão de payout é apenas demonstrativo.

Antes de operar com clientes, será necessário implementar backend seguro, autenticação, banco de dados, integração MT5, trilha de auditoria, proteção contra manipulação de resultados, termos e revisão jurídica/regulatória no Brasil. Nunca use dados fictícios como se fossem resultados reais.

## Próxima etapa recomendada
Definir as regras exatas do desafio (tamanho da conta, alvo, perda diária, perda máxima, dias mínimos, divisão de lucro e periodicidade de payout). Depois, construir autenticação e backend antes de conectar contas reais.
