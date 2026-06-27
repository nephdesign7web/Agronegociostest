import sachaImg from "@/assets/crop-sacha-inchi.jpg";
import higuerillaImg from "@/assets/crop-higuerilla.jpg";
import moringaImg from "@/assets/crop-moringa.jpg";
import cacaoImg from "@/assets/crop-cacao.jpg";
import luffaImg from "@/assets/crop-luffa.jpg";

export const WHATSAPP_URL = "https://wa.me/50688487426";

export const CONTACT = {
  address: "La Uruca, San José, Costa Rica",
  phones: ["+506 2221-0269", "+506 4032-9098"],
  whatsapp: "+506 8848-7426",
  email: "info@agronegocioscr.com",
  hours: "Lunes a viernes · 8:00 a.m. – 5:00 p.m.",
};

export type ProjectSlug =
  | "sacha-inchi"
  | "higuerilla"
  | "moringa"
  | "cacao"
  | "luffa";

export type ProjectCard = {
  slug: ProjectSlug;
  name: string;
  short: string;
  image: string;
};

export const PROJECTS: ProjectCard[] = [
  {
    slug: "higuerilla",
    name: "Higuerilla",
    short: "Producción sostenible para aplicaciones industriales y energéticas.",
    image: higuerillaImg,
  },
  {
    slug: "sacha-inchi",
    name: "Sacha Inchi",
    short: "Superalimento con alto valor nutricional y potencial internacional.",
    image: sachaImg,
  },
  {
    slug: "moringa",
    name: "Moringa",
    short: "Cultivo funcional con múltiples aplicaciones alimentarias y nutricionales.",
    image: moringaImg,
  },
  {
    slug: "cacao",
    name: "Cacao",
    short: "Productos con identidad y valor agregado para mercados especiales.",
    image: cacaoImg,
  },
  {
    slug: "luffa",
    name: "Luffa",
    short: "Alternativa natural para productos ecológicos y sostenibles.",
    image: luffaImg,
  },
];

export type BrandSlug = "natura-506" | "biobike" | "natura-506-pets" | "natura-506-guatemala";

export const BRANDS: {
  slug: BrandSlug;
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  cta: string;
  url?: string;
}[] = [
  {
    slug: "natura-506",
    name: "Natura 506",
    tagline: "Bienestar inspirado en la riqueza natural de Costa Rica.",
    description:
      "Natura 506 reúne una amplia selección de productos naturales desarrollados para apoyar un estilo de vida saludable, aprovechando ingredientes cuidadosamente seleccionados y el potencial de la biodiversidad costarricense.",
    benefits: [
      "Productos naturales",
      "Bienestar integral",
      "Ingredientes seleccionados",
      "Innovación continua",
    ],
    cta: "Explorar Natura 506",
    url: "https://natura506.com",
  },
  {
    slug: "biobike",
    name: "BioBike",
    tagline: "Movilidad sostenible para un futuro más limpio.",
    description:
      "BioBike promueve alternativas de transporte amigables con el ambiente, impulsando soluciones innovadoras que combinan tecnología, eficiencia y sostenibilidad.",
    benefits: [
      "Energía limpia",
      "Movilidad inteligente",
      "Menor impacto ambiental",
      "Innovación tecnológica",
    ],
    cta: "Conocer BioBike",
  },
  {
    slug: "natura-506-pets",
    name: "Natura 506 Pets",
    tagline: "Bienestar natural para tus mascotas.",
    description:
      "Natura 506 Pets desarrolla productos naturales pensados para el cuidado y bienestar de las mascotas, aprovechando ingredientes seleccionados y el potencial de la biodiversidad costarricense.",
    benefits: [
      "Productos naturales",
      "Bienestar animal",
      "Ingredientes seleccionados",
      "Innovación continua",
    ],
    cta: "Explorar Natura 506 Pets",
    url: "https://natura506pets.com",
  },
  {
    slug: "natura-506-guatemala",
    name: "Natura 506 Guatemala",
    tagline: "Bienestar natural con raíces centroamericanas.",
    description:
      "Natura 506 Guatemala lleva la filosofía de bienestar natural a nuevos mercados, combinando ingredientes seleccionados de la región con el estándar de calidad que distingue a la marca.",
    benefits: [
      "Expansión regional",
      "Productos naturales",
      "Calidad certificada",
      "Mercado centroamericano",
    ],
    cta: "Conocer Natura 506 Guatemala",
  },
];

export type ProjectContent = {
  slug: ProjectSlug;
  name: string;
  heroTitle: string;
  heroSubtitle: string;
  image: string;
  band: string[];
  overviewTitle: string;
  overviewParagraphs: string[];
  experienceTitle: string;
  experienceParagraphs: string[];
  benefits: { title: string; description: string }[];
  applications: { title: string; description: string }[];
  impact: { title: string; description: string }[];
  ctaTitle: string;
  ctaText: string;
};

