# Inventário — portfólio orientado a problemas

## Preservado

- `src/components/pages/HomePage.tsx`, `HomeHero.tsx` e `OriginBridge.tsx` permanecem no projeto sem sobrescrita. Eles contêm alterações locais anteriores e continuam como registro da home ES/0 original.
- Rotas existentes, incluindo `/brand` e `/p/[persona]`, foram mantidas fora da navegação principal nova.
- Ativos existentes foram reutilizados: vídeo de cadastro e presença, imagem do Criative Lab e fotografia de Emanuel.

## Criado ou reorganizado

- `src/data/cases.ts` centraliza os três cases principais e os estados das explorações.
- `/casos`, `/casos/events`, `/casos/itesam` e `/casos/criative-lab` substituem o modal como leitura principal dos cases.
- `/como-trabalho`, `/sobre`, `/contato` e `/exploracoes` oferecem rotas compartilháveis para a nova navegação.
- A home agora prioriza problema, evidência, casos e contato.
- A versão ES/0 anterior está preservada em `/v2`; a arquitetura orientada a problemas está em `/v3`. O seletor V2/V3 aparece nas duas versões.

## Conteúdo que ainda depende de validação

Os cases exibem explicitamente as lacunas, sem preencher fatos por inferência. Em especial: alternativas e risco operacional do Events; volume, decisões arquiteturais e aprendizados do ITESAM; e hipótese, público, sinais de valor e risco do Criative Lab.
