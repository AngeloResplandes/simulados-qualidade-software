**Simulado — Módulo 3: Métricas**  

*(Qualidade de Software — Prof. Vitor Castro)*  

Questões não triviais, baseadas nos slides de Métricas e no Guia de Estudos (seção 3).

---

### Questões de Prova

**1. (Objetiva)**  

Sobre a diferença entre medida, medição e métrica, assinale a alternativa correta:  

a) “O módulo tem 12 defeitos” é uma métrica, enquanto “3 defeitos por KLOC” é apenas uma medida.  

b) Medição é o ato de determinar uma medida; métrica (IEEE) é a medida quantitativa do grau com que um sistema, componente ou processo possui determinado atributo, normalmente relacionando medidas.  

c) Medida e métrica são sinônimos na definição do IEEE.  

d) A coleta de dados brutos já constitui uma métrica.  

e) Métrica é sempre direta e observável, enquanto medida é sempre calculada.

**2. (Objetiva)**  

Considerando o diagrama “Medição ou Estimativa” do slide, qual afirmação está correta?  

a) Dados históricos de projetos terminados servem apenas para controle de projetos em andamento, nunca para previsões.  

b) Sem uma base histórica de medidas, não é possível fazer estimativas confiáveis de projetos futuros.  

c) Controle de projeto em andamento independe dos dados coletados.  

d) Previsões alimentam diretamente a base de dados, sem necessidade de medidas anteriores.  

e) O ciclo se encerra quando o projeto termina, sem feedback para projetos futuros.

**3. (Objetiva)**  

No processo de medição (Formulação → Coleta → Análise → Interpretação → Feedback), o que caracteriza corretamente a etapa de Feedback?  

a) É o momento em que se define quais métricas serão usadas.  

b) Consiste apenas em calcular as métricas a partir dos dados coletados.  

c) As recomendações resultantes realimentam a formulação, permitindo melhorar o processo e reformular as métricas.  

d) É a etapa em que se obtêm os dados brutos.  

e) Equivale à interpretação dos resultados, sem impacto posterior.

**4. (Objetiva)**  

Sobre o GQM (Goal/Question/Metric) de Basili, assinale a alternativa correta:  

a) É uma abordagem bottom-up: parte das métricas disponíveis e depois define os objetivos.  

b) Evita a coleta de métricas inúteis ao alinhar a medição a objetivos de negócio explícitos.  

c) Question é a etapa final, depois de já se ter definido as métricas.  

d) Goal, Question e Metric são independentes e podem ser definidos em qualquer ordem.  

e) O GQM não se aplica a características de produto, apenas a processos.

**5. (Objetiva)**  

Uma classe apresenta valor alto de WMC (Métodos Ponderados por Classe) e de CBO (Acoplamento entre Classes). Qual interpretação é mais adequada segundo as métricas CK?  

a) A classe é altamente reutilizável e fácil de testar.  

b) A classe tende a ser específica demais, difícil de reusar e de testar, com alta dependência de outras classes.  

c) Alto WMC indica baixa complexidade e alto CBO indica boa coesão.  

d) Esses valores altos são sempre desejáveis em projeto orientado a objetos.  

e) WMC e CBO não têm relação com testabilidade ou reusabilidade.

**6. (Discursiva)**  

Diferencie medida, medição e métrica, com exemplos claros. Explique por que a distinção é importante em um projeto de software e qual o papel dos números (decisões baseadas em fatos). (Definição + explicação + exemplo)

**7. (Discursiva)**  

Explique o processo de medição (ciclo Formulação → Coleta → Análise → Interpretação → Feedback) e relacione-o com o diagrama de Medição ou Estimativa. Mostre como a base histórica permite controle de projetos em andamento e previsões de projetos futuros. (Definição + explicação + exemplo)

**8. (Discursiva)**  

Descreva o GQM com um exemplo aplicado a um sistema real (ex.: melhorar confiabilidade). Explique a vantagem dessa abordagem em relação a coletar métricas sem objetivos claros. Inclua também um fator de influência (usuário ou hardware) que pode afetar a interpretação da métrica. (Definição + explicação + exemplo)

---

### Flashcards

**F1.** Defina medida, medição e métrica (IEEE).  

**R:** Medida = indicação quantitativa de um atributo (ex.: 12 defeitos). Medição = ato de determinar a medida. Métrica = medida quantitativa do grau em que um sistema/processo possui um atributo (ex.: defeitos/KLOC).

**F2.** Qual a moral do diagrama Medição ou Estimativa?  

