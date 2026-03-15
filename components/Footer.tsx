import Image from "next/image";
import Link from "next/link";
import { JSX, SVGProps } from "react";

const navigation = [
  {
    name: "Email",
    href: "mailto:awscloudclub@charusat.ac.in",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 75.294 75.294" {...props}>
        <g>
          <path d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9   c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089   H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065   c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016   c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102   c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069   c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z" />
        </g>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/awscloudclubs_charusat/",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/asc-charusat",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Hashnode",
    href: "https://awscloudclubcharusat.hashnode.dev",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z" />
      </svg>
    ),
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/company/asc-charusat/",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 50 50" {...props}>
        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
      </svg>
    ),
  },
  // {
  //   name: "Whatsapp",
  //   href: "https://www.linkedin.com/company/asc-charusat/",
  //   icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //     <svg viewBox="0 0 30 30" fill="currentColor" {...props}>
  //       <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"></path>
  //     </svg>
  //   ),
  // },
  {
    name: "meetup",
    href: "https://www.meetup.com/aws-cloud-club-charotar-university-of-science-and-technology/",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 50 50" fill="currentColor" {...props}>
        <path d="M 15 1 A 1 1 0 0 0 14 2 A 1 1 0 0 0 15 3 A 1 1 0 0 0 16 2 A 1 1 0 0 0 15 1 z M 28 2 A 2 2 0 0 0 26 4 A 2 2 0 0 0 28 6 A 2 2 0 0 0 30 4 A 2 2 0 0 0 28 2 z M 22 6 C 17.543 6 13.710453 8.8770312 12.439453 13.082031 C 8.7734531 13.597031 6 16.723 6 20.5 C 6 21.692 6.2832187 22.858062 6.8242188 23.914062 C 5.6432187 25.343062 5 27.122 5 29 C 5 32.673 7.5218594 35.846188 11.005859 36.742188 C 11.002859 36.829188 11 36.915 11 37 C 11 41.411 14.589 45 19 45 C 20.859 45 22.609297 44.373844 24.029297 43.214844 C 25.228297 44.360844 26.809 45 28.5 45 C 31.531 45 34.137313 42.871047 34.820312 39.998047 C 34.881312 39.999047 34.94 40 35 40 C 39.963 40 44 35.962 44 31 C 44 29.261 43.512984 27.605156 42.583984 26.160156 C 43.492984 25.157156 44 23.865 44 22.5 C 44 19.97 42.277062 17.826172 39.914062 17.201172 C 39.971063 16.797172 40 16.396 40 16 C 40 11.038 35.963 7 31 7 C 29.809 7 28.651734 7.2333594 27.552734 7.6933594 C 25.901734 6.5833594 23.994 6 22 6 z M 9.5 8 A 1.5 1.5 0 0 0 8 9.5 A 1.5 1.5 0 0 0 9.5 11 A 1.5 1.5 0 0 0 11 9.5 A 1.5 1.5 0 0 0 9.5 8 z M 44 13 A 2 2 0 0 0 42 15 A 2 2 0 0 0 44 17 A 2 2 0 0 0 46 15 A 2 2 0 0 0 44 13 z M 26.941406 15 C 28.223406 15 29.305375 15.810406 29.734375 16.941406 C 29.753375 16.991406 29.811562 17.006703 29.851562 16.970703 C 30.567563 16.332703 31.518406 16.003906 32.566406 16.003906 C 33.816406 16.003906 35 16.873047 35 18.873047 C 35 21.123047 33.625 23.123047 31.5 27.998047 C 31.294 28.470047 31 29.302047 31 29.998047 C 31 30.874047 31.5 32 33.5 32 C 34.328 32 35 32.672 35 33.5 C 35 34.328 34.328 35 33.5 35 C 27.375 35 27 31.75 27 31 C 27 30.129 27.0735 29.548 27.3125 28.875 C 27.3665 28.723 30.885016 21.471391 30.916016 21.400391 C 30.975016 21.265391 31.002 21.126281 31 20.988281 C 30.995 20.608281 30.772391 20.246984 30.400391 20.083984 C 29.894391 19.861984 29.304984 20.092656 29.083984 20.597656 C 29.083984 20.597656 24.538469 30.526266 24.355469 30.947266 C 23.970469 31.833266 22.939734 32.239516 22.052734 31.853516 C 21.387734 31.564516 20.991047 30.912469 20.998047 30.230469 C 21.000047 30.003469 21.048531 29.772781 21.144531 29.550781 C 21.340531 29.099781 23.924734 22.450406 23.927734 22.441406 C 23.972734 22.323406 23.998047 22.195547 23.998047 22.060547 C 24.000047 21.475547 23.5245 21 22.9375 21 C 22.4825 21 22.094359 21.287453 21.943359 21.689453 C 21.200359 23.633453 18.349266 31.193859 18.072266 32.005859 C 17.653266 33.233859 16.486797 33.99 15.216797 34 C 14.864797 34.003 14.505344 33.959844 14.152344 33.839844 C 12.521344 33.283844 11.632969 31.562141 12.167969 29.994141 C 12.561969 28.837141 15.362609 19.817141 15.724609 18.619141 C 16.200609 17.046141 17.314453 16 19.564453 16 C 21.189453 16 22.425781 17 23.425781 17 C 24.191781 17 24.941406 15 26.941406 15 z M 49 20 A 1 1 0 0 0 48 21 A 1 1 0 0 0 49 22 A 1 1 0 0 0 50 21 A 1 1 0 0 0 49 20 z M 2 21 A 2 2 0 0 0 0 23 A 2 2 0 0 0 2 25 A 2 2 0 0 0 4 23 A 2 2 0 0 0 2 21 z M 46.5 25 A 1.5 1.5 0 0 0 45 26.5 A 1.5 1.5 0 0 0 46.5 28 A 1.5 1.5 0 0 0 48 26.5 A 1.5 1.5 0 0 0 46.5 25 z M 8 39 A 1 1 0 0 0 7 40 A 1 1 0 0 0 8 41 A 1 1 0 0 0 9 40 A 1 1 0 0 0 8 39 z M 38 42 A 2 2 0 0 0 36 44 A 2 2 0 0 0 38 46 A 2 2 0 0 0 40 44 A 2 2 0 0 0 38 42 z M 23.5 46 A 1.5 1.5 0 0 0 22 47.5 A 1.5 1.5 0 0 0 23.5 49 A 1.5 1.5 0 0 0 25 47.5 A 1.5 1.5 0 0 0 23.5 46 z"></path>
      </svg>
    ),
  },
];

