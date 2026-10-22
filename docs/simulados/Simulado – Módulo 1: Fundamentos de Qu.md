**Simulado – Módulo 1: Fundamentos de Qualidade (Prof. Vitor Castro)**

Baseado integralmente nos slides de *Fundamentos* e no *Guia de Estudo* (incluindo as pegadinhas e complementos do guia). As questões são não triviais: exigem diferenciação precisa, aplicação de conceitos, interpretação de relações e cuidado com as armadilhas clássicas.

---

### Parte 1 – Questões de Prova

**Questão 1 (Múltipla escolha)**  
Um sistema de emissão de boletos funciona corretamente (gera o boleto, calcula juros e multas e registra o pagamento), mas é lento, tem interface confusa, não registra logs de auditoria e o código é monolítico e difícil de alterar. Segundo Sommerville (2011) e a abordagem do módulo, qual a avaliação mais precisa da qualidade desse sistema?

a) Alta, porque a funcionalidade foi corretamente implementada.  
b) Baixa, pois qualidade depende também dos atributos não funcionais.  
c) Média, porque os custos de qualidade foram controlados.  
d) Alta para o usuário final, baixa apenas para o desenvolvedor.  
e) Indeterminada, pois qualidade é puramente subjetiva e não pode ser avaliada.

**Questão 2 (Discursiva / aplicação)**  
Um programador escreve `if (idade > 18)` em vez de `if (idade >= 18)`.  
Explique, usando a cadeia do IEEE 610.12 (e o que o slide e o guia reforçam), o que é o **erro**, o que é o **defeito** e o que é a **falha** neste caso. Além disso, responda: um defeito pode existir sem nunca gerar falha? Por quê? E o que o teste revela versus o que a depuração faz?

**Questão 3 (Múltipla escolha + justificativa curta)**  
No slide de “Custos associados a Qualidade”, a “Coleta de métricas” aparece no grupo dos custos **causados pela falta de qualidade**. Qual interpretação mais alinhada ao material e ao guia é correta?

a) Coletar métricas é sempre um custo de falha.  
b) O slide classifica assim; no entanto, a coleta de métricas também pode ser vista como investimento de avaliação (Pressman).  
c) Métricas só geram custo quando o projeto já está em produção.  
d) Isso indica que o professor considera métricas irrelevantes para a qualidade.  
e) Coleta de métricas é exclusivamente custo de prevenção.

**Questão 4 (Verdadeiro ou Falso com justificativa)**  
“O Controle da Qualidade está contido dentro da Garantia da Qualidade.”  
Justifique com base no diagrama do slide e nas definições da NBR ISO 9000 apresentadas no guia.

**Questão 5 (Múltipla escolha)**  
Qual par de atributos da tabela do slide é mais frequentemente confundido e qual a distinção correta (segundo o guia, alinhado ao Sommerville traduzido)?

a) Segurança (safety) = resistir a ataques; Proteção (security) = não causar danos a pessoas.  
b) Segurança (safety) = não causar danos a pessoas, ambiente ou patrimônio; Proteção (security) = resistir a ataques e acessos indevidos.  
c) Ambos significam a mesma coisa: proteção de dados.  
d) Segurança é atributo funcional; Proteção é não funcional.  
e) Segurança refere-se apenas a confiabilidade; Proteção a robustez.

**Questão 6 (Discursiva curta)**  
Cite as três formas principais de alcançar qualidade apresentadas no slide e explique, em uma frase cada, por que a técnica de gerenciamento de projetos (estimativa, cronograma e gestão de riscos) impacta diretamente a qualidade do produto.

**Questão 7 (Múltipla escolha)**  
No capítulo de Software Quality do SWEBOK v4, qual das opções abaixo **não** faz parte das quatro subáreas principais mostradas no slide?

a) Fundamentos (cultura e ética, valor e custo da qualidade, padrões, modelos e certificações, dependability).  
b) Processo de Gestão da Qualidade.  
c) Processo de Garantia da Qualidade (SQA).  
d) Ferramentas de Qualidade.  
e) Métricas de Processo e Produto (como subárea isolada de primeiro nível).