**R:** Sem medir o passado, não se estima o futuro. A base histórica alimenta controle (projetos em andamento) e previsões (projetos futuros).

**F3.** Quais são as etapas do processo de medição e o que o Feedback faz?  

**R:** Formulação → Coleta → Análise → Interpretação → Feedback. O Feedback realimenta a formulação com recomendações para melhorar o processo e as métricas.

**F4.** O que é o GQM e quem o criou?  

**R:** Goal/Question/Metric (Basili, 1988). Abordagem top-down: define objetivo de medição, questões que indicam se foi atingido e métricas que respondem às questões.

**F5.** Cite uma vantagem do GQM.  

**R:** Evita coletar métricas inúteis e mantém a medição alinhada aos objetivos de negócio.

**F6.** Quais fatores de influência na medição de software são citados no slide?  

**R:** Influência do Usuário e Influência do Hardware. Comparações devem considerar o contexto.

**F7.** O que é Ponto de Função (APF) e qual sua vantagem?  

**R:** Técnica para dimensionar software a partir das funcionalidades vistas pelo usuário. Independente da tecnologia e pode ser usada cedo (nos requisitos).

**F8.** Cite quatro critérios de qualidade na especificação de requisitos.  

**R:** Peculiaridade/unicidade, rastreabilidade, entendimento e precisão.

**F9.** O que WMC alto e DIT alto indicam (métricas CK)?  

**R:** WMC alto: classe específica demais, difícil de reusar e testar. DIT alto: herda muito, fica mais complexa.

**F10.** O que mede o Índice de Maturidade do Software (IMS)?  

**R:** Estabilidade do produto. Quanto mais perto de 1, mais estável (menos mudanças de módulos).

**F11.** Cite duas métricas de interface para WebApps/Mobile.  

**R:** Esforço de cliques e carga de memória.

**F12.** Qual ferramenta de análise estática é destacada no slide e o que ela aponta?  

**R:** SonarQube. Aponta bugs, vulnerabilidades, code smells, duplicação, complexidade e cobertura de testes.

---

### Gabarito Comentado

**1.** **b** — Correto pela definição do IEEE e pela distinção do Guia. As outras alternativas invertem ou confundem os conceitos.

**2.** **b** — O diagrama e o Guia enfatizam que a base histórica é o coração da medição: sem medidas do passado, não há estimativas confiáveis para o futuro.

**3.** **c** — O Feedback fecha o ciclo e realimenta a formulação. As demais alternativas descrevem outras etapas.

**4.** **b** — O GQM é top-down e evita métricas inúteis ao partir de objetivos claros. As outras opções descrevem o processo de forma invertida ou incompleta.

**5.** **b** — Segundo as métricas CK (WMC e CBO), valores altos indicam dificuldade de reuso e teste e alta dependência. Não são desejáveis nesse contexto.

**6.**  

- **Definição:** Medida = quantitativo de um atributo; Medição = ato de obter a medida; Métrica = grau quantitativo de um atributo (relaciona medidas).  

- **Explicação:** Permitem decisões baseadas em fatos (estimar, acompanhar, avaliar qualidade, calcular ROI) em vez de achismos.  

- **Exemplo:** “12 defeitos” (medida); contar no relatório (medição); “3 defeitos/KLOC” (métrica).

**7.**  

- **Definição:** Ciclo Formulação (definir métricas) → Coleta → Análise → Interpretação → Feedback (que volta à formulação).  

- **Explicação:** Dados alimentam base histórica. Projetos terminados geram medidas; projetos em andamento usam para controle; projetos futuros usam para previsões.  

- **Exemplo:** Histórico de defeitos/KLOC de projetos anteriores permite estimar o mesmo indicador em um projeto novo e corrigir o rumo no projeto atual.

**8.**  

- **Definição:** GQM = Goal (objetivo) → Question (questões) → Metric (métricas).  

- **Explicação:** Alinha medição a objetivos e evita métricas inúteis. Fatores como usuário ou hardware influenciam a interpretação.  

- **Exemplo:** Goal = melhorar confiabilidade do sistema de vendas. Question = as falhas em produção estão diminuindo? Metric = falhas por mês por versão. A métrica de desempenho pode variar conforme o hardware do usuário.

---

**Como estudar:** Responda as discursivas sem consultar o material (use o padrão definição + explicação + exemplo). Depois confira o gabarito e revise com os flashcards. As questões exigem diferenciar conceitos, aplicar o ciclo de medição e interpretar métricas no contexto, não apenas memorizar nomes.