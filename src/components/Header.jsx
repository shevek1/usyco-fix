import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { CheckCircle, ChatCenteredDots,  Scales , Handshake,Trophy, EnvelopeSimple } from "phosphor-react";

export default function HeaderForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5ln58g9",
        "template_m2jt0v9",
        form.current,
        "k7bqRNkSR8P6OHuTE"
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "¡Consulta enviada!",
          text: "Nos comunicaremos a la brevedad.",
          confirmButtonText: "Ir a WhatsApp",
          showCancelButton: true,
          cancelButtonText: "Cerrar",
          confirmButtonColor: "#25D366",
          cancelButtonColor: "#ccc",
          reverseButtons: true,
        }).then((result) => {
          if (result.isConfirmed) {
            window.open(
              "https://wa.me/5491166410915?text=Hola%2C+los+contacto+desde+su+p%C3%A1gina+web.+Me+gustar%C3%ADa+hacer+una+consulta.",
              "_blank"
            );
          }
        });
        form.current.reset();
      })
      .catch((error) => {
        console.error("Error al enviar:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo enviar la consulta. Intenta nuevamente.",
          confirmButtonColor: "#e53e3e",
        });
      });
  };

  return (
    <div className="relative isolate min-h-[90vh]">
     <img
  src="/assets/bg-uyc.webp"
  alt="Abogados y Clientes"
  fetchPriority="high"
  width="1920"
  height="1080"
  decoding="async"
  loading="eager"
  className="absolute inset-0 w-full h-full object-cover" 
/>
      <div className="relative bg-opacity-1">
        <svg
          className="absolute inset-x-0 -bottom-1 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          ></path>
        </svg>
        <div className="relative mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
   <div className="mb-12 w-full max-w-xl xl:mb-0 xl:w-7/12 xl:pr-16">
<h1
  className="mb-6 max-w-lg font-formal text-3xl font-bold tracking-tight text-white sm:text-7xl sm:leading-none mt-5 md:mt-0 transition-opacity duration-700 opacity-100"
  style={{
    textShadow: "0 2px 3px rgba(0,0,0,0.4)"
  }}
>
    Usuarios y Consumidores
  </h1>

  <p
    className="mb-6 max-w-xl text-base md:text-lg font-formal"
    style={{
      color: "white",
      textShadow: "0 2px 3px rgba(0,0,0,0.4)"
    }}
  >
    Reclamá <span className=""
    
      
    >
   <span className="text-orange-300 ">tus derechos</span>
    </span>. Te acompañamos con{" "}
    <span className=""

    >
      <span className="text-orange-300">compromiso y experiencia legal comprobada</span>
    </span>
  </p>

  <div className="flex flex-nowrap gap-3 text-white text-[13px] font-medium overflow-x-auto">
    <div className="flex items-center gap-2">
      <Scales size={20} weight="bold" className="text-orange-300" aria-label="Experiencia"/>
      <span style={{
      color: "white",
      textShadow: "0 2px 3px rgba(0,0,0,0.4)"
    }}>Experiencia</span>
    </div>
    <div className="flex items-center gap-2">
      <Handshake size={20} weight="bold" className="text-orange-300" aria-label="Compromiso"/>
      <span style={{
      color: "white",
      textShadow: "0 2px 3px rgba(0,0,0,0.4)"
    }}>Compromiso</span>
    </div>
    <div className="flex items-center gap-2">
      <Trophy size={20} weight="bold" className="text-orange-300" aria-label="Resultados"/>
      <span style={{
      color: "white",
      textShadow: "0 2px 3px rgba(0,0,0,0.4)"
    }}>Resultados</span>
    </div>
  </div>
</div>


            <div className="w-full max-w-xl xl:w-5/12 xl:px-8">
<div className="overflow-hidden rounded-xl border-t-4 border-[#d2a547] bg-white p-7 shadow-2xl shadow-[#d2a547] sm:p-8 min-w-[320px] sm:min-w-[400px]">

                <h3 className="flex items-center text-xl font-bold text-emerald-900 gap-2">
  <ChatCenteredDots size={20} />
  <span className="text-[#5a4754]">Deja tu consulta</span>
</h3>
                <h2 className="mb-4 text-base text-emerald-900 sm:mb-6">
                    Completá el formulario, haremos valer tus derechos.
                </h2>

                <form ref={form} onSubmit={sendEmail} aria-label="Formulario de consulta legal">
                  <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <input
                      name="nombre"
                      type="text"
                      placeholder="Nombre"
                      required
                      maxLength={16}
                      pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{1,16}"
                      title="Solo letras"
                      onInput={(e) =>
                        (e.target.value = e.target.value.replace(
                          /[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g,
                          ""
                        ))
                      }
                      className="h-12 w-full rounded border border-gray-300 bg-white px-4 shadow-sm ring-[#d2a547] focus:border-[#d2a547] focus:outline-none focus:ring"
                    />
                    <input
                      name="telefono"
                      type="tel"
                      placeholder="Teléfono"
                      required
                      maxLength={14}
                      pattern="[0-9]{7,14}"
                      title="Solo números"
                      onInput={(e) =>
                        (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                      }
                      className="h-12 w-full rounded border border-gray-300 bg-white px-4 shadow-sm ring-[#d2a547] focus:border-[#d2a547] focus:outline-none focus:ring"
                    />
                  </div>

                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    maxLength={40}
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                    title="Email válido"
                    className="h-12 w-full mb-4 rounded border border-gray-300 bg-white px-4 shadow-sm ring-[#d2a547] focus:border-[#d2a547] focus:outline-none focus:ring"
                  />

                  <select
                    name="asunto"
                    required
                    className="h-12 w-full mb-4 rounded border border-gray-300 bg-white px-4 shadow-sm ring-[#d2a547] focus:border-[#d2a547] focus:outline-none focus:ring"
                  >
<option value="">Selecciona el Asunto</option>
<option value="Estafa bancaria">Estafa bancaria</option>
<option value="Credito no solicitado">Crédito no solicitado</option>
<option value="Inclusion en Veraz">Inclusión en Veraz</option>
<option value="Producto / servicio fallado">Producto o servicio fallado</option>
<option value="Cobro indebido prepaga">Cobros indebidos (prepaga)</option>
<option value="Reclamo aerolinea">Reclamo a aerolínea</option>
<option value="Incumplimiento contractual">Incumplimiento contractual</option>
<option value="Consulta general">Consulta general</option>
<option value="Seguimiento de caso">Seguimiento de caso</option>
<option value="Otros">Otros..</option>

                  </select>

                  <textarea
                    name="desc"
                    required
                    maxLength="200"
                    placeholder="Breve descripción"
                    className="h-22 w-full mb-4 rounded resize-none border border-gray-300 bg-white px-4 py-3 shadow-sm ring-[#d2a547] focus:border-[#d2a547] focus:outline-none focus:ring"
                  ></textarea>

             <button
  type="submit"
  aria-label="Enviar formulario de reclamo"
  className="inline-flex items-center justify-center gap-2 w-full h-10 bg-[#d2a547] hover:bg-[#c9a045] text-white font-semibold px-6 py-3 md:px-10 rounded-2xl transition duration-300 shadow-md ring-[#d2a547] focus:outline-none focus:ring cursor-pointer"
>
  <EnvelopeSimple size={16} weight="bold" />
  Iniciar Reclamo Ahora
</button>
<div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600">
    <input
      type="checkbox"
      required
      id="tyc"
      name="tyc"
      className="accent-[#d2a547] w-4 h-4"
    />
    <label htmlFor="tyc">
      Acepto los{" "}
      <a
        href="/terminos-y-condiciones"
        rel="noopener noreferrer"
        className="underline text-[#d2a547] hover:text-[#b8973f]"
      >
        términos y condiciones
      </a>
    </label>
  </div>


    <div className="mt-3 flex justify-center items-center gap-6">
                 <img
  src="/assets/abogados-cap.webp"
  alt="Matrícula del Colegio de Abogados Capital"
  width="120"
  height="32"
  loading="lazy"
  decoding="async"
  className="h-8 w-auto object-contain select-none pointer-events-none"
/>
               <img
  src="/assets/abogados-quil.webp"
  alt="Matrícula del Colegio de Abogados Quilmes"
  width="120"
  height="32"
  loading="lazy"
  decoding="async"
  className="h-8 w-auto object-contain select-none pointer-events-none"
/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
