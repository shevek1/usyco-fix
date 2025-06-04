import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {
  Star,
  ShieldCheck,
  AirplaneTilt,
  CheckCircle,
  CalendarCheck,
  FileText,
  WhatsappLogo,
  CurrencyCircleDollar,
} from "phosphor-react";

import "swiper/css";
import "swiper/css/navigation";

const reviews = [
  {
    name: "Facundo Pereyra",
    image:
      "https://images.pexels.com/photos/832998/pexels-photo-832998.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <ShieldCheck size={20} color="#6b4a5f" />,
    stars: 5,
    title: "Fraude bancario con tarjeta",
    text:
      "Carlos apareció en Veraz por una deuda con tarjeta que nunca pidió. El banco emitió el plástico sin permiso y otro lo usó sin su conocimiento. Presentamos reclamos y acciones legales para defenderlo y limpiar su historial.",
    resultPoints: [
      "Que se anule la deuda ilegítima.",
      "Que el banco emita libre deuda.",
      "Que se ordene la baja inmediata en Veraz.",
      "Que se le otorgue una reparación económica.",
    ],
    finalResult:
      "Carlos recuperó la tranquilidad y recibió una compensación económica.",
  },
    {
    name: "Susana Martinez",
    image:
      "https://images.pexels.com/photos/832998/pexels-photo-832998.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <ShieldCheck size={20} color="#6b4a5f" />,
    stars: 5,
    title: "Fraude bancario con tarjeta",
    text:
      "Lucía compró su pasaje con anticipación pero la aerolínea cambió la fecha sin aviso. No pudo hacer check-in y perdió el viaje. Presentamos reclamos y gestiones para exigir sus derechos y la devolución del dinero.",
    resultPoints: [
      "La restitución total del importe del pasaje.",
      "Una compensación por gastos y daños ocasionados.",
       "Una compensación por gastos y daños ocasionados.",
    ],
    finalResult:
      "Lucía fue indemnizada y la empresa aceptó su responsabilidad. Este caso ayuda a proteger a quienes sufren cambios arbitrarios sin aviso.",
  },
    {
    name: "Facundo Pereyra",
    image:
      "https://images.pexels.com/photos/832998/pexels-photo-832998.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <ShieldCheck size={20} color="#6b4a5f" />,
    stars: 5,
    title: "Fraude bancario con tarjeta",
    text:
      "Facundo fue reportado en Veraz por una deuda generada con una tarjeta de crédito que jamás pidió. El banco la activó sin autorización y un tercero la utilizó sin su conocimiento.",
    resultPoints: [
      "Que se anule la deuda ilegítima.",
      "Que el banco emita libre deuda.",
      "Que se ordene la baja inmediata en Veraz.",
      "Que se le otorgue una reparación económica a favor del consumidor.",
    ],
    finalResult:
      "Facundo recuperó su tranquilidad y fue resarcido económicamente. Hoy su historial crediticio está limpio y validado.",
  },
    {
    name: "Facundo Pereyra",
    image:
      "https://images.pexels.com/photos/832998/pexels-photo-832998.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <ShieldCheck size={20} color="#6b4a5f" />,
    stars: 5,
    title: "Fraude bancario con tarjeta",
    text:
      "Facundo fue reportado en Veraz por una deuda generada con una tarjeta de crédito que jamás pidió. El banco la activó sin autorización y un tercero la utilizó sin su conocimiento.",
    resultPoints: [
      "Que se anule la deuda ilegítima.",
      "Que el banco emita libre deuda.",
      "Que se ordene la baja inmediata en Veraz.",
      "Que se le otorgue una reparación económica a favor del consumidor.",
    ],
    finalResult:
      "Facundo recuperó su tranquilidad y fue resarcido económicamente. Hoy su historial crediticio está limpio y validado.",
  },

];


const steps = [
  {
    title: "Reservá tu consulta",
    description:
      "Coordinamos una llamada para entender tu caso y definir si podemos ayudarte.",
    icon: <CalendarCheck size={28} className="text-[#6b4a5f]" />,
  },
  {
    title: "Análisis y estrategia",
    description:
      "Nuestro equipo analiza tu situación legal y te explica los pasos a seguir.",
    icon: <FileText size={28} className="text-[#6b4a5f]" />,
  },
  {
    title: "Contacto directo",
    description:
      "Te mantenemos al tanto por WhatsApp y resolvemos todas tus dudas en el camino.",
    icon: <WhatsappLogo size={28} className="text-[#6b4a5f]" />,
  },
  {
    title: "Cierre exitoso",
    description:
      "Buscamos siempre una solución rápida, justa y con compensación económica.",
    icon: <CurrencyCircleDollar size={28} className="text-[#6b4a5f]" />,
  },
];

