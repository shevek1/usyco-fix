import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { FacebookLogo, InstagramLogo, EnvelopeSimple } from "phosphor-react";


export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_5ln58g9', // Reemplazar con tu service ID
      'template_m2jt0v9', // Reemplazar con tu template ID
      form.current,
      'k7bqRNkSR8P6OHuTE' // Reemplazar con tu public key
    )
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: '¡Consulta enviada!',
        text: 'Nos comunicaremos a la brevedad.',
        confirmButtonText: 'Ir a WhatsApp',
        showCancelButton: true,
        cancelButtonText: 'Cerrar',
        confirmButtonColor: '#25D366',
        cancelButtonColor: '#ccc',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          window.open('https://wa.me/1234567890?text=Hola%2C+los+contacto+desde+su+formulario+web.', '_blank');
        }
      });
      form.current.reset();
    })
    .catch((error) => {
      console.error('Error al enviar:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo enviar la consulta. Intenta nuevamente.',
        confirmButtonColor: '#e53e3e',
      });
    });
  };

  return (
    <div id="contacto" className="p-4 mt-10 mb-10">
      <div className="grid lg:grid-cols-2 items-start gap-12 p-8 mx-auto max-w-4xl max-lg:max-w-2xl bg-purple-100 shadow-md rounded-md">
        {/* Info */}
        <div>
          <h2 className="text-[#6b4a5f] text-3xl font-bold">¿Te quedó alguna duda?</h2>
          <p className="text-[15px] text-slate-600 mt-4 leading-relaxed">
       <strong>Te ayudamos a hacer valer tus derechos.</strong> <span className='underline decoration-[#d2a547] underline-offset-4'>Completá el formulario</span> y un abogado de nuestro equip te va a contactar a la brevedad.
  <div className="mt-2 flex justify-start gap-3">
                    <img
                      src="/assets/abogados-cap.webp"
                     alt="Matrícula del Colegio de Abogados Capital"
                      className="h-8 w-auto object-contain select-none pointer-events-none"
                    />
                    <img
                      src="/assets/abogados-quil.webp"
                      alt="Matrícula Colegio de Abogados de Quilmes"
                      className="h-8 w-auto object-contain select-none pointer-events-none"
                    />
                  </div>
          </p>

          <div className="mt-12">
            
            <h2 className="text-[#6b4a5f] text-base font-semibold">Email</h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000" viewBox="0 0 479.058 479.058">
                    <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"/>
                  </svg>
                </div>
                <div className="ml-4 text-sm">
                  <small className="block text-slate-900">Correo electronico</small>
<a
  href="mailto:contacto@usuariosyconsumidores.com.ar"
  title="contacto@usuariosyconsumidores.com.ar"
  className="text-blue-600 font-medium block max-w-full sm:max-w-none truncate sm:whitespace-normal"
>
  <span className="inline-block sm:hidden">
    contacto@usuariosyc..
  </span>
  <span className="hidden sm:inline">
    contacto@usuariosyconsumidores.com.ar
  </span>
</a>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-[#6b4a5f] text-base font-semibold">Redes Sociales</h2>
<ul className="flex mt-4 space-x-4">
  <li className="bg-purple-200 hover:bg-blue-200 transition-colors h-10 w-10 rounded-full flex items-center justify-center shrink-0">
    <a
      href="https://www.facebook.com/tu-pagina"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600"
    >
      <FacebookLogo size={20} weight="fill" />
    </a>
  </li>
  <li className="bg-purple-200 hover:bg-pink-200 transition-colors h-10 w-10 rounded-full flex items-center justify-center shrink-0">
    <a
      href="https://www.instagram.com/tu-cuenta"
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-400"
    >
      <InstagramLogo size={20} weight="fill" />
    </a>
  </li>
</ul>
          </div>
        </div>

        {/* Formulario */}
      <form ref={form} onSubmit={sendEmail} className="space-y-4 w-full">
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
    <option value="estafa">Estafa bancaria</option>
    <option value="credito">Crédito no solicitado</option>
    <option value="veraz">Inclusión en Veraz</option>
    <option value="producto">Producto o servicio fallado</option>
    <option value="prepaga">Cobros indebidos (prepaga)</option>
    <option value="aerolinea">Reclamo a aerolínea</option>
    <option value="contrato">Incumplimiento contractual</option>
    <option value="consulta">Consulta general</option>
    <option value="seguimiento">Seguimiento de caso</option>
    <option value="otros">Otros..</option>
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
    className="inline-flex items-center justify-center gap-2 w-full h-10 bg-[#d2a547] hover:bg-[#c9a045] text-white font-semibold px-6 py-3 md:px-10 rounded-2xl transition duration-300 shadow-md ring-[#d2a547] focus:outline-none focus:ring cursor-pointer"
  >
    <EnvelopeSimple size={16} weight="regular" />
    Iniciar Reclamo Ahora
  </button>

</form>

      </div>
    </div>
  );
}
