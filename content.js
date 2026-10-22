(function (root, data) {
  if (typeof module === "object" && module.exports) {
    module.exports = data;
  }
  if (root) root.SIMULADOS = data;
})(typeof globalThis !== "undefined" ? globalThis : this, [
  {
    id: "m1",
    short: "Fundamentos",
    title: "Simulado – Módulo 1: Fundamentos de Qualidade",
    professor: "Prof. Vitor Castro",
    intro:
      "Baseado integralmente nos slides de *Fundamentos* e no *Guia de Estudo* (incluindo as pegadinhas e complementos do guia). As questões são não triviais: exigem diferenciação precisa, aplicação de conceitos, interpretação de relações e cuidado com as armadilhas clássicas.",
    questions: [
      {
        id: "m1-q1",
        number: 1,
        kind: "mc",
        heading: "Questão 1 (Múltipla escolha)",
        prompt:
          "Um sistema de emissão de boletos funciona corretamente (gera o boleto, calcula juros e multas e registra o pagamento), mas é lento, tem interface confusa, não registra logs de auditoria e o código é monolítico e difícil de alterar. Segundo Sommerville (2011) e a abordagem do módulo, qual a avaliação mais precisa da qualidade desse sistema?",
        options: [
          { key: "a", text: "Alta, porque a funcionalidade foi corretamente implementada." },
          { key: "b", text: "Baixa, pois qualidade depende também dos atributos não funcionais." },
          { key: "c", text: "Média, porque os custos de qualidade foram controlados." },
          { key: "d", text: "Alta para o usuário final, baixa apenas para o desenvolvedor." },
          { key: "e", text: "Indeterminada, pois qualidade é puramente subjetiva e não pode ser avaliada." }
        ],
        answer: "b",
        gabarito: "b"
      },
      {
        id: "m1-q2",
        number: 2,
        kind: "discursive",
        heading: "Questão 2 (Discursiva / aplicação)",
        prompt:
          "Um programador escreve `if (idade > 18)` em vez de `if (idade >= 18)`.\nExplique, usando a cadeia do IEEE 610.12 (e o que o slide e o guia reforçam), o que é o **erro**, o que é o **defeito** e o que é a **falha** neste caso. Além disso, responda: um defeito pode existir sem nunca gerar falha? Por quê? E o que o teste revela versus o que a depuração faz?",
        gabarito:
          "Erro = engano humano do programador. Defeito = a linha incorreta que ficou no código. Falha = quando um usuário de exatamente 18 anos é barrado. Sim, um defeito pode existir sem gerar falha se aquele trecho/condição nunca for executado. Teste revela falhas; depuração localiza e corrige o defeito."
      },
      {
        id: "m1-q3",
        number: 3,
        kind: "mc",
        justification: true,
        heading: "Questão 3 (Múltipla escolha + justificativa curta)",
        prompt:
          "No slide de “Custos associados a Qualidade”, a “Coleta de métricas” aparece no grupo dos custos **causados pela falta de qualidade**. Qual interpretação mais alinhada ao material e ao guia é correta?",
        options: [
          { key: "a", text: "Coletar métricas é sempre um custo de falha." },
          {
            key: "b",
            text: "O slide classifica assim; no entanto, a coleta de métricas também pode ser vista como investimento de avaliação (Pressman)."
          },
          { key: "c", text: "Métricas só geram custo quando o projeto já está em produção." },
          { key: "d", text: "Isso indica que o professor considera métricas irrelevantes para a qualidade." },
          { key: "e", text: "Coleta de métricas é exclusivamente custo de prevenção." }
        ],
        answer: "b",
        gabarito:
          "b (o slide classifica assim; Pressman trata coleta de métricas mais como avaliação/prevenção)."
      },
      {
        id: "m1-q4",
        number: 4,
        kind: "vf",
        heading: "Questão 4 (Verdadeiro ou Falso com justificativa)",
        prompt:
          "“O Controle da Qualidade está contido dentro da Garantia da Qualidade.”\nJustifique com base no diagrama do slide e nas definições da NBR ISO 9000 apresentadas no guia.",
        options: [
          { key: "v", text: "Verdadeiro" },
          { key: "f", text: "Falso" }
        ],
        answer: "v",
        gabarito:
          "Verdadeiro. O diagrama mostra o Controle dentro da Garantia. Controle foca no atendimento dos requisitos (produto); Garantia foca em prover confiança de que os requisitos serão atendidos (processo)."
      },
      {
        id: "m1-q5",
        number: 5,
        kind: "mc",
        heading: "Questão 5 (Múltipla escolha)",
        prompt:
          "Qual par de atributos da tabela do slide é mais frequentemente confundido e qual a distinção correta (segundo o guia, alinhado ao Sommerville traduzido)?",
        options: [
          {
            key: "a",
            text: "Segurança (safety) = resistir a ataques; Proteção (security) = não causar danos a pessoas."
          },
          {
            key: "b",
            text: "Segurança (safety) = não causar danos a pessoas, ambiente ou patrimônio; Proteção (security) = resistir a ataques e acessos indevidos."
          },
          { key: "c", text: "Ambos significam a mesma coisa: proteção de dados." },
          { key: "d", text: "Segurança é atributo funcional; Proteção é não funcional." },
          { key: "e", text: "Segurança refere-se apenas a confiabilidade; Proteção a robustez." }
        ],
        answer: "b",
        gabarito: "b"
      },
      {
        id: "m1-q6",
        number: 6,
        kind: "discursive",
        heading: "Questão 6 (Discursiva curta)",
        prompt:
          "Cite as três formas principais de alcançar qualidade apresentadas no slide e explique, em uma frase cada, por que a técnica de gerenciamento de projetos (estimativa, cronograma e gestão de riscos) impacta diretamente a qualidade do produto.",
        gabarito:
          "Métodos da Engenharia de Software; Técnicas de gerenciamento de projetos; Implantação de Controle e Garantia da Qualidade. Gerenciamento mal feito gera pressão de prazo → pressão gera defeitos."
      },
      {
        id: "m1-q7",
        number: 7,
        kind: "mc",
        heading: "Questão 7 (Múltipla escolha)",
        prompt:
          "No capítulo de Software Quality do SWEBOK v4, qual das opções abaixo **não** faz parte das quatro subáreas principais mostradas no slide?",
        options: [
          {
            key: "a",
            text: "Fundamentos (cultura e ética, valor e custo da qualidade, padrões, modelos e certificações, dependability)."
          },
          { key: "b", text: "Processo de Gestão da Qualidade." },
          { key: "c", text: "Processo de Garantia da Qualidade (SQA)." },
          { key: "d", text: "Ferramentas de Qualidade." },
          { key: "e", text: "Métricas de Processo e Produto (como subárea isolada de primeiro nível)." }
        ],
        answer: "e",
        gabarito: "e"
      },
      {
        id: "m1-q8",
        number: 8,
        kind: "discursive",
        heading: "Questão 8 (Aplicação / cenários)",
        prompt:
          "Uma empresa investiu pesado em inspeções e revisões técnicas nas fases de requisitos e projeto. Em produção, o número de defeitos encontrados pelo cliente caiu drasticamente. Relacione esse resultado com:\n1) a curva de custo de correção de defeitos (Boehm) e\n2) os números citados no guia sobre retrabalho e inspeções.",
        gabarito:
          "Boehm mostrou que corrigir em requisitos/projeto é ordens de magnitude mais barato que em produção. O guia cita que o retrabalho consome em média 40–50% do esforço e cai para 10–20% com inspeções (Jones); inspeções aumentam produtividade em 30–50% (Gilb e Graham)."
      }
    ],
    flashcards: [
      {
        id: "m1-f1",
        number: 1,
        front: "Defeito × Falha (definição do slide + cadeia completa)",
        back: "Defeito = imperfeição que faz parte do produto (implementação incorreta). Falha = resultado errado observado, provocado por um defeito ou condição inesperada. Cadeia IEEE: Erro (humano) → Defeito/Falta (no produto) → Falha (na execução). Um defeito pode nunca gerar falha se o trecho não for executado."
      },
      {
        id: "m1-f2",
        number: 2,
        front: "Controle da Qualidade vs Garantia da Qualidade (foco, natureza e atividades do slide)",
        back: "Controle: foco no produto, detecta defeitos (testes, revisões, inspeções). Garantia: foco no processo, dá suporte e confiança (auditorias, padrões de produto e processo, planejamento dos testes). Controle está contido na Garantia."
      },
      {
        id: "m1-f3",
        number: 3,
        front: "Por que a qualidade é complexa e subjetiva?",
        back: "Depende de quem avalia (usuário: facilidade e ausência de falhas; desenvolvedor: manutenibilidade e testabilidade; gerente/cliente: prazo e custo). ISO 9000: grau em que características inerentes satisfazem requisitos (explícitos ou implícitos). Também depende de atributos não funcionais (Sommerville)."
      },
      {
        id: "m1-f4",
        number: 4,
        front: "Perspectivas de avaliação da qualidade (slide)",
        back: "Tamanho do software, número de pessoas envolvidas, ferramentas utilizadas e custos associados à qualidade. Quanto maior o tamanho e o número de pessoas, maior a complexidade e a probabilidade de defeitos."
      },
      {
        id: "m1-f5",
        number: 5,
        front: "Custos para buscar a qualidade × Custos causados pela falta de qualidade",
        back: "Busca (investimento): planejamento, testes, gestão de riscos, revisões técnicas, produção de artefatos. Falta: correção de defeitos, efeitos colaterais, coleta de métricas (classificação do slide). Corrigir cedo é muito mais barato."
      },
      {
        id: "m1-f6",
        number: 6,
        front: "Segurança × Proteção (tabela de atributos)",
        back: "Segurança (safety) = o sistema não causa danos a pessoas, ambiente ou patrimônio. Proteção (security) = resistir a ataques e acessos não autorizados."
      },
      {
        id: "m1-f7",
        number: 7,
        front: "O que o SWEBOK organiza no capítulo de Qualidade?",
        back: "4 subáreas: Fundamentos; Processo de Gestão da Qualidade; Processo de Garantia da Qualidade (SQA); Ferramentas de Qualidade. O SWEBOK organiza o conhecimento; as normas detalham como aplicá-lo."
      }
    ]
  },
  {
    id: "m2",
    short: "Normas",
    title: "Simulado — Módulo 2: Normas e Organismos Normativos",
    professor: "Prof. Vitor Castro",
    intro: "Questões não triviais, baseadas nos slides de Normas e no Guia de Estudos (seção 2).",
    study:
      "Faça primeiro as questões discursivas sem olhar o material. Depois compare com o gabarito (definição + explicação + exemplo). Use os flashcards para revisão ativa. As questões exigem diferenciação e aplicação, não apenas memorização de nomes.",
    questions: [
      {
        id: "m2-q1",
        number: 1,
        kind: "mc",
        heading: "1. (Objetiva)",
        prompt: "Sobre a distinção entre padrões *de facto* e *de jure*, assinale a alternativa correta:",
        options: [
          {
            key: "a",
            text: "Um padrão *de jure* surge do uso consolidado no mercado, enquanto o *de facto* exige aprovação formal por organismo oficial."
          },
          {
            key: "b",
            text: "Normas IEEE, ISO e ABNT são exemplos clássicos de padrões *de facto*, pois foram adotadas espontaneamente pela indústria de software."
          },
          {
            key: "c",
            text: "A citação de Koscianski e Soares (2006) reforça que normas internacionais criam uma base comum para julgar qualidade e definir critérios em contratos — característica típica dos padrões *de jure*."
          },
          {
            key: "d",
            text: "O formato PDF, antes de se tornar norma formal, e o teclado QWERTY são exemplos de padrões *de jure*."
          },
          { key: "e", text: "A ABNT não pode criar padrões *de jure* porque também realiza certificação." }
        ],
        answer: "c",
        gabarito:
          "c — A citação de Koscianski reforça exatamente o papel das normas *de jure* como base comum para contratos. As demais alternativas invertem ou confundem os conceitos."
      },
      {
        id: "m2-q2",
        number: 2,
        kind: "mc",
        heading: "2. (Objetiva)",
        prompt:
          "Uma empresa exibe o selo ISO 9001 e afirma que “toda a organização está certificada em qualidade”. Com base no material do módulo, qual afirmação é mais precisa?",
        options: [
          {
            key: "a",
            text: "O selo vale automaticamente para a empresa inteira, pois a ISO 9001 é uma norma de sistema de gestão."
          },
          {
            key: "b",
            text: "É necessário verificar o escopo da certificação e quais setores efetivamente cumprem a regulamentação, pois a certificação tem escopo definido."
          },
          { key: "c", text: "A certificação é permanente e não exige avaliações periódicas." },
          {
            key: "d",
            text: "A pré-auditoria já garante a certificação final, tornando a auditoria oficial apenas formal."
          },
          {
            key: "e",
            text: "A empresa pode se autocertificar se seguir o fluxo de pré-auditoria → correções → auditoria."
          }
        ],
        answer: "b",
        gabarito:
          "b — O material enfatiza que a certificação tem escopo. O selo não vale automaticamente para toda a empresa; é preciso verificar quais setores cumprem a regulamentação."
      },
      {
        id: "m2-q3",
        number: 3,
        kind: "mc",
        heading: "3. (Objetiva)",
        prompt:
          "Sobre a família ISO 25000 (SQuaRE) em relação à antiga ISO 9126, assinale a afirmativa correta:",
        options: [
          { key: "a", text: "A ISO 9126 foi apenas renomeada para ISO 25010, sem mudanças estruturais." },
          {
            key: "b",
            text: "A SQuaRE organiza a qualidade em divisões (gestão, modelos, medição, requisitos e avaliação) e permite adaptar o modelo no nível das características, mas não das subcaracterísticas."
          },
          {
            key: "c",
            text: "A estrutura de um modelo de qualidade é característica → subcaracterística → medida, e é possível adaptar no nível das subcaracterísticas, mas não no das características."
          },
          { key: "d", text: "Qualidade do produto e qualidade em uso são a mesma coisa na ISO 25002." },
          { key: "e", text: "Trade-offs não são considerados na família SQuaRE." }
        ],
        answer: "c",
        gabarito:
          "c — Correto segundo o Guia e a ISO 25002. A alternativa b inverte o que se pode adaptar."
      },
      {
        id: "m2-q4",
        number: 4,
        kind: "mc",
        heading: "4. (Objetiva)",
        prompt: "Qual das normas listadas no slide trata especificamente de processos do ciclo de vida de software?",
        options: [
          { key: "a", text: "ISO/IEC 25051:2014" },
          { key: "b", text: "ISO/IEC 25002:2024" },
          { key: "c", text: "ISO/IEC/IEEE 12207:2017" },
          { key: "d", text: "ISO/IEC 20926:2009" },
          { key: "e", text: "NBR ISO 9001" }
        ],
        answer: "c",
        gabarito: "c — ISO/IEC/IEEE 12207:2017 é a norma de processos do ciclo de vida de software."
      },
      {
        id: "m2-q5",
        number: 5,
        kind: "discursive",
        heading: "5. (Discursiva)",
        prompt:
          "Diferencie padrões *de facto* e *de jure*, cite exemplos de cada e explique a importância da citação de Koscianski e Soares (2006) no contexto de contratos e negociações de software. (Definição + explicação + exemplo)",
        gabarito:
          "Definição: *De facto* = adotado pelo uso do mercado; *de jure* = criado por organismo oficial.\nExplicação: Normas *de jure* reduzem ambiguidade e criam linguagem comum.\nExemplo: QWERTY e PDF (antes da formalização) são *de facto*; IEEE, ISO e ABNT são *de jure*. A citação de Koscianski mostra que isso permite definir critérios objetivos em contratos."
      },
      {
        id: "m2-q6",
        number: 6,
        kind: "discursive",
        heading: "6. (Discursiva)",
        prompt:
          "Descreva o fluxo geral do processo de certificação apresentado no slide, os três cenários possíveis de resultado e a validade típica da certificação. Explique por que é necessário um agente externo regulamentado e credenciado. (Definição + explicação + exemplo)",
        gabarito:
          "Definição/Fluxo: Pré-auditoria → correções → auditoria → recomendações (com relatórios de não-conformidade).\nExplicação: Exige agente externo para garantir independência.\nCenários e validade: Certificação imediata com pequenas correções; certificação com correções sérias; ou não certificar. Validade típica de 3 anos com avaliação anual (pode ser cancelada).\nExemplo: Empresa com selo ISO 9001 — o selo vale apenas para o escopo/setor certificado."
      },
      {
        id: "m2-q7",
        number: 7,
        kind: "discursive",
        heading: "7. (Discursiva)",
        prompt:
          "Explique o que mudou da ISO 9126 para a família ISO 25000 (SQuaRE). Aborde a estrutura de um modelo de qualidade (característica → subcaracterística → medida), as duas perspectivas (qualidade do produto e qualidade em uso) e a ideia de trade-offs. (Definição + explicação + exemplo)",
        gabarito:
          "Definição: A ISO 9126 foi substituída pela família SQuaRE (ISO 25000).\nExplicação: Estrutura característica → subcaracterística → medida; adaptação permitida nas subcaracterísticas. Duas perspectivas: qualidade do produto (do sistema) e qualidade em uso (efeito no usuário). Trade-offs existem (melhorar uma característica pode prejudicar outra).\nExemplo: Aumentar segurança (produto) pode reduzir usabilidade (impacto em uso)."
      }
    ],
    flashcards: [
      {
        id: "m2-f1",
        number: 1,
        front: "O que diferencia um padrão *de facto* de um padrão *de jure*?",
        back: "*De facto* surge do uso consolidado pelo mercado (ninguém oficializou). *De jure* é criado e aprovado por organismo oficial (IEEE, ISO, ABNT)."
      },
      {
        id: "m2-f2",
        number: 2,
        front: "Qual a principal função das normas internacionais segundo Koscianski e Soares (2006)?",
        back: "Oferecem uma base comum para julgar a qualidade dos produtos e definir critérios em contratos e negociações."
      },
      {
        id: "m2-f3",
        number: 3,
        front: "Qual comitê da ABNT trata de Tecnologias da Informação e Transformação Digital?",
        back: "ABNT/CB-021."
      },
      {
        id: "m2-f4",
        number: 4,
        front: "Qual a sequência típica do processo de certificação?",
        back: "Pré-auditoria (gera relatório de não-conformidade) → Correções → Auditoria (gera novo relatório de não-conformidade) → Recomendações."
      },
      {
        id: "m2-f5",
        number: 5,
        front: "Quais são os três cenários possíveis após a auditoria?",
        back: "(1) Certificação imediata com pequenas sugestões; (2) Certificação com correções mais sérias a fazer; (3) Não certificar."
      },
      {
        id: "m2-f6",
        number: 6,
        front: "Qual a validade típica de uma certificação e o que ocorre se não houver avaliação anual?",
        back: "Normalmente 3 anos, com avaliação anual. Sem a avaliação, a certificação pode ser cancelada."
      },
      {
        id: "m2-f7",
        number: 7,
        front: "Qual família de normas substituiu a ISO 9126 e como ela é organizada?",
        back: "ISO 25000 (SQuaRE). Divisões principais: 2500n (gestão), 2501n (modelos), 2502n (medição), 2503n (requisitos), 2504n (avaliação)."
      },
      {
        id: "m2-f8",
        number: 8,
        front: "O que significa a estrutura “característica → subcaracterística → medida” e o que se pode adaptar?",
        back: "Estrutura de um modelo de qualidade (ISO 25002). Pode-se adaptar no nível das subcaracterísticas, mas não no das características."
      },
      {
        id: "m2-f9",
        number: 9,
        front: "Diferencie qualidade do produto e qualidade em uso.",
        back: "Qualidade do produto = característica do próprio sistema (ex.: segurança). Qualidade em uso = efeito sobre o usuário em contexto real (ex.: satisfação)."
      },
      {
        id: "m2-f10",
        number: 10,
        front: "Qual norma trata da visão geral do modelo de qualidade e seu uso?",
        back: "ISO/IEC 25002:2024."
      },
      {
        id: "m2-f11",
        number: 11,
        front: "Por que a certificação exige agente externo regulamentado e credenciado?",
        back: "A empresa não se certifica sozinha. O agente garante independência e credibilidade ao processo."
      },
      {
        id: "m2-f12",
        number: 12,
        front: "O que a ISO 25002 destaca sobre trade-offs em modelos de qualidade?",
        back: "Melhorar uma característica pode piorar outra (ex.: mais segurança pode reduzir usabilidade; otimizar desempenho pode reduzir manutenibilidade)."
      }
    ]
  },
  {
    id: "m3",
    short: "Métricas",
    title: "Simulado — Módulo 3: Métricas",
    professor: "Prof. Vitor Castro",
    intro: "Questões não triviais, baseadas nos slides de Métricas e no Guia de Estudos (seção 3).",
    study:
      "Responda as discursivas sem consultar o material (use o padrão definição + explicação + exemplo). Depois confira o gabarito e revise com os flashcards. As questões exigem diferenciar conceitos, aplicar o ciclo de medição e interpretar métricas no contexto, não apenas memorizar nomes.",
    questions: [
      {
        id: "m3-q1",
        number: 1,
        kind: "mc",
        heading: "1. (Objetiva)",
        prompt: "Sobre a diferença entre medida, medição e métrica, assinale a alternativa correta:",
        options: [
          {
            key: "a",
            text: "“O módulo tem 12 defeitos” é uma métrica, enquanto “3 defeitos por KLOC” é apenas uma medida."
          },
          {
            key: "b",
            text: "Medição é o ato de determinar uma medida; métrica (IEEE) é a medida quantitativa do grau com que um sistema, componente ou processo possui determinado atributo, normalmente relacionando medidas."
          },
          { key: "c", text: "Medida e métrica são sinônimos na definição do IEEE." },
          { key: "d", text: "A coleta de dados brutos já constitui uma métrica." },
          { key: "e", text: "Métrica é sempre direta e observável, enquanto medida é sempre calculada." }
        ],
        answer: "b",
        gabarito:
          "b — Correto pela definição do IEEE e pela distinção do Guia. As outras alternativas invertem ou confundem os conceitos."
      },
      {
        id: "m3-q2",
        number: 2,
        kind: "mc",
        heading: "2. (Objetiva)",
        prompt: "Considerando o diagrama “Medição ou Estimativa” do slide, qual afirmação está correta?",
        options: [
          {
            key: "a",
            text: "Dados históricos de projetos terminados servem apenas para controle de projetos em andamento, nunca para previsões."
          },
          {
            key: "b",
            text: "Sem uma base histórica de medidas, não é possível fazer estimativas confiáveis de projetos futuros."
          },
          { key: "c", text: "Controle de projeto em andamento independe dos dados coletados." },
          {
            key: "d",
            text: "Previsões alimentam diretamente a base de dados, sem necessidade de medidas anteriores."
          },
          {
            key: "e",
            text: "O ciclo se encerra quando o projeto termina, sem feedback para projetos futuros."
          }
        ],
        answer: "b",
        gabarito:
          "b — O diagrama e o Guia enfatizam que a base histórica é o coração da medição: sem medidas do passado, não há estimativas confiáveis para o futuro."
      },
      {
        id: "m3-q3",
        number: 3,
        kind: "mc",
        heading: "3. (Objetiva)",
        prompt:
          "No processo de medição (Formulação → Coleta → Análise → Interpretação → Feedback), o que caracteriza corretamente a etapa de Feedback?",
        options: [
          { key: "a", text: "É o momento em que se define quais métricas serão usadas." },
          { key: "b", text: "Consiste apenas em calcular as métricas a partir dos dados coletados." },
          {
            key: "c",
            text: "As recomendações resultantes realimentam a formulação, permitindo melhorar o processo e reformular as métricas."
          },
          { key: "d", text: "É a etapa em que se obtêm os dados brutos." },
          { key: "e", text: "Equivale à interpretação dos resultados, sem impacto posterior." }
        ],
        answer: "c",
        gabarito:
          "c — O Feedback fecha o ciclo e realimenta a formulação. As demais alternativas descrevem outras etapas."
      },
      {
        id: "m3-q4",
        number: 4,
        kind: "mc",
        heading: "4. (Objetiva)",
        prompt: "Sobre o GQM (Goal/Question/Metric) de Basili, assinale a alternativa correta:",
        options: [
          {
            key: "a",
            text: "É uma abordagem bottom-up: parte das métricas disponíveis e depois define os objetivos."
          },
          {
            key: "b",
            text: "Evita a coleta de métricas inúteis ao alinhar a medição a objetivos de negócio explícitos."
          },
          { key: "c", text: "Question é a etapa final, depois de já se ter definido as métricas." },
          {
            key: "d",
            text: "Goal, Question e Metric são independentes e podem ser definidos em qualquer ordem."
          },
          { key: "e", text: "O GQM não se aplica a características de produto, apenas a processos." }
        ],
        answer: "b",
        gabarito:
          "b — O GQM é top-down e evita métricas inúteis ao partir de objetivos claros. As outras opções descrevem o processo de forma invertida ou incompleta."
      },
      {
        id: "m3-q5",
        number: 5,
        kind: "mc",
        heading: "5. (Objetiva)",
        prompt:
          "Uma classe apresenta valor alto de WMC (Métodos Ponderados por Classe) e de CBO (Acoplamento entre Classes). Qual interpretação é mais adequada segundo as métricas CK?",
        options: [
          { key: "a", text: "A classe é altamente reutilizável e fácil de testar." },
          {
            key: "b",
            text: "A classe tende a ser específica demais, difícil de reusar e de testar, com alta dependência de outras classes."
          },
          { key: "c", text: "Alto WMC indica baixa complexidade e alto CBO indica boa coesão." },
          { key: "d", text: "Esses valores altos são sempre desejáveis em projeto orientado a objetos." },
          { key: "e", text: "WMC e CBO não têm relação com testabilidade ou reusabilidade." }
        ],
        answer: "b",
        gabarito:
          "b — Segundo as métricas CK (WMC e CBO), valores altos indicam dificuldade de reuso e teste e alta dependência. Não são desejáveis nesse contexto."
      },
      {
        id: "m3-q6",
        number: 6,
        kind: "discursive",
        heading: "6. (Discursiva)",
        prompt:
          "Diferencie medida, medição e métrica, com exemplos claros. Explique por que a distinção é importante em um projeto de software e qual o papel dos números (decisões baseadas em fatos). (Definição + explicação + exemplo)",
        gabarito:
          "Definição: Medida = quantitativo de um atributo; Medição = ato de obter a medida; Métrica = grau quantitativo de um atributo (relaciona medidas).\nExplicação: Permitem decisões baseadas em fatos (estimar, acompanhar, avaliar qualidade, calcular ROI) em vez de achismos.\nExemplo: “12 defeitos” (medida); contar no relatório (medição); “3 defeitos/KLOC” (métrica)."
      },
      {
        id: "m3-q7",
        number: 7,
        kind: "discursive",
        heading: "7. (Discursiva)",
        prompt:
          "Explique o processo de medição (ciclo Formulação → Coleta → Análise → Interpretação → Feedback) e relacione-o com o diagrama de Medição ou Estimativa. Mostre como a base histórica permite controle de projetos em andamento e previsões de projetos futuros. (Definição + explicação + exemplo)",
        gabarito:
          "Definição: Ciclo Formulação (definir métricas) → Coleta → Análise → Interpretação → Feedback (que volta à formulação).\nExplicação: Dados alimentam base histórica. Projetos terminados geram medidas; projetos em andamento usam para controle; projetos futuros usam para previsões.\nExemplo: Histórico de defeitos/KLOC de projetos anteriores permite estimar o mesmo indicador em um projeto novo e corrigir o rumo no projeto atual."
      },
      {
        id: "m3-q8",
        number: 8,
        kind: "discursive",
        heading: "8. (Discursiva)",
        prompt:
          "Descreva o GQM com um exemplo aplicado a um sistema real (ex.: melhorar confiabilidade). Explique a vantagem dessa abordagem em relação a coletar métricas sem objetivos claros. Inclua também um fator de influência (usuário ou hardware) que pode afetar a interpretação da métrica. (Definição + explicação + exemplo)",
        gabarito:
          "Definição: GQM = Goal (objetivo) → Question (questões) → Metric (métricas).\nExplicação: Alinha medição a objetivos e evita métricas inúteis. Fatores como usuário ou hardware influenciam a interpretação.\nExemplo: Goal = melhorar confiabilidade do sistema de vendas. Question = as falhas em produção estão diminuindo? Metric = falhas por mês por versão. A métrica de desempenho pode variar conforme o hardware do usuário."
      }
    ],
    flashcards: [
      {
        id: "m3-f1",
        number: 1,
        front: "Defina medida, medição e métrica (IEEE).",
        back: "Medida = indicação quantitativa de um atributo (ex.: 12 defeitos). Medição = ato de determinar a medida. Métrica = medida quantitativa do grau em que um sistema/processo possui um atributo (ex.: defeitos/KLOC)."
      },
      {
        id: "m3-f2",
        number: 2,
        front: "Qual a moral do diagrama Medição ou Estimativa?",
        back: "Sem medir o passado, não se estima o futuro. A base histórica alimenta controle (projetos em andamento) e previsões (projetos futuros)."
      },
      {
        id: "m3-f3",
        number: 3,
        front: "Quais são as etapas do processo de medição e o que o Feedback faz?",
        back: "Formulação → Coleta → Análise → Interpretação → Feedback. O Feedback realimenta a formulação com recomendações para melhorar o processo e as métricas."
      },
      {
        id: "m3-f4",
        number: 4,
        front: "O que é o GQM e quem o criou?",
        back: "Goal/Question/Metric (Basili, 1988). Abordagem top-down: define objetivo de medição, questões que indicam se foi atingido e métricas que respondem às questões."
      },
      {
        id: "m3-f5",
        number: 5,
        front: "Cite uma vantagem do GQM.",
        back: "Evita coletar métricas inúteis e mantém a medição alinhada aos objetivos de negócio."
      },
      {
        id: "m3-f6",
        number: 6,
        front: "Quais fatores de influência na medição de software são citados no slide?",
        back: "Influência do Usuário e Influência do Hardware. Comparações devem considerar o contexto."
      },
      {
        id: "m3-f7",
        number: 7,
        front: "O que é Ponto de Função (APF) e qual sua vantagem?",
        back: "Técnica para dimensionar software a partir das funcionalidades vistas pelo usuário. Independente da tecnologia e pode ser usada cedo (nos requisitos)."
      },
      {
        id: "m3-f8",
        number: 8,
        front: "Cite quatro critérios de qualidade na especificação de requisitos.",
        back: "Peculiaridade/unicidade, rastreabilidade, entendimento e precisão."
      },
      {
        id: "m3-f9",
        number: 9,
        front: "O que WMC alto e DIT alto indicam (métricas CK)?",
        back: "WMC alto: classe específica demais, difícil de reusar e testar. DIT alto: herda muito, fica mais complexa."
      },
      {
        id: "m3-f10",
        number: 10,
        front: "O que mede o Índice de Maturidade do Software (IMS)?",
        back: "Estabilidade do produto. Quanto mais perto de 1, mais estável (menos mudanças de módulos)."
      },
      {
        id: "m3-f11",
        number: 11,
        front: "Cite duas métricas de interface para WebApps/Mobile.",
        back: "Esforço de cliques e carga de memória."
      },
      {
        id: "m3-f12",
        number: 12,
        front: "Qual ferramenta de análise estática é destacada no slide e o que ela aponta?",
        back: "SonarQube. Aponta bugs, vulnerabilidades, code smells, duplicação, complexidade e cobertura de testes."
      }
    ]
  },
  {
    id: "m4",
    short: "CMMI",
    title: "Simulado — Módulo 4: CMMI",
    professor: "Prof. Vitor Castro",
    intro: "Questões não triviais, baseadas nos slides de CMMI e no Guia de Estudos (seção 4).",
    study:
      "Responda as discursivas sem olhar (padrão definição + explicação + exemplo). Depois confira o gabarito e revise com os flashcards. As questões exigem diferenciar níveis, representações e a lógica de institucionalização, não apenas listar nomes.",
    questions: [
      {
        id: "m4-q1",
        number: 1,
        kind: "mc",
        heading: "1. (Objetiva)",
        prompt: "Sobre a diferença entre SW-CMM e CMMI, assinale a alternativa correta:",
        options: [
          { key: "a", text: "No SW-CMM o nível 2 chama-se Gerenciado; no CMMI chama-se Repetível." },
          {
            key: "b",
            text: "O SW-CMM era específico para software e organizado em KPAs; o CMMI surgiu para integrar vários modelos (DEV, Acquisition, Services) e oferece representações por estágio e contínua."
          },
          {
            key: "c",
            text: "O CMMI eliminou os níveis de maturidade e passou a usar apenas níveis de capacidade."
          },
          { key: "d", text: "O nível 1 do SW-CMM já possuía áreas de processo bem definidas." },
          { key: "e", text: "O CMMI manteve exatamente a mesma nomenclatura de níveis do SW-CMM." }
        ],
        answer: "b",
        gabarito:
          "b — Correto. O SW-CMM era específico e usava “Repetível” no nível 2; o CMMI integrou modelos e trouxe as duas representações. A alternativa a inverte os nomes."
      },
      {
        id: "m4-q2",
        number: 2,
        kind: "mc",
        heading: "2. (Objetiva)",
        prompt:
          "Na estrutura do CMMI-DEV, o que diferencia objetivos/práticas específicos de objetivos/práticas genéricos?",
        options: [
          {
            key: "a",
            text: "Específicos institucionalizam o processo; genéricos tratam das atividades próprias da área."
          },
          {
            key: "b",
            text: "Específicos são características únicas da área de processo (atingidas por práticas específicas); genéricos servem para institucionalizar o processo e valem para todas as áreas (atingidos por práticas genéricas)."
          },
          {
            key: "c",
            text: "Genéricos são exclusivos de cada área de processo, enquanto específicos são comuns a toda a organização."
          },
          {
            key: "d",
            text: "Não há diferença prática entre eles; ambos tratam apenas de atividades técnicas."
          },
          { key: "e", text: "Práticas genéricas são usadas apenas no nível 5." }
        ],
        answer: "b",
        gabarito:
          "b — Específicos tratam do que fazer naquela área; genéricos institucionalizam (política, recursos, treinamento, monitoramento etc.)."
      },
      {
        id: "m4-q3",
        number: 3,
        kind: "mc",
        heading: "3. (Objetiva)",
        prompt:
          "Uma organização está no nível 2 de maturidade (Gerenciado) e outra no nível 3 (Definido). Qual afirmação diferencia corretamente os dois?",
        options: [
          {
            key: "a",
            text: "No nível 2 os processos já vêm de um padrão organizacional obrigatório; no nível 3 cada projeto inventa seus próprios processos."
          },
          {
            key: "b",
            text: "No nível 2 os padrões e procedimentos podem variar de projeto para projeto; no nível 3 existe um conjunto de processos-padrão da organização que cada projeto adapta."
          },
          {
            key: "c",
            text: "O nível 2 já usa controle estatístico quantitativo; o nível 3 ainda é apenas qualitativo."
          },
          {
            key: "d",
            text: "O nível 3 ainda depende de heroísmo individual; o nível 2 já é proativo."
          },
          {
            key: "e",
            text: "Não há diferença relevante entre os níveis 2 e 3 em relação à padronização."
          }
        ],
        answer: "b",
        gabarito:
          "b — No nível 2 a disciplina é por projeto (pode variar); no nível 3 há processo-padrão organizacional adaptado. Essa é a diferença clássica entre 2 e 3."
      },
      {
        id: "m4-q4",
        number: 4,
        kind: "mc",
        heading: "4. (Objetiva)",
        prompt: "Sobre a representação contínua do CMMI v1.3, assinale a correta:",
        options: [
          { key: "a", text: "Usa níveis de maturidade de 1 a 5 da organização inteira." },
          {
            key: "b",
            text: "Usa níveis de capacidade de 0 a 3 por área de processo, e a organização escolhe quais áreas melhorar."
          },
          {
            key: "c",
            text: "Os níveis de capacidade vão de 1 a 5, igual à representação por estágio."
          },
          { key: "d", text: "Não permite selecionar áreas específicas para melhoria." },
          { key: "e", text: "Foi eliminada no CMMI 1.3 e só voltou no 2.0." }
        ],
        answer: "b",
        gabarito:
          "b — Contínua usa capacidade (0–3 na v1.3) por área e permite escolher o que melhorar. Estágio usa maturidade da organização."
      },
      {
        id: "m4-q5",
        number: 5,
        kind: "mc",
        heading: "5. (Objetiva)",
        prompt: "No CMMI 2.0, qual das mudanças abaixo ocorreu?",
        options: [
          { key: "a", text: "As representações por estágio e contínua foram mantidas separadas." },
          {
            key: "b",
            text: "Houve unificação das representações (níveis de 0 a 5) e a arquitetura passou a ser Categoria → Área de Capacidade → Área de Prática."
          },
          { key: "c", text: "Os níveis de maturidade passaram a ir apenas de 1 a 3." },
          {
            key: "d",
            text: "As áreas de processo foram mantidas exatamente como na v1.3, sem mudança de nomenclatura."
          },
          { key: "e", text: "O modelo deixou de ter visão de Development." }
        ],
        answer: "b",
        gabarito:
          "b — O CMMI 2.0 unificou as representações e mudou a arquitetura para Categorias / Áreas de Capacidade / Áreas de Prática."
      },
      {
        id: "m4-q6",
        number: 6,
        kind: "discursive",
        heading: "6. (Discursiva)",
        prompt:
          "Diferencie a representação por estágio da representação contínua no CMMI (v1.3). Explique o que cada uma mede, quais níveis usa e para que tipo de situação cada uma é mais adequada. Inclua o que mudou no CMMI 2.0 nesse aspecto. (Definição + explicação + exemplo)",
        gabarito:
          "Definição: Estágio = maturidade da organização (1–5), caminho pré-definido. Contínua = capacidade por área (0–3 na v1.3), escolha livre.\nExplicação: Estágio é bom para comparar organizações e ter roteiro claro; contínua dá flexibilidade.\nExemplo / mudança 2.0: No 2.0 as duas foram unificadas (níveis 0–5)."
      },
      {
        id: "m4-q7",
        number: 7,
        kind: "discursive",
        heading: "7. (Discursiva)",
        prompt:
          "Descreva os cinco níveis de maturidade do CMMI (por estágio) e liste as áreas de processo do nível 2. Explique a diferença-chave entre os níveis 2 e 3 e entre os níveis 3 e 4. (Definição + explicação + exemplo)",
        gabarito:
          "Definição: 1 Inicial (caótico); 2 Gerenciado (processos planejados por projeto); 3 Definido (processo-padrão organizacional); 4 Gerenciado quantitativamente (estatística); 5 Em otimização (melhoria contínua).\nÁreas nível 2: Gerência de requisitos, Planejamento, Monitoramento e controle, Medição e análise, Gerência de configuração, Garantia da qualidade, Gestão de contratos.\nDiferenças: 2×3 = variação por projeto vs padrão organizacional; 3×4 = previsibilidade qualitativa vs quantitativa."
      },
      {
        id: "m4-q8",
        number: 8,
        kind: "discursive",
        heading: "8. (Discursiva)",
        prompt:
          "Explique a estrutura de uma área de processo no CMMI-DEV (objetivos e práticas específicos × genéricos). Dê um exemplo concreto com a área Gerência de Requisitos e mostre por que a institucionalização (práticas genéricas) é importante. Diferencie também Verificação de Validação. (Definição + explicação + exemplo)",
        gabarito:
          "Definição: Área de processo tem objetivos específicos (únicos da área) + práticas específicas, e objetivos genéricos (institucionalizar) + práticas genéricas.\nExemplo: Gerência de Requisitos — específico: obter entendimento e manter rastreabilidade. Genérico: estabelecer política, treinar, monitorar etc.\nVerificação × Validação: Verificação = construído certo (especificação); Validação = produto certo (uso pretendido). Institucionalização faz o processo sobreviver a pressão e troca de pessoas."
      }
    ],
    flashcards: [
      {
        id: "m4-f1",
        number: 1,
        front: "Qual a diferença principal entre SW-CMM e CMMI?",
        back: "SW-CMM era específico para software (níveis Inicial → Repetível → Definido → Gerenciado quantitativamente → Otimizado, em KPAs). CMMI integra vários modelos e oferece duas representações."
      },
      {
        id: "m4-f2",
        number: 2,
        front: "Como se chama o nível 2 no SW-CMM e no CMMI?",
        back: "No SW-CMM: Repetível. No CMMI: Gerenciado."
      },
      {
        id: "m4-f3",
        number: 3,
        front: "O que são objetivos específicos e objetivos genéricos?",
        back: "Específicos = características únicas da área de processo. Genéricos = características para institucionalizar o processo (valem para todas as áreas)."
      },
      {
        id: "m4-f4",
        number: 4,
        front: "Qual a diferença entre representação por estágio e contínua (v1.3)?",
        back: "Estágio = níveis de maturidade (1–5) da organização, com caminho pré-definido. Contínua = níveis de capacidade (0–3) por área de processo, com escolha da organização."
      },
      {
        id: "m4-f5",
        number: 5,
        front: "Quais são as 7 áreas de processo do nível 2 de maturidade?",
        back: "Gerência de requisitos; Planejamento do projeto; Monitoramento e controle; Medição e análise; Gerência de configuração; Garantia da qualidade do processo e do produto; Gestão de contratos/fornecedores."
      },
      {
        id: "m4-f6",
        number: 6,
        front: "Diferença-chave entre nível 2 e nível 3.",
        back: "No nível 2 os processos podem variar de projeto para projeto. No nível 3 existe processo-padrão da organização, adaptado a cada projeto."
      },
      {
        id: "m4-f7",
        number: 7,
        front: "Diferença-chave entre nível 3 e nível 4.",
        back: "Nível 3 é previsível qualitativamente. Nível 4 é previsível quantitativamente (com estatística e objetivos quantitativos)."
      },
      {
        id: "m4-f8",
        number: 8,
        front: "O que caracteriza o nível 5?",
        back: "Melhoria contínua baseada nas causas comuns de variação (além de estabilizar as causas especiais do nível 4)."
      },
      {
        id: "m4-f9",
        number: 9,
        front: "Quais são os níveis de capacidade na representação contínua (v1.3)?",
        back: "0 Incompleto; 1 Realizado; 2 Gerenciado; 3 Definido."
      },
      {
        id: "m4-f10",
        number: 10,
        front: "O que mudou no CMMI 2.0 em relação às representações?",
        back: "Unificou estágio e contínua. Níveis passam a ir de 0 a 5. Nova arquitetura: Categoria → Área de Capacidade → Área de Prática."
      },
      {
        id: "m4-f11",
        number: 11,
        front: "Diferencie Verificação e Validação.",
        back: "Verificação: o produto foi construído certo? (atende à especificação). Validação: foi construído o produto certo? (atende ao uso pretendido)."
      },
      {
        id: "m4-f12",
        number: 12,
        front: "Por que as práticas genéricas são importantes?",
        back: "Elas institucionalizam o processo, fazendo-o persistir mesmo sob pressão e com troca de pessoas (não depende de heróis)."
      }
    ]
  }
]);
