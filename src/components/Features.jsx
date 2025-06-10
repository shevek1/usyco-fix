import { motion } from "framer-motion";
import {
  Bank,
  CreditCard,
  FileText,
  Wrench,
  Money,
  Airplane,
} from "phosphor-react";

export default function Servicios() {
  const servicios = [
    {
      icon: <Bank size={24} weight="regular" />,
      title: "Estafa bancaria o débito no autorizado",
      description: (
        <>
          ¿Te descontaron plata sin permiso?{" "}
          <span className="font-bold text-slate-600">
            Reclamamos débitos y transferencias no autorizadas.
          </span>
        </>
      ),
    },
    {
      icon: <CreditCard size={24} weight="regular" />,
      title: "Créditos o productos no solicitados",
      description: (
        <>
          ¿Te activaron un servicio sin pedirlo?{" "}
          <span className="font-bold text-slate-600">
            Te ayudamos a anularlo y recuperar tu dinero.
          </span>
        </>
      ),
    },
    {
      icon: <FileText size={24} weight="regular" />,
      title: "Inclusión indebida en Veraz u otros registros",
      description: (
        <>
          ¿Te metieron en el Veraz por error?{" "}
          <span className="font-bold text-slate-600">
            Gestionamos tu salida y cuidamos tu historial crediticio.
          </span>
        </>
      ),
    },
    {
      icon: <Wrench size={24} weight="regular" />,
      title: "Producto o servicio defectuoso",
      description: (
        <>
          ¿Te falló lo que compraste?{" "}
          <span className="font-bold text-slate-600">
            Exigimos reparación, cambio o reembolso.
          </span>
        </>
      ),
    },
    {
      icon: <Money size={24} weight="regular" />,
      title: "Cobros indebidos de prepagas",
      description: (
        <>
          ¿La prepaga te facturó mal?{" "}
          <span className="font-bold text-slate-600">
            Reclamamos cargos no autorizados o excesivos.
          </span>
        </>
      ),
    },
    {
      icon: <Airplane size={24} weight="regular" />,
      title: "Reclamos contra aerolíneas",
      description: (
        <>
          ¿Problemas con tu vuelo?{" "}
          <span className="font-bold text-slate-600">
            Pedimos compensación por retrasos, cancelaciones o equipaje perdido.
          </span>
        </>
      ),
    },
  ];

  return (
    <section
      id="servicios"
      aria-labelledby="servicios-heading"
      className="max-w-4xl mx-auto px-5 mt-16 mb-16"
    >
      <div className="text-center">
        <div className="flex items-center justify-center mb-2 space-x-2">
          <h2
            id="servicios-heading"
            className="text-4xl font-bold text-[#6b4a5f] text-center"
          >
            Nuestros servicios
          </h2>
        </div>
        <p className="max-w-md mx-auto mt-2 text-gray-500">
          Asesoría legal especializada en defensa al consumidor para{" "}
          <span className="underline decoration-[#d2a547] underline-offset-4 font-medium">
            hacer valer tus derechos
          </span>{" "}
          de forma efectiva.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-10 mt-10 sm:mt-18">
        {servicios.map(({ icon, title, description }, idx) => (
          <motion.div
            key={idx}
            className="flex gap-4 items-start"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: idx * 0.15,
              ease: "easeOut",
            }}
          >
            <span
              className="text-orange-500 bg-orange-300/20 p-3 rounded-full inline-flex items-center justify-center shadow-sm"
              aria-hidden="true"
              title={title}
            >
              {icon}
            </span>
            <div>
              <h3 className="font-semibold text-lg text-slate-800">{title}</h3>
              <p className="mt-1 text-gray-500">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