export default function HowWeWorkAndReviews() {
  // refs para controlar navegación personalizada
  const swiperRef = useRef(null);

  return (
    <div id="como-trabajamos" className="bg-[#fdfdfb] px-4">
      <style>{`
        /* Flechas arriba a la derecha, juntas y fuera de las cards */
        .custom-navigation-wrapper {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          margin-bottom: 1rem;
          position: relative;
          top: 0;
          right: 0;
          max-width: 100%;
          padding-right: 1rem;
        }
        .custom-swiper-button {
          width: 32px;
          height: 32px;
          background: #6b4a5f;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          user-select: none;
          transition: background-color 0.3s ease;
        }
        .custom-swiper-button:hover {
          background: #553a4a;
        }

        /* Cards */
       .review-card {
  background: white;
  border: 1.5px solid #d2a547;
  border-radius: 1rem;
  box-shadow: 0 1px 6px rgb(0 0 0 / 0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  min-height: 440px;  /* ✅ Forzá un alto fijo */
}

        /* Contenido con scroll si excede */
        .review-content {
          overflow-y: auto;
          flex-grow: 1;
          min-height: 0; /* importante para scroll en flex */
        }

        /* Textos y listas */
        .review-text {
          margin-bottom: 0.5rem;
          line-height: 1.4;
          font-size: 0.95rem;
          color: #4a4a4a;
        }
       .result-points {
  margin-bottom: 0.5rem;
  padding-left: 0; /* sacá el padding para que no quede desplazado */
  list-style: none; /* ocultá los bullets */
  color: #4a4a4a;
  font-size: 0.9rem;
}

        .result-points li {
          margin-bottom: 0.3rem;
          display: flex;
          align-items: center;
            justify-content: flex-start;
        }
        .result-points svg {
          margin-right: 6px;
          flex-shrink: 0;
          color:rgb(13, 238, 107);
        }
        .final-result {
          font-style: italic;
          font-weight: 600;
          color: #333333;
          font-size: 0.9rem;
          margin-top: 0.5rem;
        }

        /* Nombres y estrellas */
        .review-header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          gap: 0.75rem;
        }
        .review-header img {
          width: 40px;
          height: 40px;
          border-radius: 9999px;
          object-fit: cover;
          border: 2px solid #6b4a5f;
        }
        .review-name {
          font-weight: 600;
          color: #6b4a5f;
          font-size: 1rem;
        }
        .stars {
          display: flex;
          color: #facc15; /* amarillo */
          margin-top: 2px;
        }

        /* Título */
        .review-title {
          font-weight: 700;
          color: #6b4a5f;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        /* Responsive adjustments */
        @media (max-width: 767px) {
          .review-card {
            max-height: none;
            height: auto;
          }
          .review-content {
            overflow-y: visible;
          }
        }
      `}</style>

      {/* Cómo trabajamos */}
      <section className="max-w-6xl mx-auto py-20">
        <h2 className="text-4xl font-bold text-center text-[#6b4a5f] mb-2">
          ¿Cómo trabajamos?
        </h2>
        <p className="text-center text-[#6b4a5f] mb-12 max-w-2xl mx-auto text-lg">
          Brindamos un asesoramiento{" "}
          <span className="underline ">claro y profesional</span> para defender
          tus derechos y obtener los mejores resultados en cada caso.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 duration-300 transform bg-white border border-[#d2a547] rounded shadow-sm hover:-translate-y-2 transition"
            >
              <div className="flex items-center mb-3">
                <div className="mr-3">{step.icon}</div>
                <h3 className="text-lg font-semibold text-[#6b4a5f]">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reseñas */}
      <section className="max-w-6xl mx-auto mb-24 relative">
        <h2 className="text-4xl font-bold text-center text-[#6b4a5f] mb-6">
          Casos de éxito
        </h2>

              <div className="w-full flex justify-center">
        <div className="h-[2px] w-20 bg-[#6b4a5f] mt-4 mb-16 rounded-full" />
      </div>

        {/* Flechas arriba a la derecha, fuera de las cards */}
        <div className="custom-navigation-wrapper">
          <div
            className="custom-swiper-button"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Anterior"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" ? swiperRef.current?.slidePrev() : null)}
          >
            &#8592;
          </div>
          <div
            className="custom-swiper-button"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Siguiente"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" ? swiperRef.current?.slideNext() : null)}
          >
            &#8594;
          </div>
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation={false} // No queremos las flechas nativas, usamos las personalizadas arriba
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <article className="review-card">
                <header className="review-header">
                  <img src={review.image} alt={`Foto de ${review.name}`} />
                  <div>
                    <p className="review-name">{review.name}</p>
                    <div className="stars" aria-label={`${review.stars} estrellas`}>
                      {Array.from({ length: review.stars }).map((_, i) => (
                        <Star key={i} size={18} weight="fill" />
                      ))}
                    </div>
                  </div>
                  {/* <div className="ml-auto">{review.icon}</div> */}
                </header>

                <h3 className="review-title">{review.title}</h3>

                <div className="review-content">
                  <p className="review-text">{review.text}</p>
                  <ul className="result-points">
                    {review.resultPoints.map((point, i) => (
                      <li key={i}>
                        <CheckCircle size={16} weight="fill" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <p className="final-result">{review.finalResult}</p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
