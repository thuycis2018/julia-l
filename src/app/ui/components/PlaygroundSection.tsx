'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

export default function PlaygroundSection() {
    return (
      <div>      
        <ul className="text-left">
          <li className="p-5"><FontAwesomeIcon icon={faLaptopCode} className="mr-2" /><a href="https://julia-le.pages.dev/" title="https://julia-le.pages.dev/">https://julia-le.pages.dev/</a> is built with TypeScript, Tailwind CSS, Vite and Redux. Deployment: using Cloudflare with static files. Alternatively, AWS S3 can be used to host static web site.</li>
          <li className="p-5"><FontAwesomeIcon icon={faLaptopCode} className="mr-2" /><a href="https://graphql-github.pages.dev/" target="_blank" title="Open Cloudflare page">https://graphql-github.pages.dev/</a> is built with React and Apollo client for frontend, and Node.js Express server to relay requests/responses between the frontend and GitHub GraphQL endpoints. Deployment: using CloudFlare to deploy changes whenever there is a PUSH to main branch in GitHub repo.</li>
        </ul>
      </div>
    );
}