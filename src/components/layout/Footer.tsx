import { Mail, Phone, MapPin } from "lucide-react";
import { sanityClient } from "@/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import { notFound } from "next/navigation";

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source: any) => builder.image(source).url();

async function getLayoutData() {
  const query = `*[_type == "layout"][0]{
    logo,
    footerText,
    endereco,
    telefone,
    email
  }`;
  return sanityClient.fetch(query);
}

export default async function Footer() {
  const layout = await getLayoutData();
  const year = new Date().getFullYear();

  if (!layout) return notFound();

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            {layout?.logo ? (
              <img
                src={urlFor(layout.logo)}
                alt="Logo"
                className="h-7 w-auto"
              />
            ) : (
              <span className="text-sm text-gray-400">Logo</span>
            )}
          </div>
          <p className="mt-3 text-sm text-[var(--text2)]">
            {layout?.footerText ??
              "Excelência técnica para projetos que exigem eficiência, segurança e prazo."}
          </p>
        </div>

        <div>
          <h5 className="text-sm tracking-tight font-semibold">Contato</h5>
          <ul className="mt-3 space-y-2 text-sm text-[var(--text2)]">
            {layout?.email && (
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-yellow-400" /> {layout.email}
              </li>
            )}
            {layout?.telefone && (
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-yellow-400" /> {layout.telefone}
              </li>
            )}
            {layout?.endereco && (
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-yellow-400" /> {layout.endereco}
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-[var(--text2)] flex flex-col sm:flex-row justify-between gap-3">
          <span>
            © <span>{year}</span> QMA Engenharia. Todos os direitos reservados.
          </span>
          <span>Política de Privacidade • Termos de Uso</span>
        </div>
      </div>
    </footer>
  );
}