**Questão 8 (Aplicação / cenários)**  
Uma empresa investiu pesado em inspeções e revisões técnicas nas fases de requisitos e projeto. Em produção, o número de defeitos encontrados pelo cliente caiu drasticamente. Relacione esse resultado com:  
1) a curva de custo de correção de defeitos (Boehm) e  
2) os números citados no guia sobre retrabalho e inspeções.

---

### Parte 2 – Flashcards

**Flashcard 1**  
**Frente:** Defeito × Falha (definição do slide + cadeia completa)  
**Verso:** Defeito = imperfeição que faz parte do produto (implementação incorreta). Falha = resultado errado observado, provocado por um defeito ou condição inesperada. Cadeia IEEE: Erro (humano) → Defeito/Falta (no produto) → Falha (na execução). Um defeito pode nunca gerar falha se o trecho não for executado.

**Flashcard 2**  
**Frente:** Controle da Qualidade vs Garantia da Qualidade (foco, natureza e atividades do slide)  
**Verso:** Controle: foco no produto, detecta defeitos (testes, revisões, inspeções). Garantia: foco no processo, dá suporte e confiança (auditorias, padrões de produto e processo, planejamento dos testes). Controle está contido na Garantia.

**Flashcard 3**  
**Frente:** Por que a qualidade é complexa e subjetiva?  
**Verso:** Depende de quem avalia (usuário: facilidade e ausência de falhas; desenvolvedor: manutenibilidade e testabilidade; gerente/cliente: prazo e custo). ISO 9000: grau em que características inerentes satisfazem requisitos (explícitos ou implícitos). Também depende de atributos não funcionais (Sommerville).

**Flashcard 4**  
**Frente:** Perspectivas de avaliação da qualidade (slide)  
**Verso:** Tamanho do software, número de pessoas envolvidas, ferramentas utilizadas e custos associados à qualidade. Quanto maior o tamanho e o número de pessoas, maior a complexidade e a probabilidade de defeitos.

**Flashcard 5**  
**Frente:** Custos para buscar a qualidade × Custos causados pela falta de qualidade  
**Verso:** Busca (investimento): planejamento, testes, gestão de riscos, revisões técnicas, produção de artefatos. Falta: correção de defeitos, efeitos colaterais, coleta de métricas (classificação do slide). Corrigir cedo é muito mais barato.

**Flashcard 6**  
**Frente:** Segurança × Proteção (tabela de atributos)  
**Verso:** Segurança (safety) = o sistema não causa danos a pessoas, ambiente ou patrimônio. Proteção (security) = resistir a ataques e acessos não autorizados.

**Flashcard 7**  
**Frente:** O que o SWEBOK organiza no capítulo de Qualidade?  
**Verso:** 4 subáreas: Fundamentos; Processo de Gestão da Qualidade; Processo de Garantia da Qualidade (SQA); Ferramentas de Qualidade. O SWEBOK organiza o conhecimento; as normas detalham como aplicá-lo.

---

### Gabarito / Respostas-modelo

**Q1:** b  
**Q2:** Erro = engano humano do programador. Defeito = a linha incorreta que ficou no código. Falha = quando um usuário de exatamente 18 anos é barrado. Sim, um defeito pode existir sem gerar falha se aquele trecho/condição nunca for executado. Teste revela falhas; depuração localiza e corrige o defeito.  
**Q3:** b (o slide classifica assim; Pressman trata coleta de métricas mais como avaliação/prevenção).  
**Q4:** Verdadeiro. O diagrama mostra o Controle dentro da Garantia. Controle foca no atendimento dos requisitos (produto); Garantia foca em prover confiança de que os requisitos serão atendidos (processo).  
**Q5:** b  
**Q6:** Métodos da Engenharia de Software; Técnicas de gerenciamento de projetos; Implantação de Controle e Garantia da Qualidade. Gerenciamento mal feito gera pressão de prazo → pressão gera defeitos.  
**Q7:** e  
**Q8:** Boehm mostrou que corrigir em requisitos/projeto é ordens de magnitude mais barato que em produção. O guia cita que o retrabalho consome em média 40–50% do esforço e cai para 10–20% com inspeções (Jones); inspeções aumentam produtividade em 30–50% (Gilb e Graham).

---

Quer que eu gere mais questões (discursivas longas, questões de associação ou um segundo simulado focado só nas pegadinhas)? Ou prefere que eu transforme isso em um PDF formatado para imprimir/estudar?