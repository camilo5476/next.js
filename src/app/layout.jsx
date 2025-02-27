"use client"
import { UsuarioProvider } from "@/context/usuario"
import { FiltersProvider } from "@/context/productosfetch"
import { VariablesProvider } from "@/context/variablesEstado"
import { Header } from "@/components/headers"
import Head from 'next/head'
import './global.css'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>next js</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <body>
        <UsuarioProvider>
          <FiltersProvider>
            <VariablesProvider>
              <Header />
              {children}
            </VariablesProvider>
          </FiltersProvider>
        </UsuarioProvider>
      </body>
    </html>
  )
}
