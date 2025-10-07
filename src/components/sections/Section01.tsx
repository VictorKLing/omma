import { sanityClient } from '../../lib/sanity';

interface Button {
  text: string;
  href: string;
}

async function getHomeData(): Promise<{ subtitle: string; button: Button | null }> {
  const query = `*[_type == "home"][0]{
    subtitle,
    button {
      text,
      href
    }
  }`;
  const data = await sanityClient.fetch(query);
  return {
    subtitle: data?.subtitle || '',
    button: data?.button || null
  };
}

const Section01 = async () => {
  const { subtitle, button } = await getHomeData();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image com Overlay */}
      <div className="absolute inset-0 z-0 top-0">
        <div className="absolute inset-0 top-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2560&q=80')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 py-20">
          <div className="flex flex-col justify-center">
            {/* Heading */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-semibold tracking-tight"
              style={{ fontFamily: "'DM Sans', Inter", fontStyle: 'italic', fontWeight: 600 }}
            >
              <span className="text-amber-400">TRANSFORMANDO</span>
              <br />
              AMBIENTES
              <br />
              <span className="text-[var(--text)]">EM RESULTADOS</span>
            </h1>

            {/* Paragraph */}
            <p
              className="mt-6 text-lg sm:text-xl text-white/90 max-w-lg"
              style={{ fontFamily: "'DM Sans', Inter", fontWeight: 500 }}
            >
              {subtitle}
            </p>

            {/* CTA */}
            {button && (
              <div className="mt-8">
                <a
                  href={button.href}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-amber-400 px-8 py-4 text-sm font-semibold text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300 shadow-lg hover:shadow-amber-400/25"
                  style={{ fontFamily: "'DM Sans', Inter" }}
                >
                  {button.text}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            )}
          </div>

          {/* Espaço adicional */}
          <div className="hidden lg:flex items-center justify-center"></div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-amber-400/30 rounded-full" />
      </div>
    </section>
  );
};

export default Section01;
