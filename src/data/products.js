export const categories = [
  "Todos",
  "Dormitorio",
  "Baño",
  "Deco",
];

export const products = [
  {
    id: 1,
    slug: "juego-sabanas-lino",
    name: "Juego de sábanas Lino",
    category: "Dormitorio",
    price: 64900,
    featured: true,
    image:
      "/images/product-sabanas-lino.jpg",
    description:
      "Set de sábanas suaves con terminación premium, pensado para sumar frescura y calma al dormitorio.",
    details: ["Algodon peinado", "2 fundas incluidas", "Medidas queen y king"],
  },
  {
    id: 2,
    slug: "acolchado-nube",
    name: "Acolchado Nube",
    category: "Dormitorio",
    price: 89500,
    featured: true,
    image:
      "/images/product-acolchado-nube.jpg",
    description:
      "Acolchado liviano, mullido y envolvente para vestir la cama con textura natural.",
    details: ["Relleno siliconado", "Costuras reforzadas", "Tonos arena y blanco"],
  },
  {
    id: 3,
    slug: "toallon-spa",
    name: "Toallón Spa",
    category: "Baño",
    price: 28600,
    featured: true,
    image:
      "/images/product-toallon-spa.jpg",
    description:
      "Toallón extra suave de alto gramaje con absorción superior y tacto de hotel.",
    details: ["100% algodón", "550 g/m2", "Secado rápido"],
  },
  {
    id: 4,
    slug: "manta-trama",
    name: "Manta Trama",
    category: "Deco",
    price: 39200,
    featured: true,
    image:
      "/images/product-manta-trama.webp",
    description:
      "Manta tejida para sofá o pie de cama, ideal para crear ambientes cálidos y simples.",
    details: ["Tejido texturado", "Medida 130 x 170 cm", "Lavado delicado"],
  },
  {
    id: 5,
    slug: "almohadon-serena",
    name: "Almohadón Serena",
    category: "Deco",
    price: 18400,
    featured: false,
    image:
      "/images/product-almohadon-serena.jpg",
    description:
      "Almohadón decorativo con funda desmontable y paleta neutra para combinar fácil.",
    details: ["Funda desmontable", "Relleno vellon siliconado", "45 x 45 cm"],
  },
  {
    id: 6,
    slug: "set-bano-natural",
    name: "Set de Baño Natural",
    category: "Baño",
    price: 42600,
    featured: false,
    image:
      "/images/product-set-bano-natural.webp",
    description:
      "Set coordinado para baño con piezas suaves, absorbentes y una presentación lista para regalar.",
    details: ["portacepillos y jaboneras", "Textura suave", "Ideal para regalo"],
  },
];

export const formatPrice = (value) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);