const links = [
  { name: "About", href: "/about-us" },
  { name: "Our Team", href: "/team" },
  { name: "Events", href: "/events" },
  { name: "Resources", href: "/resources" },
  { name: "Contact Us", href: "/contact-us" },
];

const Footer = () => {
  return (
    <footer className="bg-black border-t border-purple-600/30">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
        {/* Main Footer Content */}
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo and Description Section */}
          <div className="space-y-6 xl:col-span-1">
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Image
                src="/images/logo-2.png"
                className="h-21 w-auto max-w-full filter invert"
                width={96}
                height={96}
                alt="AWS Cloud Club Logo"
              />
              <Image
                src="/images/charusat.webp"
                className="h-10 w-auto max-w-full"
                width={160}
                height={64}
                alt="CHARUSAT Logo"
              />
            </div>
            <p className="text-sm leading-6 text-purple-200 max-w-md">
              AWS Cloud Club at CHARUSAT - Empowering students with cloud computing knowledge.
            </p>
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="text-purple-300 hover:text-purple-100 transition-colors duration-300 transform hover:scale-110"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 xl:ml-8">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-purple-300 uppercase tracking-wider">
                  Navigation
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {links.slice(0, 3).map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm leading-6 text-purple-200 hover:text-purple-100 transition-colors duration-300 hover:underline"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-purple-300 uppercase tracking-wider">
                  Community
                </h3>
                <ul role="list" className="mt-4 space-y-3">
                  {links.slice(3).map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm leading-6 text-purple-200 hover:text-purple-100 transition-colors duration-300 hover:underline"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="md:grid md:grid-cols-1">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-purple-300 uppercase tracking-wider">
                  Get in Touch
                </h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <svg className="h-4 w-4 text-purple-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm leading-6 text-purple-200 break-all min-w-0">
                      awscloudclub@charusat.ac.in
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="h-4 w-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="text-sm leading-6 text-purple-200">
                      CHARUSAT Campus
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="h-4 w-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-sm leading-6 text-purple-200">
                      Changa, Gujarat, India
                    </p>
                  </div>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-black bg-purple-500 hover:bg-purple-400 rounded-lg transition-colors duration-300 transform hover:scale-105"
                  >
                    Join Our Club
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-purple-600/30 pt-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-xs leading-5 text-purple-300 text-center md:text-left">
              © 2025 AWS Cloud Club CHARUSAT. All rights reserved.
            </p>
            <div className="mt-3 md:mt-0 flex items-center space-x-1">
              <p className="text-xs leading-5 text-purple-300">
                Made with 💜 by our dev team
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