export const PROJECT_CONTENT: Record<ProjectSlug, ProjectContent> = {
  "sacha-inchi": {
    slug: "sacha-inchi",
    name: "Sacha Inchi",
    heroTitle: "El superalimento que abrió nuevas oportunidades agrícolas en Costa Rica.",
    heroSubtitle:
      "Cultivo innovador reconocido por su excepcional perfil nutricional, su contenido natural de Omega 3 y su creciente potencial en mercados internacionales.",
    image: sachaImg,
    band: [
      "Cultivo especializado",
      "Potencial internacional",
      "Producción sostenible",
      "Innovación agrícola",
    ],
    overviewTitle: "¿Qué es el Sacha Inchi?",
    overviewParagraphs: [
      "El Sacha Inchi es una planta originaria de la Amazonía reconocida mundialmente por sus semillas altamente nutritivas y sus múltiples aplicaciones alimentarias, nutracéuticas y cosméticas.",
      "Su creciente demanda internacional lo convierte en una alternativa atractiva para productores e inversionistas interesados en cultivos con valor agregado.",
    ],
    experienceTitle: "Más de una década impulsando el desarrollo del Sacha Inchi.",
    experienceParagraphs: [
      "Desde 2012 hemos impulsado la investigación y desarrollo del cultivo en Costa Rica, promoviendo su adaptación, producción y comercialización. Esta iniciativa nos permitió ser pioneros en el desarrollo de una de las primeras experiencias comerciales relacionadas con este cultivo en la región.",
    ],
    benefits: [
      { title: "Alto contenido de Omega 3", description: "Excelente fuente natural de ácidos grasos esenciales." },
      { title: "Mercado en crecimiento", description: "Demanda internacional en constante expansión." },
      { title: "Diversidad de aplicaciones", description: "Usado en alimentos, suplementos, cosmética y más." },
      { title: "Valor agregado para productores", description: "Cultivo rentable con alto potencial de retorno." },
      { title: "Alternativa sostenible", description: "Promueve prácticas responsables con el ambiente." },
      { title: "Potencial agroindustrial", description: "Materia prima versátil para múltiples procesos." },
    ],
    applications: [
      { title: "Industria alimentaria", description: "Aceites, harinas y productos funcionales de alta calidad." },
      { title: "Suplementación nutricional", description: "Ingredientes ideales para productos de bienestar." },
      { title: "Cosmética natural", description: "Ingredientes para formulaciones innovadoras y sostenibles." },
      { title: "Exportación", description: "Acceso a mercados especializados de alto valor." },
    ],
    impact: [
      { title: "Investigación aplicada", description: "Desarrollo y adaptación del cultivo a Costa Rica." },
      { title: "Desarrollo productivo", description: "Impulso a productores y encadenamientos productivos." },
      { title: "Valor agregado", description: "Transformación de materias primas en productos con identidad." },
      { title: "Innovación agrícola", description: "Exploración constante de nuevas oportunidades." },
      { title: "Sostenibilidad", description: "Prácticas responsables para un futuro más sostenible." },
    ],
    ctaTitle: "¿Interesado en conocer más sobre este proyecto?",
    ctaText:
      "Conversemos sobre cómo el cultivo de Sacha Inchi puede convertirse en una oportunidad de crecimiento para usted.",
  },
  higuerilla: {
    slug: "higuerilla",
    name: "Higuerilla",
    heroTitle: "Un cultivo estratégico para la innovación industrial y energética.",
    heroSubtitle:
      "La higuerilla es una alternativa agrícola con alto potencial por sus aplicaciones industriales, energéticas y sostenibles.",
    image: higuerillaImg,
    band: ["Cultivo industrial", "Potencial energético", "Producción sostenible", "Valor agregado"],
    overviewTitle: "¿Qué es la Higuerilla?",
    overviewParagraphs: [
      "La higuerilla es un cultivo reconocido por la versatilidad de su aceite, utilizado en diferentes aplicaciones industriales, cosméticas, agrícolas y energéticas.",
      "Su potencial productivo la convierte en una opción estratégica para proyectos que buscan diversificar la agricultura y desarrollar materias primas de alto valor.",
    ],
    experienceTitle: "Impulsando alternativas agrícolas con potencial industrial.",
    experienceParagraphs: [
      "Agronegocios CR ha promovido el estudio y desarrollo de cultivos como la higuerilla por su capacidad para generar valor agregado, abrir oportunidades agroindustriales y apoyar modelos productivos más sostenibles.",
    ],
    benefits: [
      { title: "Materia prima de alto valor", description: "Su aceite tiene múltiples aplicaciones industriales." },
      { title: "Potencial para biocombustibles", description: "Alternativa para el desarrollo de energía renovable." },
      { title: "Aplicaciones cosméticas", description: "Utilizado como ingrediente en formulaciones naturales." },
      { title: "Producción sostenible", description: "Cultivo con potencial para modelos responsables." },
      { title: "Diversificación agrícola", description: "Nueva oportunidad para productores." },
      { title: "Valor agroindustrial", description: "Ideal para procesos de transformación y comercialización." },
    ],
    applications: [
      { title: "Industria energética", description: "Potencial para biocombustibles y soluciones limpias." },
      { title: "Industria cosmética", description: "Aceites y derivados para productos naturales." },
      { title: "Industria agrícola", description: "Aplicaciones en productos y soluciones del sector agrícola." },
      { title: "Agroindustria", description: "Transformación de la materia prima en productos de mayor valor." },
    ],
    impact: [
      { title: "Innovación productiva", description: "Desarrollo de alternativas agrícolas no tradicionales." },
      { title: "Valor agregado", description: "Transformación del cultivo en productos industriales." },
      { title: "Sostenibilidad", description: "Potencial para reducir dependencia de recursos no renovables." },
      { title: "Diversificación", description: "Nuevas oportunidades para productores." },
    ],
    ctaTitle: "¿Desea conocer más sobre el potencial de la Higuerilla?",
    ctaText:
      "Conversemos sobre cómo este cultivo puede convertirse en una oportunidad de desarrollo agroindustrial.",
  },
  moringa: {
    slug: "moringa",
    name: "Moringa",
    heroTitle: "Un cultivo funcional con alto potencial nutricional.",
    heroSubtitle:
      "La moringa es reconocida por su versatilidad, su perfil nutricional y sus múltiples aplicaciones en alimentos, suplementos y productos para el bienestar.",
    image: moringaImg,
    band: ["Cultivo funcional", "Alto valor nutricional", "Bienestar natural", "Innovación alimentaria"],
    overviewTitle: "¿Qué es la Moringa?",
    overviewParagraphs: [
      "La moringa es una planta valorada internacionalmente por sus hojas, semillas y derivados, utilizados en la industria alimentaria, nutricional y cosmética.",
      "Su versatilidad y facilidad de aplicación la convierten en una alternativa atractiva para el desarrollo de productos naturales con valor agregado.",
    ],
    experienceTitle: "Desarrollando oportunidades en cultivos funcionales.",
    experienceParagraphs: [
      "Agronegocios CR promueve el aprovechamiento de cultivos como la moringa por su potencial para crear productos naturales, suplementos, ingredientes funcionales y soluciones orientadas al bienestar.",
    ],
    benefits: [
      { title: "Alto perfil nutricional", description: "Fuente natural de nutrientes esenciales." },
      { title: "Diversidad de aplicaciones", description: "Útil en alimentos, suplementos y cosmética." },
      { title: "Mercado en crecimiento", description: "Alta demanda de productos naturales." },
      { title: "Valor agregado", description: "Permite desarrollar productos diferenciados." },
      { title: "Cultivo versátil", description: "Aprovechamiento de hojas, semillas y derivados." },
      { title: "Bienestar integral", description: "Relacionada con estilos de vida saludables." },
    ],
    applications: [
      { title: "Alimentos funcionales", description: "Polvos, mezclas, infusiones y productos saludables." },
      { title: "Suplementos naturales", description: "Formulaciones para bienestar y nutrición." },
      { title: "Cosmética natural", description: "Ingredientes vegetales para cuidado personal." },
      { title: "Desarrollo de marcas", description: "Base para líneas comerciales de productos naturales." },
    ],
    impact: [
      { title: "Innovación alimentaria", description: "Desarrollo de productos funcionales." },
      { title: "Salud y bienestar", description: "Promoción de alternativas naturales." },
      { title: "Valor agregado", description: "Transformación del cultivo en productos comerciales." },
      { title: "Sostenibilidad", description: "Uso responsable de recursos naturales." },
    ],
    ctaTitle: "¿Interesado en desarrollar oportunidades con Moringa?",
    ctaText:
      "Conversemos sobre cómo este cultivo puede convertirse en productos naturales con valor agregado.",
  },
  cacao: {
    slug: "cacao",
    name: "Cacao",
    heroTitle: "Tradición, identidad y valor agregado para nuevos mercados.",
    heroSubtitle:
      "El cacao representa una oportunidad para desarrollar productos con identidad, calidad y potencial en mercados especializados.",
    image: cacaoImg,
    band: ["Cultivo tradicional", "Valor agregado", "Mercados especiales", "Identidad costarricense"],
    overviewTitle: "¿Qué es el Cacao?",
    overviewParagraphs: [
      "El cacao es uno de los cultivos más reconocidos por su valor cultural, económico y gastronómico, con aplicaciones en alimentos, chocolates, bebidas y productos derivados.",
      "Su transformación permite crear productos diferenciados con identidad, calidad y potencial comercial en mercados locales e internacionales.",
    ],
    experienceTitle: "Promoviendo el valor agregado en cultivos con identidad.",
    experienceParagraphs: [
      "Agronegocios CR impulsa iniciativas que buscan fortalecer la transformación agrícola, promoviendo el desarrollo de productos derivados del cacao con mayor valor comercial e identidad propia.",
    ],
    benefits: [
      { title: "Alto valor comercial", description: "Producto reconocido en mercados especializados." },
      { title: "Identidad y tradición", description: "Cultivo con fuerte conexión cultural y gastronómica." },
      { title: "Diversidad de productos", description: "Chocolate, bebidas, nibs, manteca y derivados." },
      { title: "Potencial de exportación", description: "Alta demanda en mercados premium." },
      { title: "Valor agregado", description: "Transformación en productos diferenciados." },
      { title: "Oportunidad para productores", description: "Mejor aprovechamiento de la materia prima." },
    ],
    applications: [
      { title: "Chocolatería", description: "Desarrollo de chocolates y productos premium." },
      { title: "Alimentos y bebidas", description: "Ingredientes para productos funcionales y gastronómicos." },
      { title: "Cosmética natural", description: "Manteca de cacao y derivados para cuidado personal." },
      { title: "Mercados especializados", description: "Productos con identidad y valor diferencial." },
    ],
    impact: [
      { title: "Desarrollo agroindustrial", description: "Transformación en productos comerciales." },
      { title: "Identidad local", description: "Fortalecimiento de productos con origen y tradición." },
      { title: "Oportunidades comerciales", description: "Acceso a mercados de mayor valor." },
      { title: "Innovación", description: "Nuevas presentaciones y aplicaciones para el cacao." },
    ],
    ctaTitle: "¿Desea desarrollar productos con valor agregado a partir del Cacao?",
    ctaText:
      "Conversemos sobre cómo convertir este cultivo en una oportunidad comercial diferenciada.",
  },
  luffa: {
    slug: "luffa",
    name: "Luffa",
    heroTitle: "Una alternativa natural para productos ecológicos y sostenibles.",
    heroSubtitle:
      "La luffa es un recurso vegetal renovable con aplicaciones en productos ecológicos, cuidado personal y soluciones amigables con el ambiente.",
    image: luffaImg,
    band: ["Recurso natural", "Producto ecológico", "Economía circular", "Sostenibilidad"],
    overviewTitle: "¿Qué es la Luffa?",
    overviewParagraphs: [
      "La luffa es una planta cuyo fruto seco se utiliza como fibra natural para productos de limpieza, exfoliación, cuidado personal y alternativas ecológicas al plástico.",
      "Su potencial la convierte en una opción atractiva para desarrollar productos sostenibles orientados a consumidores conscientes.",
    ],
    experienceTitle: "Explorando alternativas naturales para nuevos mercados.",
    experienceParagraphs: [
      "Agronegocios CR promueve proyectos que aprovechan recursos naturales renovables como la luffa para crear productos ecológicos, sostenibles y con valor agregado.",
    ],
    benefits: [
      { title: "Recurso natural renovable", description: "Fibra vegetal biodegradable y ecológica." },
      { title: "Alternativa al plástico", description: "Sustituye productos sintéticos de uso cotidiano." },
      { title: "Mercado sostenible", description: "Alta demanda de productos ecofriendly." },
      { title: "Valor agregado", description: "Permite crear productos terminados diferenciados." },
      { title: "Cuidado personal", description: "Aplicaciones en exfoliación y limpieza natural." },
      { title: "Economía circular", description: "Aprovechamiento responsable de recursos vegetales." },
    ],
    applications: [
      { title: "Cuidado personal", description: "Esponjas exfoliantes y productos naturales." },
      { title: "Limpieza ecológica", description: "Alternativas vegetales para limpieza del hogar." },
      { title: "Productos sostenibles", description: "Desarrollo de líneas ecofriendly." },
      { title: "Regalos y comercio verde", description: "Productos para consumidores conscientes." },
    ],
    impact: [
      { title: "Reducción de plástico", description: "Alternativas naturales a productos sintéticos." },
      { title: "Sostenibilidad", description: "Uso de materiales renovables y biodegradables." },
      { title: "Innovación comercial", description: "Productos ecológicos diferenciados." },
      { title: "Oportunidad productiva", description: "Nuevo nicho para productores y emprendedores." },
    ],
    ctaTitle: "¿Desea conocer más sobre el potencial de la Luffa?",
    ctaText:
      "Conversemos sobre cómo este recurso natural puede transformarse en productos ecológicos de valor agregado.",
  },
};