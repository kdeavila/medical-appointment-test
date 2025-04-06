import { Navbar } from './components/Navbar';
import heroImage from './assets/hero.png';
import { Service } from './components/Service';

function App() {
	const SERVICES = [
		{
			title: 'Medicina General',
			desc: 'Consultas de medicina general para diagnóstico y tratamiento de enfermedades comunes.',
		},
		{
			title: 'Odontología',
			desc: 'Exámenes odontológicos completos, limpiezas y tratamientos dentales.',
		},
		{
			title: 'Gestión de Citas',
			desc: 'Agenda, consulta y cancela tus citas médicas de forma sencilla desde cualquier dispositivo.',
		},
	];

	return (
		<>
			<header>
				<Navbar />

				<main className="py-32 bg-neutral-200/40">
					<section className="container mx-auto px-2 md:px-0 grid grid-cols-1 gap-8 md:grid-cols-2">
						<article className="flex flex-col justify-center gap-4 col-span-1 order-2 md:order-1">
							<h1 className="text-5xl font-bold text-pretty leading-tight">
								Schedule your medical appointment online
							</h1>
							<p className="text-lg text-balance text-neutral-700 leading-normal">
								Book medical appointments <strong className='text-blue-600'>quickly</strong> and easily
								with our online system. <strong className='text-blue-600'>No waiting</strong>, no hassle.
							</p>

							<a
								className="inline-flex w-max px-4 py-2 rounded-lg bg-blue-500 text-neutral-100"
								href="/login"
							>
								Schedule now
							</a>
						</article>

						<article className="col-span-1 order-1">
							<div className="h-full flex items-center justify-center bg-red-50">
								<img
									src={heroImage}
									className="rounded-2xl shadow object-cover block"
									alt="Una doctora con tapabocas, gorro azul y bata revisa unas muestras y en el fondo otros médicos haciendo otras actividades. "
								/>
							</div>
						</article>
					</section>
				</main>
			</header>

			<section id="services" className="my-16 container mx-auto px-2 md:px-0">
				<h3 className="text-3xl font-bold mb-8">Services</h3>

				<ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{SERVICES.map(({ title, desc }) => (
						<Service title={title} desc={desc} />
					))}
				</ul>
			</section>
		</>
	);
}

export default App;
