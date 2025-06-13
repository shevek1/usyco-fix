import { memo } from "react";
import { motion } from "framer-motion";
import {
  Bank,
  CreditCard,
  FileText,
  Wrench,
  Money,
  Airplane,
} from "phosphor-react";

// Íconos con estilo coherente
const IconWrapper = memo(({ children }) => (
  <span
    className="text-orange-500 bg-orange-300/20 p-3 rounded-full inline-flex items-center justify-center shadow-sm"
    aria-hidden="true"
  >
    {children}
  </span>
));

export default function Servicios() {
  const servicios = [
    {
      icon: <Bank size={24} weight="regular" />,
      title: "Débitos o transferencias no autorizadas",
      description: (
        <>
          Detectamos movimientos bancarios desconocidos y{" "}
          <span className="font-bold text-slate-600">
            gestionamos su reversión inmediata.
          </span>
        </>
      ),
    },
    {
      icon: <CreditCard size={24} weight="regular" />,
      title: "Créditos y productos financieros no solicitados",
      description: (
        <>
          Intervenimos en casos donde se asignaron servicios sin consentimiento y{" "}
          <span className="font-bold text-slate-600">
            exigimos la cancelación y el reembolso correspondiente.
          </span>
        </>
      ),
    },
    {
      icon: <FileText size={24} weight="regular" />,
      title: "Inclusión errónea en Veraz u otros registros",
      description: (
        <>
          Si fuiste reportado injustamente,{" "}
          <span className="font-bold text-slate-600">
            iniciamos el reclamo para limpiar tu historial crediticio.
          </span>
        </>
      ),
    },
    {
      icon: <Wrench size={24} weight="regular" />,
      title: "Producto defectuoso o servicio mal prestado",
      description: (
        <>
          Reclamamos ante fallas en productos o servicios para{" "}
          <span className="font-bold text-slate-600">
            garantizar reparación, reemplazo o reembolso.
          </span>
        </>
      ),
    },
    {
      icon: <Money size={24} weight="regular" />,
      title: "Facturación indebida en prepagas u obras sociales",
      description: (
        <>
          Asistimos frente a cobros excesivos o sin respaldo legal{" "}
          <span className="font-bold text-slate-600">
            y solicitamos devolución de importes mal cobrados.
          </span>
        </>
      ),
    },
    {
      icon: <Airplane size={24} weight="regular" />,
      title: "Incumplimientos por parte de aerolíneas",
      description: (
        <>
          Iniciamos gestiones por{" "}
          <span className="font-bold text-slate-600">
            demoras, cancelaciones o pérdida de equipaje
          </span>{" "}
          para asegurar tu compensación.
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
        <h2
          id="servicios-heading"
          className="text-4xl font-bold text-[#6b4a5f]"
        >
          Nuestros servicios
        </h2>
        <p className="max-w-md mx-auto mt-2 text-gray-500">
          Asesoría legal especializada en la{" "}
          <span className="underline decoration-[#d2a547] underline-offset-4 font-medium text-[#6b4a5f]">
            defensa de usuarios y consumidores
          </span>{" "}
          frente a conflictos comerciales y financieros.
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
              duration: 0.4,
              delay: idx * 0.12,
              ease: "easeOut",
            }}
          >
            <IconWrapper>{icon}</IconWrapper>
            <div>
              <h3 className="font-semibold text-lg text-[#6b4a5f]">
                {title}
              </h3>
              <p className="mt-1 text-gray-600">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
