import React from 'react';
import LeadForm from '@/components/lp/LeadForm';

export const metadata = {
  title: 'OMMA Engenharia - Arquitetos (Landing page)',
  description: 'Parceria OMMA para arquitetos — qualidade, eficiência e previsibilidade',
};

const stats = [
  { value: '+1.000', label: 'obras entregues', desc: 'Experiência comprovada em projetos de grande escala.' },
  { value: '+850', label: 'clientes', desc: 'Parcerias de sucesso com empresas que confiam na OMMA.' },
  { value: '+24', label: 'anos de experiência', desc: 'Tradição e inovação a serviço do seu projeto corporativo.' },
];

const clients = [
  'Ambev', 'Azul', 'Sensitech', 'Onofre', 'Nutrien', 'McDonalds', 'Decathlon', 'Unimed', 'Ultracargo', 'Movile',
];

export default function ArquitetosLP() {
  return (
    <div className="min-h-screen">
      {/* Bloco 1 – Hero */}
      <section className="relative overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black" />
        </div>
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <img src="/omma_logo.png" alt="OMMA" className="h-8 w-auto" />
            <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight" style={{ fontFamily: 'DM Sans, Inter' }}>
              Arquiteto (a)?<br />Junte-se à OMMA e leve seus projetos além
            </h1>
            <p className="mt-4 text-lg text-white/90 max-w-2xl">
              A excelência de cada projeto de engenharia nasce da colaboração entre quem idealiza e quem constrói. Quando arquitetos e engenheiros atuam lado a lado desde o início, o resultado é uma obra fiel ao conceito original - com qualidade, eficiência e previsibilidade.
            </p>
            <div className="mt-8">
              <a href="#form" className="inline-flex items-center gap-2 rounded-full border-2 border-amber-400 px-7 py-3 text-sm font-semibold text-amber-400 hover:bg-amber-400 hover:text-black transition-all">
                SEJA NOSSO PARCEIRO!
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 2 – Resultados */}
      <section className="py-12 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center" style={{ fontFamily: 'Exo, Inter' }}>
            Resultados que comprovam nossa expertise
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                <div className="text-3xl font-bold text-amber-400" style={{ fontFamily: 'Exo, Inter' }}>{s.value}</div>
                <div className="text-white/90 mt-1 font-medium">{s.label}</div>
                <p className="text-white/70 mt-3 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco 3 – Você projeta, a OMMA executa */}
      <section className="py-12 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-semibold" style={{ fontFamily: 'Exo, Inter' }}>Você projeta, a OMMA executa</h3>
            <div className="mt-6 space-y-4 text-white/90">
              <p> Muitos arquitetos acabam subestimando a complexidade do gerenciamento de obras e assumem tarefas que poderiam ser delegadas. Na OMMA Engenharia, nosso papel é permitir que você mantenha o foco no projeto e no design, enquanto cuidamos de todo o gerenciamento e execução da obra.</p>
              <p> Realizamos a precificação detalhada de cada etapa, selecionamos os melhores fornecedores e montamos uma equipe especializada para acompanhar todos os processos. Assim, garantimos previsibilidade de custos, controle do orçamento e total tranquilidade para você e para o seu cliente.</p>
              <p> Com uma equipe altamente qualificada, asseguramos a execução impecável da obra, transformando sua visão em realidade com excelência e o mais alto padrão de qualidade.</p>
            </div>
            <div className="mt-6">
              <a href="#form" className="inline-flex items-center gap-2 rounded-full border border-amber-400/90 px-6 py-3 text-sm text-white hover:bg-amber-400/10 transition">
                SEJA NOSSO PARCEIRO!
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 min-h-[280px]" />
        </div>
      </section>

      {/* Bloco 4 – Riscos sem parceiro */}
      <section className="py-12 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold">Riscos de não ter um parceiro estratégico</h4>
            <ul className="mt-4 space-y-3 text-white/80 list-disc pl-5">
              <li>
                <span className="font-medium text-white">Orçamento excedido</span>
                <div className="text-sm">Sem experiência em gestão de obras, seus projetos podem sofrer com custos imprevistos, gerando insatisfação para o cliente e prejuízos para você.</div>
              </li>
              <li>
                <span className="font-medium text-white">Atrasos na entrega</span>
                <div className="text-sm">A complexidade na execução de obras pode levar a atrasos significativos, comprometendo sua reputação e a relação com o cliente.</div>
              </li>
              <li>
                <span className="font-medium text-white">Qualidade comprometida</span>
                <div className="text-sm">A falta de expertise em instalações e acabamentos pode resultar em um produto final que não atende às expectativas do cliente.</div>
              </li>
              <li>
                <span className="font-medium text-white">Sobrecarga de trabalho</span>
                <div className="text-sm">Gerenciar uma obra sozinho exige tempo e energia que poderiam ser dedicados a novos projetos ou ao aprimoramento de suas habilidades.</div>
              </li>
              <li>
                <span className="font-medium text-white">Danos à reputação profissional</span>
                <div className="text-sm">Problemas na execução podem prejudicar sua imagem profissional e dificultar a aquisição de novos clientes.</div>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6" />
        </div>
      </section>

      {/* Bloco 5 – Benefícios parceiro OMMA */}
      <section className="py-12 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-2xl font-semibold">Por que ser um arquiteto parceiro OMMA?</h3>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { t: 'Foco total no projeto', d: 'Liberte-se das preocupações com a gestão e execução da obra e dedique-se integralmente à sua paixão: idealizar e projetar.' },
              { t: 'Previsibilidade financeira', d: 'Com a garantia de um preço fechado, você e seu cliente têm total controle sobre o orçamento, evitando surpresas desagradáveis.' },
              { t: 'Agilidade na entrega', d: 'Nossa expertise em "obras rápidas" garante que seus projetos sejam concluídos dentro do prazo, otimizando o tempo e a satisfação do cliente.' },
              { t: 'Qualidade assegurada', d: 'Conte com a excelência da OMMA em acabamentos e instalações, garantindo que a materialização do seu projeto mantenha o alto padrão de qualidade que você idealizou.' },
              { t: 'Suporte técnico especializado', d: 'Tenha acesso a uma equipe de engenheiros com vasta experiência, prontos para oferecer suporte em todas as etapas do projeto, desde a precificação até a execução.' },
              { t: 'Ampliação de portfólio', d: 'Ao fazer parceria com a OMMA, você pode assumir projetos de maior complexidade e escala, expandindo seu portfólio e suas oportunidades de negócio.' },
              { t: 'Transparência e confiança', d: 'Nossa gestão transparente e comunicação clara garantem uma parceria baseada na confiança mútua, com relatórios detalhados e acompanhamento constante.' },
              { t: 'Relacionamento duradouro', d: 'Buscamos construir parcerias de longo prazo, baseadas no respeito, na colaboração e no sucesso compartilhado.' },
            ].map((i) => (
              <div key={i.t} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                <h4 className="font-semibold text-white">{i.t}</h4>
                <p className="text-white/80 mt-2 text-sm">{i.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco 6 – Nossos clientes */}
      <section className="py-12 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-2xl font-semibold text-center text-amber-300">NOSSOS CLIENTES</h3>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {clients.map((c) => (
              <div key={c} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm text-white/90">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco 7 – O que a OMMA faz por você */}
      <section className="py-12 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-2xl font-semibold">Uma parceria que constrói: o que a OMMA faz por você?</h3>
          <p className="text-white/80 mt-2">Contar com a OMMA como parceira é assegurar solidez, eficiência e inovação em cada projeto.</p>
          <ol className="mt-6 space-y-3 text-white/90 list-decimal pl-6">
            <li>Facilitamos a comunicação entre todas as partes envolvidas no projeto.</li>
            <li>Calculamos cada fase do projeto, garantindo previsibilidade de custos e controle do orçamento.</li>
            <li>Buscamos os melhores parceiros do mercado para garantir qualidade e eficiência em todos os processos.</li>
            <li>Desenvolvemos soluções construtivas inovadoras, que atendam aos requisitos estéticos e funcionais de cada projeto.</li>
            <li>Complementamos suas habilidades com nossa expertise em engenharia, gestão de obras, orçamentação e logística.</li>
            <li>Ampliamos seu networking, abrindo portas para novas oportunidades de negócio.</li>
            <li>Tomamos decisões compartilhadas para garantir a fidelidade do projeto original, mantendo a qualidade e estética desejadas.</li>
            <li>Oferecemos um olhar crítico sobre o desenho arquitetônico, identificando possíveis problemas ou desafios que podem surgir durante a construção.</li>
            <li>Entregamos cronogramas claros e bem definidos, evitando atrasos significativos nas entregas dos projetos.</li>
          </ol>
        </div>
      </section>

      {/* Bloco 8 – Quem somos */}
      <section className="py-12 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-semibold">QUEM SOMOS?</h3>
            <p className="text-white/80 mt-2">Soluções completas para ambientes de alto padrão</p>
            <div className="mt-4 space-y-4 text-white/90">
              <p>Desde 1998, a OMMA se estabeleceu como um pilar de excelência e eficiência no segmento de engenharia e construção. Nos diferenciamos pela gestão de obras pelo modelo “chave na mão” (turn-key), conduzindo todo o gerenciamento do projeto para entregar ambientes completos, prontos para uso e totalmente funcionais. Para isso, contamos com arquitetos parceiros e também oferecemos suporte de engenharia e construção para seus projetos.</p>
              <p>Além de escritórios corporativos, nosso portfólio contempla clínicas, laboratórios, lojas e escolas, atendendo empresas de diversos setores, como tecnologia, finanças e saúde. Nosso propósito é ser a parceira estratégica que transforma ambientes em experiências, oferecendo segurança, eficiência e tranquilidade em cada entrega.</p>
            </div>
            <div className="mt-6">
              <a href="#form" className="inline-flex items-center gap-2 rounded-full border border-amber-400/90 px-6 py-3 text-sm text-white hover:bg-amber-400/10 transition">
                SEJA NOSSO PARCEIRO!
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 min-h-[280px]" />
        </div>
      </section>

      {/* Bloco 9 – Formulário */}
      <section id="form" className="py-12 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold">Construa grandes projetos ao lado da OMMA</h3>
            <p className="text-white/80 mt-2">Com nossa expertise em engenharia, gestão de obras e precificação, você terá total suporte em cada etapa do seu projeto. Preencha os dados abaixo e dê o primeiro passo para uma parceria de sucesso.</p>
          </div>
          <div className="mt-6">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Bloco 10 – Contato */}
      <section className="py-12 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-2xl font-semibold">Contato</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-6 text-white/90">
            <div>
              <h4 className="font-semibold">Endereço:</h4>
              <p className="text-white/80 mt-1">Avenida Dr. Cardoso de Melo, 1666, 2º andar, Vila Olímpia - São Paulo/SP<br/>04546-005</p>
            </div>
            <div>
              <h4 className="font-semibold">Telefone:</h4>
              <p className="text-white/80 mt-1">+55 11 3056 2340</p>
              <h4 className="font-semibold mt-4">E-mails:</h4>
              <p className="text-white/80 mt-1 space-y-1">
                <span className="block">contato@omma.com.br</span>
                <span className="block">fornecedores@omma.com.br</span>
                <span className="block">trabalheaqui@omma.com.br</span>
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Redes sociais:</h4>
              <ul className="text-white/80 mt-1 space-y-1">
                <li><a className="hover:underline" href="https://www.instagram.com/omma_oficial" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a className="hover:underline" href="https://www.linkedin.com/company/omma-desenvolvimento-e-construcoes" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a className="hover:underline" href="https://www.facebook.com/omma4.0" target="_blank" rel="noreferrer">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
